<template>
  <div :class="bg">
    <div class="bs-container">
      <div class="py-10 px-4 lg:px-0" :class="color">
        <div>
          <slot />
        </div>
        <ClientOnly>
          <div class="mb-3">
            <div v-for="(number, i) in props.numberItems" :key="i" :class="bColor">
              <div
                class="flex items-center justify-between cursor-pointer py-6 pl-2 hover:bg-zinc-100"
                :class="[activeAccordion === number ? activeColor : '', hColor]"
                @click="setActiveAccordion(number)"
                @mouseenter="setIconColor(number)"
                @mouseleave="removeIconColor(number)"
              >
                <h4>
                  <ContentSlot :name="`label-${number}`" unwrap="p" />
                </h4>
                <span class="px-2"
                  ><Icon
                    name="simple-line-icons:plus"
                    width="32"
                    height="32"
                    class="hover:text-bs-green"
                    :class="[activeAccordion === number ? 'text-bs-green' : '', iconColors[number]]"
                /></span>
              </div>
              <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
              >
                <div v-show="activeAccordion === number" class="overflow-hidden transition-all duration-500 pl-6">
                  <div class="py-6">
                    <slot :name="`text-${number}`" />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  bg?: 'bg-bs-blue' | 'bg-white';
  numberItems: number;
  color?: 'text-white' | 'text-bs-text';
  iconColor?: 'text-white' | 'text-bs-text';
  hoverColor?: 'white' | 'gray';
  borderColor?: 'white' | 'gray';
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bg-bs-blue',
  color: 'text-white',
  iconColor: 'text-white',
  hoverColor: 'white',
  borderColor: 'white'
});
const activeAccordion = ref(0);
const iconColors = ref(Array(props.numberItems).fill(props.iconColor));
const hColor = ref('');
const bColor = ref('');
const activeColor = ref('');

switch (props.hoverColor) {
  case 'white':
    hColor.value = 'hover:bg-white hover:bg-opacity-20';
    activeColor.value = 'bg-white bg-opacity-20';
    break;
  case 'gray':
    hColor.value = 'hover:bg-zinc-100';
    activeColor.value = 'bg-zinc-100';
    break;
}

switch (props.borderColor) {
  case 'white':
    bColor.value = 'border-b border-b-white border-opacity-20';
    break;
  case 'gray':
    bColor.value = 'border-b border-b-zinc-200';
    break;
}

const setActiveAccordion = (index: number) => {
  if (activeAccordion.value === index) activeAccordion.value = 0;
  else activeAccordion.value = index;

  iconColors.value = Array(props.numberItems).fill(props.iconColor);
  iconColors.value[index] = 'text-bs-green';
};

const setIconColor = (index: number) => {
  iconColors.value[index] = 'text-bs-green';
};

const removeIconColor = (index: number) => {
  if (activeAccordion.value !== index) {
    iconColors.value[index] = props.iconColor;
  }
};

const beforeEnter = (el: HTMLElement) => {
  el.style.height = '0';
};

const enter = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`;
};

const afterEnter = (el: HTMLElement) => {
  el.style.height = '';
};

const beforeLeave = (el: HTMLElement) => {
  el.style.height = `${el.scrollHeight}px`;
};

const leave = (el: HTMLElement) => {
  el.style.height = '0';
};
</script>

<style scoped></style>

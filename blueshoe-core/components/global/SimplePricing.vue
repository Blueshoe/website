<template>
    <div class="flex flex-col items-center justify-center gap-8 mb-12">
        <h2 class="text-3xl font-bold font-oswald text-center">
            <slot name="title" />
        </h2>
        <div class="flex gap-4 max-w-[90vw] overflow-x-auto">
            <div v-for="(i) in 3" :key="i" class="flex flex-col items-center justify-start border-solid border-black">
                <slot :name="`card` + i" />
            </div>
        </div>
    </div>
</template>
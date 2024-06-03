<template>
    <div class="flex flex-col p-4 border border-bs-blue gap-2 w-72 h-72 text-xl">
        <div class="text-xl">
            <slot name="title" />
        </div>
        <div class="price-desc ml-4">
            <ContentSlot name="priceDescription" unwrap="div" />
        </div>
    </div>
    <div class=" border-b border-l border-r border-bs-blue p-4 w-72">
        <div class="text-2xl font-oswald">
            <slot name="price" />
        </div>
    </div>
</template>

<style>
.price-desc li {
    list-style-type: "🗸";
    padding-left: 16px;
}

.price-desc li::marker {
    color: #000;
    font-size: 25px;
}
</style>
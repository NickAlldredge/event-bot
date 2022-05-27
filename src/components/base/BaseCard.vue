<template>
    <article class="inline rounded-md overflow-hidden border drop-shadow-sm">
        <h3 class="text-xl p-2 bg-gray-700 text-white">
            <slot name="header"></slot>
        </h3>
        <p class="p-2">
            <slot name="body"></slot>
        </p>
    </article>
</template>
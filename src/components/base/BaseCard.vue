<template>
    <article class="inline-block flex-auto max-w-lg p-2 m-1 rounded-md border drop-shadow-sm">
        <h3 class="text-xl">
            <slot name="header" class="text-3xl"></slot>
        </h3>
        <p>
            <slot name="body"></slot>
        </p>
    </article>
</template>
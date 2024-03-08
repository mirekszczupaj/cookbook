<template>
    <nav class="bg-gray-300 text-base p-4">
        <div class="max-w-5xl m-auto flex justify-between">
            <div>
                <router-link
                    :to="{ name: 'recipes' }"
                    class="mr-4"
                >
                    Recipes
                </router-link>
            </div>
        </div>
    </nav>
</template>

<template>
    <nav class="p-4">
        <div class="container mx-auto flex items-center justify-between">

            <div class="flex-grow mx-4">
                <input type="text"
                    class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search...">
            </div>
            <div class="flex items-center space-x-4">
                <button class="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded">Post A Job</button>
            </div>
        </div>
    </nav>
</template>


<script>

export default {
    name: "AppNavBarSecond",
    data() {

    }
}
</script>
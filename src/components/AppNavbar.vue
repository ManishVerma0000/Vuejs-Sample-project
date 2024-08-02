<template>
    <nav class="p-5">
        <div class="container mx-auto flex justify-evenly  items-center">
            <div :class="` w-full`">
                <ul class="flex justify-evenly">
                    <li class="text-blue hover:text-blue-300  text-xl">
                        <a href="#home">Home</a>
                    </li>
                    <li class="text-blue hover:text-blue-300 text-xl">
                        <a href="#about">About</a>
                    </li>
                    <li class="text-blue hover:text-blue-300 text-xl">
                        <a href="#services">Services</a>
                    </li>
                    <li class="text-blue hover:text-blue-300 text-xl">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {

    name: "AppNavbar",
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped></style>
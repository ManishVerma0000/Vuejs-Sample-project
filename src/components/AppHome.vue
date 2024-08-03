<template>
<AppNavbar/>
<AppNavBarSecond/>
<MidSection/>
<AppCard/>

</template>


<script>

import AppNavbar from './AppNavbar.vue';
import AppNavBarSecond from './AppNavBarSecond.vue';
import MidSection from './MidSection.vue';
import AppCard from './AppCard.vue';

export default {
    name: "AppHome",
    data() {

    },
    components: {
        AppNavbar,
        AppNavBarSecond,
        MidSection,
        AppCard
    }
}
</script>
<script>
import Navigation from './Navigation.vue';
import Card from '../components/Card.vue'
import Carasoul from './Carasoul.vue';


export default {
    name:"Main",
    components:{
        Navigation,Card,Carasoul
    }
,
    data(){

    }
}

</script>


<template>
    <Navigation/>
    <!-- <Card/> -->
    <Carasoul/>

</template>
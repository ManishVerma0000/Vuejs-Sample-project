<template>
    <AppNavbar/>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
        <div v-for="card in cards" :key="card.id" class="card-container">
            <div class="card">
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {{ card.jobName }}
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {{ card.jobDescription }}
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button class="btn" type="button">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axiosInstance from '@/api/api';
import AppNavbar from './AppNavbar.vue';
export default {
    name: "AppProjectCard",
    data() {
        return {
            cards: []
        };
    },
    components:{
        AppNavbar
    },
    methods:{

    },
   created(){
    axiosInstance.get('all-job').then((res)=>{
        console.log(res.data.data)
        this.cards=res.data.data
    }).catch((err)=>{
        console.log(err)
    })
   }
}
</script>

<style scoped>

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card-container {
    flex: 1 1 calc(33.333% - 20px); /* Adjusts to 3 cards per row */
    box-sizing: border-box;
    margin: 10px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    width: 100%;
    height: 100%;
}
.btn {
    display: inline-block;
   
    text-transform: uppercase;
    transition: all 0.3s;
    opacity: 1;
    pointer-events: all;

    padding: 10px 20px;
    border-radius: 8px;
    background-color: #1f2937;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
</style>
<template>

    <div class="maindiv">
        <div class="firstcontainer">
            <h1>
                Find A job that suits your skills
            </h1>

            <p>
                To apply, please send your resume and a cover letter to with the subject line "Full
                Stack Developer Application. In your cover letter, please highlight your relevant
                experience and explain why you are a good fit for this role.
            </p>

            <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem] m-10">
                <button
                    class="!absolute right-1 top-1 z-10 select-none rounded bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                    type="button" data-ripple-light="true">
                    Invite
                </button>
                <input type="email"
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " required />
                <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email Address
                </label>
            </div>



        </div>

        <div class="secondcontainer">
            <div class="imagecontianer">
                <img :src="imageSrc" alt="Example Image">
            </div>


        </div>


    </div>

</template>

<script>

export default {
    name: "MidSection",
    data() {
        return {
            imageSrc: require('../assets/jobposter.jpeg') // Path to the image
        }
    }
}

</script>

<style scoped>
.maindiv {
    display: flex;
    justify-content: space-between;
    margin: 10px;
}

.firstcontainer {
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.firstcontainer h1 {
    font-size: 30px;
    padding: 40px;
    margin-left: 10px;
}

.firstcontainer p {
    font-size: 20px;
    padding: 10px;
    margin-left: 30px;
}

.secondcontainer {
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column
}

.imagecontianer img {
    margin-top: 10px;
    border-radius: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 90%;
}
</style>
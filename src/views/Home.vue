<template>
<div class="container mx-auto w-3/12 text-left">

<form action="#" class="bg-gray-100 shadow-sm rounded-md p-8">
    <h2 class="text-center text-2xl mb-10">Login</h2>
    <div class="mb-6">
        <label for="email" class="mb-3 block text-gray-700">Email address:</label>
        <input type="email" id="email" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="Email" v-model="email" required>
    </div>
    <div class="mb-6">
        <label for="password" class="mb-3 block text-gray-700">password :</label>
        <input type="password" id="password" class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="password" v-model="password" required>
    </div>
    <button type="submit" class="py-3 px-12 bg-red-400 mr-5 rounded-md text-white text-lg focus:outline-none w-full">Sign In</button>
</form>

</div>


</template>

<script>
export default {
    name : "SignIn",
    data(){
        return{
            email: "",
            password: "",
        };
    }
}
</script>
<template>
<div class="desk-view">
<div class="lg:container flex justify-between items-center lg:pt-20 lg:pb-0 lg:px-20 mx-auto">
<div class="font-bold hidden lg:block text-3xl cursor-pointer">
    <span class="text-[#fcb874]">App</span>
    <span class="text-[#242f51]">Lab</span>
</div>
<div class="hidden lg:flex items-center text-[#242f51]">
     <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-10">Home</a>
     <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-10">Key Features</a>
     <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-10">Pricing</a>
     <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-10">Testiminial</a>
     <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-10">FAQ</a>
     <div class="bg-[#2500f9] text-base font-bold px-10 py-5 text-white rounded-full mx-auto cursor-pointer ">
         <span class="w-44">Try for free</span> 
     </div>
</div>
</div>

</div>
<div class="mobile-view flex justify-between py-10 px-10 lg:pt-0 lg:px-0">
    <div class="font-bold lg:hidden block text-3xl cursor-pointer">
    <span class="text-[#fcb874]">App</span>
    <span class="text-[#242f51]">Lab</span>
</div>
        <div @click="openMenu()" class=" lg:hidden block">
                <img src="../assets/more.png" alt="" class="w-10 p-1 border-2">
        </div>
 
 <div id="myMenu" class="hidden bg-black text-base font-medium absolute w-full top-24 right-0 left-0 text-center">
  <a href="#" class="block mt-4  py-3 text-white hover:opacity-5">Home</a>
     <a href="#" class="block mt-4  py-3  text-white">Key Features</a>
     <a href="#" class="block mt-4 py-3 text-white">Pricing</a>
     <a href="#" class="block mt-4 py-3 text-white">Testiminial</a>
     <a href="#" class="block mt-4 py-3 text-white">FAQ</a>

 </div>
 
</div>

</template>
<script>
export default {
    name: "navbar",
    data(){
        return{
         
        };
    },
    methods:{
        openMenu(){
    var x = document.getElementById("myMenu");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
      x.style.display = "block";
      }
        }
    }

}
</script>
<template>
<div class="desk-view">
<div class="lg:container flex justify-between items-center lg:pt-20 lg:pb-0 lg:px-20 mx-auto mb-4">
<div class="font-bold hidden lg:block text-3xl cursor-pointer">
    <span class="text-orange">App</span>
    <span class="text-primary-clr">Lab</span>
</div>
<div class="hidden lg:flex items-center text-primary-clr">
     <a href="#" class=" mr-10">Home</a>
     <a href="#" class=" mr-10">Key Features</a>
     <a href="#" class=" mr-10">Pricing</a>
     <a href="#" class=" mr-10">Testiminial</a>
     <a href="#" class=" mr-10">FAQ</a>
     <div class="bg-dark-blue text-base font-bold px-10 lg:ml-5 py-5 text-white rounded-full mx-auto cursor-pointer ">
         <span class="w-44">Try for free</span> 
     </div>
</div>
</div>

</div>

<div class="mobile-view flex
   lg:hidden fixed z-50 top-0 bg-white shadow w-full justify-between py-5 px-4 lg:pt-0 lg:px-0">
    <div class="font-bold  text-3xl cursor-pointer">
    <span class="text-orange">App</span>
    <span class="text-primary-clr">Lab</span>
</div>
        <div @click="openMenu()" class=" flex">
                <img src="../assets/close.png" alt="" class="w-8 h-8 p-1" v-if="showImg">
                <img src="../assets/more.png" alt="" class="w-8 h-8" v-else>

        </div>
 
 <div id="myMenu" class="hidden bg-blue text-base font-medium absolute w-full top-[5rem] right-0 left-0 py-4 text-center ">
  <a href="#" class="block py-5 text-white">Home</a>
     <a href="#" class="block py-5 text-white">Key Features</a>
     <a href="#" class="block py-5 text-white">Pricing</a>
     <a href="#" class="block py-5 text-white">Testiminial</a>
     <a href="#" class="block py-5 text-white">FAQ</a>
     <a href="#" class="block py-5 text-white font-semibold">Try for Free</a>
    


 </div>
 
</div>

</template>
<script>
export default {
    name: "navbar",
    data(){
        return{
          showImg : false,
        };
    },
    methods:{
        openMenu(){
    var x = document.getElementById("myMenu");
      if (x.style.display === "block") {
          x.style.display = "none";
          this.showImg = false;
      } else {
      x.style.display = "block";
          this.showImg = true;
      
      }
        }
    }

}
</script>
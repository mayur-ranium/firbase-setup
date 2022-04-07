<template>
<div class="app-lab-container">
  <navbar></navbar>
  <topsection></topsection>
  <clients></clients>
  <appfeature></appfeature>
  <appfooter></appfooter>
</div>

</template>


<script>
import navbar from "../components/navbar.vue";
import topsection from "../components/topsection.vue";
import clients from "../components/clients.vue";
import appfeature from "../components/appfeature.vue"
import appfooter from "../components/appfooter.vue"
export default {
    name : "AppLab",
    components: {
     navbar,
     topsection,
     clients,
     appfeature,
     appfooter
     
    },
    data(){
        return{

        };
    }
}
</script>
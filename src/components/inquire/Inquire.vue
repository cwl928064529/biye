<template>
    <div class="inquire">
        <publisher></publisher>
    </div>
</template>
<script>
import publisher from "../publisher/publisher"
export default{
    name: "inquire",
    data () {
        return {
            
        }
    },
    components: {
        publisher,
    }
}
</script>
<style>
    .inquire{
        position: relative;
        top: 48px;
        left: 0;
    }
</style>
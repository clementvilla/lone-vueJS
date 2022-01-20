<template>
<div class="page">
    <TitrePage />

<div class="row wrapper-container -creation">
    <Creation />
    <Creation />
    <Creation />
</div></div>

</template>

<script>

    import Creation from "@/components/Creation"
    import TitrePage from '../components/TitrePage.vue'

export default {
    components: {
        Creation,
        TitrePage
    }
}
</script>

<style lang="scss">

</style>
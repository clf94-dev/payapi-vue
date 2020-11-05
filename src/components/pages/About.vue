<template>
<div>
    <TopAbout></TopAbout>
    <PrincipleAbout></PrincipleAbout>
    <StatisticsAbout></StatisticsAbout>
    <PrincipleAbout></PrincipleAbout>
</div>
</template>

<script>
import TopAbout from '../TopAbout.vue'
import PrincipleAbout from '../PrincipleAbout.vue'
import StatisticsAbout from '../StatisticsAbout.vue'

export default {
    name: 'About',
    components: {
        PrincipleAbout,
        StatisticsAbout,
        TopAbout
    }
}
</script>

<style scoped>

</style>

<template>
<div>
    <TopHome></TopHome>
    <CompaniesHome></CompaniesHome>
    <MiddleHome></MiddleHome>
    <FeaturesHome></FeaturesHome>
    <Cta></Cta>
</div>
</template>

<script>
import TopHome from '../TopHome.vue'
import CompaniesHome from '../CompaniesHome.vue'
import MiddleHome from '../MiddleHome.vue'
import FeaturesHome from '../FeaturesHome.vue'
import Cta from '../Cta.vue'

export default {
    name: 'Home',
    components: {
        TopHome,
        CompaniesHome,
        MiddleHome,
        FeaturesHome,
        Cta

    }
}
</script>

<style scoped>

</style>

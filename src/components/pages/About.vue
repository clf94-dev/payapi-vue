<template>
<div>
    <TopAbout></TopAbout>
    <PrincipleAbout :info="principles1"></PrincipleAbout>
    <StatisticsAbout></StatisticsAbout>
    <PrincipleAbout :info="principles2"></PrincipleAbout>
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
    },
    data() {
        return {
            principles1: [{
                title: 'Our Vision',
                text: 'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.',
                delayT: 200,
                delayt: 300
            }, {
                title: 'Our Business',
                text: 'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.',
                delayT: 400,
                delayt: 500
            }],
            principles2: [{
                title: 'The Culture',
                text: "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
                delayT: 200,
                delayt: 300
            }, {
                title: "The People",
                text: "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
                delayT: 400,
                delayt: 500
            }],
        }
    }
}
</script>

<style scoped>

</style>

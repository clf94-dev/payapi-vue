<template>
<b-container fluid class="statistics-section">
    <img :src="study" alt="Team members">
    <b-row class="statistics-row">
        <hr class="block-div" />
        <b-col class="statistics-col" v-for="data of statistics" v-bind:key="data.title">

            <hr class="card-hr" />
            <h3>{{data.title}}</h3>
            <h1>{{data.text}}</h1>
            <hr class="card-hr" />
        </b-col>
        <hr class="block-div">
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'StatisticsAbout',
    data() {
        return {
            study: require("@/assets/images/about/desktop/image-team-members.jpg"),
            statistics: [{
                    title: 'Team Members',
                    text: '300+'
                },
                {
                    title: 'Offices in the US',
                    text: '3'
                },
                {
                    title: 'Transactions analyzed',
                    text: '10M+'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>

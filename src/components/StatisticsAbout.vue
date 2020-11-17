<template>
<b-container fluid class="statistics-section">
    <img :src="study" alt="Team members">
    <b-row class="statistics-row">
        <hr class="block-div" />
        <b-col xs="12" sm="12" md="4" lg="4" class="statistics-col" v-for="data of statistics" v-bind:key="data.title" data-aos='fade-up' :data-aos-delay="data.delay">

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
                    text: '300+',
                    delay: 200
                },
                {
                    title: 'Offices in the US',
                    text: '3',
                    delay: 400
                },
                {
                    title: 'Transactions analyzed',
                    text: '10M+',
                    delay: 600
                }
            ]
        }
    }
}
</script>

<style scoped>
.statistics-section img {
    width: 100% !important;
}

.statistics-section .statistics-row {
    padding: 5%;
    text-align: start;
}

@media screen and (min-width: 1080px) {
    .statistics-section .statistics-row {
        padding: 5% 10%;
    }
}

@media screen and (max-width: 755px) {
    .statistics-section .statistics-row {
        text-align: center;
    }
}

.statistics-section .statistics-row .block-div {
    border: none;
    border: 1px solid lightgray;
    width: 95%;
    display: none !important;
}

@media screen and (max-width: 755px) {
    .statistics-section .statistics-row .block-div {
        display: block !important;
    }
}

.statistics-section .statistics-row .statistics-col .card-hr {
    border: none !important;
    border: 1px solid lightgray !important;
    width: 95%;
    display: block !important;
}

@media screen and (max-width: 755px) {
    .statistics-section .statistics-row .statistics-col .card-hr {
        display: none !important;
    }
}

.statistics-section .statistics-row .statistics-col h3 {
    margin-left: 10px;
    margin-top: 15px !important;
    font-size: 15px;
    font-weight: 300;
    color: #36536b;
    font-family: "Public Sans", sans-serif;
}

.statistics-section .statistics-row .statistics-col h1 {
    margin-left: 10px;
    font-size: 45px;
    color: #da6d97;
    font-weight: 300;
    font-family: "Public Sans", sans-serif;
}
</style>

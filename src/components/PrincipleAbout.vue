<template>
<b-container fluid class="principles-section">
    <b-row v-for="data of info" v-bind:key="data.title">
        <b-col xs="12" sm="12" md="6" lg="6" class="title-col">
            <h4 data-aos='fade-right' :data-aos-delay="data.delayT"> {{data.title}}</h4>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6" class="text-col">
            <p data-aos='fade-left' :data-aos-delay="data.delayt">{{data.text}}</p>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'PrincipleAbout',
    props: ['info']

}
</script>

<style scoped>
.principles-section {
    padding: 2% 5% 1%;
    text-align: start;
}

@media screen and (min-width: 755px) {
    .principles-section {
        padding: 2% 7% 1%;
    }
}

@media screen and (min-width: 1080px) {
    .principles-section {
        padding: 2% 17% 1%;
    }
}

@media screen and (max-width: 756px) {
    .principles-section {
        text-align: center;
    }
}

.principles-section .title-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .principles-section .title-col {
        width: 50%;
    }
}

.principles-section .title-col h4 {
    margin-top: 10px;
    font-size: 25px;
    font-family: "Public Sans", sans-serif;
    color: #1b262f;
    font-weight: 300;
}

.principles-section .text-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .principles-section .text-col {
        width: 50%;
    }
}

.principles-section .text-col p {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5rem;
    font-family: "Public Sans", sans-serif;
    color: #6c8294;
    margin-bottom: 45px;
}
</style>

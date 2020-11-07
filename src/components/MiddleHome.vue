<template>
<b-container fluid>
    <b-row v-for="data of middle" v-bind:key="data.title" :class="data.classes ">
        <b-col class="text-col" xs="12" sm="12" md="6" lg="6">
            <h2>{{data.title}}</h2>
            <p>{{data.text}}</p>
        </b-col>
        <b-col class="img-col" xs="12" sm="12" md="6" lg="6">
            <img :src="data.src" :alt="data.imgAlt">
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'MiddleHome',
    data() {
        return {
            middle: [{
                    title: 'Easy to implement',
                    text: 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
                    classes: "middleHome-section reverse",
                    src: require("@/assets/images/home/desktop/illustration-easy-to-implement.svg"),
                    imgAlt: "Easy to implement"
                },
                {
                    title: 'Simple UI & UX',
                    text: 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.',
                    classes: "middleHome-section",
                    src: require("@/assets/images/home/desktop/illustration-simple-ui.svg"),
                    imgAlt: "Simple UI & UX"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>

<template>
<b-container fluid class="featuresHome-section">
    <b-row>
        <b-col class="feat-card" xs="12" sm="4" md="4" lg="4" v-for="data of features" v-bind:key="data.title" data-aos='fade-up' :data-aos-delay="data.delay">
            <img :src="data.src" :alt="data.imgAlt">
            <h3>{{data.title}}</h3>
            <p>{{data.text}}</p>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'FeaturesHome',
    data() {
        return {
            features: [{

                    title: 'Personal Finances',
                    text: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
                    src: require("@/assets/images/home/desktop/icon-personal-finances.svg"),
                    imgALT: 'Personal Finances',
                    delay: 200
                },
                {

                    title: 'Banking & Coverage',
                    text: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
                    src: require("@/assets/images/home/desktop/icon-banking-and-coverage.svg"),
                    imgALT: 'Banking & Coverage',
                    delay: 400
                },
                {

                    title: 'Consumer Payments',
                    text: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
                    src: require("@/assets/images/home/desktop/icon-consumer-payments.svg"),
                    imgALT: 'Consumer Payments',
                    delay: 600
                }
            ]
        }
    }
}
</script>

<style scoped>
.featuresHome-section {
    padding: 5% 10%;
}

.featuresHome-section .feat-card {
    width: 100%;
    text-align: center;
}

@media screen and (min-width: 480px) {
    .featuresHome-section .feat-card {
        width: 33%;
    }
}

.featuresHome-section .feat-card img {
    width: 130px;
    margin-bottom: 30px;
}

.featuresHome-section .feat-card h3 {
    font-size: 20px;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    margin-bottom: 15px;
}

.featuresHome-section .feat-card p {
    padding: 0 7%;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5rem;
    font-family: "Public Sans", sans-serif;
    color: #6c8294;
    margin-bottom: 45px;
}
</style>

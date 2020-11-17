<template>
<b-container fluid class="pricing-section">
    <div class="top-pricing">
        <h1>Pricing</h1>
    </div>
    <b-row class="pricing-row">
        <b-col class="pricing-col" xs="12" sm="4" md="4" lg="4" v-for="data of pricingData" v-bind:key="data.title" data-aos='fade-up' :data-aos-delay="data.delay">
            <h3>{{data.title}}</h3>
            <p>{{data.text}}</p>
            <h1>{{data.price}}</h1>
            <hr>

            <b-row class="feature-row" v-for="datafeat of data.features" v-bind:key="datafeat.name ">
                <b-col xs="3" sm="3" md="3" lg="3" class="tick-col"><i :class="datafeat.tick && 'fas fa-check'"></i> </b-col>

                <b-col xs="9" sm="9" md="9" lg="9" class="text-col">
                    <h4 :style="[ datafeat.tick ?{'color':'rgb(108, 130, 148)'}: {'color' : 'rgb(27, 38, 47)'}] ">{{datafeat.name}}</h4>
                </b-col>
                <!---  <FeaturePricing :title="datafeat.name" :tick="datafeat.tick"></FeaturePricing> ---->
            </b-row>
            <hr />
            <button class='dark-btn'>Request Access</button>
        </b-col>

    </b-row>
</b-container>
</template>

<script>
import FeaturePricing from './FeaturePricing.vue'
export default {
    name: 'PricingSection',
    components: [FeaturePricing],
    data() {
        return {
            pricingData: [{
                    title: "Free Plan",
                    text: "Build and test using our core set of products with up to 100 API requests",
                    price: "$0.00",
                    delay: 200,
                    features: [{
                            name: "Transactions",
                            tick: true
                        },
                        {
                            name: "Auth",
                            tick: true
                        },
                        {
                            name: "Identity",
                            tick: true
                        },
                        {
                            name: "Investments",
                            tick: false
                        },
                        {
                            name: "Assets",
                            tick: false
                        },
                        {
                            name: "Liabilities",
                            tick: false
                        },
                        {
                            name: "Income",
                            tick: false
                        }
                    ]
                },
                {
                    title: "Basic Plan",
                    text: "Launch your project with unlimited requests and no contractual minimums",
                    price: "$249.00",
                    delay: 400,
                    features: [{
                            name: "Transactions",
                            tick: true
                        },
                        {
                            name: "Auth",
                            tick: true
                        },
                        {
                            name: "Identity",
                            tick: true
                        },
                        {
                            name: "Investments",
                            tick: true
                        },
                        {
                            name: "Assets",
                            tick: true
                        },
                        {
                            name: "Liabilities",
                            tick: false
                        },
                        {
                            name: "Income",
                            tick: false
                        }
                    ]
                },
                {
                    title: "Premium Plan",
                    text: "Get tailored solutions, volume pricing, and dedicated support for your team",
                    price: "$499.00",
                    delay: 600,
                    features: [{
                            name: "Transactions",
                            tick: true
                        },
                        {
                            name: "Auth",
                            tick: true
                        },
                        {
                            name: "Identity",
                            tick: true
                        },
                        {
                            name: "Investments",
                            tick: true
                        },
                        {
                            name: "Assets",
                            tick: true
                        },
                        {
                            name: "Liabilities",
                            tick: true
                        },
                        {
                            name: "Income",
                            tick: true
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.pricing-section .top-pricing {
    text-align: start;
    padding: 5% 7%;
}

@media screen and (min-width: 1080px) {
    .pricing-section .top-pricing {
        padding: 5% 10%;
    }
}

.pricing-section .top-pricing h1 {
    font-size: 56px;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    color: #1b262f;
}

@media screen and (min-width: 1080px) {
    .pricing-section .top-pricing h1 {
        padding-right: 25%;
    }
}

@media screen and (max-width: 1080px) {
    .pricing-section .top-pricing h1 {
        text-align: center;
        font-size: 35px;
    }
}

.pricing-section .pricing-row {
    padding: 5% 10%;
}

@media screen and (min-width: 755px) {
    .pricing-section .pricing-row {
        padding: 2% 10%;
    }
}

.pricing-section .pricing-row .pricing-col {
    text-align: start;
}

@media screen and (max-width: 755px) {
    .pricing-section .pricing-row .pricing-col {
        padding-top: 5%;
    }
}

@media screen and (max-width: 1080px) {
    .pricing-section .pricing-row .pricing-col {
        text-align: center;
        justify-content: center;
    }
}

.pricing-section .pricing-row .pricing-col h1 {
    font-size: 40px;
    font-weight: 300;
    color: #36536b;
    font-family: "Public Sans", sans-serif;
    margin-bottom: 20px;
}

@media screen and (min-width: 756px) {
    .pricing-section .pricing-row .pricing-col h1 {
        font-size: 50px;
    }
}

.pricing-section .pricing-row .pricing-col h3 {
    font-size: 20px;
    color: #ba4270;
    font-weight: 300;
    letter-spacing: -0.05rem;
    font-family: "Public Sans", sans-serif;
    margin-bottom: 15px;
}

.pricing-section .pricing-row .pricing-col p {
    padding-right: 25%;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5rem;
    font-family: "Public Sans", sans-serif;
    color: #6c8294;
    margin-bottom: 25px;
}

@media screen and (max-width: 1080px) {
    .pricing-section .pricing-row .pricing-col p {
        padding: 0 7%;
    }
}

.pricing-section .pricing-row .pricing-col hr {
    color: lightgray;
    width: 90%;
    margin: 25px 0;
}

@media screen and (max-width: 1080px) {
    .pricing-section .pricing-row .pricing-col hr {
        justify-self: center;
    }
}

@media screen and (max-width: 756px) {
    .pricing-section .pricing-row .pricing-col hr {
        width: 100%;
    }
}

.pricing-section .pricing-row .pricing-col .feature-row {
    align-items: center;
    text-align: center;
}

.pricing-section .pricing-row .pricing-col .feature-row .text-col {
    width: 75%;
}

.pricing-section .pricing-row .pricing-col .feature-row .text-col h4 {
    text-align: start;
    font-size: 16px;
    color: #36536b;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    margin: 15px 0;
}

.pricing-section .pricing-row .pricing-col .feature-row .tick-col {
    width: 25%;
}

.pricing-section .pricing-row .pricing-col .feature-row .tick-col i {
    color: #ba4270;
}

.pricing-section .pricing-row .pricing-col .dark-btn {
    height: 50px;
    width: 150px;
    border-radius: 25px;
    margin-bottom: 30px;
    cursor: pointer;
    border: 1px solid #1b262f;
    background-color: transparent;
    color: #1b262f;
}

.pricing-section .pricing-row .pricing-col .dark-btn:hover {
    transition: all 0.2s ease-out;
    background-color: #1b262f;
    color: #fbfcfe;
}
</style>

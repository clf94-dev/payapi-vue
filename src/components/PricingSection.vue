<template>
<b-container fluid class="pricing-section">
    <div class="top-pricing">
        <h1>Pricing</h1>
    </div>
    <b-row class="pricing-row">
        <b-col class="pricing-col" xs="12" sm="4" md="4" lg="4" v-for="data of pricingData" v-bind:key="data.title">
            <h3>{{data.title}}</h3>
            <p>{{data.text}}</p>
            <h1>{{data.price}}</h1>
            <hr>

            <b-row class="feature-row" v-for="datafeat of data.features" v-bind:key="datafeat.name ">
                <b-col xs="3" sm="3" md="3" lg="3" class="tick-col"><i :class="datafeat.tick && 'fas fa-check'"></i> </b-col>

                <b-col xs="9" sm="9" md="9" lg="9" class="text-col">
                    <h4>{{datafeat.name}}</h4>
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

</style>

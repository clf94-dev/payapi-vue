<template>
<b-container fluid class='contact-comp-cont'>
    <h3>Join the thousands of innovators already building with us</h3>
    <b-row class="contact-comp-row">
        <b-col class="company-col" xs="6" sm="6" md="4" lg="4" v-for="data of companies" v-bind:key="data.imgAlt">
            <img class="logo" :src="data.src" :alt="data.imgAlt">
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'CompaniesContactSection',
    data() {
        return {

            companies: [{
                    src: require("@/assets/images/shared/desktop/tesla.svg"),
                    imgAlt: " Tesla"
                },
                {
                    src: require("@/assets/images/shared/desktop/google.svg"),
                    imgAlt: "Google"
                },
                {
                    src: require("@/assets/images/shared/desktop/microsoft.svg"),
                    imgAlt: "Microsoft"
                },
                {
                    src: require("@/assets/images/shared/desktop/hewlett-packard.svg"),
                    imgAlt: "HP"
                },
                {
                    src: require("@/assets/images/shared/desktop/oracle.svg"),
                    imgAlt: "Oracle"
                },
                {
                    src: require("@/assets/images/shared/desktop/nvidia.svg"),
                    imgAlt: "NVidia"
                }
            ]

        }
    },
}
</script>

<style scoped>
.contact-comp-cont h3 {
    margin-top: 5%;
    font-size: 20px;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    color: #36536b;
    margin-bottom: 20px;

}

.company-col {
    text-align: center;
    margin: 10px 0;

}

.contact-comp-row:nth-child(1).company-col .logo {
    margin: 10px auto 10px !important;

}

.contact-comp-cont .contact-comp-row .company-col .logo {
    margin: 20px auto 10px;

}

.contact-comp-cont .contact-comp-row .company-col .logo:hover {
    cursor: pointer;
    transform: scale(1.05) !important;
}
</style>

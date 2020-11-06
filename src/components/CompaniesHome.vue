<template>
<b-container fluid class="companies-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="6" md="6" lg="6">
            <h2>Who we work with</h2>
            <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
            </p>
            <button class='dark-btn'>About Us</button>
        </b-col>
        <b-col class="logos-col" xs="12" sm="6" md="6" lg="6">
            <b-row class="comp-row">
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="tesla" alt="Tesla"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="microsoft" alt="Microsoft"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="hp" alt="HP"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="oracle" alt="Oracle"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="google" alt="Google"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="nvidia" alt="NVidia"></b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'CompaniesHome',
    data() {
        return {
            tesla: require("@/assets/images/shared/desktop/tesla.svg"),
            google: require("@/assets/images/shared/desktop/google.svg"),
            microsoft: require("@/assets/images/shared/desktop/microsoft.svg"),
            hp: require("@/assets/images/shared/desktop/hewlett-packard.svg"),
            oracle: require("@/assets/images/shared/desktop/oracle.svg"),
            nvidia: require("@/assets/images/shared/desktop/nvidia.svg"),
        }
    }
}
</script>

<style scoped>

</style>

<template>
<b-container fluid class="footer-section">
    <b-row>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2"> <img :src="logo" alt="payapi"></b-col>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2"><a>Pricing</a></b-col>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2"><a>About</a></b-col>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2"><a>Contact</a></b-col>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2"></b-col>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2">
            <div class="social-row">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            logo: require("@/assets/images/shared/desktop/logo copy.svg")
        }
    }
}
</script>

<style scoped>

</style>

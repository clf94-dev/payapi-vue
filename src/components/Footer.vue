<template>
<b-container fluid class="footer-section">
    <b-row>
        <b-col class="footer-col" xs="12" sm="12" md="2" lg="2"> <img @click="scrollToTop(), goToHome()" :src="logo" alt="payapi"></b-col>
        <b-col class="footer-col links" xs="12" sm="12" md="2" lg="2"><a @click=" scrollToTop(), goToPricing()">Pricing</a></b-col>
        <b-col class="footer-col links" xs="12" sm="12" md="2" lg="2"><a @click=" scrollToTop(), goToAbout()">About</a></b-col>
        <b-col class="footer-col links" xs="12" sm="12" md="2" lg="2"><a @click=" scrollToTop(), goToContact()">Contact</a></b-col>
        <b-col class="footer-col links" xs="12" sm="12" md="2" lg="2"></b-col>
        <b-col class="footer-col links" xs="12" sm="12" md="2" lg="2">
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
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        goToHome() {
            this.$router.push('/home');
        },
        goToAbout() {
            this.$router.push('/about');
        },
        goToPricing() {
            this.$router.push('/pricing');
        },
        goToContact() {
            this.$router.push('/contact');
        }
    }
}
</script>

<style scoped>
.footer-section {
    padding: 3% 10%;
    background-color: #1b262f;
    align-items: center;
}

@media screen and (max-width: 756px) {
    .footer-section {
        padding: 5% 10%;
    }
}

@media screen and (max-width: 756px) {
    .footer-section {
        text-align: center;
        align-content: center;
        justify-content: center !important;
    }
}

.footer-section .footer-col {
    width: 100%;
}

@media screen and (min-width: 800px) {
    .footer-section .links {
        padding-top: 35px;
    }
}

.footer-section .footer-col img {
    margin-top: 30px;
    margin-bottom: 30px;
}

.footer-section .footer-col img:hover {
    cursor: pointer;
}

.footer-section .footer-col a {
    color: #6c8294;
    font-size: 14px;
    font-weight: 300;
    font-family: "Public Sans", sans-serif;
    margin-bottom: 20px !important;
}

@media screen and (min-width: 756px) and (max-width: 1080px) {
    .footer-section .footer-col a {
        text-align: center !important;

    }
}

.footer-section .footer-col a:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    color: #fbfcfe;
}

@media screen and (max-width: 756px) {
    .footer-section .footer-col .social-row {
        justify-content: center;
        margin-top: 20px !important;
    }
}

.footer-section .footer-col .social-row i {
    color: #fbfcfe !important;
    padding: 1% 5% !important;
}

@media screen and (max-width: 756px) {
    .footer-section .footer-col .social-row i {
        padding: 1% 2%;
    }
}

.footer-section .footer-col .social-row i:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    color: #da6d97;
}
</style>

<template>
<b-container fluid class="companies-section">
    <b-row>
        <b-col class="title-col" xs="12" sm="6" md="6" lg="6">
            <h2>Who we work with</h2>
            <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
            </p>
            <button @click="goToAbout()" class='dark-btn'>About Us</button>
        </b-col>
        <b-col class="logos-col" xs="12" sm="6" md="6" lg="6">
            <b-row class="comp-row">
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="tesla" alt="Tesla" class="logo"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="microsoft" alt="Microsoft" class="logo"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="hp" alt="HP" class="logo"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="oracle" alt="Oracle" class="logo"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="google" alt="Google" class="logo"></b-col>
                <b-col class="logo-item" xs="6" sm="6" md="4" lg="4"><img :src="nvidia" alt="NVidia" class="logo"></b-col>
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
    },
    methods: {
        goToAbout() {
            this.$router.push('/about');
        }
    }
}
</script>

<style scoped>
.companies-section {
    padding: 5% 10%;
    background-color: #1b262f;
}

@media screen and (max-width: 756px) {
    .companies-section {
        text-align: center !important;

    }

    .title-col {
        padding-top: 30px;
    }

    .companies-section .comp-row {
        flex-direction: row-reverse !important;
    }
}

.companies-section .title-col {
    width: 100%;
    color: #fbfcfe;

}

@media screen and (min-width: 480px) {
    .companies-section .title-col {
        width: 50%;
        text-align: start;
    }
}

.companies-section .title-col h2 {
    font-size: 48px;
    font-family: "Public Sans", sans-serif;
    margin-bottom: 15px;
}

.companies-section .title-col p {
    font-size: 15px;
    line-height: 1.5rem;
    font-family: "Public Sans", sans-serif;
    margin-bottom: 30px;
}

@media screen and (min-width: 755px) {
    .companies-section .title-col p {
        padding-right: 23%;
    }
}

.companies-section .title-col .dark-btn {
    height: 50px;
    width: 150px;
    border-radius: 25px;
    margin-bottom: 30px;
    cursor: pointer;
    border: 1px solid #fbfcfe;
    background-color: transparent;
    color: #fbfcfe;
}

.companies-section .title-col .dark-btn:hover {
    transition: all 0.2s ease-out;
    background-color: #fbfcfe;
    color: #1b262f;
}

.companies-section .logos-col {
    width: 100%;
    padding-top: 40px;
    justify-content: center !important;
    align-items: center !important;
}

@media screen and (min-width: 480px) {
    .companies-section .logos-col {
        width: 50%;
    }
}

.companies-section .logos-col .comp-row {
    align-items: center !important;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
}

.companies-section .logos-col .comp-row .logo-item {
    width: 50%;
}

@media screen and (min-width: 480px) {
    .companies-section .logos-col .comp-row .logo-item {
        width: 33%;
    }
}

.companies-section .logos-col .comp-row .logo-item .logo {
    margin: 20px auto 10px !important;
    filter: brightness(0) invert(1) !important;
}

.companies-section .logos-col .comp-row .logo-item .logo:hover {
    cursor: pointer;
    transform: scale(1.05) !important;
}
</style>

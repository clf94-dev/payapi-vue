<template>
<b-container fluid>
    <b-row class="topHome-section">
        <b-col class="title-col" xs="12" sm="6" md="6" lg="6" @submit.prevent="showData()">
            <h1>Start building with our APIs for absolutely free.
            </h1>
            <form>
                <b-row>
                    <b-col xs="12" sm="6" md="6" lg="6" class="input-col">
                        <input name="email" v-model="email" :style="[submitted && (!$v.email.required || !$v.email.email ) ? {color: '#da6d97', borderBottomColor: '#da6d97'} : {color: '#36536b', borderBottomColor: '#36536b'} ]" type="text" placeholder="Email Address...">
                        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.email.required">
                            An Email Address is required</div>
                        <div :style="{color: ' #f67e7e'}" v-if="submitted && !$v.email.email">
                            Invalid Email Address </div>
                    </b-col>
                    <b-col xs="12" sm="6" md="6" lg="6" class="btn-col">
                        <button type="submit" class='pink-btn'>Schedule a Demo</button>
                    </b-col>
                </b-row>
                <p>Have any questions? <a>Contact Us</a> </p>
            </form>
        </b-col>

        <b-col class="img-col" xs="12" sm="6" md="6" lg="6">
            <img :src="phone" alt="Mobile">
        </b-col>
    </b-row>

</b-container>
</template>

<script>
import {
    required,
    email
} from 'vuelidate/lib/validators'
export default {
    name: 'TopHome',

    validations: {
        email: {
            email,
            required

        }

    },
    methods: {
        showData() {
            console.log(this.email),
                this.submitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            }
        }
    },
    data() {
        return {
            submitted: false,
            phone: require("@/assets/images/home/desktop/illustration-phone-mockup.svg"),
            email: ""
        }
    },
}
</script>

<style scoped>
@media screen and (min-width: 755px) {
    .topHome-section {
        padding: 2% 10% 5%;
    }
}

@media screen and (max-width: 756px) {
    .topHome-section {
        flex-direction: column-reverse;
    }
}

.topHome-section .title-col {
    width: 100%;
    text-align: center !important;
}

@media screen and (min-width: 480px) {
    .topHome-section .title-col {
        width: 50%;
    }
}

@media screen and (min-width: 755px) {
    .topHome-section .title-col {
        padding-top: 10%;
        text-align: start !important;
    }
}

.topHome-section .title-col h1 {
    font-family: "Public Sans", sans-serif;
    font-size: 72px;
    color: #36536b;
    font-weight: 300;
    letter-spacing: -0.1rem;
    margin-bottom: 50px;
}

@media screen and (max-width: 756px) {
    .topHome-section .title-col h1 {
        font-size: 56px;
    }
}

.topHome-section .title-col p {
    font-size: 15px;
    font-family: "Public Sans", sans-serif;
}

.topHome-section .title-col p a {
    text-decoration: underline;
}

.topHome-section .title-col p a:hover {
    cursor: pointer;
}

.topHome-section .title-col .input-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .topHome-section .title-col .input-col {
        width: 50%;
    }
}

.topHome-section .title-col .input-col input {
    box-shadow: 15px 15px 18px 5px rgba(0, 0, 0, 0.1);
    height: 50px;
    width: 80%;
    font-family: "Public Sans", sans-serif;
    border-radius: 25px;
    border: 1px solid #fbfcfe;
    padding-left: 20px;
    margin-bottom: 15px;
}

@media screen and (min-width: 755px) {
    .topHome-section .title-col .input-col input {
        width: 150% !important;
    }
}

.topHome-section .title-col .input-col input::placeholder {
    color: #6c8294;
}

.topHome-section .title-col .input-col input:focus {
    outline: none !important;
}

.topHome-section .title-col .input-col small {
    width: 100% !important;
    margin-right: 50%;
    margin-bottom: 20px;
    padding-left: 5px;
}

.topHome-section .title-col .btn-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .topHome-section .title-col .btn-col {
        width: 50%;
    }
}

.topHome-section .title-col .btn-col .pink-btn {
    height: 50px;
    width: 80%;
    margin-top: 5px;
    box-shadow: 5px 10px 12px 1px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid #ba4270;
    background-color: #ba4270;
    color: #fbfcfe;
    margin-bottom: 40px;
}

@media screen and (min-width: 755px) {
    .topHome-section .title-col .btn-col .pink-btn {
        width: 250px;
    }
}

.topHome-section .title-col .btn-col .pink-btn:hover {
    transition: all 0.2s ease-out;
    border-color: #da6d97;
    background-color: #da6d97;
}

.topHome-section .img-col {
    width: 100%;
    justify-content: center !important;
    text-align: center !important;
}

@media screen and (min-width: 480px) {
    .topHome-section .img-col {
        width: 50%;
    }
}

@media screen and (max-width: 756px) {
    .topHome-section .img-col img {
        padding-left: 9%;
    }
}
</style>

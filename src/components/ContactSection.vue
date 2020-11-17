<template>
<b-container fluid class="contact-section">

    <b-row>
        <b-col xs="12" sm="12" md="6" lg="6" class="form" @submit.prevent="showData()">
            <form class="form-col">
                <input :style="[submitted && (!$v.user.name.required || !$v.user.name.alpha || !$v.user.name.minLength ) ? {color: ' #da6d97', borderBottomColor: ' #da6d97'} : {color: ' #36536b', borderBottomColor: ' #36536b'} ]" type="text" name="Name" placeholder="Name" v-model="user.name">
                <div class="error" v-if="submitted && !$v.user.name.required">
                    The name is required</div>
                <div class="error" v-if="submitted && !$v.user.name.alpha">
                    The name must contain alphabetic characters</div>
                <div class="error" v-if="submitted && !$v.user.name.minLength">
                    The name must contain at least 2 characters</div>
                <input :style="[submitted && (!$v.user.email.email ||!$v.user.email.required ) ? {color: ' #da6d97', borderBottomColor: ' #da6d97'} : {color: ' #36536b', borderBottomColor: ' #36536b'} ]" type="email" name="email" id="" placeholder="Email Address" v-model="user.email">
                <div class="error" v-if="submitted && !$v.user.email.required">
                    An Email Address is required</div>
                <div class="error" v-if="submitted && !$v.user.email.email">
                    Invalid Email Address </div>
                <input type="text" placeholder="Company Name" v-model="user.company">
                <input type="text" placeholder="Title" v-model="user.title">
                <textarea :style="[submitted && (!$v.user.message.required || !$v.user.message.minLength ) ? {color: ' #da6d97', borderBottomColor: ' #da6d97'} : {color: ' #36536b', borderBottomColor: ' #36536b'} ]" name="message" id="" cols="30" rows="10" placeholder="Message" v-model="user.message"></textarea>
                <div class="error" v-if="submitted && !$v.user.message.required">
                    A Message is required</div>
                <div class="error" v-if="submitted && !$v.user.message.minLength">
                    The message must contain at least 5 characters</div>
                <b-row class="checkbox-row">
                    <input type="checkbox" name="checkbox" id="" class="checkbox" v-model="user.checkbox" />
                    <label for="checkbox">Stay up-to-date with company announcements and updates to our
                        API</label>
                </b-row>
                <button type="submit" class="submit-btn"> Submit </button>
            </form>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6">
            <CompaniesContactSection> </CompaniesContactSection>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
import CompaniesContactSection from './CompaniesContactSection.vue'
import {
    required,
    email,
    alpha,
    minLength
} from 'vuelidate/lib/validators'
export default {
    name: 'ContactSection',
    components: {
        CompaniesContactSection
    },
    methods: {
        showData() {
            console.log(this.user),
                this.submitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                return false;
            }

        }
    },
    validations: {
        user: {

            name: {
                required,
                minLength: minLength(2),
                alpha
            },
            email: {
                required,
                email
            },
            message: {
                required,
                minLength: minLength(5)

            }
        }

    },
    data() {
        return {
            submitted: false,
            user: {
                name: '',
                email: '',
                company: '',
                title: '',
                message: '',
                checkbox: false
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: #da6d97 !important;
}

.contact-section {
    padding: 2% 7% 5%;
    text-align: start;
}

@media screen and (min-width: 1080px) {
    .contact-section {
        padding: 2% 10% 5%;
    }
}

.contact-section .form {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .contact-section .form {
        width: 50%;
    }
}

.contact-section .form .form-col input {
    height: 50px;
    width: 90%;
    padding-bottom: 10px;
    font-size: 15px;
    padding-left: 15px;
    margin-bottom: 20px;
    margin-top: 10px;
    border: none;
    border-bottom: 1px solid #6c8294;
    color: #6c8294;
    font-family: "Public Sans", sans-serif;
}

.contact-section .form .form-col input.checkbox {
    height: 30px !important;
    width: 50px !important;
    background-color: #6c8294;
}

.contact-section .form .form-col input:focus {
    outline: none !important;
}

.contact-section .form .form-col textarea {
    height: 150px;
    width: 90%;
    font-size: 15px;
    font-family: "Public Sans", sans-serif;
    padding-left: 15px;
    border: none;
    border-bottom: 1px solid #6c8294;
    color: #6c8294;
    margin-bottom: 30px;
}

.contact-section .form .form-col textarea:focus {
    outline: none !important;
}

.contact-section .form .form-col small {
    width: 100% !important;
    margin-right: 50%;
    margin-bottom: 20px;
    padding-left: 5px;

}

.contact-section .form .form-col .checkbox-row {
    text-align: start;
    align-items: center !important;
    margin-bottom: 80px !important;
}

.contact-section .form .form-col .checkbox-row label {
    font-size: 18px;
    color: #36536b !important;
    font-size: "Public Sans", sans-serif !important;
}

.contact-section .form .form-col .submit-btn {
    height: 50px;
    width: 150px;
    color: #36536b;
    border: 1px solid #36536b;
    border-radius: 25px;
}

.contact-section .form .form-col .submit-btn:hover {
    transition: all 0.3s ease;
    cursor: pointer;
    color: #fbfcfe;
    border: 1px solid #36536b;
    background-color: #36536b;
}
</style>

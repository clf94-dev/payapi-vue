<template>
<b-container fluid>
    <b-row class="cta-section">
        <b-col class="title-col" xs="12" sm="12" md="6" lg="6">
            <h2>Ready to start?</h2>
        </b-col>
        <b-col class="input-row" xs="12" sm="12" md="6" lg="6">
            <form>
                <b-row>
                    <b-col xs="12" sm="8" md="8" lg="8" class="input-col">
                        <input type="text">
                    </b-col>
                    <b-col xs="12" sm="4" md="4" lg="4" class="btn-col">
                        <button type="submit" class='pink-btn'>Schedule a Demo</button>
                    </b-col>
                </b-row>

            </form>
        </b-col>

    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Cta'
}
</script>

<style scoped>
.cta-section {
    padding: 5% 10%;
}

@media screen and (max-width: 1080px) {
    .cta-section {
        text-align: center;
    }
}

.cta-section .title-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .cta-section .title-col {
        width: 50%;
    }
}

.cta-section .title-col h2 {
    font-size: 48px;
    color: #1b262f;
    font-family: "Public Sans", sans-serif;
    margin-bottom: 25px;
}

.cta-section .input-row {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .cta-section .input-row {
        width: 50%;
    }
}

.cta-section .input-row .input-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .cta-section .input-row .input-col {
        width: 60%;
    }
}

.cta-section .input-row .input-col input {
    box-shadow: 15px 15px 18px 5px rgba(0, 0, 0, 0.1);
    height: 50px;
    margin-top: 8%;
    width: 80%;
    border-radius: 25px;
    border: 1px solid #fbfcfe;
    padding-left: 20px;
    margin-bottom: 15px;
}

.cta-section .input-row .input-col input:focus {
    outline: none !important;
}

@media screen and (min-width: 600px) {
    .cta-section .input-row .input-col input {
        width: 120% !important;
    }
}

.cta-section .input-row .input-col input::placeholder {
    color: #6c8294;
}

.cta-section .input-row .input-col small {
    width: 100% !important;
    margin-right: 50%;
    margin-bottom: 20px;
    padding-left: 5px;
}

.cta-section .input-row .btn-col {
    width: 100%;
}

@media screen and (min-width: 480px) {
    .cta-section .input-row .btn-col {
        width: 40%;
    }
}

.cta-section .input-row .btn-col .pink-btn {
    height: 50px;
    margin-top: 14%;
    width: 80%;
    box-shadow: 5px 10px 12px 1px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid #ba4270;
    background-color: #ba4270;
    color: #fbfcfe;
    margin-bottom: 40px;
}

@media screen and (min-width: 755px) {
    .cta-section .input-row .btn-col .pink-btn {
        width: 150px;
    }
}

.cta-section .input-row .btn-col .pink-btn:hover {
    transition: all 0.2s ease-out;
    border-color: #da6d97;
    background-color: #da6d97;
}
</style>

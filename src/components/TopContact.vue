<template>
<div class='top-contact-cont'>
    <h1>Submit a help request and we’ll get in touch shortly.</h1>
</div>
</template>

<script>
export default {
    name: 'TopContact'
}
</script>

<style scoped>
.top-contact-cont {
    padding: 5% 7% 0%;
    text-align: start;
}

@media screen and (min-width: 1080px) {
    .top-contact-cont {
        padding: 5% 10% 0%;
    }
}

.top-contact-cont h1 {
    font-size: 56px;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    color: #1b262f;
}

@media screen and (min-width: 800px) {
    .top-contact-cont h1 {
        padding-right: 35% !important;
    }
}

@media screen and (max-width: 800px) {
    .top-contact-cont h1 {
        text-align: center;
        font-size: 35px;
    }
}
</style>

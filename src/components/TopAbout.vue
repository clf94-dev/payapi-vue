<template>
<div class='top-about-cont'>
    <h1>We empower innovators by delivering access to the financial system</h1>
</div>
</template>

<script>
export default {
    name: 'TopAbout'
}
</script>

<style scoped>
.top-about-cont {
    padding: 5% 7%;
}

@media screen and (min-width: 1080px) {
    .top-about-cont {
        padding: 5% 17%;
    }
}

.top-about-cont h1 {
    font-size: 56px;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    color: #1b262f;
}

@media screen and (min-width: 1080px) {
    .top-about-cont h1 {
        padding-right: 25%;
    }
}

@media screen and (max-width: 1080px) {
    .top-about-cont h1 {
        text-align: center;
        font-size: 35px;
    }
}
</style>

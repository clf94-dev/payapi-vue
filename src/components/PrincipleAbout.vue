<template>
<b-container fluid class="principles-section">
    <b-row v-for="data of info" v-bind:key="data.title">
        <b-col xs="12" sm="12" md="6" lg="6" class="title-col">
            <h4>{{data.title}}</h4>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6" class="text-col">
            <p>{{data.text}}</p>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'PrincipleAbout',
    props: ['info']

}
</script>

<style scoped>

</style>

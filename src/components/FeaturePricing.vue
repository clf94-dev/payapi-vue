<template>
<b-container fluid>

    <b-col xs="3" sm="3" md="3" lg="3" class="tick-col"><i :class="tick && 'fas fa-check'"></i> </b-col>

    <b-col xs="9" sm="9" md="9" lg="9" class="text-col">
        <h4>{{title}}</h4>
    </b-col>
</b-container>
</template>

<script>
export default {
    name: 'FeaturePricing',
    props: {
        title: String,
        tick: Boolean
    }

}
</script>

<style scoped>

</style>

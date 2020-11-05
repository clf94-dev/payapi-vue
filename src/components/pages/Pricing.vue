<template>
<div>
    <PricingSection></PricingSection>
    <Cta></Cta>
</div>
</template>

<script>
import Cta from '../Cta.vue'
import PricingSection from '../PricingSection.vue'
export default {
    name: 'Pricing',
    components: {
        Cta,
        PricingSection
    }
}
</script>

<style scoped>

</style>

<template>
<div>
    <PricingSection></PricingSection>
    <Cta></Cta>
</div>
</template>

<script>
import Cta from '@/components/Cta.vue'
import PricingSection from '@/components/PricingSection.vue'
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

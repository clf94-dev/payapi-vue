<template>
<div>
    <TopContact></TopContact>
    <ContactSection></ContactSection>
    <Cta></Cta>
</div>
</template>

<script>
import Cta from '../Cta.vue'
import TopContact from '../TopContact.vue'
import ContactSection from '../ContactSection.vue'
export default {
    name: 'Contact',
    components: {
        Cta,
        TopContact,
        ContactSection
    }
}
</script>

<style scoped>

</style>

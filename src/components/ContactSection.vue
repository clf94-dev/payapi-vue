<template>
<b-container fluid class="contact-section">

    <b-row>
        <b-col xs="12" sm="12" md="6" lg="6" class="form">
            <form class="form-col">
                <input type="text" name="Name" placeholder="Name">\
                <input type="email" name="email" id="" placeholder="Email Address">
                <input type="text" placeholder="Company-name">
                <input type="text" placeholder="Title">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <input type="checkbox" name="checkbox" id="" class="checkbox" />
                <label for="checkbox">Stay up-to-date with company announcements and updates to our
                    API</label>
                <button type="submit" class="submit-btn"> Submit </button>
            </form>
        </b-col>

    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'ContactSection'
}
</script>

<style scoped>

</style>

<template>
  <div class="send_mail">
      <h2>A Confirmation Mail has been sent you your mail</h2>
      <p class="underline h6">Please check your mail to confirm your account</p>
    </div>
</template>

<script>
export default {
    name: "RegistrationEmailSent"

}
</script>

<style scoped>
.send_mail{
    min-height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
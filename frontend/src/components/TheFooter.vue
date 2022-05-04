<script>
export default { name: "TheFooter" };
</script>


<template>
  <div class="footer">
    <img src="../../public/images/icon-white.png" alt="Logo Groupomania" class="footer__logo" />
  </div> 
</template>


<style scoped lang="scss">
.footer {
  width: 100%;
  background-image: url('https://cdn.wallpapersafari.com/17/89/1j7RkU.jpg');
background-repeat:repeat-x;

  @include flexbox(center, row, center);
  

  &__logo {
    width: 15%;
    min-width: 17rem;
    margin: $marged-centered-margin;
  }
}
</style>
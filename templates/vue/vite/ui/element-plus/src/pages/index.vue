<template>
  <div class="index-page">
    <div class="content">
      <example-component />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.index-page {
  display: inline-block;
  width: 100%;
  margin-top: 50px;
  text-align: center;

  &::before {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    content: "";
  }

  .content {
    display: inline-block;
    width: fit-content;
    vertical-align: middle;
  }
}
</style>
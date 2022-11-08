<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineProps({
  caption: {
    type: String,
    required: false,
    default: '',
  },
  link: {
    type: String,
    required: false,
    default: '#',
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
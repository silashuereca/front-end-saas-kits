<template>
  <div> About Page </div>
</template>

<script>
import { definePageMeta } from "#imports";
definePageMeta({
  layout: "custom",
  middleware: "auth",
});
</script>

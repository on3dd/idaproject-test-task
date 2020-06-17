<template>
  <div class="divider" />
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

  @Component
	export default class BaseDivider extends Vue {}
</script>

<style scoped lang="scss">
	@import '@/scss/colors';

	.divider {
		height: 1px;
		width: inherit;
		background-color: $cloud;
	}
</style>

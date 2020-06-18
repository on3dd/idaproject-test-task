<template>
  <button :disabled="disabled" :class="buttonClasses">
    <slot />
  </button>
</template>

<script lang="ts">
	import { Component } from 'vue-property-decorator';
	import Button from '@/mixins/button';

	@Component
	export default class BaseButton extends Button {}
</script>

<style scoped lang="scss">
	@import '@/scss/colors.scss';
	@import '@/scss/_button.scss';

	.button {
		@include button;
	}
</style>

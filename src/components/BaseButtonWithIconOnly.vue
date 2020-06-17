<template>
  <button :disabled="disabled" class="button">
    <BaseIcon :name="icon" />
  </button>
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator';
	import Button from '@/mixins/button';
	import BaseIcon from './BaseIcon.vue';

	@Component({
		components: {
			BaseIcon,
		},
	})
	export default class BaseButtonWithIconOnly extends Button {
		@Prop({ type: Boolean, required: false, default: false }) disabled!: boolean;
		@Prop({ type: String, required: true }) icon!: string;

		handleClick(evt: MouseEvent) {
			this.$emit('click', evt);
		}
	}
</script>

<style scoped lang="scss">
  @import '@/scss/_button.scss';

  .button {
    @include button;
  }
</style>

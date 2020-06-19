<template>
  <button @click="handleClick" :class="buttonClasses" :disabled="disabled">
    <BaseIcon :name="icon" class="icon" />
    <slot>Добавить</slot>
  </button>
</template>

<script lang="ts">
	import { Component, Prop } from 'vue-property-decorator';
	import BaseIcon from './BaseIcon.vue';
	import Button from '@/mixins/button';

	@Component({
		components: {
			BaseIcon,
		},
	})
	export default class BaseButtonWithIcon extends Button {
		@Prop({ type: String, required: true }) icon!: string;

		protected get buttonClasses() {
			return {
				button: true,
				flat: this.flat,
				'with-icon': true,
				[this.color]: this.color !== undefined,
			};
		}
	}
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.button {
		@include button;
	}

	.with-icon {
    display: flex;
    align-items: center;
		white-space: nowrap;

		.icon {
			display: inline;
			margin-right: 5px;
    }
	}
</style>

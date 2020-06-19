<template>
  <div class="select-wrapper">
    <div class="select">
      <div @click="handleCurrentClick" ref="current" class="select__current">
        {{modelValue.length}} columns selected
        <img
          src="@/assets/images/icons/arrow.svg"
          alt="Arrow icon"
          class="select__current__icon"
        />
      </div>
      <div :class="listClasses">
        <div class="select__all">
          <BaseCheckbox :checked="selectAll" label="Select All" />
        </div>
        <div v-for="(item, idx) in options" :key="idx" class="select__item">
          <BaseCheckbox :checked="true" :label="item" @click="changeCurrent(item)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Model } from 'vue-property-decorator';
	import BaseCheckbox from './BaseCheckbox.vue';
	import Select from '@/mixins/select';

	@Component({
		components: {
			BaseCheckbox,
		},
	})
	export default class BaseSelectMultiple extends Select {
		@Model('select', { type: Array, default: () => [] }) modelValue!: (
			| string
			| number
		)[];

		private selectAll = true;

		// @Watch('modelValue')
		// onModelValueChanged(val: string | number, oldVal: string | number) {
		// 	if (val === oldVal) return;
		// 	this.value = val;
		// }

		created() {
			document.addEventListener('click', evt => {
				if (!this.isActive || !evt.target) return;

				const target = evt.target as HTMLElement;

				if (
					target !== this.$refs.current &&
					!target.classList.contains('select__item')
				) {
					this.isActive = false;
				}
			});
		}
	}
</script>

<style scoped lang="scss">
	@import '@/scss/_select.scss';

	.select {
		@include select;

		&__all {
			margin-bottom: 12px;
			font-weight: 600;

			&:hover {
				background-color: inherit;
				text-decoration: underline;
			}
		}

		&__items {
			padding: 15px 17px;
			max-height: 250px;
			overflow-y: auto;
		}

		&__item {
			padding: 0;

			&:not(:last-child) {
				margin-bottom: 12px;
			}

			&:hover {
				background-color: inherit;
				text-decoration: underline;
			}
		}
	}
</style>

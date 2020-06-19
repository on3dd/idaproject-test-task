<template>
  <div class="select-wrapper">
    <div class="select">
      <div @click="handleCurrentClick" ref="current" class="select__current">
        {{value}}
        <img
          src="@/assets/images/icons/arrow.svg"
          alt="Arrow icon"
          class="select__current__icon"
        />
      </div>
      <div :class="listClasses">
        <div
          v-for="(item, idx) in options"
          :key="idx"
          @click="changeCurrent(item)"
          class="select__item"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Model, Watch } from 'vue-property-decorator';
	import Select from '@/mixins/select';

	@Component
	export default class BaseSelect extends Select {
		@Model('select', { type: String || Number }) modelValue!: string | number;

		private value: string | number = '';

		@Watch('modelValue')
		onModelValueChanged(val: string | number, oldVal: string | number) {
			if (val === oldVal) return;
			this.value = val;
		}

		created() {
			if (this.modelValue) {
				this.value = this.modelValue;
			} else if (this.options.length !== 0) {
				this.value = this.options[0];
			}
		}

		mounted() {
			document.addEventListener('click', evt => {
				if (this.isActive && evt.target !== this.$refs.current) {
					this.isActive = false;
				}
			});
		}

		changeCurrent(el: string | number) {
			this.value = el;
			this.$emit('select', this.value);
		}
	}
</script>

<style scoped lang="scss">
	@import '@/scss/_select.scss';

	.select {
		@include select;
	}
</style>

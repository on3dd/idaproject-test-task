<template>
  <div class="select-wrapper">
    <span class="select__text" v-if="label">
      {{label}}
      <slot name="hint" />
    </span>
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
	import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';

	@Component
	export default class BaseSelect extends Vue {
		$refs!: {
			current: HTMLDivElement;
		};

		@Prop({ type: Array, required: false, default: () => [] }) options!: string[];
		@Prop({ type: Boolean, required: false, default: false }) empty!: boolean;
		@Prop({ type: String, required: false }) label!: string;

		@Model('select', { type: String || Number }) modelValue!: string | number;

		private value: string | number = '';
		private isActive = false;

		@Watch('modelValue')
		onModelValueChanged(val: string | number, oldVal: string | number) {
			if (val === oldVal) return;
			this.value = val;
		}

		// get otherOptions(): string[] {
		// 	return this.options.filter(el => el !== this.value);
		// }

		created() {
			if (this.empty) {
				this.value = '';
			} else if (this.modelValue) {
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

		handleCurrentClick() {
			this.$refs.current.classList.toggle('active');
			this.isActive = !this.isActive;
		}

		changeCurrent(el: string | number) {
			this.value = el;
			this.$emit('select', this.value);
		}

		get listClasses() {
			return {
				select__items: true,
				active: this.isActive,
			};
		}
	}
</script>

<style scoped lang="scss">
	@import '@/scss/colors.scss';

	.select {
		position: relative;
		// width: inherit;
		width: 100%;
		// height: inherit;
		cursor: pointer;
	}

	.select__text {
		display: flex;
		align-items: center;
		color: #333;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	.select__current {
		position: relative;
		padding: 3px 27px 3px 16px;
		line-height: 24px;
		vertical-align: top;
		border: 1px solid $gray-lighten;
		border-radius: 2px;

		&:hover {
			background-color: rgba(0, 0, 0, 2.5%);
		}
	}

	.select__current__icon {
		position: absolute;
		top: 50%;
		right: 13px;
		width: 8px;
		height: 5px;
		transform: translateY(-50%);
	}

	.select__items {
		position: absolute;
		top: 40px;
		left: 0;
		display: none;
		width: 100%;
		z-index: 100;
		max-height: 200px;
		overflow: auto;

		background: #ffffff;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
		border-radius: 4px;

		&.active {
			display: block;
		}
	}

	.select__item {
		// height: 40px;
		// width: inherit;
		padding: 3px 27px 3px 16px;
		line-height: 24px;
		background-color: #ffffff;
		border-radius: 0;
		border-top: none;

		&:last-child {
			border-radius: 0 0 5px 5px;
		}

		&:hover {
			background-color: darken(#ffffff, 2.5%);
		}
	}
</style>

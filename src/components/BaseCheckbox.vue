<template>
  <label class="checkbox-wrapper">
    <input type="checkbox" class="checkbox" :value="checked" />
    <span class="checkmark" />
  </label>
</template>

<script lang="ts">
	import { Component, Vue, Model } from 'vue-property-decorator';

	@Component
	export default class BaseCheckbox extends Vue {
		@Model('input', { type: Boolean }) checked!: boolean;
	}
</script>

<style scoped lang="scss">
	@import '@/scss/colors.scss';

	.checkbox-wrapper {
		display: inline-block;
		position: relative;
		cursor: pointer;
		height: 14px;
		width: 14px;
	}

	.checkbox {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}

	.checkmark {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: inherit;
		width: inherit;
		background-color: #ffffff;
		border: 2px solid $cloud-darken;
		border-radius: 2px;
		// transition: all .2s ease-out;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}

	/* When the checkbox is checked, add a blue background */
	.checkbox:checked ~ .checkmark {
    background-color: $green;
    border-color: $green;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.checkbox:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.checkmark:after {
		left: 2px;
		top: 0px;
		width: 4px;
		height: 6px;
		border: solid #ffffff;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
</style>

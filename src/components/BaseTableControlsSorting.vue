<template>
  <div class="sorting-options">
    <span class="sorting-options__mode">Sorting by:</span>
    <ul class="sorting-options__list">
      <li class="sorting-options__item" v-for="(item, idx) in columns" :key="idx">
        <BaseButton :flat="idx !== 0" color="green">{{item}}</BaseButton>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import BaseButton from './BaseButton.vue';

	@Component({
		components: {
			BaseButton,
		},
	})
	export default class BaseTableControlsSorting extends Vue {
		@Prop({ type: Array, required: false, default: () => [] }) columns!: string[];
	}
</script>

<style scoped lang="scss">
	@import '@/scss/colors.scss';
	@import '@/scss/_unselectable.scss';

	.sorting-options {
		display: flex;
		align-items: center;
		margin: 20px 0;
	}

	.sorting-options__mode {
		font-weight: 600;
	}

	.sorting-options__list {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	.sorting-options__item {
		@include unselectable;

		// color: $black;
		list-style: none;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	.sorting-options__mode,
	.sorting-options__item {
		margin-right: 1rem;
		line-height: 24px;
	}
</style>

<template>
  <div class="sorting-options">
    <span class="sorting-options__mode">Sorting by:</span>
    <ul class="sorting-options__list">
      <li class="sorting-options__item" v-for="(item, idx) in sortingOptions" :key="idx">{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	export default class BaseTableControlsSorting extends Vue {
		private readonly sortingOptions = [
			'Product (100g serving)',
			'Calories',
			'Fat (g)',
			'Carbs (g)',
			'Protein (g)',
			'Iron (%)',
		];
	}
</script>

<style scoped lang="scss">
	@import '@/scss/_unselectable.scss';

	.sorting-options {
		display: flex;
		margin: 20px 0;
	}

	.sorting-options__mode {
		font-weight: 600;
	}

	.sorting-options__list {
		display: flex;
		margin: 0;
		padding: 0;
	}

	.sorting-options__item {
    @include unselectable;

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

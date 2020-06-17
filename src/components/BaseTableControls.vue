<template>
  <div class="table__controls">
    <BaseTableControlsSorting class="table__control" />
    <BaseButton :disabled="true" class="table__control">Delete</BaseButton>
    <BaseSelect :options="[10, 15, 20]" class="table__control" />
    <BaseTableControlsPagination class="table__control"/>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
  import BaseTableControlsSorting from './BaseTableControlsSorting.vue';
  import BaseTableControlsPagination from "./BaseTableControlsPagination.vue";
	import BaseButton from './BaseButton.vue';
	import BaseSelect from './BaseSelect.vue';

	@Component({
		components: {
      BaseTableControlsSorting,
      BaseTableControlsPagination,
			BaseButton,
			BaseSelect,
		},
	})
	export default class BaseTableControls extends Vue {}
</script>

<style scoped lang="scss">
	.table__controls {
		display: flex;
		align-items: center;
	}

	.table__control {
		display: flex;

		&:first-child {
			margin-right: auto;
		}

		&:not(:first-child) {
			margin-left: 16px;
		}
	}
</style>

<template>
  <div class="table__controls">
    <BaseTableControlsSorting :columns="columns" class="table__control" />

    <BaseButton :disabled="true" color="green" class="table__control">Delete</BaseButton>

    <BaseSelect :options="['10 Per Page', '15 Per Page', '20 Per Page']" class="table__control" />

    <BaseTableControlsPagination class="table__control" />

    <BaseSelectMultiple :options="columns" class="table__control" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import BaseTableControlsSorting from './BaseTableControlsSorting.vue';
	import BaseTableControlsPagination from './BaseTableControlsPagination.vue';
	import BaseButton from './BaseButton.vue';
	import BaseSelect from './BaseSelect.vue';
	import BaseSelectMultiple from './BaseSelectMultiple.vue';

	@Component({
		components: {
			BaseTableControlsSorting,
			BaseTableControlsPagination,
			BaseButton,
			BaseSelect,
			BaseSelectMultiple,
		},
	})
	export default class BaseTableControls extends Vue {
		@Prop({ type: Array, required: false, default: () => [] }) columns!: string[];
	}
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

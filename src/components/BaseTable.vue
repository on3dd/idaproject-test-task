<template>
  <div class="table">
    <h1 class="table__header">{{options.header}}</h1>
    <BaseDivider />
    <BaseTableControls :columns="options.columns" />
    <BaseTableInner :columns="options.columns" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import { Action } from 'vuex-class';
	import BaseDivider from './BaseDivider.vue';
	import BaseTableControls from './BaseTableControls.vue';
	import BaseTableInner from './BaseTableInner.vue';
	import { Product } from '@/@types/product';

	// eslint-disable-next-line
	type TABLE_TYPE = any;

	@Component({
		components: {
			BaseDivider,
			BaseTableControls,
			BaseTableInner,
		},
	})
	export default class BaseTable extends Vue {
		@Prop({ type: Object, required: true }) options!: TABLE_TYPE;

		@Action fetchProducts!: () => void;

		async mounted() {
			await this.fetchProducts();
		}
	}
</script>

<style scoped lang="scss">
	.table {
	}

	.table__header {
		margin: 0;
		margin-bottom: 16px;
		font-size: 32px;
		line-height: 40px;
	}
</style>

<style lang="scss">
	.table-row {
		position: relative;
		display: flex;
		align-items: center;
	}

	.table-col {
		position: relative;
		display: flex;
		margin-right: 2rem;
		flex: 0 1 175px;

		&:first-child {
			flex: 0 0 auto;
		}
	}
</style>

<template>
  <div class="table">
    <h1 class="table__header">{{options.header}}</h1>
    <BaseDivider />
    <BaseTableControls />
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import BaseDivider from '@/components/BaseDivider.vue';
	import BaseTableControls from '@/components/BaseTableControls.vue';

	type TABLE_TYPE = any;

	@Component({
		components: {
			BaseDivider,
			BaseTableControls,
		},
	})
	export default class BaseTable extends Vue {
		@Prop({ type: Object, required: true }) options!: TABLE_TYPE;
	}
</script>

<style scoped lang="scss">
	.table {
	}

	.table__header {
		margin: 0;
		margin-bottom: 16px;
	}
</style>

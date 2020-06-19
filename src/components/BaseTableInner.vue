<template>
  <div class="table-inner">
    <BaseTableInnerHead :columns="columns" />
    <BaseDivider />
    <BaseTableInnerBody />
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import BaseTableInnerHead from './BaseTableInnerHead.vue';
	import BaseTableInnerBody from './BaseTableInnerBody.vue';
	import BaseDivider from './BaseDivider.vue';

	@Component({
		components: {
			BaseTableInnerHead,
			BaseTableInnerBody,
			BaseDivider,
		},
	})
	export default class BaseTableInner extends Vue {
		@Prop({ type: Array, required: false, default: () => [] }) columns!: string[];
	}
</script>

<style scoped lang="scss">
	.table-inner {
		display: flex;
		flex-direction: column;
		background: #ffffff;
		border-radius: 4px;
	}
</style>

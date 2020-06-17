<template>
  <div class="table-head">
    <div class="table-row">
      <div class="table-col">
        <BaseCheckbox v-model="checked" />
      </div>
      <div v-for="(item, idx) in columns" :key="idx" class="table-col">
        <span class="table-col__title">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import BaseCheckbox from './BaseCheckbox.vue';

	@Component({
		components: {
			BaseCheckbox,
		},
	})
	export default class BaseTableInnerHead extends Vue {
		private checked = false;

		private readonly columns = [
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

	.table-head {
		padding: 16px 37px;
		background-color: #ffffff;

		.table-col {
			font-weight: 600;
		}
	}

	.table-col__title {
		@include unselectable;
	}
</style>

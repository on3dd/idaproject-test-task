<template>
  <div class="pagination">
    <BaseButtonWithIconOnly icon="arrow-left" :disabled="true" />
    <span class="pagination__amount">
      <span class="bold">1-10</span> of
      <span class="bold">25</span>
    </span>
    <BaseButtonWithIconOnly icon="arrow-right" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import BaseButtonWithIconOnly from './BaseButtonWithIconOnly.vue';

	@Component({
		components: {
			BaseButtonWithIconOnly,
		},
	})
	export default class BaseTableControlsPagination extends Vue {}
</script>

<style scoped lang="scss">
	.pagination {
    display: flex;
    align-items: center;
	}

	.pagination__amount {
    margin: 0 8px;
		font-size: 1rem;
		line-height: 24px;
	}

	.bold {
		font-weight: 600;
	}
</style>

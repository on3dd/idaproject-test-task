<template>
  <div class="table-inner__body">
    <template v-for="(item, idx) in 10">
      <BaseTableInnerBodyItem :key="idx" :type="getItemType(idx)" />
    </template>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import BaseTableInnerBodyItem from './BaseTableInnerBodyItem.vue';

	@Component({
		components: {
			BaseTableInnerBodyItem,
		},
	})
	export default class BaseTableInnerBody extends Vue {
		getItemType(idx: number) {
			return (idx + 1) % 2 ? 'odd' : 'even';
		}
	}
</script>

<style lang="scss">
</style>

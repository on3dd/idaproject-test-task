<template>
  <div id="app">
    <div class="app-container">
      <BaseTable :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import BaseTable from '@/components/BaseTable.vue';

	@Component({
		components: {
			BaseTable,
		},
	})
	export default class App extends Vue {
		private readonly options = {
			header: 'Table UI',
			columns: [
				'Product (100g serving)',
				'Calories',
				'Fat (g)',
				'Carbs (g)',
				'Protein (g)',
				'Iron (%)',
			],
		};
	}
</script>

<style lang="scss">
	@import './scss/main.scss';

	.app-container {
		padding: 32px 113px 100px 113px;
	}
</style>

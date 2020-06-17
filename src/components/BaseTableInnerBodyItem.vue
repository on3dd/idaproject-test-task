<template>
  <div :class="itemClasses">
    <div class="table-row">
      <div class="table-col">
        <BaseCheckbox v-model="checked" />
      </div>
      <div v-for="(item, idx) in values" :key="idx" class="table-col">
        <span class="table-col__value">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import BaseCheckbox from './BaseCheckbox.vue';

	@Component({
		components: {
			BaseCheckbox,
		},
	})
	export default class BaseTableInnerBodyItem extends Vue {
		@Prop({ type: String, required: true }) type!: string;

		private checked = false;
		private values = ['I Hate Niggers', 125, 224, 486, 696, 536];

		get itemClasses() {
			return {
				'table-item': true,
				[this.type]: this.type,
			};
		}
	}
</script>

<style scoped lang="scss">
	// @import '@/scss/colors.scss';

	.table-item {
    padding: 13px 37px;
    cursor: pointer;
		// transition: all 0.1s ease-out;

		&.odd {
			background-color: #ffffff;

			&:hover {
				background-color: darken(#ffffff, 5%);
			}
		}

		&.even {
			background-color: #f8f9fa;

			&:hover {
				background-color: darken(#f8f9fa, 5%);
			}
		}
	}
</style>

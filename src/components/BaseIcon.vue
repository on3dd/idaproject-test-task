<template>
  <img :src="imageUrl" alt="Icon" @click="handleClick" class="icon" />
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';

	@Component
	export default class BaseIcon extends Vue {
		@Prop({ type: String, required: true }) name!: string;

		get imageUrl(): string {
			const images = require.context('@/assets/images/icons', false, /\.svg$/);
			return images(`./${this.name}.svg`);
			// return `@/assets/images/icons/${this.name}.svg`;
		}

		handleClick(evt: MouseEvent) {
			this.$emit('click', evt);
		}
	}
</script>

<style scoped lang="scss">
</style>

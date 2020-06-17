import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) disabled!: boolean;
}

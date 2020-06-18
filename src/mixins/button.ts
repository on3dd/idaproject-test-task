import { Component, Vue, Prop } from 'vue-property-decorator';

type ButtonColor = 'green' | '';
@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, required: false, default: false }) flat!: boolean;
  @Prop({ type: String, required: false, default: '' }) color!: ButtonColor;

  get buttonClasses() {
    return {
      button: true,
      flat: this.flat,
      [this.color]: this.color,
    };
  }
}

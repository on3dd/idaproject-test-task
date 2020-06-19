import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Select extends Vue {
  $refs!: {
    current: HTMLDivElement;
  };

  @Prop({ type: Array, required: false, default: () => [] }) options!: string[];

  protected isActive = false;

  protected get listClasses() {
    return {
      select__items: true,
      active: this.isActive,
    };
  }

  protected handleCurrentClick() {
    this.$refs.current.classList.toggle('active');
    this.isActive = !this.isActive;
  }
}

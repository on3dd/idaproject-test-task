export interface IProduct {
  id: number;
  product: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: number;
}

interface ProductConstructorOptions {
  id?: number;
  product?: string;
  calories?: number;
  fat?: number;
  carbs?: number;
  protein?: number;
  iron?: number;
}

export class Product implements IProduct {
  id: number;
  product: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  iron: number;

  constructor(options: ProductConstructorOptions) {
    this.id = options.id || 0;
    this.product = options.product || '';
    this.calories = options.calories || 0;
    this.fat = options.fat || 0;
    this.carbs = options.carbs || 0;
    this.protein = options.protein || 0;
    this.iron = options.iron || 0;
  }
}

import { Commit } from 'vuex';
import { getProducts, deleteProducts } from '@/api/request';
import { Product } from '@/@types/product';

class ProductsState {
  products: Product[];

  constructor() {
    this.products = [];
  }
}

export default {
  state: new ProductsState(),

  actions: {
    async fetchProducts({ commit }: { commit: Commit }) {
      try {
        const products = await getProducts();
        commit('updateProducts', products);
      } catch (err) {
        console.error('Cannot fetch data:', err);
      }
    },

    async deleteProducts() {
      try {
        const response = await deleteProducts();
        console.log('response', response);
      } catch (err) {
        console.error('Cannot delete products:', err);
      }
    },
  },

  mutations: {
    updateProducts(state: ProductsState, products: Product[]) {
      state.products = products;
      console.log('products', state.products);
    },
  },

  getters: {
    products: (state: ProductsState) => state.products,
  },
};

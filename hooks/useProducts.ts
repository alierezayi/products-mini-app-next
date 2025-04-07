import type { Product } from "@/types/product";
import { create } from "zustand";
import products from "@/data/products.json";

type Store = {
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  setSearchQuery: (term: string) => void;
  search: () => void;
};

const useProducts = create<Store>()((set) => ({
  products,
  filteredProducts: products,
  searchQuery: "",
  setSearchQuery: (term: string) => set({ searchQuery: term }),
  search: () =>
    set((state) => ({
      filteredProducts:
        state.searchQuery.trim() === ""
          ? state.products
          : state.products.filter(
              (product) =>
                product.title
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase()) ||
                product.description
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase()) ||
                product.category
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
            ),
    })),
}));

export default useProducts;

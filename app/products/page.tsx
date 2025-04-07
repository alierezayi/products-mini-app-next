import FilterBar from "@/components/modules/products/filterbar";
import Header from "@/components/modules/products/header";
import List from "@/components/modules/products/list";
import Searchbar from "@/components/modules/products/searchbar";

export default function ProductsPage() {
  return (
    <div className="bg-white h-full space-y-3.5">
      <Header title="لیست محصولات" />
      <Searchbar />
      <FilterBar />
      <List />
    </div>
  );
}

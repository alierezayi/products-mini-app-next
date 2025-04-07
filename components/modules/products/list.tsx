import { Product } from "@/types/product";
import Item from "./item";

interface Props {
  products: Product[];
}

export default function List({ products }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {products.map((product, i) => (
        <Item key={i} product={product} />
      ))}
    </div>
  );
}

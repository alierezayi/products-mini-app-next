import { Product } from "@/types/product";
import Card from "./card";

interface Props {
  products: Product[];
}

export default function List({ products }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {products.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
}

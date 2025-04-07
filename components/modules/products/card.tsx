import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <div className="border p-2 rounded-md flex gap-2 relative">
      <Heart className="absolute top-2 left-2 size-3.5" />
      <div className="aspect-4/3 w-[60px] rounded bg-secondary" />
      <div className="flex-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xs truncate max-w-24 font-bold">
            {product.title}
          </h3>
        </Link>
        <p className="text-[10px] text-gray-500">{product.category}</p>
        <div className="flex items-center justify-end gap-2 mt-1">
          <p className="text-[9px] text-green-700 font-bold">
            {product.price.toLocaleString()} تومان
          </p>
        </div>
      </div>
    </div>
  );
}

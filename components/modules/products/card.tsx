import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <div key={product.id} className="border p-2 rounded-md flex gap-2 relative">
      <Heart className="absolute top-2 left-2 size-3.5" />
      <div className="aspect-4/3 w-[60px] rounded bg-secondary" />
      <div className="flex-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xs truncate max-w-24 font-bold">
            {product.title}
          </h3>
        </Link>
        <p className="text-[10px] text-gray-500">{product.category}</p>
        <div className="flex items-center justify-end gap-2">
          <p className="text-[9px] text-green-700 font-bold mt-1">
            {product.price.toLocaleString()} تومان
          </p>
          {/* <Link href={`/products/${product.id}`}>
            <ChevronLeft className="size-3.5 text-muted-foreground -mb-1" />{" "}
          </Link> */}
        </div>
      </div>
    </div>
  );
}

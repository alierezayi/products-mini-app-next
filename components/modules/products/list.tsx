"use client";

import { useEffect } from "react";
import useProducts from "@/hooks/useProducts";
import Card from "./card";
import NotFound from "./not-found";

export default function List() {
  const { filteredProducts, searchQuery, search } = useProducts();

  useEffect(() => {
    search();
  }, [searchQuery, search]);

  if (!filteredProducts.length) return <NotFound />;

  return (
    <div className="flex flex-col gap-2">
      {filteredProducts.map((product, index) => (
        <Card key={product.id || index} product={product} />
      ))}
    </div>
  );
}

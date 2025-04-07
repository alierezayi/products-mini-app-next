"use client";

import useProducts from "@/hooks/useProducts";
import Card from "./card";
import { useEffect } from "react";
import NotFound from "./not-found";

export default function List() {
  const { filteredProducts, searchQuery, search } = useProducts();

  useEffect(() => {
    search();
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-2">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, i) => <Card key={i} product={product} />)
      ) : (
        <NotFound />
      )}
    </div>
  );
}

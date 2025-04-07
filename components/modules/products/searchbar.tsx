"use client";

import { Input } from "@/components/ui/input";
import useProducts from "@/hooks/useProducts";
import { Search } from "lucide-react";

export default function Searchbar() {
  const { searchQuery, setSearchQuery } = useProducts();

  return (
    <div className="relative">
      <Input
        placeholder="جستجو..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-2.5 inset-y-2.5 size-4" />
    </div>
  );
}

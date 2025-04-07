import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function Searchbar() {
  return (
    <div className="relative">
      <Input className="" />
      <Search className="absolute left-2.5 inset-y-2.5 size-4" />
    </div>
  );
}

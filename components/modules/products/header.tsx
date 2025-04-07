"use client";

import { ChevronLeft, List } from "lucide-react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="rounded-full size-8 flex justify-center items-center bg-secondary ml-1">
          <List className="size-5" />
        </span>
        <h2 className="text-base font-bold">{title || "لیست محصولات"}</h2>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="size-8 rounded-full"
        onClick={() => router.back()}
      >
        <ChevronLeft />
      </Button>
    </div>
  );
}

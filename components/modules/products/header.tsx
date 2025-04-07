"use client";

import { ChevronLeft, List } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  title?: string;
}

export default function Header({ title = "لیست محصولات" }: Props) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="bg-secondary rounded-full size-8 flex items-center justify-center">
          <List className="size-5" />
        </span>
        <h2 className="text-base font-bold">{title}</h2>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="size-8 rounded-full"
        onClick={() => router.back()}
      >
        <ChevronLeft className="size-4" />
      </Button>
    </div>
  );
}

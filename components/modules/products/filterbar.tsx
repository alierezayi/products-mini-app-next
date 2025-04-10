import { Badge } from "@/components/ui/badge";
import { Funnel } from "lucide-react";

export default function FilterBar() {
  const filters = ["مرحله ساخت", "محله", "متزاژ سازه", "قیمت"];

  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-2">
        <Funnel className="size-3.5" />
        <span>فیلتر ها</span>
      </div>
      <div className="flex-1 flex overflow-auto custom-scrollbar gap-1">
        {filters.map((filter, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="border border-foreground/30 whitespace-nowrap"
          >
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  );
}

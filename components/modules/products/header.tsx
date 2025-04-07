import { ChevronLeft, List } from "lucide-react";
import { Button } from "../../ui/button";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="rounded-full size-8 flex justify-center items-center bg-secondary ml-1">
          <List className="size-5" />
        </span>
        <h2 className="text-base font-bold">لیست سازه ها</h2>
      </div>
      <Button variant="outline" size="icon" className="size-8 rounded-full">
        <ChevronLeft />
      </Button>
    </div>
  );
}

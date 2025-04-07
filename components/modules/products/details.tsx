import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/product";
import { Star } from "lucide-react";

interface Props {
  product: Product;
}

export default function Details({ product }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square w-full rounded-lg border bg-secondary" />
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((_, i) => (
              <div
                key={i}
                className="cursor-pointer overflow-hidden rounded-md border aspect-square bg-secondary"
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <section>
        <header className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">{product.category}</Badge>
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews.length} نظر)
              </span>
            </div>
          </div>
          <h1 className="text-lg font-bold">{product.title}</h1>
          <p className="text-muted-foreground mt-2">{product.description}</p>
        </header>

        <div className="mb-6 space-y-2">
          <p className="text-xl font-bold text-green-700">
            {product.price.toLocaleString()} تومان
          </p>
          <Badge
            variant={product.inStock ? "default" : "destructive"}
            className="text-xs"
          >
            {product.inStock ? "موجود در انبار" : "ناموجود"}
          </Badge>
        </div>

        <Separator className="my-6" />

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">ویژگی‌ها</h2>
          <ul className="grid grid-cols-1 gap-2">
            {Object.entries(product.features).map(([key, value]) => (
              <li key={key} className="flex">
                <span className="font-medium ml-2">{key}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <Separator className="my-6" />

      {/* Reviews */}
      <section>
        <h2 className="text-xl font-bold mb-4">نظرات کاربران</h2>
        {product.reviews.length > 0 ? (
          <ul className="space-y-4">
            {product.reviews.map((review, index) => (
              <li key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rate
                            ? "fill-amber-400 text-amber-400"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm">{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">هنوز نظری ثبت نشده است.</p>
        )}
      </section>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/product";
import { Star } from "lucide-react";

interface Props {
  product: Product;
}

export default function Details({ product }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-8">
        {/* Product Images */}
        <div>
          <div className="sticky top-24 space-y-4">
            <div className="aspect-square w-full rounded-lg border bg-secondary" />
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, i) => (
                  <div
                    key={i}
                    className="cursor-pointer overflow-hidden rounded-md border aspect-square bg-secondary"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="order-2 md:order-2">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline">{product.category}</Badge>
              <div className="flex items-center">
                <Star className="size-4 fill-amber-400 text-amber-400 ml-1" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground text-sm mr-1">
                  ({product.reviews.length} نظر)
                </span>
              </div>
            </div>
            <h1 className="text-lg font-bold">{product.title}</h1>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>

          <div className="mb-6">
            <div className="text-xl font-bold text-green-700">
              {product.price.toLocaleString()} تومان
            </div>
            <div className="flex items-center mt-2">
              <Badge
                variant={product.inStock ? "default" : "destructive"}
                className="text-xs"
              >
                {product.inStock ? "موجود در انبار" : "ناموجود"}
              </Badge>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">ویژگی‌ها</h2>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(product.features).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="font-medium ml-2">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Reviews */}
      <div>
        <h2 className="text-xl font-bold mb-4">نظرات کاربران</h2>
        {product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
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
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">هنوز نظری ثبت نشده است.</p>
        )}
      </div>
    </div>
  );
}

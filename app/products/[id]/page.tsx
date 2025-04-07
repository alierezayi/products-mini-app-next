import Details from "@/components/modules/products/details";
import Header from "@/components/modules/products/header";
import NotFound from "@/components/modules/products/not-found";
import products from "@/data/products.json";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <NotFound />;

  return (
    <div className="space-y-3.5">
      <Header title="جزییات محصول" />
      <Details product={product} />
    </div>
  );
}

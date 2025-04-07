import MobileMockup from "@/components/templates/mobile-mockup";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex justify-center items-center p-1.5">
      <MobileMockup>{children}</MobileMockup>
    </div>
  );
}

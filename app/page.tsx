// path: app/page.tsx
import ProductList from "@/components/ProductList";
// import Cart from "@/components/Cart";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import Jewelries from "@/components/Jewelries";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Fixed Top Bar */}
      <TopBar />

      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* Store Content */}
      <div className="p-6">
        {/* Jewelries Section */}
        <Jewelries />

        {/* Product List Section */}
        <div className="mt-6">
          <div className="md:col-span-2">
            <ProductList />
          </div>
          {/* <div>
            <Cart />
          </div> */}
        </div>
      </div>
    </main>
  );
}

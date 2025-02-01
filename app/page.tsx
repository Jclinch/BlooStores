// path: app/page.tsx
import ProductList from "@/components/ProductList";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import Jewelries from "@/components/Jewelries";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <TopBar />

      <div>
        <HeroSection />
      </div>

      <div className="p-6">
        <Jewelries />

        <div className="mt-6">
          <div className="md:col-span-2">
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
}

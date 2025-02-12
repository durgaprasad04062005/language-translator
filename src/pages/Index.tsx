
import { TranslationPanel } from "@/components/TranslationPanel";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 pt-24 pb-8">
        <TranslationPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

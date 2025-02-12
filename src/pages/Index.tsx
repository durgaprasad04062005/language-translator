
import { TranslationPanel } from "@/components/TranslationPanel";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-8">
        <TranslationPanel />
      </div>
    </>
  );
};

export default Index;

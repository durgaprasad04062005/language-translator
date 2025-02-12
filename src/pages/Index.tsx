
import { TranslationPanel } from "@/components/TranslationPanel";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen bg-cover bg-center pt-24 pb-8"
        style={{
          backgroundImage: "url('/lovable-uploads/291605f9-2a6e-4cb7-aebe-b0db15a64554.png')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        }}
      >
        <TranslationPanel />
      </div>
    </>
  );
};

export default Index;

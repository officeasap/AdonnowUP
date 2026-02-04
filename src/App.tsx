// @/App.tsx - Updated with GlobalFooter and FloatingChat
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileMenu from "@/components/MobileMenu";
import DesktopCommandBar from "./components/DesktopCommandBar";
import GlobalFooter from "./components/GlobalFooter";
import FloatingChat from "./components/chat/FloatingChat"; // IMPORT FLOATING CHAT

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import OurVision from "./pages/OurVision";
import Expertise from "./pages/Expertise";
import Minerals from "./pages/Minerals";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Logistics from "./pages/Logistics";
import Certification from "./pages/Certification";

// Mineral pages
import Smelting from "./pages/minerals/Smelting";
import Tanzanite from "./pages/minerals/Tanzanite";
import GoldNuggets from "./pages/minerals/GoldNuggets";
import GoldBars from "./pages/minerals/GoldBars";
import CopperCathold from "./pages/minerals/CopperCathold";
import Coltan from "./pages/minerals/Coltan";
import Vault from "./pages/minerals/Vault";
import CommunityDevelopment from "./pages/minerals/CommunityDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        {/* LOGO FRAME (Updated from floating logo) */}
        <div className="fixed top-4 left-4 z-50 md:hidden pointer-events-auto">
          <div className="w-32 h-12 bg-canvas border-2 border-border shadow-permanent flex items-center justify-center">
            <img
              src="/images/LogoAdonnowOfficial.png"
              alt="Adonnow Trading Limited"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>

        <DesktopCommandBar />
        <MobileMenu />

        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/minerals" element={<Minerals />} />
            <Route path="/minerals/smelting" element={<Smelting />} />
            <Route path="/minerals/tanzanite" element={<Tanzanite />} />
            <Route path="/minerals/gold-bars" element={<GoldBars />} />
            <Route path="/minerals/gold-nuggets" element={<GoldNuggets />} />
            <Route path="/minerals/copper-cathold" element={<CopperCathold />} />
            <Route path="/minerals/coltan" element={<Coltan />} />
            <Route path="/minerals/vault" element={<Vault />} />
            <Route path="/minerals/community-development" element={<CommunityDevelopment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* GLOBAL FOOTER */}
        <GlobalFooter />
        
        {/* SOVEREIGN FLOATING CHAT */}
        <FloatingChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import QuickStats from "@/components/QuickStats";
import SellerChallenge from "@/components/SellerChallenge";
import ProcessMethod from "@/components/ProcessMethod";
import SuccessMetrics from "@/components/SuccessMetrics";
import PropertySnapshot from "@/components/PropertySnapshot";
import ClientFeedback from "@/components/ClientFeedback";
import MarketInsight from "@/components/MarketInsight";
import CredibilityRow from "@/components/CredibilityRow";
import FAQ from "@/components/FAQ";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Update meta title and description for SEO
  useEffect(() => {
    document.title = "Edmond Medical Office Sold in 23 Days | Trio CRE";
    
    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "See how Trio CRE closed a single-tenant Mercy Health clinic at a 7.3% cap in just 23 days. Download the playbook and request your valuation.");
    } else {
      const newMetaDesc = document.createElement("meta");
      newMetaDesc.setAttribute("name", "description");
      newMetaDesc.setAttribute("content", "See how Trio CRE closed a single-tenant Mercy Health clinic at a 7.3% cap in just 23 days. Download the playbook and request your valuation.");
      document.head.appendChild(newMetaDesc);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroBanner />
      <QuickStats />
      <SellerChallenge />
      <ProcessMethod />
      <SuccessMetrics />
      <PropertySnapshot />
      <ClientFeedback />
      <MarketInsight />
      <CredibilityRow />
      <FAQ />
      <CTAForm />
      <Footer />
    </div>
  );
};

export default Index;

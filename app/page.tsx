import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Pricing } from "@/components/pricing";
import { Products } from "@/components/products";
import { Security } from "@/components/security";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Security />
        <Pricing />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}

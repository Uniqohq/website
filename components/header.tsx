import Image from "next/image";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#security" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "Manifesto", href: "#manifesto" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.png" alt="Uniqo" width={68} height={18} priority className="h-auto w-[68px]" />
        </a>
        <nav className="hidden items-center gap-12 text-[12px] font-bold text-black md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-[8px] bg-black px-7 py-3 text-[12px] font-bold text-white transition-transform duration-500 hover:-translate-y-0.5"
        >
          Get your card
        </a>
      </div>
    </header>
  );
}

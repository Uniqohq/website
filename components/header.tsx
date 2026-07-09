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
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(236,236,238,0.82)] backdrop-blur-[18px]">
      <div className="container flex h-[96px] items-center justify-between">
        <a href="/" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} priority className="h-auto w-[102px]" />
        </a>
        <nav className="hidden items-center gap-[66px] text-[17.681px] font-medium leading-[1.102] text-black md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/waitlist"
          className="burst-hover flex h-[52.759px] w-[163.655px] items-center justify-center rounded-[11px] bg-black text-[17.681px] font-medium leading-[1.102] text-white"
        >
          Get your card
        </a>
      </div>
    </header>
  );
}

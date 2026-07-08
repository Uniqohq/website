import { Instagram, Linkedin, Music2, Send, X } from "lucide-react";

const footerColumns = [
  {
    title: "PRODUCTS",
    links: ["Uniqo Card", "For Personal Use", "For Business", "Pricing", "Compare Plans"]
  },
  {
    title: "COMPANY",
    links: ["Our Manifesto", "About Us", "Careers", "Press Kit", "Contact"]
  },
  {
    title: "RESOURCES",
    links: ["Help centre", "Security", "Terms of Service", "Privacy Policy", "Cookie Policy"]
  }
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.15fr_2fr]">
        <div>
          <div className="text-[28px] font-extrabold leading-none">uniqo</div>
          <p className="mt-12 max-w-[270px] text-[14px] font-semibold leading-[1.18] text-[#8e8e93]">
            A financial technology company reimagining how the world pays. Smarter, safer, and designed for total control.
          </p>
          <button type="button" className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#27272a] px-3 py-2 text-[11px] font-bold text-white">
            <span className="h-4 w-4 rounded-full bg-[#d44f61]" />
            United States
          </button>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-extrabold text-[#5d5d62]">{column.title}</h3>
              <ul className="mt-8 grid gap-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-bold text-[#b7b7bb]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#17171a]">
        <div className="container flex flex-col gap-6 py-7 text-[12px] font-semibold text-[#77777d] md:flex-row md:items-center md:justify-between">
          <span>© 2026 FrameLabs LLC. All rights reserved.</span>
          <div className="flex items-center gap-6 text-[#9b9ba0]">
            <a href="#" aria-label="TikTok">
              <Music2 size={17} />
            </a>
            <a href="#" aria-label="X">
              <X size={17} />
            </a>
            <a href="#" aria-label="Telegram">
              <Send size={17} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

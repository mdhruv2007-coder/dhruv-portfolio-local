/**
 * Vector Telemetry Atlas: the header works as a precise, compact navigation control bar.
 */
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/portfolio";
import BrandMark from "./BrandMark";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`} aria-label="Mobile navigation">
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu}>
          <span>06</span>
          Contact
        </a>
      </nav>
    </header>
  );
}

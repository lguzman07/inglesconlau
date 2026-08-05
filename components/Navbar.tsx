import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image
          src="/logo.png"
          alt="Inglés Con Lau"
          width={60}
          height={60}
          priority
        />

        <span>Inglés Con Lau</span>
      </div>

      <div className="nav-links">
        <a href="#methodology">Metodología</a>
        <a href="#why">¿Por qué nosotros?</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#faq">FAQ</a>
      </div>
    </nav>
  );
}
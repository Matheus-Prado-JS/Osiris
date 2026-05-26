import Link from "next/link";
import Image from "next/image";
import MouseGlow from "../components/MouseGlow";

import "../styles/home.css";

export default function Home() {
  return (
    <main className="home-container">
      <MouseGlow />
      <div className="background-glow"></div>

      <div className="content">

        <Image
          src="/osiris-logo.png"
          alt="OSIRIS Logo"
          width={420}
          height={420} 
          className="logo"
          priority
        />

        <Link href="/auth">
          <button className="start-button">
            Get Start
          </button>
        </Link>

      </div>

    </main>
  );
}
"use client";

import Image from "next/image";

interface ThemeSelectorProps {

  selectedTheme: string;

  setSelectedTheme: (
    value: string
  ) => void;
}

export default function ThemeSelector({

  selectedTheme,
  setSelectedTheme

}: ThemeSelectorProps) {

  return (

    <div className="theme-grid">

      <button
        className={`theme-preview ${
          selectedTheme === "cyan"
            ? "active-theme"
            : ""
        }`}

        onClick={() =>
          setSelectedTheme("cyan")
        }
      >

        <Image
          src="/cyan-layout.png"
          alt="Cyan"
          width={260}
          height={150}
          className="theme-image"
        />

        <span className="theme-label">
          Cyan
        </span>

      </button>

      <button
        className={`theme-preview ${
          selectedTheme === "crimson"
            ? "active-theme"
            : ""
        }`}

        onClick={() =>
          setSelectedTheme("crimson")
        }
      >

        <Image
          src="/crimson-layout.png"
          alt="Crimson"
          width={260}
          height={150}
          className="theme-image"
        />

        <span className="theme-label">
          Crimson
        </span>

      </button>

      <button
        className={`theme-preview ${
          selectedTheme === "emerald"
            ? "active-theme"
            : ""
        }`}

        onClick={() =>
          setSelectedTheme("emerald")
        }
      >

        <Image
          src="/emerald-layout.png"
          alt="Emerald"
          width={260}
          height={150}
          className="theme-image"
        />

        <span className="theme-label">
          Emerald
        </span>

      </button>

      <button
        className={`theme-preview ${
          selectedTheme === "gold"
            ? "active-theme"
            : ""
        }`}

        onClick={() =>
          setSelectedTheme("gold")
        }
      >

        <Image
          src="/gold-layout.png"
          alt="Gold"
          width={260}
          height={150}
          className="theme-image"
        />

        <span className="theme-label">
          Gold
        </span>

      </button>

    </div>
  );
}
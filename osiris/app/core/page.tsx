"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MouseGlow from "../../components/MouseGlow";

import "../../styles/core.css";

export default function CorePage() {

  // ESTADO DA SIDEBAR
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [selectedMode, setSelectedMode] =
useState("");

const [selectedTheme, setSelectedTheme] =
useState("");

const [showSetup, setShowSetup] =
useState(true);
useEffect(() => {

  const root = document.documentElement;

  if (selectedTheme === "cyan") {

    root.style.setProperty(
      "--logo-filter",
      "brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(7492%) hue-rotate(122deg) brightness(105%) contrast(101%)"
    );

    root.style.setProperty(
      "--primary-color",
      "#00ffff"
    );

    root.style.setProperty(
      "--primary-rgb",
      "0,255,255"
    );

    root.style.setProperty(
      "--background-main",
      "#020617"
    );

    root.style.setProperty(
      "--background-secondary",
      "#0f172a"
    );
  }

  if (selectedTheme === "crimson") {

    root.style.setProperty(
      "--logo-filter",
      "brightness(0) saturate(100%) invert(33%) sepia(94%) saturate(7495%) hue-rotate(344deg) brightness(101%) contrast(101%)"
    );

    root.style.setProperty(
      "--primary-color",
      "#ff3b3b"
    );

    root.style.setProperty(
      "--primary-rgb",
      "255,59,59"
    );

    root.style.setProperty(
      "--background-main",
      "#140404"
    );

    root.style.setProperty(
      "--background-secondary",
      "#220909"
    );
  }

  if (selectedTheme === "emerald") {

    root.style.setProperty(
      "--logo-filter",
      "brightness(0) saturate(100%) invert(72%) sepia(63%) saturate(748%) hue-rotate(103deg) brightness(101%) contrast(101%)"
    );

    root.style.setProperty(
      "--primary-color",
      "#00ff9d"
    );

    root.style.setProperty(
      "--primary-rgb",
      "0,255,157"
    );

    root.style.setProperty(
      "--background-main",
      "#02110c"
    );

    root.style.setProperty(
      "--background-secondary",
      "#052017"
    );
  }

  if (selectedTheme === "gold") {

    root.style.setProperty(
      "--logo-filter",
      "brightness(0) saturate(100%) invert(84%) sepia(57%) saturate(749%) hue-rotate(359deg) brightness(102%) contrast(101%)"
    );

    root.style.setProperty(
      "--primary-color",
      "#ffd700"
    );

    root.style.setProperty(
      "--primary-rgb",
      "255,215,0"
    );

    root.style.setProperty(
      "--background-main",
      "#161102"
    );

    root.style.setProperty(
      "--background-secondary",
      "#241b04"
    );
  }

}, [selectedTheme]);

  return (

    // CONTAINER PRINCIPAL
    <main className="core-container">
        <MouseGlow />

        {showSetup && (

<div className="setup-overlay">

  <div className="setup-card">

    {!selectedMode && (

      <>

        <h2 className="setup-title">
          Como pretende usar o OSIRIS?
        </h2>

        <div className="setup-grid">

          <div className="locked-card">
            Hospitalar 🔒
          </div>

          <div className="locked-card">
            Financeiro Pessoal 🔒
          </div>

          <div className="locked-card">
            Videomaker 🔒
          </div>

          <div className="locked-card">
            Varejista 🔒
          </div>

          <button
            className="setup-option"

            onClick={() =>
              setSelectedMode("autonomo")
            }
          >
            Autônomo
          </button>

        </div>

      </>

    )}

    {selectedMode && (

      <>

        <h2 className="setup-title">
          Defina sua experiência visual
        </h2>

<div className="theme-grid">

  <button
    className={`theme-preview ${
      selectedTheme === "cyan" ? "active-theme" : ""
    }`}
    onClick={() => setSelectedTheme("cyan")}
  >
<img
  src="/cyan-layout.png"
  alt="Cyan"
  className="theme-image"
/>

    <span className="theme-label">
      Cyan
    </span>
  </button>

  <button
    className={`theme-preview ${
      selectedTheme === "crimson" ? "active-theme" : ""
    }`}
    onClick={() => setSelectedTheme("crimson")}
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
      selectedTheme === "emerald" ? "active-theme" : ""
    }`}
    onClick={() => setSelectedTheme("emerald")}
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
      selectedTheme === "gold" ? "active-theme" : ""
    }`}
    onClick={() => setSelectedTheme("gold")}
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

{selectedTheme && (

  <button
    className="continue-button"

    onClick={() =>
      setShowSetup(false)
    }
  >
    Continuar
  </button>

)}

      </>

    )}

  </div>

</div>

)}

      {/* SIDEBAR */}

      <aside
        className="sidebar"

        style={{
          width: sidebarOpen ? "260px" : "95px"
        }}
      >

        {/* TOPO DA SIDEBAR */}

        <div className="sidebar-top">

          {/* LOGO OSIRIS */}

          <div
            className="osiris-logo-container"

            onClick={() => setSidebarOpen(!sidebarOpen)}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "scale(1.04)";

              e.currentTarget.style.filter =
                "drop-shadow(0 0 28px var(--primary-border))";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "scale(1)";

              e.currentTarget.style.filter =
                "drop-shadow(0 0 20px var(--primary-shadow))";
            }}
          >

                <Image
                src="/osiris-logo.png"
                alt="OSIRIS"
                width={sidebarOpen ? 115 : 60}
                height={sidebarOpen ? 115 : 60}
                style={{
                    width: sidebarOpen ? "115px" : "60px",
                    height: "auto",
                    filter: "var(--logo-filter)"
                }}
                priority
                />

          </div>

        </div>

        {/* MENU LATERAL */}

        <nav className="sidebar-nav">

          {/* DASHBOARD */}

          <button
            className="sidebar-button"

            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--primary-hover)";

              e.currentTarget.style.transform =
                "translateX(4px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.transform =
                "translateX(0px)";
            }}
          >

            <Image
              src="/dashboard-logo.png"
              alt="Dashboard"
              width={22}
              height={22}
                style={{
                filter: "var(--logo-filter)"
            }}
            />

            {sidebarOpen && "Dashboard"}

          </button>

          {/* PRODUTOS */}

          <button
            className="sidebar-button"

            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--primary-hover)";

              e.currentTarget.style.transform =
                "translateX(4px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.transform =
                "translateX(0px)";
            }}
          >

            <Image
              src="/produtos-logo.png"
              alt="Produtos"
              width={22}
              height={22}
                style={{
                filter: "var(--logo-filter)"
            }}
            />

            {sidebarOpen && "Produtos"}

          </button>

          {/* FINANCEIRO */}

          <button
            className="sidebar-button"

            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--primary-hover)";

              e.currentTarget.style.transform =
                "translateX(4px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.transform =
                "translateX(0px)";
            }}
          >

            <Image
              src="/financeiro-logo.png"
              alt="Financeiro"
              width={22}
              height={22}
                              style={{
                filter: "var(--logo-filter)"
            }}
            />

            {sidebarOpen && "Financeiro"}

          </button>

          {/* ANALYTICS */}

          <button
            className="sidebar-button"

            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--primary-hover)";

              e.currentTarget.style.transform =
                "translateX(4px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.transform =
                "translateX(0px)";
            }}
          >

            <Image
              src="/analytics-logo.png"
              alt="Analytics"
              width={22}
              height={22}
                              style={{
                filter: "var(--logo-filter)"
            }}
            />

            {sidebarOpen && "Analytics"}

          </button>

          {/* CONFIGURAÇÕES */}

          <button
            className="sidebar-button"

            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--primary-hover)";

              e.currentTarget.style.transform =
                "translateX(4px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.transform =
                "translateX(0px)";
            }}
          >

            <Image
              src="/configuracoes-logo.png"
              alt="Configurações"
              width={22}
              height={22}
                              style={{
                filter: "var(--logo-filter)"
            }}
            />

            {sidebarOpen && "Configurações"}

          </button>

        </nav>

      </aside>

      {/* CONTEÚDO PRINCIPAL */}

      <section className="main-content">

        {/* TÍTULO */}

        <h2 className="dashboard-title">
          Dashboard
        </h2>

        {/* SUBTÍTULO */}

        <p className="dashboard-subtitle">
          Sistema financeiro e organizacional
        </p>

        {/* GRID DOS CARDS */}

        <div className="cards-grid">

          {/* RECEITA */}

          <div className="dashboard-card">

            <h3>
              Receita Total
            </h3>

            <p className="card-number">
              R$ 0,00
            </p>

          </div>

          {/* PRODUTOS */}

          <div className="dashboard-card">

            <h3>
              Produtos
            </h3>

            <p className="card-number">
              0
            </p>

          </div>

          {/* CLIENTES */}

          <div className="dashboard-card">

            <h3>
              Clientes
            </h3>

            <p className="card-number">
              0
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
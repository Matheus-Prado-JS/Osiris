"use client";

import Image from "next/image";

interface SidebarProps {

  sidebarOpen: boolean;

  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  activePage: string;

  setActivePage: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export default function Sidebar({

  sidebarOpen,
  setSidebarOpen,
  activePage,
  setActivePage

}: SidebarProps) {

  return (

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

          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }

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
          className={`sidebar-button ${
            activePage === "dashboard"
              ? "active-sidebar-button"
              : ""
          }`}

          onClick={() =>
            setActivePage("dashboard")
          }

          onMouseEnter={(e) => {

            e.currentTarget.style.background =
              "var(--primary-hover)";

            e.currentTarget.style.transform =
              "translateX(4px)";
          }}

          onMouseLeave={(e) => {

            if (activePage !== "dashboard") {

              e.currentTarget.style.background =
                "transparent";
            }

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
          className={`sidebar-button ${
            activePage === "products"
              ? "active-sidebar-button"
              : ""
          }`}

          onClick={() =>
            setActivePage("products")
          }

          onMouseEnter={(e) => {

            e.currentTarget.style.background =
              "var(--primary-hover)";

            e.currentTarget.style.transform =
              "translateX(4px)";
          }}

          onMouseLeave={(e) => {

            if (activePage !== "products") {

              e.currentTarget.style.background =
                "transparent";
            }

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
          className={`sidebar-button ${
            activePage === "financeiro"
              ? "active-sidebar-button"
              : ""
          }`}

          onClick={() =>
            setActivePage("financeiro")
          }

          onMouseEnter={(e) => {

            e.currentTarget.style.background =
              "var(--primary-hover)";

            e.currentTarget.style.transform =
              "translateX(4px)";
          }}

          onMouseLeave={(e) => {

            if (activePage !== "financeiro") {

              e.currentTarget.style.background =
                "transparent";
            }

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
          className={`sidebar-button ${
            activePage === "analytics"
              ? "active-sidebar-button"
              : ""
          }`}

          onClick={() =>
            setActivePage("analytics")
          }

          onMouseEnter={(e) => {

            e.currentTarget.style.background =
              "var(--primary-hover)";

            e.currentTarget.style.transform =
              "translateX(4px)";
          }}

          onMouseLeave={(e) => {

            if (activePage !== "analytics") {

              e.currentTarget.style.background =
                "transparent";
            }

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
          className={`sidebar-button ${
            activePage === "settings"
              ? "active-sidebar-button"
              : ""
          }`}

          onClick={() =>
            setActivePage("settings")
          }

          onMouseEnter={(e) => {

            e.currentTarget.style.background =
              "var(--primary-hover)";

            e.currentTarget.style.transform =
              "translateX(4px)";
          }}

          onMouseLeave={(e) => {

            if (activePage !== "settings") {

              e.currentTarget.style.background =
                "transparent";
            }

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

  );
}
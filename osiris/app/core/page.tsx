"use client";

import { useState, useEffect } from "react";

import MouseGlow from "../../components/MouseGlow";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import SetupOverlay from "./components/SetupOverlay";

import "../../styles/core.css";

export default function CorePage() {

  // ESTADO SIDEBAR
  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  // PÁGINA ATIVA
  const [activePage, setActivePage] =
    useState("dashboard");

  // ESTADO SETUP
  const [selectedMode, setSelectedMode] =
    useState("");

  const [selectedTheme, setSelectedTheme] =
    useState("");

  const [showSetup, setShowSetup] =
    useState(true);

  // ALTERAÇÃO DE TEMA
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

    <main className="core-container">

      <MouseGlow />

      <SetupOverlay
        showSetup={showSetup}
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        setShowSetup={setShowSetup}
      />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}

        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* CONTEÚDO */}

      {activePage === "dashboard" && (
        <Dashboard />
      )}

      {activePage === "products" && (
        <Products />
      )}

    </main>

  );
}
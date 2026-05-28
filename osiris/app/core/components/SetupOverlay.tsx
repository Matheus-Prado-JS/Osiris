"use client";

import ThemeSelector from "./ThemeSelector";

interface SetupOverlayProps {

  showSetup: boolean;

  selectedMode: string;

  setSelectedMode: React.Dispatch<
    React.SetStateAction<string>
  >;

  selectedTheme: string;

  setSelectedTheme: React.Dispatch<
    React.SetStateAction<string>
  >;

  setShowSetup: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function SetupOverlay({

  showSetup,

  selectedMode,
  setSelectedMode,

  selectedTheme,
  setSelectedTheme,

  setShowSetup

}: SetupOverlayProps) {

  if (!showSetup) return null;

  return (

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

            <ThemeSelector
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />

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

  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MouseGlow from "../../components/MouseGlow";
import { useState, useEffect } from "react";

import "../../styles/core.css";

export default function AuthPage() {
    const [isRegister, setIsRegister] =
  useState(false);

const router = useRouter();

const [name, setName] =
  useState("");

const [email, setEmail] =
  useState("");

const [password, setPassword] =
  useState("");

const [confirmPassword, setConfirmPassword] =
  useState("");

const [error, setError] =
  useState("");

const handleAuth = () => {

  setError("");

  // CADASTRO
  if (isRegister) {

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      setError(
        "Preencha todos os campos."
      );

      return;
    }

    if (
      password !== confirmPassword
    ) {

      setError(
        "As senhas não coincidem."
      );

      return;
    }

    router.push("/core");

    return;
  }

  // LOGIN

  if (!email || !password) {

    setError(
      "Preencha e-mail e senha."
    );

    return;
  }

  router.push("/core");
};

  return (

    <main className="auth-container">
        <MouseGlow />

      {/* LADO ESQUERDO */}

      <section className="auth-left">

        {/* LOGO */}

        <Image
          src="/osiris-logo.png"
          alt="OSIRIS"
          width={120}
          height={120}
          className="auth-logo"
          priority
        />

        {/* TÍTULO */}

        <h1 className="auth-title">
          Sobre o OSIRIS
        </h1>

        {/* DESCRIÇÃO */}

        <p className="auth-description">
          O OSIRIS Finance foi criado para unir
          organização, produtividade e gestão
          financeira em um único sistema.
        </p>

        <p className="auth-description">
          Desenvolvido para autônomos,
          empresas, criadores e profissionais
          que precisam de controle total
          sobre operações, métricas e resultados.
        </p>

        {/* FEATURES */}

        <div className="auth-features">

          <div className="feature-card">
            Dashboard Inteligente
          </div>

          <div className="feature-card">
            Analytics em Tempo Real
          </div>

          <div className="feature-card">
            Gestão Financeira
          </div>

          <div className="feature-card">
            Organização Completa
          </div>

        </div>

      </section>

      {/* LADO DIREITO */}

      <section className="auth-right">

        {/* CARD LOGIN */}

        <div className="auth-card">

          <h2 className="login-title">
            Login / Cadastro
          </h2>

          <p className="login-subtitle">
            Entre na plataforma OSIRIS
          </p>

{/* LOGIN */}

{!isRegister && (

  <>

<input
  type="email"
  placeholder="E-mail"
  className="auth-input"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
/>

<input
  type="password"
  placeholder="Senha"
  className="auth-input"
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
/>

  </>

)}

{/* CADASTRO */}

{isRegister && (

  <div className="auth-grid">

<input
  type="text"
  placeholder="Nome"
  className="auth-input"
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>

<input
  type="email"
  placeholder="E-mail"
  className="auth-input"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
/>

<input
  type="password"
  placeholder="Senha"
  className="auth-input"
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
/>

<input
  type="password"
  placeholder="Confirmar Senha"
  className="auth-input"
  value={confirmPassword}
  onChange={(e) =>
    setConfirmPassword(e.target.value)
  }
/>

  </div>

)}

          {/* BOTÃO LOGIN */}

{error && (

  <p className="auth-error">
    {error}
  </p>

)}

<button
  className="auth-button"
  onClick={handleAuth}
>

  {isRegister
    ? "Criar Conta"
    : "Entrar"}

</button>
<button
  className="switch-auth"
  onClick={() =>
    setIsRegister(!isRegister)
  }
>

  {isRegister
    ? "Já possui conta? Entrar"
    : "Não tem conta? Cadastre-se"}

</button>

          {/* DIVISOR */}

          <div className="auth-divider">
            ou
          </div>

          {/* GOOGLE */}

          <button className="google-button">

            <Image
              src="/google-logo.png"
              alt="Google"
              width={22}
              height={22}
            />

            Continuar com Google

          </button>

          {/* VOLTAR */}

          <Link
            href="/"
            className="back-home"
          >
            Voltar para Home
          </Link>

        </div>

      </section>

    </main>
  );
}
"use client";

import Image from "next/image";

import "../../../styles/products.css";

export default function Products() {

  return (

    <section className="products-container">

      {/* BACKGROUND DECOR */}

      <div className="products-background-glow top"></div>
      <div className="products-background-glow bottom"></div>

      {/* HEADER */}

      <div className="products-header">

        <div>

          <h1 className="products-title">
            Produtos & Serviços
          </h1>

          <p className="products-subtitle">
            Organize seus produtos, serviços,
            ofertas e acompanhe seu crescimento.
          </p>

        </div>

        <button className="create-product-button">
          + Novo Produto
        </button>

      </div>

      {/* ALERTA */}

      <div className="products-empty-alert">

        Seu catálogo ainda está vazio.
        Cadastre serviços, produtos digitais,
        pacotes ou qualquer item que você venda.

      </div>

      {/* RESUMO */}

      <div className="products-summary-grid">

        <div className="summary-card">

          <span className="summary-label">
            Produtos
          </span>

          <h2 className="summary-value">
            0
          </h2>

        </div>

        <div className="summary-card">

          <span className="summary-label">
            Vendas
          </span>

          <h2 className="summary-value">
            0
          </h2>

        </div>

        <div className="summary-card">

          <span className="summary-label">
            Receita
          </span>

          <h2 className="summary-value">
            R$ 0,00
          </h2>

        </div>

        <div className="summary-card">

          <span className="summary-label">
            Destaques
          </span>

          <h2 className="summary-value">
            0
          </h2>

        </div>

      </div>

      {/* GRID PRINCIPAL */}

      <div className="products-grid">

        {/* CARD */}

        <div className="product-card">

          <div className="product-card-top">

            <div className="product-icon">

            <Image
                src="/box.png"
                alt="Produto"
                width={24}
                height={24}
                className="product-icon-image"
            />

            </div>

            <span className="product-status">
              Catálogo
            </span>

          </div>

          <div className="product-content">

            <h3 className="product-name">
              Nenhum produto criado
            </h3>

            <p className="product-description">
              Os produtos cadastrados aparecerão aqui
              automaticamente.
            </p>

          </div>

          <div className="product-footer">

            <span className="product-price">
              R$ 0,00
            </span>

            <button className="product-action">
              Criar
            </button>

          </div>

        </div>

        {/* CARD */}

        <div className="product-card">

          <div className="product-card-top">

            <div className="product-icon">

            <Image
                src="/cart.png"
                alt="Venda"
                width={24}
                height={24}
                className="product-icon-image"
            />

            </div>

            <span className="product-status">
              Vendas
            </span>

          </div>

          <div className="product-content">

            <h3 className="product-name">
              Nenhuma venda registrada
            </h3>

            <p className="product-description">
              Quando você vender algo,
              aparecerá aqui.
            </p>

          </div>

          <div className="product-footer">

            <span className="product-price">
              R$ 0,00
            </span>

            <button className="product-action">
              Registrar
            </button>

          </div>

        </div>

        {/* CARD */}

        <div className="product-card">

          <div className="product-card-top">

            <div className="product-icon">

            <Image
                src="/star.png"
                alt="Destaque"
                width={24}
                height={24}
                className="product-icon-image"
            />

            </div>

            <span className="product-status">
              Destaque
            </span>

          </div>

          <div className="product-content">

            <h3 className="product-name">
              Produto destaque
            </h3>

            <p className="product-description">
              O produto com mais vendas
              aparecerá aqui futuramente.
            </p>

          </div>

          <div className="product-footer">

            <span className="product-price">
              R$ 0,00
            </span>

            <button className="product-action">
              Ver
            </button>

          </div>

        </div>

      </div>

      {/* PAINEL INFERIOR */}

      <div className="products-bottom-grid">

        {/* ESTATÍSTICAS */}

        <div className="products-panel">

          <div className="panel-header">

            <h3>
              Estatísticas
            </h3>

          </div>

          <div className="stat-row">

            <span>
              Produtos cadastrados
            </span>

            <strong>
              0
            </strong>

          </div>

          <div className="stat-row">

            <span>
              Vendas realizadas
            </span>

            <strong>
              0
            </strong>

          </div>

          <div className="stat-row">

            <span>
              Receita total
            </span>

            <strong>
              R$ 0,00
            </strong>

          </div>

          <div className="stat-row">

            <span>
              Ticket médio
            </span>

            <strong>
              R$ 0,00
            </strong>

          </div>

        </div>

        {/* ATIVIDADE */}

        <div className="products-panel">

          <div className="panel-header">

            <h3>
              Atividade Recente
            </h3>

          </div>

          <div className="activity-empty">

            Nenhuma atividade encontrada.

          </div>

        </div>

      </div>

    </section>

  );
}
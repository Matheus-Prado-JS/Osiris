"use client";

import "../../../styles/dashboard.css";

export default function Dashboard() {

  return (

    <section className="main-content">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>

          <h1 className="dashboard-main-title">
            Bem-vindo ao OSIRIS
          </h1>

          <p className="dashboard-main-subtitle">
            Seu sistema financeiro
          </p>

        </div>

        <div className="dashboard-actions">

          <button className="action-button">
            Nova Venda
          </button>

          <button className="action-button secondary">
            Novo Cliente
          </button>

        </div>

      </div>

      {/* CARDS PRINCIPAIS */}

      <div className="stats-grid">

        <div className="stat-card">

          <span className="stat-label">
            Receita Mensal
          </span>

          <h2 className="stat-value">
            R$ 0,00
          </h2>

          <p className="stat-growth">
            Nenhuma receita registrada
          </p>

        </div>

        <div className="stat-card">

          <span className="stat-label">
            A Receber
          </span>

          <h2 className="stat-value">
            R$ 0,00
          </h2>

          <p className="stat-growth">
            Nenhum pagamento pendente
          </p>

        </div>

        <div className="stat-card">

          <span className="stat-label">
            Despesas
          </span>

          <h2 className="stat-value">
            R$ 0,00
          </h2>

          <p className="stat-growth">
            Nenhuma despesa registrada
          </p>

        </div>

        <div className="stat-card">

          <span className="stat-label">
            Lucro Líquido
          </span>

          <h2 className="stat-value">
            R$ 0,00
          </h2>

          <p className="stat-growth">
            Sem movimentações
          </p>

        </div>

      </div>

      {/* ÁREA CENTRAL */}

      <div className="dashboard-center-grid">

        {/* GRÁFICO */}

        <div className="dashboard-panel large">

          <div className="panel-header">

            <h3>
              Faturamento
            </h3>

            <span>
              Últimos 30 dias
            </span>

          </div>

          <div className="fake-chart empty-chart">

            <div className="chart-line"></div>

            <p className="empty-text">
              Nenhum dado disponível
            </p>

          </div>

        </div>

        {/* META */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <h3>
              Meta Mensal
            </h3>

          </div>

          <div className="goal-value">
            R$ 0,00 / R$ 0,00
          </div>

          <div className="goal-bar">

            <div
              className="goal-progress"
              style={{ width: "0%" }}
            ></div>

          </div>

          <p className="goal-percent">
            Nenhuma meta definida
          </p>

        </div>

      </div>

      {/* CLIENTES + PENDÊNCIAS */}

      <div className="dashboard-bottom-grid">

        {/* CLIENTES */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <h3>
              Clientes Recentes
            </h3>

          </div>

          <div className="empty-state">

            Nenhum cliente cadastrado

          </div>

        </div>

        {/* PENDÊNCIAS */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <h3>
              Pendências
            </h3>

          </div>

          <div className="empty-state">

            Nenhuma pendência encontrada

          </div>

        </div>

      </div>

      {/* ATIVIDADES */}

      <div className="dashboard-panel">

        <div className="panel-header">

          <h3>
            Atividade Recente
          </h3>

        </div>

        <div className="empty-state">

          Nenhuma atividade registrada

        </div>

      </div>

    </section>

  );
}
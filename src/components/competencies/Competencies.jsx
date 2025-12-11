import React from 'react';

const Competencies = () => (
  <section id="competencies" className="main-section competencies">
    <h4 className="main-section__title">Core Competencies</h4>
    
    <div className="competencies-grid">
      <div className="competency-card">
        <div className="competency-card__icon">
          <i className="fas fa-users-cog"></i>
        </div>
        <div className="competency-card__content">
          <h5 className="competency-card__title">跨職能團隊統籌</h5>
          <p className="competency-card__subtitle">Cross-Functional Leadership</p>
          <p className="competency-card__desc">
            管理 FE / BE / App 全開發團隊 (約 10+ 人)，統籌資源配置、技術決策與風險控管，成功推動多線專案如期交付。
          </p>
        </div>
      </div>

      <div className="competency-card">
        <div className="competency-card__icon">
          <i className="fas fa-cogs"></i>
        </div>
        <div className="competency-card__content">
          <h5 className="competency-card__title">流程制度化</h5>
          <p className="competency-card__subtitle">Process Standardization</p>
          <p className="competency-card__desc">
            擅長利用自動化工具 (n8n, API) 解決管理痛點，將工時統計、報表產出與績效追蹤自動化，<strong>降低 20% 管理行政工時</strong>，提升營運透明度。
          </p>
        </div>
      </div>

      <div className="competency-card">
        <div className="competency-card__icon">
          <i className="fas fa-fire-extinguisher"></i>
        </div>
        <div className="competency-card__content">
          <h5 className="competency-card__title">危機處理</h5>
          <p className="competency-card__subtitle">Crisis Management</p>
          <p className="competency-card__desc">
            具備百萬級專案「救火」經驗。擅長在客戶信心崩盤邊緣接手，透過重整優先級 (Prioritization) 與資源調度，於一週內穩定局勢。
          </p>
        </div>
      </div>

      <div className="competency-card">
        <div className="competency-card__icon">
          <i className="fas fa-bullseye"></i>
        </div>
        <div className="competency-card__content">
          <h5 className="competency-card__title">策略落地</h5>
          <p className="competency-card__subtitle">Strategic Alignment</p>
          <p className="competency-card__desc">
            將公司年度 OKR (淨利率/人效) 轉化為工程團隊執行指標，成功達成 <strong>全年淨利率 10%</strong> 與 <strong>降低 40% 加班時數</strong> 的雙贏目標。
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Competencies;

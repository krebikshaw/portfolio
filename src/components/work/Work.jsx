import React from 'react';

const Work = () => (
  <section id="work" className="main-section work">
    <h4 className="main-section__title">Experience</h4>
    
    {/* Position 1: FE Development Manager */}
    <div className="experience-item">
      <div className="experience-item__marker"></div>
      <div className="experience-item__content">
        <h3 className="experience-item__company">新芽網路 25sprout</h3>
        <p className="experience-item__role">Front-End Development Manager (Scope: FE / BE / App)</p>
        <p className="experience-item__location">Taipei, Taiwan</p>
        <p className="experience-item__date">2025.01 – Present</p>
        <p className="experience-item__note">
          <span role="img" aria-label="note">📌</span> 2025.07 起職責擴展：基於卓越績效，管理範圍從前端團隊延伸至統籌整個 BU 的開發團隊 (FE / BE / App)。
        </p>
        <ul className="experience-item__list">
          <li>
            <strong>主導大型專案危機解除：</strong>
            接手公司年度重點專案之危機處理，重新盤點 100+ 個 Issue 並重整開發優先級，<strong>於接手首週將 Critical Issues 收斂至可控範圍</strong>，成功挽回客戶信任並確保尾款順利驗收。
          </li>
          <li>
            <strong>管理透明度與自動化：</strong>
            解決跨團隊工時紀錄標準不一痛點，導入 n8n 自動化報表系統，讓 PM 能<strong>即時掌握開發量能與預算消耗</strong>，同時大幅減少工程師日報填寫時間。
          </li>
          <li>
            <strong>決策優化與風險控管：</strong>
            針對舊系統維護瓶頸，提出客觀的 ROI 分析報告，說服高層與客戶採納「以重構取代修補」策略，<strong>預計降低長期維運成本 30%</strong>。
          </li>
          <li>
            <strong>OKR 目標落地：</strong>
            落實「財務健康」與「團隊健康」平衡策略，成功達成 <strong>BU 全年淨利率 10%</strong> 目標，並透過資源調配<strong>降低團隊總加班時數 40%</strong>。
          </li>
        </ul>
      </div>
    </div>

    {/* Position 2: Assistant Manager */}
    <div className="experience-item">
      <div className="experience-item__marker"></div>
      <div className="experience-item__content">
        <h3 className="experience-item__company">新芽網路 25sprout</h3>
        <p className="experience-item__role">Front-End Development Assistant Manager</p>
        <p className="experience-item__location">Taipei, Taiwan</p>
        <p className="experience-item__date">2022.07 – 2024.12</p>
        <p className="experience-item__note">
          <span role="img" aria-label="note">📌</span> 從帶領績效最佳小組，晉升至整併管理整個前端團隊。
        </p>
        <ul className="experience-item__list">
          <li>
            <strong>人才培育體系建立：</strong>
            建立系統化 Onboarding 流程 (技術白皮書 + Component Workshop)，<strong>縮短新人上手時間 50%</strong>。
          </li>
          <li>
            <strong>跨部門協作標準化：</strong>
            與 PM 及設計部門建立標準協作規範 (SOP)，導入回饋機制，有效減少規格來回確認的溝通成本。
          </li>
          <li>
            <strong>營運支援與獲利目標：</strong>
            在公司擴張期彈性調度人力，成功支援跨公司合作案並促成<strong>合約續約</strong>。
          </li>
        </ul>
      </div>
    </div>

    {/* Position 3: Developer */}
    <div className="experience-item">
      <div className="experience-item__marker"></div>
      <div className="experience-item__content">
        <h3 className="experience-item__company">新芽網路 25sprout</h3>
        <p className="experience-item__role">Front-End Developer (Squad Team)</p>
        <p className="experience-item__location">Taipei, Taiwan</p>
        <p className="experience-item__date">2021.02 – 2022.06</p>
        <p className="experience-item__note">
          <span role="img" aria-label="note">📌</span> 核心開發成員，專注於新產品線從 0 到 1 的實作與驗證。
        </p>
        <ul className="experience-item__list">
          <li>
            <strong>企業級產品架構建置：</strong>
            主導前後端分離架構，建立高複用性模組 (Modules)，加速後續產品線開發效率。
          </li>
          <li>
            <strong>Design System 維護：</strong>
            建立 UI 元件庫，確保跨產品線體驗一致性。
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Work;

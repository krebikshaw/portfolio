import React from 'react';

const Project = () => (
  <section id="contributions" className="main-section contributions">
    <h4 className="main-section__title">Knowledge Sharing & Contributions</h4>
    
    {/* 技術傳承與影響力 */}
    <div className="contribution-group">
      <h5 className="contribution-group__title">
        <i className="fas fa-microphone-alt"></i>
        技術傳承與影響力
      </h5>
      
      <div className="contribution-item">
        <div className="contribution-item__icon">
          <i className="fab fa-youtube"></i>
        </div>
        <div className="contribution-item__content">
          <h6 className="contribution-item__title">
            經營「所以想知道」技術知識 YouTube 頻道
            <span className="contribution-item__badge">2000+ 訂閱</span>
          </h6>
          <p className="contribution-item__desc">
            利用業餘時間製作教學影片，內容涵蓋「Vibe Coding 實作」、「技術名詞白話文」與「職場觀念」，熱門影片有近 <strong>3 萬觀看量</strong>。
          </p>
        </div>
      </div>

      <div className="contribution-item">
        <div className="contribution-item__icon">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <div className="contribution-item__content">
          <h6 className="contribution-item__title">
            代表公司擔任外部講師
            <span className="contribution-item__badge">2+ 場/年</span>
          </h6>
          <p className="contribution-item__desc">
            主講網頁開發趨勢與職涯規劃等主題，協助推廣產業知識。
          </p>
        </div>
      </div>

      <div className="contribution-item">
        <div className="contribution-item__icon">
          <i className="fas fa-users"></i>
        </div>
        <div className="contribution-item__content">
          <h6 className="contribution-item__title">
            主導內部技術工作坊
            <span className="contribution-item__badge">4+ 場/年</span>
          </h6>
          <p className="contribution-item__desc">
            主題包含「AI 技術應用」、「高流量搶購系統風險探討」、「專案初期架構建置」。
          </p>
        </div>
      </div>
    </div>

    {/* 專案支援 */}
    {/* <div className="contribution-group">
      <h5 className="contribution-group__title">
        <i className="fas fa-rocket"></i>
        專案支援
      </h5>
      
      <div className="contribution-item">
        <div className="contribution-item__icon">
          <i className="fas fa-robot"></i>
        </div>
        <div className="contribution-item__content">
          <h6 className="contribution-item__title">
            AI 產品 (BizeBaseAI) MVP 開發支援
          </h6>
          <p className="contribution-item__desc">
            在公司推動 AI 轉型的關鍵時刻，跨越職責範圍，支援參展用 MVP 的介面與功能開發。
          </p>
        </div>
      </div>
    </div> */}
  </section>
);

export default Project;

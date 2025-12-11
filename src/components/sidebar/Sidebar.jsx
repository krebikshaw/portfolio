import React from 'react';

const Sidebar = () => (
  <aside className="resume-sidebar">
    {/* Target Role Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Target Role
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <ul className="target-list">
          <li>Frontend Team Lead</li>
          <li>Engineering Manager</li>
          <li>Technical Director</li>
        </ul>
      </div>
    </div> */}

    {/* Core Competencies Section */}
    <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Core Competencies
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="sidebar-competency">
          <div className="sidebar-competency__header">
            <i className="fas fa-users-cog"></i>
            <div className="sidebar-competency__titles">
              <h5 className="sidebar-competency__title">跨職能團隊統籌</h5>
              <span className="sidebar-competency__subtitle">Cross-Functional Leadership</span>
            </div>
          </div>
          <p className="sidebar-competency__desc">
            管理 FE / BE / App 全開發團隊 (約 10+ 人)，統籌資源配置、技術決策與風險控管，成功推動多線專案如期交付。
          </p>
        </div>

        <div className="sidebar-competency">
          <div className="sidebar-competency__header">
            <i className="fas fa-cogs"></i>
            <div className="sidebar-competency__titles">
              <h5 className="sidebar-competency__title">流程制度化</h5>
              <span className="sidebar-competency__subtitle">Process Standardization</span>
            </div>
          </div>
          <p className="sidebar-competency__desc">
            擅長利用自動化工具 (n8n, API) 解決管理痛點，將工時統計、報表產出與績效追蹤自動化，<strong>降低 20% 管理行政工時</strong>，提升營運透明度。
          </p>
        </div>

        <div className="sidebar-competency">
          <div className="sidebar-competency__header">
            <i className="fas fa-fire-extinguisher"></i>
            <div className="sidebar-competency__titles">
              <h5 className="sidebar-competency__title">危機處理</h5>
              <span className="sidebar-competency__subtitle">Crisis Management</span>
            </div>
          </div>
          <p className="sidebar-competency__desc">
            具備百萬級專案「救火」經驗。擅長在客戶信心崩盤邊緣接手，透過重整優先級 (Prioritization) 與資源調度，於一週內穩定局勢。
          </p>
        </div>

        <div className="sidebar-competency">
          <div className="sidebar-competency__header">
            <i className="fas fa-bullseye"></i>
            <div className="sidebar-competency__titles">
              <h5 className="sidebar-competency__title">策略落地</h5>
              <span className="sidebar-competency__subtitle">Strategic Alignment</span>
            </div>
          </div>
          <p className="sidebar-competency__desc">
            將公司年度 OKR (淨利率/人效) 轉化為工程團隊執行指標，成功達成 <strong>全年淨利率 10%</strong> 與 <strong>降低 40% 加班時數</strong> 的雙贏目標。
          </p>
        </div>
      </div>
    </div>

    {/* Profiles Section */}
    {/* <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Profiles
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="profile-item">
          <i className="fab fa-github fa-lg"></i>
          <div className="profile-item__info">
            <a href="https://github.com/krebikshaw" target="_blank" rel="noopener noreferrer" className="profile-item__name">krebikshaw</a>
            <span className="profile-item__label">GitHub</span>
          </div>
        </div>
        <div className="profile-item">
          <i className="fab fa-youtube fa-lg"></i>
          <div className="profile-item__info">
            <a href="https://www.youtube.com/@sowewannaknow" target="_blank" rel="noopener noreferrer" className="profile-item__name">所以想知道</a>
            <span className="profile-item__label">YouTube (2000+ 訂閱)</span>
          </div>
        </div>
      </div>
    </div> */}

    {/* Tech Stack Section */}
    <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Tech Stack
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="skill-item">
          <h5 className="skill-item__title">Frontend</h5>
          <p className="skill-item__list">React, Vue, TypeScript</p>
        </div>
        <div className="skill-item">
          <h5 className="skill-item__title">Backend</h5>
          <p className="skill-item__list">php, Node.js, Python</p>
        </div>
        <div className="skill-item">
          <h5 className="skill-item__title">DevOps & Cloud</h5>
          <p className="skill-item__list">GitLab CI/CD, AWS (S3, Lambda, API Gateway)</p>
        </div>
      </div>
    </div>

    {/* Knowledge Sharing Section */}
    <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Knowledge Sharing
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <div className="sharing-item">
          <i className="fab fa-youtube"></i>
          <div className="sharing-item__info">
						<a href="https://www.youtube.com/@sowewannaknow" target="_blank" rel="noopener noreferrer" className="profile-item__name">經營 YouTube 技術頻道</a>
            <span className="sharing-item__desc">2000+ 訂閱，熱門影片近 3 萬觀看</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-chalkboard-teacher"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">代表公司擔任外部講師</span>
            <span className="sharing-item__desc">2+ 場/年，網頁開發與職涯主題</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-users"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">主導內部技術工作坊</span>
            <span className="sharing-item__desc">4+ 場/年，AI 應用、架構建置等</span>
          </div>
        </div>
      </div>
    </div>

    {/* Endorsements Section */}
    <div className="sidebar-section">
      <h4 className="sidebar-section__title">
        <span className="sidebar-section__decorator">◇</span>
        Endorsements
        <span className="sidebar-section__decorator">◇</span>
      </h4>
      <div className="sidebar-section__content">
        <blockquote className="endorsement">
          <p>"在團隊轉型過程中，就像定心丸一樣讓人安心。展現出管理層的人力槓桿效應的好的成果。"</p>
          <cite>— BU Head</cite>
        </blockquote>
        <blockquote className="endorsement">
          <p>"非常認真且親力親為的主管。在職涯規劃感到迷惘時，也提供了很溫暖的輔導。"</p>
          <cite>— Team Members</cite>
        </blockquote>
      </div>
    </div>
  </aside>
);

export default Sidebar;

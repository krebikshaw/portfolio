import React from 'react';

const Sidebar = () => (
  <aside className="resume-sidebar">
    {/* Target Role Section */}
    <div className="sidebar-section">
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
    </div>

    {/* Profiles Section */}
    <div className="sidebar-section">
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
    </div>

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
            <span className="sharing-item__title">YouTube 技術頻道</span>
            <span className="sharing-item__desc">2000+ 訂閱，熱門影片 3 萬觀看</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-chalkboard-teacher"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">外部講師</span>
            <span className="sharing-item__desc">2+ 場/年，網頁開發與職涯主題</span>
          </div>
        </div>
        <div className="sharing-item">
          <i className="fas fa-users"></i>
          <div className="sharing-item__info">
            <span className="sharing-item__title">內部技術工作坊</span>
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

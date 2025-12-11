import React from 'react';
import ContactList from './../contactList/ContactList';

const Introduce = () => (
  <header className="resume-header">
    <div className="resume-header__avatar">
      <img 
        src="https://github.com/krebikshaw/portfolio/blob/master/public/image/avatar.jpg?raw=true" 
        alt="YuXiang Su"
      />
    </div>
    <div className="resume-header__info">
      <h1 className="resume-header__name">蘇裕翔 YuXiang Su</h1>
      <p className="resume-header__title">Front-End Development Manager</p>
      <p className="resume-header__subtitle">4 年內 3 次晉升｜管理 10+ 人跨職能團隊 (FE / BE / App)｜商業思維驅動技術決策</p>
      <ContactList />
    </div>
  </header>
);

export default Introduce;

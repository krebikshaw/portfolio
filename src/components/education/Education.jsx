import React from 'react';

const Education = () => (
  <section id="education" className="main-section education">
    <h4 className="main-section__title">Education</h4>
    
    <div className="education-item">
      <div className="education-item__marker"></div>
      <div className="education-item__content">
        <h3 className="education-item__school">輔仁大學</h3>
        <p className="education-item__location">新北市</p>
        <p className="education-item__degree">學士 - 物理學系</p>
        <p className="education-item__date">Sep, 2014 – Jan, 2019</p>
      </div>
    </div>

    <div className="education-item">
      <div className="education-item__marker"></div>
      <div className="education-item__content">
        <h3 className="education-item__school">Lidemy 鋰學院 - 程式導師計畫第四期</h3>
        <p className="education-item__location">Online</p>
        <p className="education-item__degree">培訓課程 - 前後端開發</p>
        <p className="education-item__date">Jun, 2020 – Dec, 2020</p>
      </div>
    </div>
  </section>
);

export default Education;

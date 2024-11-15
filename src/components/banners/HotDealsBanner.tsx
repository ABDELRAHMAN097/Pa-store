import React from 'react';

const HotDealsBanner: React.FC = () => {
  return (
    <div id="hot-deal" className="section !mt-0 !mb-0 !py-[100px]">
      {/* الحاوية */}
      <div className="container">
        {/* الصف */}
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal">
              <h2 className="text-uppercase text-7xl text-primary-text">عرض الافتتاح لهذا الشهر</h2>
              <p>تشكيلة جديدة بخصم يصل إلى 50 بالمئه</p>
              <a className="primary-btn cta-btn !px-24" href="#">
                تسوق الآن
              </a>
            </div>
          </div>
        </div>
        {/* /الصف */}
      </div>
      {/* /الحاوية */}
    </div>
  );
};

export default HotDealsBanner;

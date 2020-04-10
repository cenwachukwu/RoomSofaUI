import React from 'react';
import './Pills.scss';
import Pills from '../Pills/Pills';

const PillBox = () => {
  return (
    <div className="PillBox">
      <div className="boxPills">
        <Pills categoryName={'Sofa'} />
        <Pills categoryName={'Love Seat'} />
        <Pills categoryName={'Chair'} />
        <Pills categoryName={'Recliners'} />
        <Pills categoryName={'Sectionals'} />
        <div className="extraPill">
          <div>
            <a href="#">Shop all Room Sofa deals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillBox;

import React from 'react';
import './homePagePills.scss';
import Pills from '../Pills/Pills';
import chair from '../../utils/homepills/chair.jpg';
import loveseat from '../../utils/homepills/loveseat.jpg';
import recliner from '../../utils/homepills/recliner.jpg';
import sectional from '../../utils/homepills/sectional.jpg';
import sofa from '../../utils/homepills/sofa.jpg';

const PillBox = () => {
  return (
    <div className="PillBox">
      <div className="boxPills">
        <Pills props={sofa} categoryName={'Sofa'} />
        <Pills props={loveseat} categoryName={'Love Seat'} />
        <Pills props={chair} categoryName={'Chair'} />
        <Pills props={recliner} categoryName={'Recliners'} />
        <Pills props={sectional} categoryName={'Sectionals'} />

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

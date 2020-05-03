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
        <Pills
          props={sofa}
          categoryName={'Sofa & Loveseat'}
          link={'/categories/sofaandloveseat'}
        />
        <Pills
          props={loveseat}
          categoryName={'Accent chair'}
          link={'/categories/accentchair'}
        />
        <Pills
          props={chair}
          categoryName={'Chair'}
          link={'/categories/chair'}
        />
        <Pills
          props={recliner}
          categoryName={'Recliners'}
          link={'/categories/recliner'}
        />
        <Pills
          props={sectional}
          categoryName={'Sectionals'}
          link={'/categories/sectionals'}
        />

        <div className="extraPill">
          <div>
            <a href="#">Shop all</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillBox;

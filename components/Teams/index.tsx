import React from "react";

const Teams = () => {
  return (
    <div className="teams-list">
      <div className="teams-list__inner">
        <div className="teams-list__heading block-heading">
          our awesome teams
        </div>
        <div className="teams-list__title block-title">
          Meet Our Dedicated Teams
        </div>
        <div className="teams-list__details">
          <div className="teams-list__left">
            <div className="teams-list__thumbnail lead">
              <img src="./team-lead.png" alt="" />
            </div>
          </div>
          <div className="teams-list__right">
            <div className="teams-list__md">
              <div className="teams-list__md__name">
                <span>Manish</span> shah
              </div>
              <div className="teams-list__designation">
                <span>Managing Director</span>
                <span>Country Counseler</span>
              </div>
              <div className="teams-list__desc">
                In the present world of huge competition, choosing the right
                institute is as important as choosing the right course. Admizz
                helps selecting a right institution for you with ease. Admizz is
                registered under INRA EduTech Services Pvt. Ltd. Bangalore,
                India. We have our partnered office in Kathmandu for counselling
                and admissions from Nepal.
              </div>
            </div>
            <div className="teams-list__contact">
              <div className="teams-list__email">
                <div className="teams-list__email__icon"></div>
                <div className="teams-list__email__address">
                  email@domainname.com
                </div>
              </div>
            </div>
            <div className="teams-list__full-team">
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
              <div className="teams-list__full-team__thumbnail">
                <img src="./team-member.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Teams };

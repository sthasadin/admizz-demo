import React from "react";
import { Feature } from "../feature";
import Link from "next/link";
import whyusBg from "../../public/why-us-bg-image.png";
import tieupsBg from "../../public/tieups-background.png";

import { CallToAction } from "../Button/callToAction";

const Us = ({ college }) => {
  const data = [
    {
      title: "One on One Counselling session",
      description:
        "Get the right career advice for you and earn your best career certificates.",
      icon: (
        <svg
          width="60"
          height="61"
          viewBox="0 0 70 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.9258 45.6722C58.7891 45.1593 59.0898 44.4471 59.377 43.9342C59.4647 43.7816 59.5606 43.6341 59.6641 43.4926C62.1199 39.6901 63.4335 35.2119 63.4375 30.6286C63.4785 17.4939 52.8418 6.83801 39.6895 6.83801C28.2187 6.83801 18.6484 14.9724 16.4062 25.7707C16.0708 27.3712 15.9012 29.0046 15.9004 30.6428C15.9004 43.7917 26.127 54.7326 39.2793 54.7326C41.3711 54.7326 44.1875 54.0772 45.7324 53.6356C47.2773 53.194 48.8086 52.6099 49.2051 52.4532C49.6115 52.2936 50.0422 52.2115 50.4766 52.211C50.9505 52.2091 51.42 52.306 51.8574 52.496L59.6094 55.3594C59.7793 55.4343 59.959 55.4823 60.1426 55.5018C60.4327 55.5018 60.7109 55.3818 60.916 55.168C61.1211 54.9543 61.2363 54.6644 61.2363 54.3622C61.2268 54.2318 61.2039 54.1028 61.168 53.9775L58.9258 45.6722Z"
            stroke="#BDBDBD"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            className="feature-icon"
          />
          <path
            d="M9.08629 33.0504C7.29313 36.4071 6.42569 40.2151 6.57987 44.0533C6.73405 47.8916 7.90384 51.6108 9.95992 54.7996C10.2757 55.2967 10.4535 55.6814 10.3988 55.9392C10.3441 56.1971 8.76773 64.7531 8.76773 64.7531C8.72982 64.9534 8.7442 65.1605 8.80938 65.353C8.87455 65.5454 8.98813 65.7161 9.13824 65.8472C9.33854 66.0135 9.58761 66.103 9.84371 66.1008C9.98057 66.1012 10.116 66.0721 10.2416 66.0153L17.9265 62.8812C18.4554 62.664 19.0455 62.6742 19.5671 62.9097C22.1566 63.9611 25.0195 64.6192 27.8838 64.6192C31.7273 64.6235 35.5034 63.5672 38.8281 61.5578"
            stroke="#BDBDBD"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            className="feature-icon"
          />
        </svg>
      ),
    },
    {
      title: "End to End Assistance Support",
      description:
        "Get the right career advice for you and earn your best career certificates.",
      icon: (
        <svg
          width="60"
          height="61"
          viewBox="0 0 60 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.94441 26.8591L5.7877 27.9957H6.93504H9.58337C10.0781 27.9957 10.5614 28.2001 10.9243 28.5782C11.2885 28.9578 11.5 29.481 11.5 30.0348V45.665C11.5 46.2187 11.2885 46.742 10.9243 47.1215C10.5614 47.4997 10.0781 47.7041 9.58337 47.7041H6.66671C3.97054 47.7041 1.83337 45.5894 1.83337 43.0604V30.4694C1.83337 14.2248 14.5082 1.07825 30 1.07825C45.4919 1.07825 58.1667 14.2248 58.1667 30.4694V43.0604C58.1667 45.5894 56.0296 47.7041 53.3334 47.7041H52.3334V48.7041C52.3334 54.8952 47.5102 59.8605 41.6667 59.8605H25.1667V52.7432H34.8334V54.7823V55.7823H35.8334H41.6667C45.4744 55.7823 48.5 52.5693 48.5 48.7041V30.0348C48.5 29.481 48.7116 28.9578 49.0758 28.5782C49.4387 28.2001 49.922 27.9957 50.4167 27.9957H53.065H54.2124L54.0557 26.8591C52.3714 14.6436 42.2704 5.15648 30 5.15648C17.7297 5.15648 7.6287 14.6436 5.94441 26.8591Z"
            fill="#BDBDBD"
            stroke="white"
            stroke-width="2"
            className="feature-icon-fill"
          />
        </svg>
      ),
    },
    {
      title: "Get Best Scholarships Facility",
      description:
        "Get the right career advice for you and earn your best career certificates.",
      icon: (
        <svg
          width="71"
          height="63"
          viewBox="0 0 71 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="feature-icon"
        >
          <path
            d="M33.7029 40.626L33.6896 40.6191L15.4879 31.046L14.1305 50.6992C14.1304 50.6998 14.1304 50.7004 14.1304 50.701C14.1122 50.9891 14.1376 51.2106 14.1806 51.366C14.2191 51.5051 14.2644 51.5672 14.2834 51.5879C14.3146 51.5841 14.4075 51.5624 14.5628 51.4516L14.5736 51.4439L14.5846 51.4366L22.1955 46.3977C22.8226 45.9181 23.6341 45.7538 24.3741 45.7884C25.1236 45.8234 25.9069 46.0664 26.5003 46.5288L33.7676 51.9302L33.7756 51.9361L33.7834 51.9423C34.0694 52.1668 34.5218 52.3111 35.0267 52.3111C35.5316 52.3111 35.984 52.1668 36.2699 51.9423L36.2777 51.9361L36.2857 51.9302L43.5531 46.5288C44.1474 46.0656 44.9314 45.8232 45.6911 45.7883C46.4516 45.7534 47.2758 45.9228 47.9365 46.3904L55.4539 51.4266C55.6151 51.5199 55.7155 51.537 55.7569 51.5382C55.7687 51.5385 55.7756 51.5375 55.7787 51.537L33.7029 40.626ZM33.7029 40.626L33.7165 40.6325M33.7029 40.626L33.7165 40.6325M33.7165 40.6325L34.7044 41.1026L35.0267 41.256M33.7165 40.6325L35.0267 41.256M35.0267 41.256L35.349 41.1026M35.0267 41.256L35.349 41.1026M35.349 41.1026L36.3369 40.6325L36.3505 40.626M35.349 41.1026L36.3505 40.626M36.3505 40.626L36.3637 40.6191M36.3505 40.626L36.3637 40.6191M36.3637 40.6191L54.5654 31.046M36.3637 40.6191L54.5654 31.046M54.5654 31.046L55.9229 50.6992C55.9229 50.6998 55.923 50.7004 55.923 50.7011L54.5654 31.046ZM3.22052 62.0365C3.09643 61.8578 3.00056 61.5808 2.99551 61.257L4.78922 38.4861L4.85294 37.6772H4.04154H3.59248C3.40502 37.6772 2.9953 37.4352 2.9953 36.7817V32.4326C2.9953 31.7792 3.40502 31.5371 3.59248 31.5371H4.58041H5.13394H5.29193H5.92759H6.55628C6.64866 31.5371 6.75439 31.5764 6.85845 31.7126C6.96796 31.8559 7.06364 32.1003 7.06364 32.4326V36.7817C7.06364 37.114 6.96796 37.3584 6.85845 37.5017C6.75439 37.6379 6.64866 37.6772 6.55628 37.6772H6.10722H5.29899L5.35931 38.4832L7.06574 61.2861L7.06631 61.2938L7.06704 61.3015C7.09706 61.6158 7.01816 61.8828 6.90699 62.0513C6.79626 62.2191 6.69395 62.2433 6.64609 62.2433H3.50267C3.45579 62.2433 3.34779 62.2197 3.22052 62.0365ZM8.33859 22.5225C8.33438 22.5271 8.33017 22.5317 8.32596 22.5363L8.68449 22.0671L7.88715 21.6571L1.62857 18.4393L35.0267 0.955441L68.4322 18.4431L35.0272 35.8185L9.23829 22.3644L8.72775 22.0981L8.33859 22.5225Z"
            stroke="#BDBDBD"
            stroke-width="1.5"
            className="feature-icon"
          />
        </svg>
      ),
    },
    {
      title: "Be Assured About Your Admission",
      description:
        "Get the right career advice for you and earn your best career certificates.",
      icon: (
        <svg
          width="54"
          height="57"
          viewBox="0 0 54 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 37.5858C36.665 37.5858 44.5 29.4221 44.5 19.3515C44.5 9.28097 36.665 1.11719 27 1.11719C17.335 1.11719 9.5 9.28097 9.5 19.3515C9.5 29.4221 17.335 37.5858 27 37.5858Z"
            stroke="#BDBDBD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feature-icon"
          />
          <path
            d="M27.0056 37.5949L36.9223 55.495L41.5831 45.6697L52.0773 46.3748L42.1606 28.4778"
            stroke="#BDBDBD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feature-icon"
          />
          <path
            d="M11.8388 28.4778L1.92212 46.3778L12.4163 45.6697L17.0771 55.4919L26.9938 37.5949"
            stroke="#BDBDBD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feature-icon"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="us">
      <div
        className="us__backgroundimage"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(95, 24, 2, 0.7), rgba(95, 24, 2, 0.7)), url(${whyusBg});`,
        }}
      >
        <div className="section-wrapper">
          <div className="us__content">
            <div className="us__leftcontent">
              <div className="us__title">Why Choose Admizz?</div>
              <div className="us__helpertext">
                Kickstart your career by starting early. Admizz helps you join
                the right diploma course right after 10th grade so you're always
                a step ahead of others.
              </div>
            </div>
            <div className="us__rightcontent">
              <CallToAction className="white-outline">
                Know Admizz Better
              </CallToAction>
            </div>
          </div>
        </div>
      </div>
      <div
        className="us__feature"
        style={{ backgroundImage: `url(${tieupsBg})` }}
      >
        <div className="section-wrapper">
          <div className="us__feature_container">
            {data.map((data) => {
              return <Feature data={data} />;
            })}
          </div>
          <div className="our-exclusive-container">
            <div className="our-exclusive-content">
              <div className="our-trusted-text">our trusted partner</div>
              <div className="our-exclusive-title">Our Exclusive Tie-Ups</div>
              <div className="university-list">
                {college &&
                  college?.map((college) => {
                    return (
                      <div>
                        <div className="university-icon">
                          <img src={college?.college_logo} />
                        </div>
                        <Link href={`colleges/${college?.college_slug}`}>
                          <div className="university-name">{college?.name}</div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Us };

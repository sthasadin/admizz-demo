import React from "react";
import FacilityItem from "./facilityItem";
import {useDispatcher, useSelector} from 'react-redux'

const CollegeFacility = () => {
  const facilities = useSelector(state => state.college.college.facilities)
  console.log(facilities)
  return (
    <div className="college-facility">
      <div className="college-facility__inner">
        <div className="sidebar__title">Facilities</div>
        <div className="college-facility__list">
         {facilities && facilities.includes('wifi') && <FacilityItem
            icon={
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.17969 16.5041C8.17969 17.795 9.27776 18.8442 10.6287 18.8442C11.9797 18.8442 13.0778 17.795 13.0778 16.5041C13.0778 15.2132 11.9797 14.164 10.6287 14.164C9.27776 14.1581 8.17969 15.2132 8.17969 16.5041ZM12.3684 16.5041C12.3684 17.4177 11.5911 18.1663 10.6287 18.1663C9.67257 18.1663 8.88912 17.4236 8.88912 16.5041C8.88912 15.5904 9.6664 14.8418 10.6287 14.8418C11.5849 14.8418 12.3684 15.5904 12.3684 16.5041Z"
                  fill="#333333"
                />
                <path
                  d="M10.6288 0C6.71778 0 3.04735 1.4736 0.308437 4.14969C0.111037 4.3442 0 4.60355 0 4.87469C0 5.14584 0.117218 5.40521 0.320786 5.59384C0.524354 5.78246 0.789623 5.88856 1.06722 5.88856C1.07339 5.88856 1.07336 5.88856 1.07953 5.88856C1.36329 5.88856 1.63473 5.77655 1.83213 5.58203C4.17008 3.30088 7.29146 2.05126 10.6226 2.05126C13.9537 2.05126 17.0812 3.30677 19.413 5.58203C19.6166 5.78245 19.888 5.88856 20.1779 5.88856C20.4617 5.88856 20.727 5.78246 20.9244 5.59384C21.1279 5.40521 21.2451 5.14584 21.2451 4.87469C21.2451 4.60355 21.1402 4.3442 20.9367 4.14969C18.2101 1.4736 14.5397 0 10.6288 0ZM20.437 5.11049C20.3013 5.24016 20.0669 5.23426 19.9312 5.10459C17.4575 2.69375 14.1573 1.36748 10.6288 1.36748C7.10024 1.36748 3.79995 2.69375 1.32629 5.10459C1.25844 5.16942 1.17209 5.20478 1.07339 5.20478C0.974691 5.20478 0.888308 5.16942 0.820452 5.10459C0.752596 5.03975 0.715594 4.95724 0.715594 4.86293C0.715594 4.77451 0.752596 4.68607 0.820452 4.62124C3.42983 2.08072 6.91518 0.677841 10.6349 0.677841C14.3547 0.677841 17.84 2.08072 20.4494 4.62124C20.5172 4.68607 20.5542 4.77451 20.5542 4.86293C20.5419 4.95724 20.5049 5.04565 20.437 5.11049Z"
                  fill="#FFA200"
                />
                <path
                  d="M17.4577 9.53095C17.7353 9.53095 18.0005 9.43076 18.2041 9.24215C18.6297 8.84726 18.6359 8.19893 18.2288 7.79814C16.2178 5.8178 13.5158 4.72742 10.6289 4.72742C7.74191 4.72742 5.04617 5.8178 3.02899 7.79814C2.61568 8.20482 2.62801 8.85315 3.05365 9.24215C3.47929 9.63704 4.15786 9.62523 4.565 9.21855C6.17504 7.63899 8.32794 6.76671 10.6289 6.76671C12.9298 6.76671 15.0827 7.63899 16.6927 9.21855C16.8963 9.41894 17.1677 9.53095 17.4577 9.53095ZM4.05298 8.74705C3.91727 8.88261 3.68902 8.88261 3.54714 8.75295C3.40526 8.62328 3.40529 8.40521 3.54101 8.26965C5.4163 6.42486 7.93314 5.40523 10.6289 5.40523C13.3184 5.40523 15.8353 6.42486 17.7167 8.26965C17.8525 8.40521 17.8524 8.62328 17.7106 8.75295C17.5749 8.88261 17.3404 8.87671 17.2047 8.74705C15.459 7.03193 13.1272 6.0889 10.6289 6.0889C8.13054 6.0889 5.79873 7.03193 4.05298 8.74705Z"
                  fill="#FFA200"
                />
                <path
                  d="M14.9591 13.5509C15.2367 13.5509 15.4958 13.4507 15.6993 13.268C15.9029 13.0793 16.0263 12.8259 16.0325 12.5489C16.0386 12.2778 15.9337 12.0184 15.7363 11.818C14.3915 10.4741 12.578 9.73145 10.6286 9.73145C8.68547 9.73145 6.87185 10.4741 5.52706 11.818C5.32966 12.0125 5.2248 12.2719 5.23097 12.5489C5.23714 12.82 5.35433 13.0793 5.56407 13.268C5.76764 13.4507 6.02673 13.5509 6.30433 13.5509C6.3105 13.5509 6.32282 13.5509 6.32899 13.5509C6.61275 13.545 6.87802 13.433 7.07542 13.2326C8.01307 12.2954 9.27768 11.7767 10.6348 11.7767C11.9919 11.7767 13.2565 12.2954 14.1941 13.2326C14.3854 13.4389 14.6691 13.5509 14.9591 13.5509ZM6.55723 12.767C6.48937 12.8318 6.40303 12.8672 6.3105 12.8731C6.21797 12.8731 6.12542 12.8436 6.05756 12.7788C5.98971 12.7139 5.9527 12.6314 5.94653 12.543C5.94036 12.4546 5.97739 12.3662 6.04525 12.3013C7.25432 11.093 8.88288 10.427 10.6348 10.427C12.3867 10.427 14.0153 11.093 15.2244 12.3013C15.2922 12.3662 15.323 12.4546 15.323 12.543C15.323 12.6314 15.2799 12.7198 15.212 12.7788C15.0763 12.9025 14.8419 12.8966 14.7062 12.767C13.6328 11.6942 12.1832 11.0989 10.6348 11.0989C9.07411 11.0989 7.63059 11.6883 6.55723 12.767Z"
                  fill="#FFA200"
                />
              </svg>
            }
            label="wifi"
          />}
          {facilities && facilities.includes('Ambulance') && <FacilityItem
            icon={
              <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2011 0.578257H16.5441C15.9465 0.578257 15.3943 0.795101 14.9782 1.14205V0H1.14228V11.6085C0.476587 11.8614 0 12.4831 0 13.2131V14.6371C0 15.5912 0.809439 16.3646 1.80799 16.3646H3.37385C3.37385 16.3791 3.37385 16.3935 3.37385 16.4007C3.37385 18.121 4.83384 19.5161 6.63425 19.5161C8.43467 19.5161 9.89466 18.121 9.89466 16.4007C9.89466 16.3863 9.89466 16.3718 9.89466 16.3646H18.3899C18.3899 16.3791 18.3899 16.3935 18.3899 16.4007C18.3899 18.121 19.8499 19.5161 21.6503 19.5161C23.4507 19.5161 24.9107 18.121 24.9107 16.4007C24.9107 16.2634 24.8956 16.1333 24.8805 16.0032C26.2194 15.4032 27.1499 14.1022 27.1499 12.5987V4.34414C27.1423 2.26965 25.3797 0.578257 23.2011 0.578257ZM1.95167 0.773415H14.1688V2.8479V11.4856H1.95167V0.773415ZM6.64183 18.7499C5.28774 18.7499 4.19086 17.7018 4.19086 16.408C4.19086 15.1141 5.28774 14.066 6.64183 14.066C7.99592 14.066 9.0928 15.1141 9.0928 16.408C9.08523 17.6946 7.98835 18.7499 6.64183 18.7499ZM21.6503 18.7499C20.2962 18.7499 19.1993 17.7018 19.1993 16.408C19.1993 15.1141 20.2962 14.066 21.6503 14.066C23.0044 14.066 24.1013 15.1141 24.1013 16.408C24.0937 17.6946 22.9968 18.7499 21.6503 18.7499ZM26.3329 12.5987C26.3329 13.7408 25.6521 14.7383 24.6686 15.2442C24.1845 14.1022 23.012 13.2926 21.6503 13.2926C20.1449 13.2926 18.8816 14.2684 18.5109 15.5912H9.78879C9.41055 14.2684 8.14722 13.2926 6.6494 13.2926C5.14401 13.2926 3.88073 14.2684 3.51006 15.5912H1.82308C1.27086 15.5912 0.824532 15.1647 0.824532 14.6371V13.2131C0.824532 12.6855 1.27086 12.259 1.82308 12.259H14.9933V2.8479C14.9933 2.02389 15.6969 1.35167 16.5592 1.35167H23.2162C24.941 1.35167 26.348 2.69611 26.348 4.34414V12.5987H26.3329Z"
                  fill="#FFA200"
                />
                <path
                  d="M6.64176 14.9045C5.77183 14.9045 5.06836 15.5768 5.06836 16.408C5.06836 17.2393 5.77183 17.9115 6.64176 17.9115C7.51169 17.9115 8.21521 17.2393 8.21521 16.408C8.20765 15.5768 7.50413 14.9045 6.64176 14.9045ZM6.64176 17.1308C6.21814 17.1308 5.87773 16.8056 5.87773 16.4008C5.87773 16.0032 6.21814 15.6707 6.64176 15.6707C7.05781 15.6707 7.40579 15.996 7.40579 16.4008C7.39823 16.8056 7.05781 17.1308 6.64176 17.1308Z"
                  fill="#272525"
                />
                <path
                  d="M21.6502 14.9045C20.7802 14.9045 20.0767 15.5768 20.0767 16.408C20.0767 17.2393 20.7802 17.9115 21.6502 17.9115C22.5202 17.9115 23.2238 17.2393 23.2238 16.408C23.2162 15.5768 22.5126 14.9045 21.6502 14.9045ZM21.6502 17.1308C21.2341 17.1308 20.8861 16.8056 20.8861 16.4008C20.8861 16.0032 21.2266 15.6707 21.6502 15.6707C22.0663 15.6707 22.4143 15.996 22.4143 16.4008C22.4067 16.8056 22.0663 17.1308 21.6502 17.1308Z"
                  fill="#272525"
                />
                <path
                  d="M9.05494 3.20935H6.55101V5.19707H4.4707V7.58956H6.55101V9.57727H9.05494V7.58956H11.1353V5.19707H9.05494V3.20935ZM10.3258 5.97047V6.81615H9.05494H8.65404H8.24551V7.20647V7.59679V8.8111H7.36802V7.59679V7.20647V6.81615H6.95954H6.55101H5.28014V5.97047H6.55101H6.95954H7.36802V5.58015V5.18984V3.97552H8.24551V5.18984V5.58015V5.97047H8.65404H9.05494H10.3258Z"
                  fill="#272525"
                />
                <path
                  d="M22.785 3.80917H20.8862V3.78748H16.3398V5.84032V7.26431V9.29547H18.4655H20.8862H22.785C23.9575 9.29547 24.9106 8.3847 24.9106 7.26431V5.84032C24.9031 4.71993 23.9499 3.80917 22.785 3.80917ZM24.0936 7.26431C24.0936 7.95823 23.5036 8.52203 22.7774 8.52203H20.8787H20.4702H20.0617H18.4504H17.346H17.1417V8.32687V7.26431V5.84032V4.78499V4.56814H17.3762H20.0617V4.58982H20.4702H20.8787H22.7774C23.5036 4.58982 24.0936 5.15363 24.0936 5.84755V7.26431Z"
                  fill="#272525"
                />
              </svg>
            }
            label="Ambulance"
          />}
          {facilities && facilities.includes('Event') && <FacilityItem
            icon={
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.96754 11.8317H6.36533V16.0222C6.36533 16.1513 6.47445 16.2506 6.60436 16.2506H7.83068C7.96578 16.2506 8.0697 16.1463 8.0697 16.0222V9.61731C8.0697 9.49318 7.96059 9.38892 7.83068 9.38892H6.78623C6.65112 9.38892 6.5472 9.49318 6.5472 9.61731C6.5472 9.6322 6.54201 9.68185 6.50564 9.80598C6.45887 9.9599 6.39132 10.084 6.30298 10.1734C6.16788 10.3075 6.0016 10.3968 5.78335 10.4415C5.63266 10.4713 5.35207 10.4961 4.95715 10.516C4.82725 10.5209 4.72852 10.6202 4.72852 10.7444V11.5984C4.72852 11.7275 4.83244 11.8317 4.96754 11.8317ZM5.20658 10.9628C5.51835 10.943 5.74179 10.9231 5.88729 10.8884C6.19906 10.8238 6.45368 10.6898 6.65114 10.4862C6.79143 10.3472 6.89535 10.1585 6.9629 9.93507C6.97329 9.90528 6.9785 9.87549 6.98889 9.8457H7.59166V15.7889H6.84339V11.5984C6.84339 11.4693 6.73426 11.37 6.60436 11.37H5.20658V10.9628Z"
                  fill="#333333"
                />
                <path
                  d="M9.49866 15.7638C9.95071 16.1263 10.5275 16.305 11.2185 16.305C12.0811 16.305 12.741 16.0419 13.1826 15.5255C13.6139 15.0191 13.8322 14.4431 13.8322 13.7977C13.8322 13.0529 13.5983 12.477 13.1359 12.0798C12.6838 11.6876 12.1434 11.489 11.5303 11.489C11.2237 11.489 10.9691 11.5287 10.7509 11.6032C10.7145 11.618 10.6782 11.6329 10.6366 11.6478L10.6989 10.9031H12.8865C13.0164 10.9031 13.1255 10.7988 13.1255 10.6747V9.61218C13.1255 9.48309 13.0164 9.38379 12.8865 9.38379H9.29602C9.17131 9.38379 9.06738 9.47812 9.05699 9.59728L8.80759 13.1224C8.80239 13.182 8.82317 13.2466 8.86994 13.2913C8.91151 13.3359 8.97385 13.3657 9.0414 13.3657L10.3508 13.4203C10.4443 13.4253 10.5327 13.3757 10.5742 13.2962C10.6522 13.1572 10.7561 13.0678 10.9016 13.0182C10.9951 12.9884 11.1042 12.9735 11.2393 12.9735C11.4991 12.9735 11.6706 13.048 11.7849 13.2118C11.9148 13.3955 11.9824 13.6289 11.9824 13.9069C11.9824 14.185 11.9148 14.4183 11.7745 14.5971C11.6498 14.7559 11.4732 14.8354 11.2237 14.8354C11.0107 14.8354 10.8548 14.7857 10.7561 14.6815C10.6418 14.5673 10.5638 14.3935 10.5223 14.1651C10.5015 14.0559 10.4028 13.9764 10.2885 13.9764H8.97905C8.9115 13.9764 8.84915 14.0013 8.80239 14.0509C8.75562 14.0956 8.73484 14.1601 8.74004 14.2247C8.78161 14.8751 9.03621 15.3964 9.49866 15.7638ZM10.0858 14.4282C10.1534 14.6566 10.2573 14.8453 10.4028 14.9893C10.595 15.1829 10.8704 15.2822 11.2185 15.2822C11.6238 15.2822 11.9356 15.1382 12.1538 14.8602C12.3565 14.602 12.4552 14.2793 12.4552 13.897C12.4552 13.5246 12.3617 13.2068 12.1746 12.9437C11.9668 12.6508 11.6498 12.5068 11.2289 12.5068C11.0471 12.5068 10.8808 12.5316 10.7353 12.5763C10.5223 12.6508 10.3508 12.7749 10.2209 12.9487L9.29602 12.9139L9.51424 9.83561H12.6371V10.4413H10.4703C10.3456 10.4413 10.2417 10.5307 10.2313 10.6499L10.1118 12.045C10.1066 12.1344 10.1482 12.2138 10.2261 12.2585C10.304 12.3032 10.4028 12.3032 10.4807 12.2536C10.7093 12.1096 10.8392 12.05 10.9068 12.0252C11.0679 11.9656 11.2757 11.9408 11.5199 11.9408C12.0135 11.9408 12.4344 12.0947 12.8033 12.4124C13.1671 12.7252 13.3385 13.1771 13.3385 13.7927C13.3385 14.3339 13.1619 14.8006 12.7981 15.2276C12.4448 15.6397 11.9252 15.8383 11.2082 15.8383C10.6262 15.8383 10.1638 15.6943 9.79483 15.4014C9.49346 15.1581 9.30641 14.8354 9.22847 14.4183H10.0858V14.4282Z"
                  fill="#333333"
                />
                <path
                  d="M16.5134 2.98893H15.9262C15.8743 2.98893 15.8275 2.99886 15.7807 3.01872V1.13202C15.7807 0.50643 15.2507 0 14.596 0C13.9413 0 13.4113 0.50643 13.4113 1.13202V2.99389C13.3905 2.98893 13.3645 2.98893 13.3437 2.98893H5.20656C5.17538 2.98893 5.1442 2.99389 5.11822 2.99886V1.13202C5.11822 0.50643 4.58821 0 3.93349 0C3.27878 0 2.74877 0.50643 2.74877 1.13202V3.00879C2.7124 2.99389 2.67082 2.98893 2.62925 2.98893H2.04209C0.91452 2.98893 0 3.86277 0 4.94017V17.3775C0 18.4549 0.91452 19.3287 2.04209 19.3287H16.5186C17.6462 19.3287 18.5607 18.4549 18.5607 17.3775V4.94017C18.5555 3.86277 17.6409 2.98893 16.5134 2.98893ZM14.0764 1.13202C14.0764 0.858944 14.3102 0.635519 14.596 0.635519C14.8818 0.635519 15.1156 0.858944 15.1156 1.13202V4.54297C15.1156 4.81604 14.8818 5.03947 14.596 5.03947C14.3102 5.03947 14.0764 4.81604 14.0764 4.54297V1.13202ZM3.41388 1.13202C3.41388 0.858944 3.64771 0.635519 3.93349 0.635519C4.21928 0.635519 4.45311 0.858944 4.45311 1.13202V4.54297C4.45311 4.81604 4.21928 5.03947 3.93349 5.03947C3.64771 5.03947 3.41388 4.81604 3.41388 4.54297V1.13202ZM17.8384 17.3775C17.8384 18.0726 17.246 18.6386 16.5134 18.6386H2.0369C1.30944 18.6386 0.711871 18.0726 0.711871 17.3775V4.94017C0.711871 4.24507 1.30424 3.6741 2.0369 3.6741H2.26553V4.34934C2.26553 5.21821 3.00338 5.9282 3.91791 5.9282C4.82723 5.9282 5.57028 5.21821 5.57028 4.34934V3.6741H12.9852V4.34934C12.9852 5.21821 13.7231 5.9282 14.6376 5.9282C15.5469 5.9282 16.29 5.21821 16.29 4.34934V3.6741H16.5186C17.246 3.6741 17.8436 4.24011 17.8436 4.94017V17.3775H17.8384Z"
                  fill="#FFA200"
                />
                <path
                  d="M16.7889 7.94409H1.82924C1.63178 7.94409 1.4707 8.098 1.4707 8.28667V16.737C1.4707 17.3874 2.02668 17.9186 2.71257 17.9186H15.916C16.5966 17.9186 17.1578 17.3874 17.1578 16.737V8.28667C17.1474 8.098 16.9864 7.94409 16.7889 7.94409ZM16.4304 16.737C16.4304 17.01 16.1965 17.2335 15.9108 17.2335H2.70737C2.42158 17.2335 2.18776 17.01 2.18776 16.737V8.63422H16.4304V16.737Z"
                  fill="#FFA200"
                />
              </svg>
            }
            label="Event"
          />}
          {facilities && facilities.includes('Games') && <FacilityItem
            icon={
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4262 9.64605C12.9217 9.58745 13.3986 9.46442 13.8817 9.27107C14.7859 8.90781 15.6343 8.36291 16.3404 7.69498C17.6595 6.44699 18.6504 4.42561 17.4799 2.48039C16.9783 1.6484 16.0864 1.47262 15.3742 1.44332C15.0769 1.0449 14.6001 0.810547 14.0613 0.810547H3.89815C3.35933 0.810547 2.88244 1.0449 2.58516 1.44332C1.87913 1.47848 1.01828 1.66597 0.522821 2.47453C-0.653896 4.41388 0.343214 6.44113 1.66237 7.68911C2.3684 8.35705 3.21688 8.90194 4.12109 9.26521C4.60417 9.45856 5.07486 9.58161 5.56413 9.6402C5.92334 9.81597 6.12771 10.1441 5.94811 10.6362C5.65703 11.4448 4.80236 11.7202 3.99104 11.4565C3.52655 11.3042 3.32835 11.9956 3.78665 12.1479C5.05007 12.5639 6.37544 11.937 6.71606 10.7007C6.73464 10.6362 6.74704 10.5718 6.75942 10.5132L8.28915 13.2377V14.2103C8.28915 14.222 8.28915 14.2396 8.28915 14.2513V15.8215C5.74992 15.927 3.27882 16.636 3.27882 17.8605C3.27882 19.1964 6.20823 19.917 8.97041 19.917C11.7264 19.917 14.662 19.1964 14.662 17.8605C14.662 16.6301 12.1785 15.927 9.63308 15.8215V14.8255C9.63308 14.7552 9.63927 14.6907 9.65166 14.6263V13.2318L11.2124 10.4546C11.2248 10.5308 11.2371 10.6128 11.2619 10.6948C11.6025 11.9311 12.9279 12.558 14.1913 12.142C14.6496 11.9897 14.4514 11.2983 13.9869 11.4507C13.1756 11.7143 12.3209 11.4389 12.0299 10.6304C11.8688 10.1499 12.0732 9.82182 12.4262 9.64605ZM5.70038 8.89024C5.62606 8.88438 5.55173 8.8668 5.47742 8.85508C5.37213 8.82579 5.27303 8.8082 5.16155 8.79062C4.92002 8.73203 4.68468 8.66173 4.43695 8.56213C3.62564 8.23402 2.86387 7.74771 2.23216 7.15009C1.12357 6.10131 0.275094 4.4256 1.22266 2.85536C1.44562 2.48038 1.81102 2.31048 2.2941 2.24017L5.86759 8.88437C5.78708 8.89023 5.72515 8.89024 5.70038 8.89024ZM10.7417 16.4777C10.8532 16.4895 10.9646 16.507 11.0761 16.5188C11.2495 16.5422 11.4167 16.5715 11.584 16.6008C11.7883 16.6418 11.9803 16.6828 12.1661 16.7297C12.3767 16.7824 12.5749 16.841 12.7483 16.8996C12.8969 16.9523 13.0332 16.9992 13.157 17.0578C13.2623 17.1047 13.3552 17.1515 13.4419 17.1984C13.8445 17.4152 14.0613 17.6496 14.0613 17.8546C14.0613 18.4757 12.129 19.337 8.97659 19.337C5.82423 19.337 3.89195 18.4757 3.89195 17.8546C3.89195 17.2804 5.55173 16.5012 8.29533 16.3899V17.2277C8.30153 17.4152 8.37585 17.5617 8.49352 17.6613C8.79699 17.925 9.36058 17.8781 9.57734 17.5207C9.6083 17.4738 9.62689 17.4211 9.64547 17.3625V16.384C10.0295 16.4074 10.401 16.4367 10.7417 16.4777ZM11.3486 8.59142L9.26768 12.2885C9.17478 12.2533 9.08188 12.2358 8.98279 12.2358C8.8837 12.2358 8.78461 12.2533 8.69791 12.2885L5.95429 7.41373L3.21069 2.53899C3.15495 2.44524 3.13018 2.33976 3.13637 2.2343C3.13637 2.22844 3.13638 2.21674 3.14257 2.21088C3.14257 2.1933 3.14875 2.18157 3.14875 2.164C3.14875 2.15814 3.14875 2.15814 3.14875 2.15228C3.15494 2.13471 3.16115 2.11127 3.16115 2.09369C3.16734 2.07611 3.16733 2.05852 3.17353 2.04681C3.18591 2.01165 3.2045 1.97064 3.22308 1.94135C3.26024 1.88862 3.29739 1.84174 3.34694 1.79487C3.39648 1.75386 3.44604 1.71871 3.50797 1.68941C3.57609 1.65426 3.65042 1.63082 3.72474 1.61324C3.73712 1.61324 3.7495 1.60737 3.75569 1.60737C3.79905 1.60152 3.84859 1.59566 3.89195 1.59566H14.0551H14.0613C14.1046 1.59566 14.1541 1.60152 14.1975 1.60737C14.2099 1.60737 14.2223 1.61324 14.2347 1.61324C14.278 1.6191 14.3152 1.63082 14.3585 1.64839C14.3585 1.64839 14.3585 1.64839 14.3647 1.64839C14.3957 1.66011 14.4266 1.67183 14.4514 1.68941C14.5381 1.73042 14.6124 1.78902 14.6682 1.85933C14.6806 1.87105 14.6868 1.88861 14.6992 1.90033C14.7115 1.91205 14.7239 1.92963 14.7301 1.94135C14.7859 2.02923 14.8106 2.12298 14.8168 2.21672C14.823 2.29289 14.8106 2.3632 14.7859 2.43937C14.7735 2.47453 14.7611 2.50968 14.7425 2.54483L11.3486 8.59142ZM12.0918 8.89024L15.6405 2.28703C15.6405 2.26945 15.6405 2.25188 15.6405 2.2343C16.1608 2.29875 16.5447 2.46866 16.7801 2.85536C17.7277 4.4256 16.8792 6.10131 15.7706 7.15009C15.1389 7.74771 14.3771 8.23402 13.5658 8.56213C13.3366 8.65587 13.1075 8.72617 12.8783 8.78476C12.7483 8.80234 12.6182 8.82578 12.5006 8.86093C12.4386 8.87265 12.3829 8.87852 12.3209 8.89024C12.2776 8.89024 12.1971 8.89024 12.0918 8.89024Z"
                  fill="#FFA200"
                />
              </svg>
            }
            label="Games"
          />}
          {facilities && facilities.includes('Pool') && <FacilityItem
            icon={
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02437 14.2258C1.02437 13.603 1.55206 13.0988 2.20391 13.0988C2.85576 13.0988 3.38345 13.603 3.38345 14.2258C3.38345 14.3029 3.40207 14.3741 3.43932 14.4394C3.60073 15.4478 4.50712 16.2189 5.60596 16.2189C6.74204 16.2189 7.68566 15.3826 7.7912 14.3207C7.79741 14.2911 7.80361 14.2555 7.80361 14.2199C7.80361 13.597 8.3313 13.0928 8.98314 13.0928C9.635 13.0928 10.1627 13.597 10.1627 14.2199C10.1627 14.297 10.1813 14.3682 10.2186 14.4335C10.38 15.4419 11.2864 16.213 12.3852 16.213C13.5213 16.213 14.4649 15.3766 14.5704 14.3148C14.5766 14.2851 14.5829 14.2495 14.5829 14.2139C14.5829 13.5911 15.1105 13.0869 15.7624 13.0869C16.4143 13.0869 16.9419 13.5911 16.9419 14.2139C16.9419 14.4809 17.1654 14.6944 17.4448 14.7004C17.7242 14.7004 17.9539 14.4809 17.9539 14.2139C17.9539 13.0572 16.973 12.12 15.7624 12.12C14.6263 12.12 13.6827 12.9564 13.5772 14.0182C13.5709 14.0479 13.5647 14.0835 13.5647 14.119C13.5647 14.7419 13.037 15.2461 12.3852 15.2461C11.7333 15.2461 11.2057 14.7419 11.2057 14.119C11.2057 14.0419 11.187 13.9708 11.1498 13.9055C10.9884 12.8971 10.082 12.1259 8.98314 12.1259C7.84706 12.1259 6.90344 12.9623 6.7979 14.0241C6.79169 14.0538 6.78549 14.0894 6.78549 14.125C6.78549 14.7478 6.25781 15.252 5.60596 15.252C4.95411 15.252 4.4264 14.7478 4.4264 14.125C4.4264 14.0479 4.40778 13.9767 4.37053 13.9114C4.20912 12.903 3.30274 12.1319 2.20391 12.1319C0.99333 12.1319 0.0124512 13.0691 0.0124512 14.2258C0.0124512 14.4928 0.242155 14.7122 0.52152 14.7122C0.540144 14.7122 0.564962 14.7063 0.583586 14.7063C0.83191 14.6707 1.02437 14.469 1.02437 14.2258Z"
                  fill="#333333"
                />
                <path
                  d="M15.3774 2.94942V4.82391H10.0819V2.94942C10.0819 2.32658 10.6592 1.82239 11.3732 1.82239C12.0871 1.82239 12.6645 2.32658 12.6645 2.94942C12.6645 3.21635 12.8879 3.4299 13.1735 3.4299C13.4529 3.4299 13.6826 3.21042 13.6826 2.94942C13.6826 1.79271 12.652 0.855497 11.3794 0.855497C10.1129 0.855497 9.07617 1.79864 9.07617 2.94942V10.7439C9.07617 11.0108 9.29965 11.2244 9.58522 11.2244C9.8708 11.2244 10.0943 11.0108 10.0943 10.7439V9.07703H15.3898V10.7439C15.3898 11.0108 15.6195 11.2244 15.8989 11.2244C16.1783 11.2244 16.408 11.0108 16.408 10.7439V2.94942C16.408 2.32658 16.9853 1.82239 17.6992 1.82239C18.4132 1.82239 18.9905 2.32658 18.9905 2.94942C18.9905 3.21635 19.214 3.4299 19.4996 3.4299C19.779 3.4299 20.0087 3.21042 20.0087 2.94942C20.0087 1.79271 18.9781 0.855497 17.7055 0.855497C16.408 0.849565 15.3774 1.79271 15.3774 2.94942ZM10.0819 8.11014V5.7908H15.3774V8.11014H10.0819Z"
                  fill="#FFA200"
                />
                <path
                  d="M15.7561 16.9011C14.6201 16.9011 13.6764 17.7375 13.5709 18.7993C13.5647 18.829 13.5585 18.8646 13.5585 18.9002C13.5585 19.523 13.0308 20.0272 12.3789 20.0272C11.7271 20.0272 11.1994 19.523 11.1994 18.9002C11.1994 18.8231 11.1808 18.7519 11.1435 18.6866C10.9821 17.6782 10.0757 16.9071 8.97691 16.9071C7.84083 16.9071 6.89718 17.7435 6.79164 18.8053C6.78544 18.8349 6.77923 18.8705 6.77923 18.9061C6.77923 19.529 6.25155 20.0332 5.5997 20.0332C4.94785 20.0332 4.42016 19.529 4.42016 18.9061C4.42016 18.829 4.40154 18.7578 4.36429 18.6926C4.20288 17.6841 3.29649 16.913 2.19765 16.913C1.55201 16.913 0.974661 17.1799 0.571135 17.607C0.217273 17.9807 0 18.4671 0 19.0069C0 19.2739 0.229685 19.4934 0.50905 19.4934C0.527674 19.4934 0.55251 19.4874 0.571135 19.4874C0.819459 19.4578 1.0119 19.2561 1.0119 19.0069C1.0119 18.3841 1.53961 17.8799 2.19146 17.8799C2.84331 17.8799 3.37099 18.3841 3.37099 19.0069C3.37099 19.0841 3.38962 19.1552 3.42686 19.2205C3.58828 20.2289 4.49465 21.0001 5.59349 21.0001C6.72957 21.0001 7.67321 20.1637 7.77875 19.1019C7.78496 19.0722 7.79116 19.0366 7.79116 19.001C7.79116 18.3782 8.31884 17.874 8.97069 17.874C9.62254 17.874 10.1502 18.3782 10.1502 19.001C10.1502 19.0781 10.1689 19.1493 10.2061 19.2146C10.3675 20.223 11.2739 20.9942 12.3727 20.9942C13.5088 20.9942 14.4524 20.1577 14.558 19.0959C14.5642 19.0663 14.5704 19.0307 14.5704 18.9951C14.5704 18.3722 15.0981 17.868 15.7499 17.868C16.4018 17.868 16.9295 18.3722 16.9295 18.9951C16.9295 19.262 17.153 19.4815 17.4323 19.4815C17.7117 19.4815 17.9414 19.2679 17.9414 18.9951C17.9414 18.4849 17.749 18.0222 17.4323 17.6604C17.0412 17.1977 16.4328 16.9011 15.7561 16.9011Z"
                  fill="#FFA200"
                />
              </svg>
            }
            label="Pool"
          />}
          {facilities && facilities.includes('Library') && <FacilityItem
            icon={
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.87906V17.512C0 18.6494 1.11633 19.5805 2.48886 19.5805H13.463C14.8356 19.5805 15.9519 18.7288 15.9519 17.676V4.43969C15.9519 3.84718 15.5981 3.29699 14.9942 2.93725V2.87906C14.9942 1.74164 13.8779 0.810547 12.5053 0.810547H2.48886C1.11633 0.815837 0 1.74164 0 2.87906ZM0.793017 2.87906C0.793017 2.12254 1.55554 1.50358 2.48886 1.50358H12.5053C13.4386 1.50358 14.1951 2.12254 14.1951 2.87906V3.1277C14.1951 3.25467 14.2744 3.37106 14.4025 3.42925C14.8722 3.65673 15.1528 4.03234 15.1528 4.4344V17.6707C15.1528 18.3373 14.3964 18.8822 13.463 18.8822H2.48886C1.55554 18.8822 0.793017 18.2633 0.793017 17.5067V2.87906Z"
                  fill="#FFA200"
                />
                <path
                  d="M2.72668 3.90986C2.79988 3.96276 2.88528 3.98921 2.97678 3.98921H4.92884V9.76076C4.92884 9.89831 5.02644 10.0253 5.17284 10.0782C5.22165 10.0993 5.27655 10.1046 5.33145 10.1046C5.43515 10.1046 5.53275 10.0729 5.60596 10.0094L7.253 8.64454L8.97935 10.0147C9.09526 10.1046 9.26606 10.1311 9.40636 10.0782C9.55277 10.0253 9.64427 9.89831 9.64427 9.76076V3.98921H13.5118C13.6704 3.98921 13.8168 3.90457 13.8778 3.7776C13.9083 3.71412 14.1767 3.14279 13.8656 2.63494C13.7314 2.41804 13.4386 2.13237 12.8042 2.02128C12.7798 2.01599 12.7554 2.01599 12.7249 2.01599H2.98289C2.95849 2.01599 2.93408 2.01599 2.91578 2.02128C2.83648 2.03186 2.11056 2.15882 1.95806 2.66668C1.78115 3.23272 2.49487 3.74586 2.72668 3.90986ZM3.01949 2.709H12.6944C12.9323 2.75661 13.097 2.84125 13.1702 2.95764C13.2312 3.06344 13.2373 3.1904 13.219 3.30149H9.25386C9.03425 3.30149 8.85735 3.4549 8.85735 3.64535V8.98311L7.52141 7.92508C7.44821 7.86689 7.35061 7.83515 7.253 7.83515C7.1554 7.83515 7.0517 7.86689 6.97849 7.93037L5.73406 8.96195V3.65064C5.73406 3.4602 5.55716 3.30678 5.33755 3.30678H3.12929C2.71448 2.98937 2.72058 2.84654 2.72058 2.84654C2.73888 2.80422 2.87918 2.73545 3.01949 2.709Z"
                  fill="#333333"
                />
                <path
                  d="M6.44176 6.55062L6.35026 7.0214C6.33806 7.08487 6.36856 7.15364 6.42957 7.19067C6.46617 7.21183 6.50277 7.22241 6.54547 7.22241C6.57597 7.22241 6.60647 7.21711 6.63697 7.20125L7.125 6.97908L7.61302 7.20125C7.68013 7.23298 7.75943 7.2277 7.82043 7.19067C7.88144 7.15364 7.91194 7.08487 7.89974 7.0214L7.80823 6.55062L8.20475 6.21736C8.25966 6.16975 8.27796 6.101 8.25356 6.04281C8.22915 5.97933 8.16815 5.93701 8.09495 5.92644L7.54592 5.85767L7.30191 5.4292C7.26531 5.37102 7.1982 5.33398 7.125 5.33398C7.0518 5.33398 6.97859 5.37102 6.94809 5.4292L6.70408 5.85767L6.15505 5.92644C6.08185 5.93701 6.02085 5.97933 5.99645 6.04281C5.97204 6.10629 5.99034 6.17504 6.04524 6.21736L6.44176 6.55062ZM6.86878 6.18034C6.93589 6.16976 6.99079 6.13802 7.02129 6.08512L7.1311 5.8894L7.2409 6.08512C7.2714 6.13802 7.32631 6.16976 7.39341 6.18034L7.64353 6.21208L7.46051 6.36547C7.41171 6.40779 7.39341 6.46069 7.40561 6.51888L7.44832 6.73576L7.2226 6.63525C7.1921 6.61938 7.1616 6.61409 7.1311 6.61409C7.1006 6.61409 7.0701 6.61938 7.0396 6.63525L6.81388 6.73576L6.85659 6.51888C6.86879 6.46069 6.84439 6.40779 6.80169 6.36547L6.61867 6.21208L6.86878 6.18034Z"
                  fill="#FFA200"
                />
              </svg>
            }
            label="Library"
          />}
        </div>
      </div>
      
    </div>
  );
};
export default CollegeFacility;

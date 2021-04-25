import React from "react";

const SmallGraph = ({color}) => (<svg
              width="21"
              height="81"
              viewBox="0 0 21 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0913696 80.3965L0.598341 10.3487C0.637739 4.9051 5.08096 0.415188 10.5226 0.320205C15.9642 0.225221 20.3435 4.56113 20.3041 10.0047L19.7971 80.0526L0.0913696 80.3965Z"
                fill={color}
              />
            </svg>)

const MidGraph = ({color}) => (<svg
              width="22"
              height="131"
              viewBox="0 0 22 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                //d="M0.0913696 80.3965L0.598341 10.3487C0.637739 4.9051 5.08096 0.415188 10.5226 0.320205C15.9642 0.225221 20.3435 4.56113 20.3041 10.0047L19.7971 80.0526L0.0913696 80.3965Z"
                d="M0.762774 130.938L1.63119 10.9497C1.67059 5.50608 6.11381 1.01617 11.5554 0.921186C16.997 0.826202 21.3764 5.16212 21.337 10.6057L20.4685 130.594L0.762774 130.938Z"
                fill={color}
              />
            </svg>)

const BigGraph = ({color}) => (<svg
              width="22"
              height="149"
              viewBox="0 0 22 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0701702 148.507L1.35474 10.9439C1.40557 5.50032 5.85814 1.01865 11.2998 0.93383C16.7415 0.849014 21.1117 5.19317 21.0609 10.6368L19.7763 148.2L0.0701702 148.507Z"
                fill={color}
              />
            </svg>)

const Bargraph = (props: any) => {
  const { name, graph1, graph2, graph3 } = props;
  // console.log(graph1, graph2, graph3)
  return (
    <>
      <div className="bargraph__container">
        <div className="bargraph__details">
          <div className="bargraph__1">
            <div className="bargraph__index">{graph1.value}</div>
            {
              graph1.size === 'sm' ? <SmallGraph color="#2D9CDB"/> : graph1.size === 'md' ? <MidGraph color="#2D9CDB"/> : <BigGraph color="#2D9CDB"/>
            }
            {/* <svg
              width="21"
              height="81"
              viewBox="0 0 21 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0913696 80.3965L0.598341 10.3487C0.637739 4.9051 5.08096 0.415188 10.5226 0.320205C15.9642 0.225221 20.3435 4.56113 20.3041 10.0047L19.7971 80.0526L0.0913696 80.3965Z"
                fill="#2D9CDB"
              />
            </svg> */}
          </div>
          <div className="bargraph__2">
            <div className="bargraph__index">{graph2.value}</div>
            {
              graph2.size === 'sm' ? <SmallGraph color="#27AE60"/> : graph2.size === 'md' ? <MidGraph color="#27AE60"/> : <BigGraph color="#27AE60"/>
            }
            {/* <svg
              width="22"
              height="131"
              viewBox="0 0 22 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                //d="M0.0913696 80.3965L0.598341 10.3487C0.637739 4.9051 5.08096 0.415188 10.5226 0.320205C15.9642 0.225221 20.3435 4.56113 20.3041 10.0047L19.7971 80.0526L0.0913696 80.3965Z"
                d="M0.762774 130.938L1.63119 10.9497C1.67059 5.50608 6.11381 1.01617 11.5554 0.921186C16.997 0.826202 21.3764 5.16212 21.337 10.6057L20.4685 130.594L0.762774 130.938Z"
                fill="#27AE60"
              />
            </svg> */}
          </div>
          <div className="bargraph__3">
            <div className="bargraph__index">{graph3.value}</div>
            {
              graph3.size === 'sm' ? <SmallGraph color="#FFA200"/> : graph3.size === 'md' ? <MidGraph color="#FFA200"/> : <BigGraph color="#FFA200"/>
            }
            {/* <svg
              width="22"
              height="149"
              viewBox="0 0 22 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0701702 148.507L1.35474 10.9439C1.40557 5.50032 5.85814 1.01865 11.2998 0.93383C16.7415 0.849014 21.1117 5.19317 21.0609 10.6368L19.7763 148.2L0.0701702 148.507Z"
                fill="#FFA200"
              />
            </svg> */}
          </div>
        </div>
        <div className="bargraph__index">{name}</div>
      </div>
    </>
  );
};

export default Bargraph;

{
  /* <svg
width="21"
height="81"
viewBox="0 0 21 81"
fill=""
xmlns="http://www.w3.org/2000/svg"
>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M0.0913696 80.3965L0.598341 10.3487C0.637739 4.9051 5.08096 0.415188 10.5226 0.320205C15.9642 0.225221 20.3435 4.56113 20.3041 10.0047L19.7971 80.0526L0.0913696 80.3965Z"
  fill="#2D9CDB"
/>
</svg> */
}

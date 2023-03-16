import React from "react";
import { Feature } from "../feature";
import { FeatureHowAdmizz } from "../featureHowAdmizzHelp";
import Link from "next/link";
import { getAllTieUp } from "store/Action/tieup.action";
import { CallToAction } from "../Button/callToAction";
import { useDispatch } from "react-redux";

const HowAdmizz = ({ college }) => {
  const dispatch = useDispatch();
  const [tieupList, setTieupList] = React.useState([]);

  const getTieUp = async () => {
    const fetchTiups = await dispatch<any>(getAllTieUp());
    setTieupList(fetchTiups);
  };

  React.useEffect(() => {
    getTieUp();
  }, []);
  const data = [
    {
      title: "Affordable learning ",
           
    },
    {
      title: "Find your passion with diverse institutions",
      
    
    },
    {
      title: "Learn from top-notch faculty",
      // description:
      //   "Apply for scholarships, tailored to your course of choice. Get guidance and preparation support today.",
      
    },
    {
      title: "Immerse in rich cultures and broaden horizons",
      // description:
      //   "Simplify the admission process with access to a wide range of courses for 10+2, under-graduate, graduate, and doctorate students.",
      
    },
    {
      title: "Unique educational opportunities ",
      // description:
      //   "Simplify the admission process with access to a wide range of courses for 10+2, under-graduate, graduate, and doctorate students.",
      
    },
    {
      title: "Unlock emerging job opportunities",
      
    },
    {
      title: "Financial support for your future",
      
      
    },
    {
      title: "Speak the global language ",
      
      
    },
  ];

  return (
    <div className="howAhelp" style={{backgroundColor:"#f3f3f2",paddingTop:"30px", textAlign:"center", }}>
      <div className="howAhelp_backgroundimage" >
                {/* content wrapper */}
                <div className="section-wrapper">
                      <div className="howAhelp__content" style={{textAlign:"center",color:"#5f1802"}} >
                              <div >
                                  <div className="howAhelp__about_title" style={{margin:"10px 0"}} >About Admizz</div>
                                  <div className="howAhelp__title" >Learn what we do at Admizz Education!</div>
                                  <div className="howAhelp__helpertext" style={{textAlign:"center"}} >
                                  Whether you're selecting a college, pursuing new career opportunities, or looking to broaden your horizons, our expert team is here to empower your journey. We help find the perfect designation for your academic journey. Study at a prestigious institution in Europe. Explore diverse cultural landscapes in Asia or widen our opportunity in the Americas.
                                  </div>
                                  {/* <div className="howAhelp__helpertext" style={{marginTop:"5px",textAlign:"center"}}>
                                  
                                  </div> */}
                              </div>
                              {/* <div className="us__rightcontent">
                                <Link href="/aboutus">
                                  <CallToAction className="white-outline" style="background-color:yellow">
                                    Know Admizz Better
                                  </CallToAction>
                                </Link>
                              </div> */}
                      </div>
                </div>
                {/* content wrapper */}
          </div>
        <div className="howAhelp__feature" style={{marginTop:"50px",}}>
          <div className="section-wrapper">
            {/* feature container */}
              <div className="howAhelp__feature_container" style={{fontWeight:"500"}}>
                {data.map((data) => {
                  return <FeatureHowAdmizz data={data}  />;
                })}
            </div>
          {/* XX-feature container-XX*/}
          </div>
               
        </div>
        {/* demo */}

        {/* -----------------V2-CONTENT BOX -----------------*/}
        {/* ;<div className="ag-format-container">
  <div className="ag-courses_box"> */}

    {/* item */}
    {/* <div className="ag-courses_item" style={{border:"2px solid #f9b234"}}>
      <div  className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title " >
        Affordable learning 
        </div> */}


        {/* <div className="ag-courses-item_descp">
          descrioption
        </div> */}
        {/* <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">04.11.2022</span>
        </div> */}


      {/* </div>
    </div> */}


    {/* X-item-X */}


     {/* item */}
     {/* <div className="ag-courses_item" style={{border:"2px solid #3ecd5e"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Find your passion with diverse institutions
        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
      {/* item */}
      {/* <div className="ag-courses_item" style={{border:"2px solid #e44002"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Learn from top-notch faculty
        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
      {/* item */}
      {/* <div className="ag-courses_item" style={{border:"2px solid #952aff"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Immerse in rich cultures and broaden horizons
        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
      {/* item */}
      {/* <div className="ag-courses_item" style={{border:"2px solid #cd3e94"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Unique educational opportunities 
        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
      {/* item */}
      {/* <div className="ag-courses_item" style={{border:"2px solid #4c49ea"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Unlock emerging job opportunities

        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
      {/* item */}
      {/* <div className="ag-courses_item" style={{border:"2px solid #f9b234"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Financial support for your future
        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
     {/* item */}
     {/* <div className="ag-courses_item" style={{border:"2px solid #952aff"}}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        Speak the global language 
        </div>
       
      </div>
    </div> */}
    {/* X-item-X */}
  {/* </div>
</div> */}

        {/* demo */}
                
    
        
    </div>
  );
};

export { HowAdmizz };

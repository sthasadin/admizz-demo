import React from "react";
import { Feature } from "../feature";
import { FeatureHowAdmizz } from "../featureHowAdmizzHelp";
import Link from "next/link";
import { getAllTieUp } from "store/Action/tieup.action";
import { CallToAction } from "../Button/callToAction";
import { useDispatch } from "react-redux";

import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";

import Backdrop from "@material-ui/core/Backdrop";
const MTModal: any = Modal;
const RTReactPlayer: any = ReactPlayer;

const HowAdmizzV2 = ({ college }) => {
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                                      Whether you're selecting a college, pursuing new career opportunities, or looking to broaden your horizons, our expert team is here to empower your journey. We help find the perfect designation for your academic journey. <br/><span style={{fontWeight:"600"}}>Study at a prestigious institution in <span style={{color:"#ffa200"}}>Asia, Europe & America</span>. Explore diverse cultural landscapes in Asia or widen our opportunity in the Americas.</span>
                                      </div>
                                    
                                  </div>
                                
                          </div>
                    </div>
                   
                    <div className="howAhelp__feature" style={{marginTop:"50px",}}>

                          <div className="merit">
                            <div className="merit__inner section-wrapper">
                              {/* left */}
                              <div className="merit__left">
                            

                            
                                    <div className="section-wrapper" style={{width:"100%", marginTop:"-60px", marginBottom:"50px"}}>
                                        {/* feature container */}
                                          <div className="howAhelp__feature_container" style={{fontWeight:"500"}}>
                                            {data.map((data) => {
                                              return <FeatureHowAdmizz data={data}  />;
                                            })}
                                        </div>
                                      {/* XX-feature container-XX*/}
                                      </div>
                              
                                      <CallToAction className="learnmore__btn hideofmobile" > 
                              <Link href="/allindia">Learn More</Link>
                            </CallToAction>
                              </div>
                              {/* left */}

                              {/* right */}
                              <div className="merit__right">
          <div className="merti__right__inner">
            <div className="merit__thumbnail">
              <img src="/why-study-in-india.png" alt="why-study-in-india" />
              <img
                src="/playvideoIcon.png"
                alt="playicon_logo"
                className="playicon-formobileversion"
                onClick={handleOpen}
              />
            </div>
            <div className="merit__thumbnail__text">
              <div className="merit__thumbnail__title">
                Some facts that you should know about Admizz education.
              </div>
              <div className="merit__thumbnail__cta">
                <a
                  href="https://www.youtube.com/watch?v=_xMXR5_CnQM"
                  target="_blank"
                >
                  watch video
                </a>
              </div>
            </div>

            <div className="formobile">
              <CallToAction className="learnmore__btn">
                <Link href="/allindia">Learn More</Link>
              </CallToAction>
            </div>
          </div>
                              </div>
                              {/* right */}
                            </div>
                          </div>
                    </div>
                {/* content wrapper */}
              </div>
       
               
    </div>
  
                
    
    
  );
};

export { HowAdmizzV2 };

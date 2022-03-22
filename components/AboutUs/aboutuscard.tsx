import React from "react";


const AboutusCard = ({data}) =>{
  return(
    <div>
{data?.map((item)=>{
  return(
    <div className="about-us__card">
    <blockquote>
      <p>
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis
        pulvinar justo dictum blandit eget vel diam. Morbi ornare vulputate
        nulla, non vestibulum nisi. Sed eu turpis pulvinar justo dictum
        blandit eget vel diam. Morbi ornare vulputate nulla, non vestibulum
        nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        turpis pulvinar justo dictum blandit eget vel diam. Morbi ornare
        vulputate nulla, non vestibulum nisi. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.{" "} */}
        {item?.designation}
      </p>{" "}
    </blockquote>
  </div>
  )
})
   
  }
  </div>  
  )
}

export { AboutusCard};
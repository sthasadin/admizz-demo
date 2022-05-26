import React,{useState} from "react";
import Layout from "../../layouts";
import { CounselingStepper } from "../../components";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

const FreeCounseling = () => {
  const router = useRouter();

  const [isOpenCounselling, setIsOpenCounselling] = useState(false);
  const openCounselling = () =>{
    if(auth.currentUser) {
      setIsOpenCounselling(true);
    }else{
      router.push("/login");
    }
  }

  return (
    <Layout title="Booking" stickyBar={true}>
      <div className="free-counseling">
        <div className="free-counseling__container">
          <div className="free-counseling__header"
          onClick={() =>{
            openCounselling()
          }}
          >
            Book a Free Counseling Session
          </div>
          <hr className="free-counseling__divider" />
          <CounselingStepper />
        </div>
      </div>
    </Layout>
  );
};

export default FreeCounseling;

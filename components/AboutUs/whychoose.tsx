import React from "react";
import { CallToAction } from "../Button/callToAction";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";
import Modal from "@material-ui/core/Modal";
import Link from "next/link";
import Backdrop from "@material-ui/core/Backdrop";

const Merits = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="merit">
      <div className="merit__inner section-wrapper">
        <div className="merit__left">
          <div className="merit__heading block-heading">About Admizz</div>
          <div className="merit__title block-title">
          Why Choose <span>Admizz</span>
          </div>
          <div className="merit__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula felis quis elit volutpat, sed pulvinar nunc tempus. Aliquam molestie tristique ultricies.
          </div>
          <div className="merit__desc">
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere nibh vestibulum, auctor urna ac, convallis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin commodo risus id ipsum ultrices, ut ornare nisi imperdiet. Nulla facilisi.
          </div>
          <div className="merit__desc">
          Aenean euismod ante metus. Nam ac enim rhoncus, porttitor urna et, dapibus lorem. Maecenas sit amet ante metus. Mauris in tincidunt nisl. Mauris et velit laoreet, ullamcorper metus mollis, lacinia diam.           
          </div>
          <div className="merit__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula felis quis elit volutpat,
          sed pulvinar nunc tempus. Aliquam molestie tristique ultricies. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere nibh vestibulum,
          auctor urna ac, convallis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.Proin commodo risus id ipsum ultrices, ut ornare nisi imperdiet. Nulla facilisi. Aenean euismod ante metus. Nam ac enim rhoncus, porttitor urna et, dapibus lorem. Maecenas sit amet ante metus. Mauris in tincidunt nisl. Mauris et velit laoreet, ullamcorper metus mollis, lacinia diam.           </div>
        </div>
        <div className="merti__right__inner">
            <div className="merit__thumbnail">
              <img src="/admiz.png" alt="admiz" />
            </div>
        </div>
      </div>
    </div>
  );
};

export { Merits };

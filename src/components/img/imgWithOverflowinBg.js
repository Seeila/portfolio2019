import React from "react";
import PropTypes from "prop-types";
import { ImgContainer, Img } from "./ImgWithOverflowinBg.style";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImgWithOverflowingBg = React.forwardRef((props, ref) => {
  return (
    <ImgContainer className={props.className} ref={ref}>
      <Img
        src={props.imgSrc}
        alt={props.imgAlt}
        placeholderSrc={props.imgLazy}
      />
    </ImgContainer>
  );
});
//needed for eslint
ImgWithOverflowingBg.displayName = "ImgWithOverflowingBg";

ImgContainer.prototype = {
  className: PropTypes.string.isRequired,
};

Img.prototype = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default ImgWithOverflowingBg;

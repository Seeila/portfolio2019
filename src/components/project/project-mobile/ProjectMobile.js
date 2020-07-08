import React from "react";
import PropTypes from "prop-types";
import StretchedLink from "../../links/stretched-link/Stretched-link";
import Title from "../../text/Title";
import {
  ProjectSection,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./ProjectMobile.styles";

const Project = (props) => {
  return (
    <ProjectSection
      title={props.slide.name}
      className={props.className + " project"}
    >
      <ProjectTitle title={props.slide.name}>
        <Title title={props.slide.name} />
      </ProjectTitle>
      <ProjectImg
        imgSrc={
          process.env.NODE_ENV === "development"
            ? `src/assets/img/${props.slide.id}/${props.slide.photos.thumb.default}`
            : `./img/${props.slide.photos.thumb.default}`
        }
        imgLazy={
          process.env.NODE_ENV === "development"
            ? `src/assets/img/${props.slide.id}/${props.slide.photos.thumb.lazy}`
            : `./img/${props.slide.photos.thumb.lazy}`
        }
        imgAlt=""
      />
      <ProjectIndex>
        {props.slideIndex + 1 >= 10
          ? props.slideIndex + 1
          : `0${props.slideIndex + 1}`}
      </ProjectIndex>
      <StretchedLink
        url={`/project/${props.slide.id}`}
        ariaLabel={`See ${props.slide.name} details`}
        srOnly={true}
      />
    </ProjectSection>
  );
};

Project.propTypes = {
  slide: PropTypes.object.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default Project;

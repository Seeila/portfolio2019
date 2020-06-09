import React from "react";
import Project from "./Project";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { ThemeProvider, withTheme } from "styled-components";
import MobileSliderButton from "./MobileSliderButton";
import { SliderStyle, WorkSliderPagination } from "./MobileSlider.styles";

class WorkSliderMobile extends React.Component {
  state = {
    activeIndex: 0,
    theme: {
      color: {
        primary: this.props.slides[0].colors.primary,
        primaryLight: this.props.slides[0].colors.primaryLight,
      },
    },
  };

  //Will update the activeIndex to pass to the pagination component
  // and update the primary/primaryLight Colors of the theme to the project given colors
  handleSlideChanges = (index) => {
    if (this.state.activeIndex !== index) {
      let newTheme = { ...this.state.theme };
      newTheme.color.primary = this.props.slides[index].colors.primary;
      newTheme.color.primaryLight = this.props.slides[
        index
      ].colors.primaryLight;
      this.setState({
        activeIndex: index,
        theme: newTheme,
      });
    }
  };

  render() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    const sliderSettings = {
      showThumbs: false,
      showIndicators: false,
      showArrows: true,
      swipeable: true,
      emulateTouch: true,
      showStatus: false,
    };

    return (
      <ThemeProvider theme={this.state.theme}>
        <SliderStyle>
          <div className="slider-container">
            <WorkSliderPagination
              activeIndex={activeIndex}
              sliderLenght={slides.length}
            />
            <Carousel
              {...sliderSettings}
              onChange={this.handleSlideChanges}
              renderArrowPrev={(onClickHandler, hasFollowingSLide, label) => (
                <MobileSliderButton
                  onClickHandler={onClickHandler}
                  hasFollowingSLide={hasFollowingSLide}
                  label={label}
                  isPrev={true}
                  colors={this.state.theme}
                />
              )}
              renderArrowNext={(onClickHandler, hasFollowingSLide, label) => (
                <MobileSliderButton
                  onClickHandler={onClickHandler}
                  hasFollowingSLide={hasFollowingSLide}
                  label={label}
                  isPrev={false}
                  colors={this.state.theme}
                />
              )}
            >
              {slides &&
                slides.map((slide, index) => (
                  <Project
                    slide={slide}
                    slideIndex={index}
                    key={"slide" + index}
                  />
                ))}
            </Carousel>
          </div>
        </SliderStyle>
      </ThemeProvider>
    );
  }
}

export default withTheme(WorkSliderMobile);

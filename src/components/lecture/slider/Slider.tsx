/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { chakra, Box } from '@chakra-ui/react';

import Slider from 'react-slick';
import { useAppSelector } from '#/hooks/useRedux';
import GoStepButton from '#/components/lecture/goStepButton';

const SliderContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

const sliderSettings = {
  dots: false,
  infinite: true,
  accessibility: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
};

const Container = ({ children }: { children: React.ReactNode }) => {
  const { currentSlideNumber, clearSlideNumber } = useAppSelector((state) => state.lecture);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(clearSlideNumber);
    }
  }, [clearSlideNumber]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlideNumber);
    }
  }, [currentSlideNumber]);

  return (
    <SliderContainer>
      <Slider
        ref={sliderRef}
        {...sliderSettings}
      >
        {children}
      </Slider>
      <GoStepButton />
    </SliderContainer>
  );
};

export default Container;

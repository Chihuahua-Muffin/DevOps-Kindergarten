/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { chakra, Box, useToast } from '@chakra-ui/react';

import Slider from 'react-slick';
import { useAppSelector } from '#/hooks/useRedux';
import GoStepButton from '#/components/lecture/goStepButton';
import { TOAST_STATUS_SUCCESS, TOAST_DURATION } from '#/constants';

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
  const {
    currentSlideNumber,
    clearSlideNumber,
    slideCount,
  } = useAppSelector((state) => state.lecture);
  const sliderRef = useRef<Slider>(null);
  const toast = useToast();

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

  useEffect(() => {
    if (slideCount !== 0 && (slideCount === clearSlideNumber)) {
      toast({
        title: '모든 체크포인트를 완수했습니다!',
        description: '다른 실습도 살펴보세요.',
        status: TOAST_STATUS_SUCCESS,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [clearSlideNumber, slideCount, toast]);

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

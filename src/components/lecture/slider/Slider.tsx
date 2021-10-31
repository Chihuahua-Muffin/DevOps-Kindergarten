/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { chakra, Box } from '@chakra-ui/react';

import Slider from 'react-slick';
import { changeSlideNumber } from '#/redux/ducks/lecture';
import { useAppDispatch } from '#/hooks/useRedux';

const SliderContainer = chakra(Box, {
  baseStyle: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
};

const Container = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const onAfterChange = useCallback((index: number) => {
    dispatch(changeSlideNumber(index));
  }, [dispatch]);

  return (
    <SliderContainer>
      <Slider
        {...sliderSettings}
        afterChange={onAfterChange}
      >
        {children}
      </Slider>
    </SliderContainer>
  );
};

export default Container;

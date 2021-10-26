import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

import Slider from 'react-slick';

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

const Container = ({ children }: { children: React.ReactNode }) => (
  <SliderContainer>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Slider {...sliderSettings}>
      {children}
    </Slider>
  </SliderContainer>
);

export default Container;

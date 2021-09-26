import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/noto-sans-kr';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const theme = extendTheme({
  breakpoints,
  styles: {
    // 글로벌 CSS
    global: {
      html: {
        ':root': {
          // https://stackoverflow.com/questions/11799236/should-i-use-px-or-rem-value-units-in-my-css
          // 1rem = 16px
          fontSize: '100%',
        },
      },
      body: {
        fontFamily: 'Noto Sans KR',
      },
    },
  },
  // Chakra 컴포넌트 props에
  // textStyle="h1" 이런식으로 사용 가능
  textStyles: {
    h1: {
      fontSize: '48px',
      fontFamily: 'Noto Sans KR',
    },
  },
});

export default theme;

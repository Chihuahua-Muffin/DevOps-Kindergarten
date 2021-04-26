import { extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans-kr"

const theme = extendTheme({
  styles: {
    // 글로벌 CSS
    global: {
      "body": {
        fontFamily: "Noto Sans KR",
      }
    }
  },
  // Chakra 컴포넌트 props에
  // textStyle="h1" 이런식으로 사용 가능
  textStyles: {
    h1: {
      fontSize: "48px",
      fontFamily: "Noto Sans KR",
    },
  },
});

export default theme;
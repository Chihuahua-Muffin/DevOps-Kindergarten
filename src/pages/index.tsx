import Link from 'next/link';
import { ChakraProvider, Button } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <ChakraProvider>
      <div>
        Index 입니다.
      </div>
      <Link href="/roadmap"><Button>hi</Button></Link>
    </ChakraProvider>
  );
};

export default IndexPage;

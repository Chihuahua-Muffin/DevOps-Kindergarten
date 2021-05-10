import { Text, chakra } from '@chakra-ui/react';
 
interface ExplainAnchorProps {
  id: string;
}

const Anchor = chakra(Text, {
  baseStyle: {
    display: 'none',
    margin: '0 5px',
    color: '#88d8b0',
  },
});

const ExplainAnchor = ({ id }: ExplainAnchorProps) => {
  return (
    <Anchor 
      aria-label="anchor"
      href={`#${id}`}
      as="a"
    >
      #
    </Anchor>
  );
}

export default ExplainAnchor;

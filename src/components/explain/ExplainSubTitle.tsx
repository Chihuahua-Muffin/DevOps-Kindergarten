import {
  chakra,
  Text,
} from '@chakra-ui/react';
import ExplainAnchor from '#/components/explain/ExplainAnchor';

interface ExplainSubTitleProps {
  children: React.ReactNode;
  id: string;
}

const SubTitle = chakra(Text, {
  baseStyle: {
    display: 'flex',
    fontSize: '28px',
    fontWeight: '600',
    margin: '20px 0',
    scrollMarginTop: '90px',
    '&:hover a': {
      display: 'block',
    },
  },
});

const ExplainSubTitle = ({ children, id }: ExplainSubTitleProps) => {
  return (
    <SubTitle id={id} as="h2">
      {children}
      <ExplainAnchor id={id} />
    </SubTitle>
  );
};

export default ExplainSubTitle;

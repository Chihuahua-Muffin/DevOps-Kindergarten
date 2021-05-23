import { Box, chakra } from '@chakra-ui/react';

const DictionaryCard = chakra(Box, {
  baseStyle: {

  },
});

const Card = () => {
  return (
    <DictionaryCard>
      Text
    </DictionaryCard>
  );
};

export default Card;

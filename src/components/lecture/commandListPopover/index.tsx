import React, { useMemo, useEffect, useState } from 'react';
import {
  chakra,
  Button,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody as ChakraPopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';

import { useAppSelector } from '#/hooks/useRedux';

const TriggerButton = chakra(Button, {
  baseStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: '30px',
  },
});

const PopoverBody = chakra(ChakraPopoverBody, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '5px',
  },
});

const CodeBox = chakra(Box, {
  baseStyle: {
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  },
});

const CommandListPopover = () => {
  // eslint-disable-next-line max-len
  const { commandCount, currentCommands, clearSlideNumber, currentSlideNumber } = useAppSelector((state) => state.lecture);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState<string>('green');

  const isClearAllCommand = useMemo(
    () => currentSlideNumber < clearSlideNumber || (currentCommands.length === commandCount),
    [clearSlideNumber, commandCount, currentCommands.length, currentSlideNumber],
  );

  const popoverBackgroundColor = useMemo(
    () => (isClearAllCommand ? 'green.500' : 'gray.100'),
    [isClearAllCommand],
  );

  const popoverTextColor = useMemo(
    () => (isClearAllCommand ? 'white' : 'black'),
    [isClearAllCommand],
  );

  useEffect(() => {
    setButtonBackgroundColor('blue');
    setTimeout(() => {
      setButtonBackgroundColor('gray');
    }, 1000);
  }, [commandCount]);

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <TriggerButton colorScheme={isClearAllCommand ? 'green' : buttonBackgroundColor}>
          요구사항
          {isClearAllCommand ? ' 완료' : ` ${commandCount} / ${currentCommands.length}`}
        </TriggerButton>
      </PopoverTrigger>
      <PopoverContent color={popoverTextColor} bg={popoverBackgroundColor}>
        <PopoverArrow bg={popoverBackgroundColor} />
        <PopoverCloseButton />
        {isClearAllCommand ? (
          <PopoverHeader fontWeight="bold" fontSize="20px">
            모든 요구사항을 만족했습니다.
          </PopoverHeader>
        ) : (
          <PopoverHeader fontWeight="bold" fontSize="20px">
            {`${currentCommands.length}개의 요구사항이 있습니다.`}
            <Text fontWeight="normal" fontSize="15px">{`현재 ${commandCount}개 완료했습니다.`}</Text>
          </PopoverHeader>
        )}
        <PopoverBody>
          {currentCommands.map((command, index) => (
            <>
              {isClearAllCommand || (index === commandCount) ? (
                <CodeBox bg="gray.800">
                  {`$ ${command}`}
                </CodeBox>
              ) : (
                <CodeBox bg="gray.300">
                  {`$ ${command}`}
                </CodeBox>
              )}
            </>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CommandListPopover;

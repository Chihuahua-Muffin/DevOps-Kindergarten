import React, { useMemo, useCallback, useState } from 'react';
import { chakra, IconButton, Tooltip, useToast } from '@chakra-ui/react';
import CheckIcon from '@mui/icons-material/Check';

import { goOneStep, changeCommandList } from '#/redux/ducks/lecture';
import { useAppDispatch, useAppSelector } from '#/hooks/useRedux';
import { putUserLectureProgressAPI } from '#/lib/api/user';
import { TOAST_STATUS_INFO, TOAST_DURATION } from '#/constants';

const ChakraButton = chakra(IconButton, {
  baseStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: '30px',
  },
});

const GoStepButton = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    clearSlideNumber,
    currentSlideNumber,
    slideCount,
    currentLectureId,
    currentCommandsList,
    currentCommands,
    commandCount,
  } = useAppSelector((state) => state.lecture);
  const { userId, isLogin } = useAppSelector((state) => state.auth);
  const toast = useToast();

  const onClickButton = useCallback(async () => {
    if (!isLogin) {
      toast({
        title: '로그인이 필요합니다.',
        status: TOAST_STATUS_INFO,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      return;
    }
    if (clearSlideNumber !== currentSlideNumber) return;
    if (currentCommands.length !== commandCount) {
      toast({
        title: '명령어를 더 입력해주세요',
        status: TOAST_STATUS_INFO,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      return;
    }

    dispatch(goOneStep());
    dispatch(changeCommandList(currentCommandsList[clearSlideNumber + 1]));

    const progressObject = {
      count: clearSlideNumber + 1,
      lectureId: currentLectureId,
      progressRate: Math.floor(((clearSlideNumber + 1) / slideCount) * 100),
    };

    await putUserLectureProgressAPI(userId, progressObject);
  // eslint-disable-next-line max-len
  }, [clearSlideNumber, commandCount, currentCommands.length, currentCommandsList, currentLectureId, currentSlideNumber, dispatch, isLogin, slideCount, toast, userId]);

  const isCheckedButton = useMemo(
    // eslint-disable-next-line max-len
    () => (clearSlideNumber !== currentSlideNumber) || (slideCount <= clearSlideNumber),
    [clearSlideNumber, currentSlideNumber, slideCount],
  );

  const isClear = useMemo(
    () => commandCount === currentCommands.length,
    [commandCount, currentCommands.length],
  );

  return isCheckedButton ? (
    <Tooltip label="이미 완료했습니다" placement="left" closeOnClick={false}>
      <ChakraButton
        colorScheme="green"
        type="button"
        size="lg"
        icon={<CheckIcon fontSize="large" />}
      />
    </Tooltip>
  ) : (
    <>
      <Tooltip
        label={isClear ? '모든 요구사항을 만족했습니다!' : `모든 요구사항을 만족했나요? ${commandCount}/${currentCommands.length}`}
        placement="left"
        closeOnClick={false}
        isOpen={isClear || isHover}
      >
        <ChakraButton
          colorScheme={isClear ? 'blue' : 'gray'}
          variant="solid"
          onClick={onClickButton}
          aria-label="clear button"
          type="button"
          size="lg"
          icon={<CheckIcon fontSize="large" />}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
      </Tooltip>
    </>
  );
};

export default GoStepButton;

import React, { useMemo, useCallback } from 'react';
import { chakra, IconButton, Tooltip } from '@chakra-ui/react';
import CheckIcon from '@mui/icons-material/Check';

import { goOneStep } from '#/redux/ducks/lecture';
import { useAppDispatch, useAppSelector } from '#/hooks/useRedux';
import { putUserLectureProgressAPI } from '#/lib/api/user';

const ChakraButton = chakra(IconButton, {
  baseStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: '30px',
  },
});

const GoStepButton = () => {
  const dispatch = useAppDispatch();
  const { clearSlideNumber, currentSlideNumber, slideCount, currentLectureId } = useAppSelector(
    (state) => state.lecture,
  );
  const { userId, isLogin } = useAppSelector((state) => state.auth);

  const onClickButton = useCallback(async () => {
    if (!isLogin) return;
    if (clearSlideNumber !== currentSlideNumber) return;
    dispatch(goOneStep());

    const progressObject = {
      count: clearSlideNumber + 1,
      lectureId: currentLectureId,
      progressRate: Math.floor(((clearSlideNumber + 1) / slideCount) * 100),
    };

    await putUserLectureProgressAPI(userId, progressObject);
  // eslint-disable-next-line max-len
  }, [clearSlideNumber, currentLectureId, currentSlideNumber, dispatch, isLogin, slideCount, userId]);

  const isCheckedButton = useMemo(
    () => (clearSlideNumber !== currentSlideNumber) || (slideCount <= clearSlideNumber),
    [clearSlideNumber, currentSlideNumber, slideCount],
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
    <Tooltip
      label="모든 요구사항을 만족했나요?"
      placement="left"
      closeOnClick={false}
    >
      <ChakraButton
        colorScheme="gray"
        variant="solid"
        onClick={onClickButton}
        type="button"
        size="lg"
        icon={<CheckIcon fontSize="large" />}
      />
    </Tooltip>
  );
};

export default GoStepButton;

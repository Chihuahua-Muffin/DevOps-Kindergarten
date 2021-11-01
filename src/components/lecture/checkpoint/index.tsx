import React from 'react';
import { Stepper, Step, StepLabel, StepButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Text, chakra } from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '#/hooks/useRedux';
import type { Checkpoint } from '#/components/lecture/contents/types';
import { changeSlideNumber } from '#/redux/ducks/lecture';

const OptionalText = chakra(Text, {
  baseStyle: {
    fontSize: '13px',
    color: 'rgba(3, 100, 179, 0.623)',
  },
});

const useStyles = makeStyles({
  stepper: {
    width: '200px',
    '& .Mui-active': {
      color: 'rgb(37, 147, 238)',
    },
    '& .Mui-completed': {
      color: 'rgb(12, 189, 56)',
    },
  },
  stepButton: {
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgb(226, 226, 226)',
    },
  },
  activeStepButton: {
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgb(238, 238, 238)',
    '&:hover': {
      backgroundColor: 'rgb(226, 226, 226)',
    },
  },
});

const CheckpointList = ({ checkpoints }: { checkpoints: Checkpoint[] }) => {
  const { clearSlideNumber, currentSlideNumber } = useAppSelector((state) => state.lecture);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const onClickButton = (step: number) => () => {
    dispatch(changeSlideNumber(step));
  };

  return (
    <Stepper className={classes.stepper} activeStep={clearSlideNumber} orientation="vertical">
      {checkpoints.map((checkpoint, index) => (
        <Step
          key={checkpoint.name}
          active={clearSlideNumber === index}
          completed={clearSlideNumber > index}
        >
          <StepButton
            onClick={onClickButton(index)}
            className={currentSlideNumber === index ? classes.activeStepButton : classes.stepButton}
            // eslint-disable-next-line max-len
            optional={index === clearSlideNumber ? <OptionalText>현재 체크포인트입니다.</OptionalText> : null}
          >
            <StepLabel>
              {checkpoint.name}
            </StepLabel>
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};

export default CheckpointList;

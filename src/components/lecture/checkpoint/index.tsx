import React from 'react';
import { Stepper, Step, StepLabel, StepButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Text, chakra, useMediaQuery } from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '#/hooks/useRedux';
import type { Checkpoint } from '#/components/lecture/contents/types';
import { changeSlideNumber, changeCommandList } from '#/redux/ducks/lecture';
import { MIN_WIDTH_1100 } from '#/constants';
import CommandList from './CommandList';

const OptionalText = chakra(Text, {
  baseStyle: {
    fontSize: '13px',
    color: '#3182CE',
  },
});

const useStyles = makeStyles({
  stepper: {
    width: '200px',
    '& .Mui-active': {
      color: '#3182CE',
    },
    '& .Mui-completed': {
      color: '#38A169',
    },
  },
  smallStepper: {
    width: '25px',

    '& .Mui-active': {
      color: '#3182CE',
    },
    '& .Mui-completed': {
      color: '#38A169',
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
  const [islargerthan1100] = useMediaQuery(MIN_WIDTH_1100);
  const { clearSlideNumber, currentSlideNumber, currentCommandsList } = useAppSelector(
    (state) => state.lecture,
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const onClickButton = (step: number) => () => {
    dispatch(changeSlideNumber(step));
    dispatch(changeCommandList(currentCommandsList[step]));
  };

  return (
    <Stepper
      className={islargerthan1100 ? classes.stepper : classes.smallStepper}
      activeStep={clearSlideNumber}
      orientation="vertical"
    >
      {checkpoints.map((checkpoint, index) => (
        <Step
          key={checkpoint.name}
          active={clearSlideNumber === index}
          completed={clearSlideNumber > index}
        >
          <StepButton
            onClick={onClickButton(index)}
            className={
              currentSlideNumber === index
                ? classes.activeStepButton
                : classes.stepButton
            }
            // eslint-disable-next-line max-len
            optional={
              (islargerthan1100 && (index === clearSlideNumber)) ? (
                <OptionalText>현재 체크포인트입니다.</OptionalText>
              ) : null
            }
          >
            <StepLabel>{islargerthan1100 ? checkpoint.name : ''}</StepLabel>
          </StepButton>
          <CommandList commands={checkpoint.commands} />
        </Step>
      ))}
    </Stepper>
  );
};

export default CheckpointList;

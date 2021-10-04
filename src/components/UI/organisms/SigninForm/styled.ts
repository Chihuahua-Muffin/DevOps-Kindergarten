import { chakra, Button, FormControl, Input, Box, Spinner, FormLabel, FormErrorMessage } from '@chakra-ui/react';

export const Container = chakra(Box, {
  baseStyle: {
    position: 'relative',
    top: '27%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    rowGap: '50px',
  },
});

export const FormControlContainer = chakra(FormControl, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const FormInput = chakra(Input, {
  baseStyle: {
    width: '100%',
  },
});

export const FormSpinner = chakra(Spinner, {
  baseStyle: {
  },
});

export const SubmitButton = chakra(Button, {
  baseStyle: {
    width: '100%',
    height: '50px',
    borderRadius: '10px',
  },
});

export const SubmitFormLabel = chakra(FormLabel, {
  baseStyle: {
  },
});

export const SubmitFormErrorMessage = chakra(FormErrorMessage, {
  baseStyle: {
  },
});

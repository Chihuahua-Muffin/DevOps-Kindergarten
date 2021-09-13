import '@toast-ui/editor/dist/toastui-editor.css';
import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import { Editor } from '@toast-ui/react-editor';

const Container = chakra(Box, {
  baseStyle: {
    '.toastui-editor-defaultUI': {
      width: '100vw',
    },
  },
});

const EditorContainer = () => (
  <Container>
    <Editor height="100vh" previewStyle="vertical" />
  </Container>
);

export default EditorContainer;

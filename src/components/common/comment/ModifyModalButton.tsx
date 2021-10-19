import React, { useCallback, useState } from 'react';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useToast,
  IconButton,
  Textarea,
} from '@chakra-ui/react';
import BuildIcon from '@mui/icons-material/Build';

import { putCommentAPI } from '#/lib/api/comment';
import {
  TOAST_DURATION,
  TOAST_STATUS_ERROR,
  TOAST_STATUS_INFO,
} from '#/constants';

interface ModifyModalButtonProps {
  getCommentList: () => Promise<void>;
  commentId: number;
  content: string;
}

function ModifyModalButton({
  getCommentList,
  commentId,
  content,
}: ModifyModalButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [modifyContent, setModifyContent] = useState(content);

  const onChangeTextArea = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModifyContent(event.target.value);
  }, []);

  const onClickDeleteButton = useCallback(async () => {
    try {
      await putCommentAPI(commentId, modifyContent);
      toast({
        title: '댓글이 수정 되었습니다.',
        status: TOAST_STATUS_INFO,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      getCommentList();
      onClose();
    } catch (error) {
      toast({
        title: '댓글 수정에 문제가 생겼습니다.',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      onClose();
    }
  }, [commentId, getCommentList, modifyContent, toast, onClose]);

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Comment modify"
        icon={<BuildIcon />}
        colorScheme="blue"
        size="sm"
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>수정 할 내용을 입력해주세요.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="댓글을 입력하세요."
              value={modifyContent}
              onChange={onChangeTextArea}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClickDeleteButton} colorScheme="blue" mr={3}>
              수정
            </Button>
            <Button variant="ghost" onClick={onClose}>취소</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModifyModalButton;

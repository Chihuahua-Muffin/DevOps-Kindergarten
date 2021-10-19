import React, { useCallback } from 'react';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  chakra,
  useToast,
} from '@chakra-ui/react';
import CloseIcon from '@mui/icons-material/Close';

import { deleteCommentAPI } from '#/lib/api/comment';
import {
  TOAST_DURATION,
  TOAST_STATUS_ERROR,
  TOAST_STATUS_INFO,
} from '#/constants';

const CloseButton = chakra(CloseIcon, {
  baseStyle: {
    borderRadius: '5px',
    transition: '0.3s all ease',
    _hover: {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
  },
});

interface DeleteModalButtonProps {
  getCommentList: () => Promise<void>;
  commentId: number;
}

function DeleteModalButton({
  getCommentList,
  commentId,
}: DeleteModalButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onClickDeleteButton = useCallback(async () => {
    try {
      const result = await deleteCommentAPI(commentId);
      console.log(result);
      toast({
        title: '댓글이 삭제 되었습니다.',
        status: TOAST_STATUS_INFO,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      getCommentList();
    } catch (error) {
      toast({
        title: '댓글 삭제에 문제가 생겼습니다.',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [getCommentList, commentId, toast]);

  return (
    <>
      <CloseButton onClick={onOpen} />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>댓글을 삭제하시겠습니까?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={onClickDeleteButton} colorScheme="red" mr={3}>
              삭제
            </Button>
            <Button variant="ghost" onClick={onClose}>취소</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModalButton;

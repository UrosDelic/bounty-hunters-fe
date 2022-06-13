import { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button, Flex } from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import ModalLayout from 'components/ModalLayout';

interface Props {
  isOpen: boolean;
  isClosed: () => void;
  submit: () => void;
}

const BhEditor = ({ isOpen, isClosed, submit }: Props) => {
  const [
    editorState,
    //   setEditorState
  ] = useState('');
  const handleChange = () => {
    //console.log('editor test');
  };
  return (
    <ModalLayout isOpen={isOpen} onClose={isClosed}>
      <ReactQuill
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['link', 'image'],
              ['clean'],
              [{ color: [] }],
            ],
            handlers: {
              //image: this.imageHandler
            },
          },
        }}
        style={{
          color: 'black',
          background: 'white',
          height: '15rem',
          overflow: 'auto',
          overflowY: 'hidden',
          marginTop: '1rem',
        }}
        value={editorState}
        onChange={handleChange}
      ></ReactQuill>
      <Flex justifyContent="end" className="submit-editor-btn">
        <Button variant="solid" bg="purple.300" my={2} onClick={submit}>
          Submit
        </Button>
      </Flex>
    </ModalLayout>
  );
};

export default BhEditor;

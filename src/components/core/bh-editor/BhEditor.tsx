import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { Button, Flex } from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';

const BhEditor = () => {
  const [editorState, setEditorState] = useState('');
  const handleChange = () => {
    //console.log('editor test');
  };
  return (
    <>
      <ReactQuill
        style={{
          background: 'white',
          width: '30rem',
          height: '10rem',
          overflow: 'auto',
          overflowY: 'hidden',
        }}
        value={editorState}
        onChange={handleChange}
      ></ReactQuill>
      <Flex justifyContent="end" className="submit-editor-btn">
        <Button variant="solid" bg="purple.300" my={2}>
          Submit text
        </Button>
      </Flex>
    </>
  );
};

export default BhEditor;

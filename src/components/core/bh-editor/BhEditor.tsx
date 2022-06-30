import { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button, Flex } from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
interface Props {
  submit: () => void;
}

const BhEditor = ({ submit }: Props) => {
  const [
    editorState,
    //   setEditorState
  ] = useState('');
  const handleChange = () => {
    //console.log('editor test');
  };
  return (
    <>
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
        <Button colorScheme="purple" variant="solid" my={2} onClick={submit}>
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default BhEditor;

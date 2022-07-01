import ReactQuill from 'react-quill';
import { Button, Flex } from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

interface Props {
  submit: () => void;
  onEditorChange: (...args: any) => void;
  value: string;
}

const BhEditor = ({ submit, onEditorChange, value }: Props) => {
  // const handleChange = (value: string) => {
  //   setEditorState(value);
  //   console.log(value);
  // };

  return (
    <form onSubmit={submit}>
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
        value={value}
        onChange={onEditorChange}
      ></ReactQuill>
      <Flex justifyContent="end" className="submit-editor-btn">
        <Button variant="solid" my={2} type="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default BhEditor;

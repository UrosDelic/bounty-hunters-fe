import ReactQuill from 'react-quill';
import { Button, Flex } from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import { memo, useRef, useState } from 'react';

interface Props {
  submit: (value: string) => void;
  //onEditorChange: (...args: any) => void;
  defaultValue?: string | null;
}

const BhEditor = ({ submit, defaultValue }: Props) => {
  // const handleChange = (value: string) => {
  //   setEditorState(value);
  //   console.log(value);
  // };
  const ref = useRef<any>();

  const onSubmit = (e: any) => {
    // e.preventDefault();
    if (submit) submit(ref.current.state.value);
  };

  console.log(123);
  return (
    <form onSubmit={onSubmit}>
      <ReactQuill
        ref={ref}
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
        defaultValue={defaultValue || undefined}
      ></ReactQuill>
      <Flex justifyContent="end" className="submit-editor-btn">
        <Button variant="solid" my={2} type="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default memo(BhEditor);

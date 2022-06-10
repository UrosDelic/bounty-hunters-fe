import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BhEditor = () => {
  const [editorState, setEditorState] = useState('');
  const handleChange = () => {
    //console.log('editor test');
  };
  return <ReactQuill value={editorState} onChange={handleChange}></ReactQuill>;
};

export default BhEditor;

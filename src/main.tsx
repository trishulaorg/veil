import '@/style/main.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Editor } from '@/components/editor/Editor';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
);

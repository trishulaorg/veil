import '@/style/main.css';

import React from 'react';
import {createRoot} from 'react-dom/client';
import { Editor } from '@/components/editor/Editor';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
);

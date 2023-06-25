import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Editor } from './Editor';
import ToolbarWidget from './Toolbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToolbarWidget />
    <Editor />
  </React.StrictMode>,
);

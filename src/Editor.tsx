import { useEffect } from 'react';
import {$getRoot, $getSelection, EditorState} from 'lexical';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

const theme = {
  // Theme styling goes here
};

function onChange(editorState: EditorState) {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();
    // eslint-disable-next-line no-console
    console.log(root, selection);
  });
}

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.focus();
  }, [editor]);
  return null;
}

function onError(error: Error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

export function Editor() {
  const initialConfig = {
    namespace: 'veil',
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
      <RichTextPlugin 
        contentEditable={<ContentEditable />}  
        placeholder={<div>Enter some text...</div>}  
        ErrorBoundary={LexicalErrorBoundary} 
      />
    </LexicalComposer>
  );
}

export default Editor;

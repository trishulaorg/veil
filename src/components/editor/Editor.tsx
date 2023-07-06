import { useEffect } from 'react';
import {$getRoot, $getSelection, EditorState} from 'lexical';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { useEditorStateStore } from '@/store/useEditorStateStore';
import { ToolbarWidgetPlugin } from '@/components/toolbar/Toolbar';

const theme = {
  // Theme styling goes here
};

function onChange(editorState: EditorState) {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();
     
    console.log(root, selection);
  });
}

function MyCustomAutoFocusPlugin() {
  const [editor]  = useLexicalComposerContext();
  const { setEditorState } = useEditorStateStore();

  useEffect(() => {
    // Set initial state of editor
    setEditorState(editor.getEditorState());

    // Call focus on the editor
    editor.focus();
  }, [editor, setEditorState]);

  return null;
}

function onError(error: Error) {
   
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
      <ToolbarWidgetPlugin />
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

import { useEffect } from 'react';
import {$getRoot, $getSelection, EditorState, EditorThemeClasses} from 'lexical';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { useEditorStateStore } from '@/store/useEditorStateStore';
import { ToolbarWidgetPlugin } from '@/components/toolbar/Toolbar';
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

const theme: EditorThemeClasses = {
  ltr: "text-left",
  rtl: "text-right",
  placeholder: "text-gray-500",
  paragraph: "my-2",
  quote: "border-l-4 border-gray-500 pl-4 my-4 text-gray-700",
  heading: {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-bold",
    h3: "text-xl font-bold",
    h4: "text-lg font-bold",
    h5: "text-base font-bold"
  },
  list: {
    nested: {
      listitem: "pl-4"
    },
    ol: "list-decimal pl-5",
    ul: "list-disc pl-5",
    listitem: "mb-2"
  },
  image: "w-full",
  link: "text-blue-500 underline",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "underline line-through",
    code: "bg-gray-200 px-1 rounded text-sm font-mono"
  },
  code: "bg-gray-200 p-2 rounded text-sm font-mono block my-2",
  codeHighlight: {
    atrule: "text-red-500",
    attr: "text-red-500",
    boolean: "text-yellow-300",
    builtin: "text-orange-500",
    cdata: "text-gray-500",
    char: "text-orange-500",
    class: "text-yellow-300",
    "class-name": "text-yellow-300",
    comment: "text-gray-500",
    constant: "text-yellow-300",
    deleted: "text-red-600",
    doctype: "text-gray-500",
    entity: "text-green-400",
    function: "text-green-300",
    important: "text-red-600",
    inserted: "text-green-400",
    keyword: "text-red-500",
    namespace: "text-red-600",
    number: "text-yellow-400",
    operator: "text-green-400",
    prolog: "text-gray-500",
    property: "text-yellow-300",
    punctuation: "text-gray-500",
    regex: "text-red-500",
    selector: "text-red-500",
    string: "text-green-300",
    symbol: "text-yellow-300",
    tag: "text-red-500",
    url: "text-blue-400",
    variable: "text-red-500",
  },
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
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode
    ],
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

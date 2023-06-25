import React, { useEffect } from 'react';
import { $getRoot, $getSelection } from 'lexical';
import { Composer, ContentEditable, RichTextPlugin, MarkdownShortcutPlugin, useComposerContext } from '@lexical/react';

const theme = {
    // Theme styling goes here
};

function onChange(editorState) {
    editorState.read(() => {
        const root = $getRoot();
        const selection = $getSelection();
        console.log(root, selection);
    });
}

function MyCustomAutoFocusPlugin() {
    const [editor] = useComposerContext();

    useEffect(() => {
        editor.focus();
    }, [editor]);

    return null;
}

function onError(error: Error) {
    console.error(error);
}

function Editor() {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
    };

    return (
        <Composer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
            />
            <MarkdownShortcutPlugin />
            <MyCustomAutoFocusPlugin />
        </Composer>
    );
}

export default Editor;

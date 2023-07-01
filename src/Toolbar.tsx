import * as Toolbar from '@radix-ui/react-toolbar';
import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
} from '@radix-ui/react-icons';
import { useEditorStateStore } from './useEditorStateStore';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND} from 'lexical';
import { $wrapNodes } from '@lexical/selection'
import { $createHeadingNode } from '@lexical/rich-text';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export const ToolbarWidgetPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const onBoldClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const onItalicClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const onStrikethroughClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
  };
  const formatLargeHeading = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createHeadingNode("h1"));
      }
    })
  }
  return <Toolbar.Root
    className="flex p-[10px] w-full min-w-max rounded-md bg-white shadow-[0_2px_10px] shadow-blackA7"
    aria-label="Formatting options"
  >
    <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
      <Toolbar.ToggleItem
        className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="bold"
        aria-label="Bold"
        onClick={onBoldClick}
      >
        <FontBoldIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="italic"
        aria-label="Italic"
        onClick={onItalicClick}
      >
        <FontItalicIcon />
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        className="flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="strikethrough"
        aria-label="Strike through"
        onClick={onStrikethroughClick}
      >
        <StrikethroughIcon />
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
  </Toolbar.Root>;
};

export default ToolbarWidgetPlugin;

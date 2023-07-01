import { EditorState } from "lexical";
import { create } from "zustand";

interface IEditorState {
  editorState: EditorState | null;
  setEditorState: (state: EditorState) => void

}

export const useEditorStateStore = create<IEditorState>((set) => ({
  editorState: null,
  setEditorState(state: EditorState) {
    set({ editorState: state })
  }
}));

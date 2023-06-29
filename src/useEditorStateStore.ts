import { create } from "zustand";

interface IEditorState {
  editorState: {
    cursorPos: {
      x: number;
      y: number;
    };
    selection: {
      start: {
        x: number;
        y: number;
      };
      end: {
        x: number;
        y: number;
      };
    };
    text: string;
    lastTimeModified: Date;
  };
}

export const useEditorState = create<IEditorState>((set) => ({
  editorState: {
    cursorPos: {
      x: 0,
      y: 0,
    },
    selection: {
      start: {
        x: 0,
        y: 0,
      },
      end: {
        x: 0,
        y: 0,
      },
    },
    text: "",
    lastTimeModified: new Date(),
  },
  setCursorPos: (x: number, y: number) => {
    set((state) => ({
      editorState: {
        ...state.editorState,
        cursorPos: {
          x,
          y,
        },
      },
    }));
  },
  setSelection: (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    set((state) => ({
      editorState: {
        ...state.editorState,
        selection: {
          start,
          end,
        },
      },
    }));
  },
  setText: (text: string) => {
    set((state) => ({
      editorState: {
        ...state.editorState,
        text,
      },
    }));
  },
  setLastTimeModified: (lastTimeModified: Date) => {
    set((state) => ({
      editorState: {
        ...state.editorState,
        lastTimeModified,
      },
    }));
  }
}));

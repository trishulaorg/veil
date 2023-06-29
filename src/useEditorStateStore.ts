import { create } from "zustand";

interface IEditorState {
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
  currentState: "plain" | "bold" | "italic" | "underline";
}

export const useEditorStateStore = create<IEditorState>((set) => ({
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
  currentState: "plain",
  setCurrentState: (currentState: "plain" | "bold" | "italic" | "underline") => {
    set((state) => ({
      ...state,
      currentState,
    }));
  },
  setCursorPos: (x: number, y: number) => {
    set((state) => ({
      ...state,
      cursorPos: {
        x,
        y,
      },
    }));
  },
  setSelection: (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    set((state) => ({
      ...state,
      selection: {
        start,
        end,
      },
    }))
  },
  setText: (text: string) => {
    set((state) => ({
      ...state,
      text,
    }));
  },
  setLastTimeModified: (lastTimeModified: Date) => {
    set((state) => ({
      ...state,
      lastTimeModified,
    }));
  }
}));

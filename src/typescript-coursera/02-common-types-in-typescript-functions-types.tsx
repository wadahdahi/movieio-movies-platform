import React from "react";

type Functions = {
  onHover: () => void;
  // onClick: (e: React)
  onKeyPress: (event: KeyboardEvent) => void;
  onResize: (widht: number, height: number) => void;
  onScroll: (event: Event) => void;
  onFocus: (element: HTMLElement) => void;
  onBlur: (element: HTMLElement) => void;
  onSubmit: (data: { [key: string]: any }) => void;
  onChange: (value: string) => void;
  onLoad: () => Promise<void>;
  onError: (error: Error) => void;
  onSuccess: (response: { [key: string]: any }) => void;
  onComplete: () => void;
  onCancel: () => void;
  onUpdate: (data: { [key: string]: any }) => void;
  onDelete: (id: string) => void;
  onSelect: (item: { [key: string]: any }) => void;
  onDeselect: (item: { [key: string]: any }) => void;
  onDrag: (event: DragEvent) => void;
  onCopy: (text: string) => void;
  onPaste: (text: string) => void;
  onCut: (text: string) => void;
};

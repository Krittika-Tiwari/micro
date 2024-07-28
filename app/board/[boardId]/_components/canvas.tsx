"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolBar";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <ToolBar />
    </main>
  );
};
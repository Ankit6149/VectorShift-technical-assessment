// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h1 className="text-4xl font-bold mb-4">NODES</h1>

      <div className="flex flex-row gap-3 px-2 py-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="number" label="Number" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="timer" label="Timer" />
      </div>
    </div>
  );
};

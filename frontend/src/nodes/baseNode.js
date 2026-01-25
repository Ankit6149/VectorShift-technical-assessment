// baseNode.js

import { Handle } from "reactflow";

const HANDLE_STYLES = {
  source:
    "w-4 h-4 bg-blue-500 rounded-full border-2 border-white hover:border-gray-300",
  target:
    "w-4 h-4 bg-green-500 rounded-full border-2 border-white hover:border-gray-300",
};

function BaseNode(props) {
  const { title, children, handles = [] } = props;
  const handleTitleColor = (title) => {
    if (title.includes("Input")) return "bg-blue-500";
    if (title.includes("Output")) return "bg-green-500";
    if (title.includes("LLM")) return "bg-red-500";
    if (title.includes("Text")) return "bg-yellow-500";
    return "bg-stone-400";
  };

  return (
    <div className="bg-gray-50 flex flex-col gap-3 rounded-xl border border-black-500 shadow-md p-4 w-72 h-auto border-solid">
      <header
        className={`${handleTitleColor(title)} font-semibold text-m text-gray-800 border-gray-200 p-2 w-fill rounded-t-lg text-center`}
      >
        {title}
      </header>
      <div className="grid grid-cols-1 grid-rows-1 gap-2">
        <div className="flex flex-col gap-3">{children}</div>
        <div className="flex flex-col border-solid border-gray-200">
          {handles.map((handle) => (
            <Handle
              key={handle.id}
              type={handle.type}
              position={handle.position}
              id={handle.id}
              className={handle.className || HANDLE_STYLES[handle.type]}
              style={handle.style || {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaseNode;

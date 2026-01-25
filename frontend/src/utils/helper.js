import { Position } from "reactflow";

export const createHandle = (id, type, position, className, styleProps) => ({
  id,
  type,
  position,
  className,
  style: styleProps || {},
});

export const createSourceHandle = (id, suffix = "output", styleProps) =>
  createHandle(
    `${id}-${suffix}`,
    "source",
    Position.Right,
    "w-4 h-4 bg-blue-500 rounded-full border-2 border-white hover:border-gray-300",
    styleProps,
  );

export const createTargetHandle = (id, suffix = "value", styleProps) =>
  createHandle(
    `${id}-${suffix}`,
    "target",
    Position.Left,
    "w-4 h-4 bg-green-500 rounded-full border-2 border-white hover:border-gray-300",
    styleProps,
  );

export const createVariableHandle = (id, variable, styleProps) => {
  return createHandle(
    `${id}-${variable}`,
    "target",
    Position.Left,
    "w-4 h-4 bg-yellow-500 rounded-full border-2 border-white hover:border-gray-300",
    styleProps,
  );
};

export const createVariableHandles = (id, variables) => {
  return variables.map((variable) => createVariableHandle(id, variable));
};

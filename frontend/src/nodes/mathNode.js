import { useState } from "react";
import { createSourceHandle, createTargetHandle } from "../utils/helper";
import BaseNode from "./baseNode";
import FormField from "../components/FormField";
import SelectInput from "../components/SelectInput";

const MATH_OPERATIONS = [
  { value: "add", label: "Addition (+)", symbol: "+" },
  { value: "subtract", label: "Subtraction (-)", symbol: "-" },
  { value: "multiply", label: "Multiplication (x)", symbol: "×" },
  { value: "divide", label: "Division (÷)", symbol: "÷" },
  { value: "modulo", label: "Modulo (%)", symbol: "%" },
  { value: "power", label: "Power (^)", symbol: "^" },
];

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || "add");

  const handles = [
    createTargetHandle(id, "a", { top: "35%" }),
    createTargetHandle(id, "b", { top: "65%" }),
    createSourceHandle(id, "result"),
  ];

  const getCurrentOperation = () =>
    MATH_OPERATIONS.find((op) => op.value === operation);
  return (
    <BaseNode title="Math Operation" handles={handles}>
      <FormField label="Operation">
        <SelectInput
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          options={MATH_OPERATIONS.map((op) => ({
            value: op.value,
            label: op.label,
          }))}
        />
      </FormField>

      <div className="bg-gray-100 rounded p-2 mt-2 text-center">
        <span className="text-xs text-gray-500">Formula:</span>
        <div className="font-mono text-sm font-semibold text-gray-700 mt-1">
          a {getCurrentOperation()?.symbol} b = result
        </div>
      </div>
    </BaseNode>
  );
};

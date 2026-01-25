import BaseNode from "./baseNode";
import { createTargetHandle, createSourceHandle } from "../utils/helper";
import FormField from "../components/FormField";
import SelectInput from "../components/SelectInput";
import { useState } from "react";

const CONDITION_TYPES = [
  { value: "greater", label: "Greater Than (>)", symbol: ">" },
  { value: "less", label: "Less Than (<)", symbol: "<" },
  { value: "equal", label: "Equal To (==)", symbol: "==" },
  { value: "notEqual", label: "Not Equal (!=)", symbol: "!=" },
  { value: "greaterEqual", label: "Greater or Equal (>=)", symbol: ">=" },
  { value: "lessEqual", label: "Less or Equal (<=)", symbol: "<=" },
];

function ConditionalNode({ id, data }) {
  const [conditionType, setConditionType] = useState(
    data?.conditionType || "greater",
  );

  const handles = [
    // Two inputs to compare (LEFT side)
    createTargetHandle(id, "a", { top: "30%" }),
    createTargetHandle(id, "b", { top: "70%" }),

    // Two outputs (RIGHT side)
    createSourceHandle(id, "trueBranch", { top: "75%" }),
    createSourceHandle(id, "falseBranch", { top: "87%" }),
  ];

  const getCurrentCondition = () =>
    CONDITION_TYPES.find((c) => c.value === conditionType);

  return (
    <BaseNode title="Conditional Node" handles={handles}>
      <FormField label="Condition">
        <SelectInput
          value={conditionType}
          onChange={(e) => setConditionType(e.target.value)}
          options={CONDITION_TYPES}
        />
      </FormField>

      <div className="bg-gray-100 rounded p-2 text-center text-xs font-mono mt-2">
        a {getCurrentCondition()?.symbol} b
      </div>

      <div className="flex flex-col gap-3 text-xs mt-2">
        <div className="text-right text-green-600 font-semibold">✓ True →</div>
        <div className="text-right text-red-600 font-semibold">✗ False →</div>
      </div>
    </BaseNode>
  );
}

export default ConditionalNode;

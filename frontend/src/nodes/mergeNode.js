import { useState } from "react";
import BaseNode from "./baseNode";
import { createSourceHandle, createTargetHandle } from "../utils/helper";
import FormField from "../components/FormField";
import SelectInput from "../components/SelectInput";

const MERGE_OPTIONS = [
  { value: "concat", label: "Concatenate", symbol: "A + B → AB" },
  { value: "space", label: "Join with Space", symbol: 'A + " " + B → A B' },
  { value: "comma", label: "Join with Comma", symbol: 'A + "," + B → A, B' },
  { value: "newline", label: "Join with Newline", symbol: "A + \\n + B" },
];

function MergeNode({ id, data }) {
  const [mergeType, setMergeType] = useState(data?.mergeType || "concat");

  const handles = [
    createTargetHandle(id, "input1", { top: "35%" }),
    createTargetHandle(id, "input2", { top: "65%" }),
    createSourceHandle(id, "merged"),
  ];

  const getCurrentMerge = () =>
    MERGE_OPTIONS.find((m) => m.value === mergeType);

  return (
    <BaseNode title="Merge" handles={handles}>
      <FormField label="Merge Type">
        <SelectInput
          value={mergeType}
          onChange={(e) => setMergeType(e.target.value)}
          options={MERGE_OPTIONS.map((m) => ({
            value: m.value,
            label: m.label,
          }))}
        />
      </FormField>

      <div className="bg-gray-100 rounded p-2 mt-2 text-center">
        <span className="text-xs text-gray-500">Formula:</span>
        <div className="font-mono text-xs font-semibold text-gray-700 mt-1">
          {getCurrentMerge()?.symbol}
        </div>
      </div>
    </BaseNode>
  );
}

export default MergeNode;

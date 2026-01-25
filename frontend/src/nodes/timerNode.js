import { useState } from "react";
import BaseNode from "./baseNode";
import { createSourceHandle, createTargetHandle } from "../utils/helper";
import FormField from "../components/FormField";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";

const TIME_UNITS = [
  { value: "ms", label: "Milliseconds" },
  { value: "s", label: "Seconds" },
  { value: "m", label: "Minutes" },
];

function TimerNode({ id, data } ) {
  const [delay, setDelay] = useState(data?.delay || 1);
  const [unit, setUnit] = useState(data?.unit || "s");

  const getTimeUnit = () => TIME_UNITS.find((u) => u.value === unit);

  return (
    <BaseNode
      title="Timer"
      handles={[
        createTargetHandle(id, "input"),
        createSourceHandle(id, "output"),
      ]}
    >
      <FormField label="Delay">
        <TextInput
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
      </FormField>

      <FormField label="Unit">
        <SelectInput
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          options={TIME_UNITS}
        />
      </FormField>

      <div className="bg-gray-100 rounded p-2 mt-2 text-center">
        <span className="text-xs text-gray-500">Wait time:</span>
        <div className="text-sm font-semibold text-gray-700 mt-1">
          {delay} {getTimeUnit()?.label}
        </div>
      </div>
    </BaseNode>
  );
}

export default TimerNode;

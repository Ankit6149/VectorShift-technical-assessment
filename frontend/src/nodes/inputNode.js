// inputNode.js

import { useState } from "react";
import BaseNode from "./baseNode";
import FormField from "../components/FormField";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import { createSourceHandle } from "../utils/helper";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <BaseNode
      title={`Input Node ${id[id.length - 1]}`}
      handles={[createSourceHandle(id, "value")]}
    >
      <FormField label="Name">
        <TextInput
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </FormField>
      <FormField label="Type">
        <SelectInput
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "File" },
          ]}
        />
      </FormField>
    </BaseNode>
  );
};

// outputNode.js

import { useState } from "react";
import BaseNode from "./baseNode";
import { createTargetHandle } from "../utils/helper";
import FormField from "../components/FormField";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <BaseNode
      title={`Output Node ${id[id.length - 1]}`}
      handles={[createTargetHandle(id)]}
    >
      <FormField label="Name">
        <TextInput
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </FormField>
      <FormField label="Type">
        <SelectInput
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          options={[
            { value: "Text", label: "Text" },
            { value: "Number", label: "Number" },
            { value: "File", label: "Image" },
          ]}
        />
      </FormField>
    </BaseNode>
  );
};

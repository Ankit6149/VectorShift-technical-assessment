// textNode.js

import { useState } from "react";
import BaseNode from "./baseNode";
import { createSourceHandle } from "../utils/helper";
import useVariableHandles from "../hooks/useVariableHandles";
import FormField from "../components/FormField";
import TextArea from "../components/TextArea";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const { variables, handles: variableHandles } = useVariableHandles(
    currText,
    id,
  );

  const allHandles = [...variableHandles, createSourceHandle(id)];

  return (
    <BaseNode title={`Text Node ${id[id.length - 1]}`} handles={allHandles}>
      <FormField label="Text">
        <TextArea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </FormField>
      {variables.length > 0 && (
        <div className="text-xs text-gray-500">
          Variables: {variables.join(", ")}
        </div>
      )}
    </BaseNode>
  );
};

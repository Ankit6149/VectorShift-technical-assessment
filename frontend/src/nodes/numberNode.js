import { useState } from "react";
import BaseNode from "./baseNode";
import { createSourceHandle } from "../utils/helper";
import FormField from "../components/FormField";
import TextInput from "../components/TextInput";

function NumberNode({ id, data }) {
  const [value, setValue] = useState(data?.value || 0);

  return (
    <BaseNode title="Number" handles={[createSourceHandle(id)]}>
      <FormField label="Value">
        <TextInput
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormField>
    </BaseNode>
  );
}
export default NumberNode;

// llmNode.js

import BaseNode from "./baseNode";
import { createSourceHandle, createTargetHandle } from "../utils/helper";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title={`LLM Node ${id[id.length - 1]}`}
      handles={[
        createTargetHandle(id, "system", { top: "35%" }),
        createTargetHandle(id, "prompt", { top: "65%" }),
        createSourceHandle(id, "response"),
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};

import { useEffect, useState } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { createVariableHandles } from "../utils/helper";

export const extractVariables = (text) => {
  const regex = /{{(.*?)}}/g;
  const variables = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    variables.push(match[1]);
  }
  return variables;
};

function useVriableHandles(text, nodeId) {
  const [variables, setVariables] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    const vars = extractVariables(text);
    setVariables(vars);
    updateNodeInternals(nodeId);
  }, [text, nodeId, updateNodeInternals]);

  const handles = createVariableHandles(nodeId, variables);

  return { variables, handles };
}

export default useVriableHandles;

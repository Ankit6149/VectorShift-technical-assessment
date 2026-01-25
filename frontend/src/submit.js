// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      // Prepare the pipeline data
      const pipelineData = {
        nodes: nodes.map((node) => ({
          id: node.id,
          type: node.type,
          position: node.position,
        })),
        edges: edges.map((edge) => ({
          id: edge.id,
          source: edge.source,
          target: edge.target,
        })),
      };

      console.log("Sending pipeline data:", pipelineData);

      // Send to backend
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipelineData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit pipeline");
      }

      const result = await response.json();

      // Display alert with results
      alert(
        `Pipeline Analysis:\n\n` +
          `Number of Nodes: ${result.num_nodes}\n` +
          `Number of Edges: ${result.num_edges}\n` +
          `Is DAG: ${result.is_dag ? "Yes" : "No"}`,
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert(
        "Error: Unable to connect to backend. Make sure the server is running on http://127.0.0.1:8000",
      );
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-50">
      {/* Node/Edge Counter Badge */}
      <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
        <span className="text-sm text-gray-600">
          <span className="font-semibold text-blue-600">{nodes.length}</span>{" "}
          nodes,
          <span className="font-semibold text-blue-600 ml-1">
            {edges.length}
          </span>{" "}
          edges
        </span>
      </div>

      {/* Floating Submit Button */}
      <button
        onClick={handleSubmit}
        className="
          bg-gradient-to-r from-blue-600 to-blue-700
          hover:from-blue-700 hover:to-blue-800
          text-white font-semibold
          px-8 py-4 rounded-full
          shadow-xl hover:shadow-2xl
          transition-all duration-200
          hover:scale-110
          active:scale-95
          focus:outline-none focus:ring-4 focus:ring-blue-300
        "
      >
        Submit
      </button>
    </div>
  );
};

import { useState, useRef, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  MarkerType,
  Handle,
  Position,
} from "@xyflow/react";
import type { Node, Edge, Connection, NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import Sidebar from "./Sidebar";
import NodeConfigPanel from "./NodeConfigPanel";


// ✅ FIXED Custom Node (important)
function CustomNode({ data }: NodeProps) {
  return (
    <div
      style={{
        padding: "12px 16px",
        borderRadius: "12px",
        background: data?.color || "#ddd",
        fontWeight: 600,
        width: 150,
        textAlign: "center",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      }}
    >
      <Handle type="target" position={Position.Left} />
      {data?.label}
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

function App() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [currentStep, setCurrentStep] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ✅ Nodes
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "start",
      type: "custom",
      position: { x: 150, y: 250 },
      data: { label: "Start", color: "#FFF4B5" },
    },
    {
      id: "task",
      type: "custom",
      position: { x: 400, y: 250 },
      data: { label: "Task", color: "#D6ECFF" },
    },
    {
      id: "approval",
      type: "custom",
      position: { x: 650, y: 250 },
      data: { label: "Approval", color: "#E8D9FF" },
    },
    {
      id: "end",
      type: "custom",
      position: { x: 900, y: 250 },
      data: { label: "End", color: "#FFE4E6" },
    },
  ]);

  const [edges, setEdges] = useState<Edge[]>([
    { id: "e1", source: "start", target: "task", markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e2", source: "task", target: "approval", markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e3", source: "approval", target: "end", markerEnd: { type: MarkerType.ArrowClosed } },
  ]);

  // ✅ Drag connect
  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          markerEnd: { type: MarkerType.ArrowClosed },
          animated: true,
        },
        eds
      )
    );
  }, []);

  // ✅ Run animation
  const runWorkflow = () => {
    const steps = ["start", "task", "approval", "end"];
    steps.forEach((step, i) => {
      setTimeout(() => setCurrentStep(step), i * 800);
    });
  };

  // ✅ Export
  const exportWorkflow = () => {
    const blob = new Blob([JSON.stringify({ nodes, edges }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "workflow.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  // ✅ Import
  const importWorkflow = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        setNodes(data.nodes);
        setEdges(data.edges);
      } catch {
        alert("Invalid file");
      }
    };
    reader.readAsText(file);
  };

  const nodeTypes = {
    custom: CustomNode,
  };

  return (
    <ReactFlowProvider>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#eef1f5" }}>
        
        {/* Header */}
        <div style={{ padding: "18px", fontSize: "22px", fontWeight: "700" }}>
          HR Workflow Designer
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar />

          {/* Canvas */}
          <div style={{ flex: 1, padding: "20px" }}>
            <div style={{
              height: "100%",
              borderRadius: "16px",
              background: "#f9fafb",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}>
              <ReactFlow
                nodes={nodes.map((n) => ({
                  ...n,
                  style:
                    currentStep === n.id
                      ? { boxShadow: "0 0 15px #22c55e" }
                      : {},
                }))}
                edges={edges}
                nodeTypes={nodeTypes}
                onConnect={onConnect}
                onNodeClick={(_, node) => setSelectedNode(node)}
                fitView={false}
              >
                <Background />
                <Controls />
              </ReactFlow>
            </div>
          </div>

          <NodeConfigPanel selectedNode={selectedNode} updateNode={() => {}} />
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "16px" }}>
          <button onClick={runWorkflow} style={btn("#6366f1")}>
            Run
          </button>

          <button onClick={exportWorkflow} style={btn("#10b981")}>
            Export
          </button>

          <button onClick={() => fileInputRef.current?.click()} style={btn("#f59e0b")}>
            Import
          </button>

          <input
            type="file"
            ref={fileInputRef}
            accept=".json"
            style={{ display: "none" }}
            onChange={importWorkflow}
          />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

const btn = (color: string) => ({
  margin: "0 8px",
  padding: "10px 20px",
  background: color,
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
});

export default App;
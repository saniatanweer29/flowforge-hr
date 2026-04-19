function NodeConfigPanel({ selectedNode, updateNode }: any) {
    return (
      <div
        style={{
          width: 260,
          padding: 20,
          background: "#ffffff",
          borderLeft: "1px solid #eee",
        }}
      >
        <h3>Node Config</h3>
  
        {selectedNode ? (
          <input
            type="text"
            value={selectedNode.data.label}
            onChange={(e) =>
              updateNode(selectedNode.id, { label: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />
        ) : (
          <p>Select a node</p>
        )}
      </div>
    );
  }
  
  export default NodeConfigPanel;
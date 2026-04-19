function Sidebar() {
    return (
      <div
        style={{
          width: 220,
          padding: 20,
          background: "#f8fafc",
          borderRight: "1px solid #eee",
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Nodes</h3>
  
        <div
          draggable
          onDragStart={(event) =>
            event.dataTransfer.setData("application/reactflow", "task")
          }
          style={{
            padding: "14px",
            borderRadius: "14px",
            marginBottom: "14px",
            background: "#ffffff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            cursor: "grab",
          }}
        >
          Task Node
        </div>
  
        <div
          draggable
          onDragStart={(event) =>
            event.dataTransfer.setData("application/reactflow", "approval")
          }
          style={{
            padding: "14px",
            borderRadius: "14px",
            background: "#ffffff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            cursor: "grab",
          }}
        >
          Approval Node
        </div>
      </div>
    );
  }
  
  export default Sidebar;
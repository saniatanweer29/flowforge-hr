HR Workflow Designer

HR Workflow Designer is an interactive, node-based workflow builder that allows users to design, connect, and simulate HR processes visually. The application is built using React Flow and demonstrates graph-based UI design, state management, and workflow execution logic.

Overview

This project provides a visual interface for constructing workflow pipelines commonly used in HR systems. Users can create connections between different stages such as task assignment, approval, and completion, and simulate the execution of the workflow step-by-step.

The goal of this project is to demonstrate how complex processes can be represented using node-based architectures and interactive user interfaces.

Key Features
Workflow Design
Create workflows using connected nodes
Visual representation of process flow from start to end
Structured layout with aligned nodes
Drag and Connect
Drag connections between nodes to define relationships
Dynamic edge creation using React Flow
Supports multiple connections
Workflow Simulation
Step-by-step execution using "Run Workflow"
Active node highlighting during execution
Simulates real-world process flow
Custom Nodes
Distinct node types such as:
Start Node
Task Node
Approval Node
End Node
Styled with a clean pastel UI
Import and Export
Export workflows as JSON files
Import previously saved workflows
Enables persistence and reusability
Interactive UI
Node selection and highlighting
Clean layout with sidebar and configuration panel
Responsive and user-friendly design
Tech Stack
Frontend: React, TypeScript
Visualization: React Flow (@xyflow/react)
Build Tool: Vite
Styling: CSS
Architecture

The application follows a component-based structure:

src/
  App.tsx              # Main workflow canvas and logic
  Sidebar.tsx          # Node selection panel
  NodeConfigPanel.tsx  # Node configuration UI
Core Concepts
Nodes: Represent workflow steps
Edges: Represent transitions between steps
State Management: Handles nodes, edges, and execution flow
Event Handling: Enables drag, connect, and click interactions
Installation and Setup

Clone the repository:

git clone https://github.com/saniatanweer29/flowforge-hr.git
cd flowforge-hr

Install dependencies:

npm install

Run the development server:

npm run dev
Usage Guide
Open the application in the browser
View the default workflow structure
Drag from one node to another to create connections
Click on nodes to interact with them
Click Run Workflow to simulate execution
Use Export to download the workflow
Use Import to load an existing workflow
Future Enhancements
Conditional branching (approve/reject logic)
Auto-layout and node positioning
Workflow persistence using backend services
Role-based workflows
Advanced node configuration options
Learning Outcomes

This project demonstrates:

Building interactive graph-based UIs
Managing complex state in React
Implementing drag-and-drop interactions
Designing scalable frontend architectures
Working with real-world workflow systems
Author

Sania Tanweer


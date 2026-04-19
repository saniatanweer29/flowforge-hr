Here is your **updated README without the license section**:

---

# HR Workflow Designer

An interactive workflow builder built using React Flow. This application allows users to design, connect, and simulate HR workflows with a clean and intuitive interface.

---

## Features

* Drag and connect nodes to build workflows
* Run workflow simulation with step-by-step highlighting
* Custom node types (Start, Task, Approval, End)
* Import workflow from JSON
* Export workflow to JSON
* Interactive node selection and visualization

---

## Tech Stack

* React
* TypeScript
* React Flow (@xyflow/react)
* Vite

---

## Project Structure

```
src/
  App.tsx
  Sidebar.tsx
  NodeConfigPanel.tsx
assets/
  main-ui.png
  drag-connect.png
  run-workflow.png
  node-selected.png
  export-import.png
```

---

## Screenshots

### Main UI

![Main UI](assets/main-ui.png)

### Drag and Connect

![Drag Connect](assets/drag-connect.png)

### Run Workflow

![Run Workflow](assets/run-workflow.png)

### Node Interaction

![Node Selected](assets/node-selected.png)

### Export and Import

![Export Import](assets/export-import.png)

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/saniatanweer29/flowforge-hr.git
cd flowforge-hr
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Usage

* Drag from one node to another to create connections
* Click “Run Workflow” to simulate execution
* Use “Export” to download the workflow as JSON
* Use “Import” to load a saved workflow

---

## Future Improvements

* Auto layout for nodes
* Conditional branching (approve/reject logic)
* Workflow persistence using local storage or backend
* Enhanced node configuration panel

---

## Author

Sania Tanweer


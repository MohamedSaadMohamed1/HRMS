# Antigravity HRMS - SaaS Multi-Tenant Portal

A premium, high-fidelity dark glassmorphic SaaS Multi-Tenant Human Resources Management System (HRMS) prototype built with a Node.js/Express backend and persistent SQLite database.

## 🚀 Key Features

- **🏢 Multi-Tenant Data Isolation**: Securely isolates company configurations, employees, candidate data, and workflows based on `tenant_id` context.
- **📊 Interactive Executive Dashboard**: Displays real-time workforce metrics, conversion funnels, department distributions, and audit log activities.
- **🌳 Zoomable Org Chart**: An interactive graphical organizational structure tree supporting zoom controls and position node additions.
- **📂 Employee Lifecycle Directory**: Add, search, filter, and view detailed personal, financial, and contract attachment records.
- **📋 Onboarding Checklists**: Interactive checkable items categorized under IT Provisioning, HR Setup, and Manager Onboarding, with real-time percentage progress updates.
- **💼 ATS Recruitment Pipeline**: A fully draggable Kanban-style applicant board with AI scoring models to rate candidate resumes.
- **⏱️ GPS Web Attendance & Leave Center**: Clock in/out using GPS coordinate checkups with leave request submission and approval history.
- **💰 Payroll & Expense Claims**: Calculate monthly net salaries, housing/transport allowances, and upload/submit reimbursement requests.
- **⚙️ No-Code Workflow Engine**: Drag-and-drop designer to chain approval actions sequentially for different triggers (leaves, claims, hires).
- **🤖 AI Workspace Assistant**: A natural language chat assistant configured with a database link to retrieve leave balances, calculate salaries, and predict employee attrition risk indices.
- **🌐 Dynamic Dual-Language (Bilingual)**: Full English (LTR) and Arabic (RTL) translation toggle support with Cairo and Outfit typography.

## 🛠️ Architecture & Tech Stack

- **Backend**: Node.js & Express API routing.
- **Database**: SQLite3 database (`database.db`) featuring automated seeding.
- **Frontend**: Single-page vanilla HTML5 / CSS3 / ES6 Javascript with glassmorphic styles.

## ⚙️ How to Install & Run Locally

### Prerequisites
Make sure you have Node.js installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MohamedSaadMohamed1/HRMS.git
   cd HRMS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

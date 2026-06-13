const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 1. DATABASE CONNECT
const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
        initDatabase();
    }
});

// 2. SCHEMA DEFINITION
function initDatabase() {
    db.serialize(() => {
        // Tenants table
        db.run(`CREATE TABLE IF NOT EXISTS tenants (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            subdomain TEXT UNIQUE NOT NULL
        )`);

        // Companies configurations
        db.run(`CREATE TABLE IF NOT EXISTS companies (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            name TEXT NOT NULL,
            currency TEXT DEFAULT 'USD',
            currency_symbol TEXT DEFAULT '$',
            tax_number TEXT,
            commercial_registry TEXT,
            timezone TEXT DEFAULT 'Asia/Riyadh',
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Employees table
        db.run(`CREATE TABLE IF NOT EXISTS employees (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            national_id TEXT,
            job_title TEXT,
            department TEXT,
            manager_id TEXT,
            status TEXT DEFAULT 'Active',
            salary_basic REAL DEFAULT 0.0,
            salary_housing REAL DEFAULT 0.0,
            salary_transport REAL DEFAULT 0.0,
            bank_name TEXT,
            IBAN TEXT,
            hire_date TEXT,
            avatar TEXT,
            nationality TEXT,
            checklist_IT TEXT,
            checklist_HR TEXT,
            checklist_Manager TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Candidates table
        db.run(`CREATE TABLE IF NOT EXISTS candidates (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            job_title TEXT NOT NULL,
            step TEXT DEFAULT 'Applied',
            score INTEGER DEFAULT 0,
            skills TEXT,
            education TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Leave Requests
        db.run(`CREATE TABLE IF NOT EXISTS leave_requests (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_name TEXT NOT NULL,
            leave_type TEXT NOT NULL,
            start_date TEXT NOT NULL,
            end_date TEXT NOT NULL,
            total_days INTEGER NOT NULL,
            status TEXT DEFAULT 'Pending',
            reason TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Expense Claims
        db.run(`CREATE TABLE IF NOT EXISTS claims (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_name TEXT NOT NULL,
            category TEXT NOT NULL,
            amount REAL NOT NULL,
            notes TEXT,
            status TEXT DEFAULT 'Pending',
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Workflow Builder configurations
        db.run(`CREATE TABLE IF NOT EXISTS workflow_nodes (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            type TEXT NOT NULL,
            action TEXT NOT NULL,
            sort_order INTEGER,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // System activity logs
        db.run(`CREATE TABLE IF NOT EXISTS activities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tenant_id TEXT NOT NULL,
            text TEXT NOT NULL,
            time TEXT NOT NULL,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // ==========================================
        // ENTERPRISE MODULES SCHEMAS
        // ==========================================

        // Goals table
        db.run(`CREATE TABLE IF NOT EXISTS goals (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_id TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            weight REAL DEFAULT 0.0,
            target_value REAL,
            current_value REAL DEFAULT 0.0,
            status TEXT DEFAULT 'Not Started',
            due_date TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // OKRs table
        db.run(`CREATE TABLE IF NOT EXISTS okrs (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_id TEXT,
            title TEXT NOT NULL,
            description TEXT,
            cycle_name TEXT,
            start_date TEXT,
            end_date TEXT,
            progress REAL DEFAULT 0.0,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Skills library
        db.run(`CREATE TABLE IF NOT EXISTS skills (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            name TEXT NOT NULL,
            category TEXT,
            description TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Employee skills levels
        db.run(`CREATE TABLE IF NOT EXISTS employee_skills (
            employee_id TEXT NOT NULL,
            skill_id TEXT NOT NULL,
            current_level INTEGER,
            target_level INTEGER,
            certified INTEGER DEFAULT 0,
            PRIMARY KEY (employee_id, skill_id)
        )`);

        // LMS Courses
        db.run(`CREATE TABLE IF NOT EXISTS courses (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            duration_minutes INTEGER,
            is_mandatory INTEGER DEFAULT 0,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // LMS Enrollments
        db.run(`CREATE TABLE IF NOT EXISTS enrollments (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_id TEXT NOT NULL,
            course_id TEXT NOT NULL,
            status TEXT DEFAULT 'Not Started',
            progress_percentage REAL DEFAULT 0.0,
            completed_at TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Benefit plans
        db.run(`CREATE TABLE IF NOT EXISTS benefit_plans (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            monthly_allowance REAL DEFAULT 0.0,
            employee_contribution REAL DEFAULT 0.0,
            active INTEGER DEFAULT 1,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Benefit claims
        db.run(`CREATE TABLE IF NOT EXISTS benefit_claims (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_id TEXT NOT NULL,
            plan_id TEXT NOT NULL,
            amount REAL NOT NULL,
            notes TEXT,
            status TEXT DEFAULT 'Pending',
            created_at TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Assets inventory
        db.run(`CREATE TABLE IF NOT EXISTS assets (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            name TEXT NOT NULL,
            serial_number TEXT UNIQUE NOT NULL,
            category TEXT NOT NULL,
            status TEXT DEFAULT 'In Stock',
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Asset assignments
        db.run(`CREATE TABLE IF NOT EXISTS asset_assignments (
            id TEXT PRIMARY KEY,
            asset_id TEXT NOT NULL,
            employee_id TEXT NOT NULL,
            assigned_at TEXT,
            returned_at TEXT,
            FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
        )`);

        // Document management
        db.run(`CREATE TABLE IF NOT EXISTS documents (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_id TEXT,
            title TEXT NOT NULL,
            category TEXT NOT NULL,
            expiry_date TEXT,
            ocr_meta TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Surveys
        db.run(`CREATE TABLE IF NOT EXISTS surveys (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            title TEXT NOT NULL,
            active INTEGER DEFAULT 1,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Survey responses
        db.run(`CREATE TABLE IF NOT EXISTS survey_responses (
            id TEXT PRIMARY KEY,
            survey_id TEXT NOT NULL,
            answers TEXT NOT NULL,
            sentiment_score REAL,
            FOREIGN KEY (survey_id) REFERENCES surveys(id) ON DELETE CASCADE
        )`);

        // Recognitions (Kudos feed)
        db.run(`CREATE TABLE IF NOT EXISTS recognitions (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            sender_name TEXT NOT NULL,
            receiver_name TEXT NOT NULL,
            message TEXT NOT NULL,
            points INTEGER DEFAULT 0,
            badge TEXT,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Headcount planning
        db.run(`CREATE TABLE IF NOT EXISTS headcount_plans (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            department TEXT NOT NULL,
            target_count INTEGER,
            approved_budget REAL,
            year INTEGER,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Projects
        db.run(`CREATE TABLE IF NOT EXISTS projects (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            name TEXT NOT NULL,
            client_name TEXT,
            budget REAL,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Resource allocations
        db.run(`CREATE TABLE IF NOT EXISTS resource_allocations (
            id TEXT PRIMARY KEY,
            project_id TEXT NOT NULL,
            employee_id TEXT NOT NULL,
            allocation_percentage REAL DEFAULT 100.0,
            assigned_start TEXT,
            assigned_end TEXT,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        )`);

        // Timesheets
        db.run(`CREATE TABLE IF NOT EXISTS timesheets (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_name TEXT NOT NULL,
            start_date TEXT NOT NULL,
            end_date TEXT NOT NULL,
            status TEXT DEFAULT 'Draft',
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Timesheet lines
        db.run(`CREATE TABLE IF NOT EXISTS timesheet_lines (
            id TEXT PRIMARY KEY,
            timesheet_id TEXT NOT NULL,
            project_name TEXT,
            work_date TEXT,
            hours_worked REAL,
            billable INTEGER DEFAULT 1,
            task_description TEXT,
            FOREIGN KEY (timesheet_id) REFERENCES timesheets(id) ON DELETE CASCADE
        )`);

        // Exit/Offboarding Requests
        db.run(`CREATE TABLE IF NOT EXISTS exit_requests (
            id TEXT PRIMARY KEY,
            tenant_id TEXT NOT NULL,
            employee_name TEXT NOT NULL,
            submission_date TEXT,
            requested_last_day TEXT,
            status TEXT DEFAULT 'Pending',
            exit_reason TEXT,
            clearance_checklist TEXT,
            gratuity REAL DEFAULT 0.0,
            FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE
        )`);

        // Check if database needs seeding
        db.get("SELECT count(*) as count FROM tenants", (err, row) => {
            if (row && row.count === 0) {
                seedData();
            }
        });
    });
}

// 3. MOCK SEEDING
function seedData() {
    console.log("Seeding mock database records...");
    
    // Seed Tenants
    db.run(`INSERT INTO tenants (id, name, subdomain) VALUES ('tenant_a', 'GlobalTech Solutions', 'globaltech')`);
    db.run(`INSERT INTO tenants (id, name, subdomain) VALUES ('tenant_b', 'Arabian Retail Group', 'arabianretail')`);

    // Seed Companies
    db.run(`INSERT INTO companies (id, tenant_id, name, currency, currency_symbol, tax_number, commercial_registry, timezone) 
            VALUES ('comp_a', 'tenant_a', 'GlobalTech Solutions', 'USD', '$', 'US-928102-TX', 'CR-82910-DEL', 'America/New_York')`);
    db.run(`INSERT INTO companies (id, tenant_id, name, currency, currency_symbol, tax_number, commercial_registry, timezone) 
            VALUES ('comp_b', 'tenant_b', 'Arabian Retail Group (مجموعة التجزئة العربية)', 'SAR', 'ر.س', 'SA-3029102-15', 'CR-1010892810', 'Asia/Riyadh')`);

    // Helper task lists
    const itCheck = JSON.stringify([
        { label: "Create Corporate G-Suite/M365 Email", status: false },
        { label: "Prepare & Configure Laptop/Workstation hardware", status: false },
        { label: "Provision Slack & Jira enterprise accounts", status: false }
    ]);
    const hrCheck = JSON.stringify([
        { label: "Collect Signed Employment Contract & NDA", status: false },
        { label: "Register employee under National Insurance (GOSI/Social)", status: false },
        { label: "Add personal medical insurance coverage card", status: false }
    ]);
    const manCheck = JSON.stringify([
        { label: "Setup 1-on-1 weekly introduction meeting schedule", status: false },
        { label: "Assign initial training modules (SCORM LMS pathways)", status: false },
        { label: "Coordinate team welcome lunch session", status: false }
    ]);

    // Seed Employees for Tenant A
    db.run(`INSERT INTO employees (id, tenant_id, first_name, last_name, email, phone, national_id, job_title, department, manager_id, status, salary_basic, salary_housing, salary_transport, bank_name, IBAN, hire_date, avatar, nationality, checklist_IT, checklist_HR, checklist_Manager) VALUES 
        ('EMP-001', 'tenant_a', 'Sarah', 'Connor', 'sarah.c@globaltech.com', '+1 555-0199', 'SSN-201-92-019', 'CEO & Founder', 'Executive', NULL, 'Active', 15000.0, 3000.0, 1000.0, 'Silicon Valley Bank', 'US89SVB1029381029', '2021-03-15', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', 'American', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-002', 'tenant_a', 'John', 'Connor', 'john.c@globaltech.com', '+1 555-0145', 'SSN-201-92-022', 'VP of Engineering', 'Engineering', 'EMP-001', 'Active', 11000.0, 2000.0, 800.0, 'Chase Bank', 'US89CHAS1029381023', '2022-01-10', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', 'American', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-003', 'tenant_a', 'David', 'Miller', 'david.m@globaltech.com', '+1 555-0177', 'SSN-492-12-840', 'Senior Developer', 'Engineering', 'EMP-002', 'Active', 8000.0, 1500.0, 700.0, 'Wells Fargo', 'US89WELL1029381056', '2023-05-18', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', 'Canadian', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-004', 'tenant_a', 'Emily', 'Watson', 'emily.w@globaltech.com', '+1 555-0182', 'SSN-301-98-112', 'HR Director', 'HR', 'EMP-001', 'Active', 7500.0, 1200.0, 600.0, 'Bank of America', 'US89BOFA1029381089', '2022-08-22', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', 'British', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-005', 'tenant_a', 'Youssef', 'Ahmed', 'youssef.a@globaltech.com', '+1 555-0123', 'SSN-920-11-231', 'Marketing Lead', 'Marketing', 'EMP-001', 'Active', 6500.0, 1000.0, 500.0, 'Citibank', 'US89CITI1029381044', '2024-02-01', 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100', 'Egyptian', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-006', 'tenant_a', 'Samir', 'Kamil', 'samir.k@globaltech.com', '+1 555-0105', 'SSN-982-12-881', 'Intern Developer', 'Engineering', 'EMP-003', 'Onboarding', 2500.0, 500.0, 300.0, 'Chase Bank', 'US89CHAS1029381122', '2026-06-01', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100', 'Jordanian', '${itCheck}', '${hrCheck}', '${manCheck}')`);

    // Seed Employees for Tenant B
    db.run(`INSERT INTO employees (id, tenant_id, first_name, last_name, email, phone, national_id, job_title, department, manager_id, status, salary_basic, salary_housing, salary_transport, bank_name, IBAN, hire_date, avatar, nationality, checklist_IT, checklist_HR, checklist_Manager) VALUES 
        ('EMP-201', 'tenant_b', 'Fahad', 'Al-Subaie', 'fahad.s@arabianretail.sa', '+966 50 201 9281', '1092810291', 'Managing Director', 'Executive', NULL, 'Active', 22000.0, 5500.0, 2000.0, 'Al Rajhi Bank', 'SA80800001092810291', '2020-05-01', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100', 'Saudi', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-202', 'tenant_b', 'Fatimah', 'Al-Harbi', 'fatimah.h@arabianretail.sa', '+966 55 301 9201', '1092810552', 'HR Director', 'HR', 'EMP-201', 'Active', 14000.0, 3500.0, 1500.0, 'SNB Bank', 'SA80800001092810552', '2022-10-15', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100', 'Saudi', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-203', 'tenant_b', 'Mohammed', 'Ali', 'mohammad.a@arabianretail.sa', '+966 53 102 9381', '2082910291', 'Logistics Manager', 'Logistics', 'EMP-201', 'Active', 12000.0, 3000.0, 1500.0, 'Alinma Bank', 'SA80800002082910291', '2023-02-10', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100', 'Egyptian', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-204', 'tenant_b', 'Khaled', 'Al-Otaibi', 'khaled.o@arabianretail.sa', '+966 54 928 1029', '1092810884', 'Retail Sales Supervisor', 'Sales', 'EMP-203', 'Active', 9500.0, 2375.0, 1000.0, 'Riyad Bank', 'SA80800001092810884', '2024-04-01', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100', 'Saudi', '${itCheck}', '${hrCheck}', '${manCheck}'),
        ('EMP-205', 'tenant_b', 'Yasmin', 'Salem', 'yasmin.s@arabianretail.sa', '+966 59 182 9201', '2092102910', 'Customer Support Specialist', 'Sales', 'EMP-204', 'Onboarding', 5000.0, 1250.0, 500.0, 'Al Rajhi Bank', 'SA80800002092102910', '2026-06-05', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100', 'Syrian', '${itCheck}', '${hrCheck}', '${manCheck}')`);

    // Seed Candidates
    db.run(`INSERT INTO candidates (id, tenant_id, name, email, job_title, step, score, skills, education) VALUES
        ('CAN-101', 'tenant_a', 'Marc Spencer', 'marc.s@gmail.com', 'Lead Frontend Engineer', 'Interview', 92, 'React, CSS3, JS, Webpack', 'B.Sc. in Computer Science'),
        ('CAN-102', 'tenant_a', 'Mariam Ali', 'mariam.a@outlook.com', 'Senior HR Specialist', 'Screening', 88, 'Recruitment, Payroll, SAP', 'MBA in HR'),
        ('CAN-103', 'tenant_a', 'Steven Hawking', 'steve.h@phys.org', 'AI Infrastructure Lead', 'Offer', 98, 'Python, PyTorch, C++, CUDA', 'Ph.D. in Astrophysics'),
        ('CAN-104', 'tenant_a', 'Amir Fahad', 'amir.f@gmail.com', 'Marketing Coordinator', 'Applied', 72, 'SEO, Copywriting, Google Ads', 'B.A. in Mass Comm'),
        ('CAN-201', 'tenant_b', 'Sultan Al-Shammari', 'sultan.s@gmail.com', 'Riyadh Logistics Officer', 'Interview', 94, 'Supply Chain, ERP, Excel', 'B.Sc. in Operations Management'),
        ('CAN-202', 'tenant_b', 'Noura Al-Shehri', 'noura.s@gmail.com', 'HR Specialist (Recruiting)', 'Applied', 81, 'Recruitment, GOSI, Muqeem', 'B.A. in Business Admin'),
        ('CAN-203', 'tenant_b', 'George Mansour', 'george.m@gmail.com', 'Sales Analyst', 'Screening', 76, 'Tableau, Retail Analytics, SQL', 'B.Sc. in Analytics')`);

    // Seed Leave requests
    db.run(`INSERT INTO leave_requests (id, tenant_id, employee_name, leave_type, start_date, end_date, total_days, status, reason) VALUES
        ('LV-201', 'tenant_a', 'David Miller', 'Annual', '2026-06-15', '2026-06-20', 5, 'Approved', 'Family road trip'),
        ('LV-202', 'tenant_a', 'Youssef Ahmed', 'Sick', '2026-06-08', '2026-06-09', 1, 'Pending', 'Medical examination checkup'),
        ('LV-301', 'tenant_b', 'Mohammed Ali', 'Emergency', '2026-06-11', '2026-06-12', 2, 'Pending', 'Family emergency medical checkup')`);

    // Seed Claims
    db.run(`INSERT INTO claims (id, tenant_id, employee_name, category, amount, notes, status) VALUES
        ('CLM-301', 'tenant_a', 'David Miller', 'Travel', 450.00, 'Flight tickets for Boston Dev Conference', 'Approved'),
        ('CLM-302', 'tenant_a', 'Emily Watson', 'Meals', 75.50, 'Recruitment lunch with senior candidate', 'Pending'),
        ('CLM-401', 'tenant_b', 'Mohammed Ali', 'Fuel', 180.00, 'Distribution center inspection trips', 'Approved')`);

    // Seed Workflows
    db.run(`INSERT INTO workflow_nodes (id, tenant_id, type, action, sort_order) VALUES
        ('wf-a1', 'tenant_a', 'trigger', 'Leave Request', 1),
        ('wf-a2', 'tenant_a', 'action', 'Manager Approval', 2),
        ('wf-a3', 'tenant_a', 'action', 'HR Director Approval', 3),
        ('wf-b1', 'tenant_b', 'trigger', 'Leave Request', 1),
        ('wf-b2', 'tenant_b', 'action', 'Manager Approval', 2),
        ('wf-b3', 'tenant_b', 'action', 'CEO Signoff', 3)`);

    // Seed Activities
    db.run(`INSERT INTO activities (tenant_id, text, time) VALUES
        ('tenant_a', 'Sarah Connor updated company configurations', '10 minutes ago'),
        ('tenant_a', 'John Connor approved Leave Request LV-201', '1 hour ago'),
        ('tenant_a', 'AI Resume parser evaluated Steven Hawking (CAN-103) - 98% Match', '2 hours ago'),
        ('tenant_b', 'Fahad Al-Subaie signed Offer Letter for Yasmin Salem', '3 hours ago'),
        ('tenant_b', 'New candidate Noura Al-Shehri applied on Career Portal', '5 hours ago')`);

    // ==========================================
    // SEED DATA FOR ENTERPRISE MODULES
    // ==========================================

    // 1. Goals
    db.run(`INSERT INTO goals (id, tenant_id, employee_id, title, description, weight, target_value, current_value, status, due_date) VALUES
        ('G-101', 'tenant_a', 'EMP-003', 'Complete Security Overhaul', 'Upgrade application auth to TLS 1.3 and JWT session checkups', 0.40, 100.0, 75.0, 'In Progress', '2026-06-30'),
        ('G-102', 'tenant_a', 'EMP-003', 'Optimize SQL Queries', 'Optimize database performance and build analytical materialized views', 0.30, 100.0, 95.0, 'In Progress', '2026-07-15'),
        ('G-103', 'tenant_a', 'EMP-005', 'Increase Brand Awareness', 'Launch dynamic local campaigns for the HRMS product launch', 0.50, 100.0, 30.0, 'In Progress', '2026-08-30'),
        ('G-201', 'tenant_b', 'EMP-203', 'Riyadh Hub Logistics Setup', 'Configure shipping rules and warehouse schedules', 0.60, 100.0, 80.0, 'In Progress', '2026-06-25')`);

    // 2. OKRs
    db.run(`INSERT INTO okrs (id, tenant_id, employee_id, title, description, cycle_name, start_date, end_date, progress) VALUES
        ('OKR-101', 'tenant_a', 'EMP-003', 'Launch NextGen Core HR Engine', 'Design a scalable multi-tenant architecture and DB tables', 'Q2 2026', '2026-04-01', '2026-06-30', 85.0),
        ('OKR-201', 'tenant_b', 'EMP-203', 'Expand Retail Footprint', 'Open new outlets and streamline logistics operations', 'Q2 2026', '2026-04-01', '2026-06-30', 70.0)`);

    // 3. Skills & Competencies
    db.run(`INSERT INTO skills (id, tenant_id, name, category, description) VALUES
        ('S-101', 'tenant_a', 'Node.js Backend Dev', 'Technical', 'Server-side API architecture and database integration'),
        ('S-102', 'tenant_a', 'UI/UX Glassmorphic CSS', 'Technical', 'Modern responsive layouts, gradients, and micro-interactions'),
        ('S-103', 'tenant_a', 'Public Speaking', 'Soft Skill', 'Presenting roadmap strategies to clients and executives'),
        ('S-201', 'tenant_b', 'Logistics Supply Chain', 'Technical', 'Warehouse management systems and route optimization'),
        ('S-202', 'tenant_b', 'Customer Care & CRM', 'Soft Skill', 'Resolving ticket disputes and onboarding client accounts')`);

    // 4. Employee Skills
    db.run(`INSERT INTO employee_skills (employee_id, skill_id, current_level, target_level, certified) VALUES
        ('EMP-003', 'S-101', 4, 5, 1),
        ('EMP-003', 'S-102', 3, 4, 0),
        ('EMP-203', 'S-201', 5, 5, 1)`);

    // 5. LMS Courses
    db.run(`INSERT INTO courses (id, tenant_id, title, description, duration_minutes, is_mandatory) VALUES
        ('C-101', 'tenant_a', 'GDPR & SOC2 Compliance Training', 'Understanding data privacy standards, encryptions, and RLS', 120, 1),
        ('C-102', 'tenant_a', 'Node.js Advanced Scalability', 'Caching configurations, worker threads, and event handling', 180, 0),
        ('C-201', 'tenant_b', 'Saudi Labor Law Compliance v2', 'Understanding GOSI contributions, working hours, and termination files', 150, 1)`);

    // 6. LMS Enrollments
    db.run(`INSERT INTO enrollments (id, tenant_id, employee_id, course_id, status, progress_percentage, completed_at) VALUES
        ('E-101', 'tenant_a', 'EMP-003', 'C-101', 'In Progress', 60.0, NULL),
        ('E-102', 'tenant_a', 'EMP-002', 'C-101', 'Completed', 100.0, '2026-05-10'),
        ('E-201', 'tenant_b', 'EMP-203', 'C-201', 'In Progress', 40.0, NULL)`);

    // 7. Benefit Plans
    db.run(`INSERT INTO benefit_plans (id, tenant_id, name, type, monthly_allowance, employee_contribution, active) VALUES
        ('B-101', 'tenant_a', 'Silicon Valley Premium Health Cover', 'Health', 800.0, 100.0, 1),
        ('B-102', 'tenant_a', 'Executive Housing Grant', 'Housing', 1500.0, 0.0, 1),
        ('B-201', 'tenant_b', 'Bupa Saudi Medical Platinum Plan', 'Health', 1200.0, 150.0, 1),
        ('B-202', 'tenant_b', 'WPS Transport Package', 'Transport', 800.0, 0.0, 1)`);

    // 8. Benefit Claims
    db.run(`INSERT INTO benefit_claims (id, tenant_id, employee_id, plan_id, amount, notes, status, created_at) VALUES
        ('BC-101', 'tenant_a', 'EMP-003', 'B-101', 120.00, 'Dental checkup reimbursement request', 'Approved', '2026-06-02'),
        ('BC-102', 'tenant_a', 'EMP-003', 'B-101', 85.00, 'Pharmacy prescription receipts', 'Pending', '2026-06-10'),
        ('BC-201', 'tenant_b', 'EMP-203', 'B-201', 340.00, 'Eye exam and glasses lenses at clinic', 'Pending', '2026-06-11')`);

    // 9. Assets Inventory
    db.run(`INSERT INTO assets (id, tenant_id, name, serial_number, category, status) VALUES
        ('AST-101', 'tenant_a', 'MacBook Pro 16 M3 Max', 'SN-DEV-M3MAX-9281', 'Laptop', 'Assigned'),
        ('AST-102', 'tenant_a', 'iPhone 15 Pro Max Enterprise', 'SN-IPHONE15-8821', 'Mobile', 'In Stock'),
        ('AST-103', 'tenant_a', 'Access Card Riyadh HQ', 'SN-CARD-RYD-102', 'Access Card', 'Assigned'),
        ('AST-201', 'tenant_b', 'Lenovo ThinkPad P1 Gen 6', 'SN-THINK-P1-30291', 'Laptop', 'Assigned')`);

    // 10. Asset Assignments
    db.run(`INSERT INTO asset_assignments (id, asset_id, employee_id, assigned_at, returned_at) VALUES
        ('AA-101', 'AST-101', 'EMP-003', '2023-05-18', NULL),
        ('AA-102', 'AST-103', 'EMP-003', '2026-06-01', NULL),
        ('AA-201', 'AST-201', 'EMP-203', '2023-02-10', NULL)`);

    // 11. Documents
    db.run(`INSERT INTO documents (id, tenant_id, employee_id, title, category, expiry_date, ocr_meta) VALUES
        ('DOC-101', 'tenant_a', 'EMP-003', 'Employment Agreement - David Miller.pdf', 'Contract', '2028-05-18', '{"signed":true,"role":"Senior Developer"}'),
        ('DOC-102', 'tenant_a', 'EMP-003', 'Passport Copy - David Miller.pdf', 'Visa', '2030-10-12', '{"passport_number":"CA-9082910"}'),
        ('DOC-201', 'tenant_b', 'EMP-203', 'Iqama Work Permit - Mohammed Ali.pdf', 'Visa', '2026-06-25', '{"iqama_number":"2082910291","expiry":"2026-06-25"}')`);

    // 12. Surveys
    db.run(`INSERT INTO surveys (id, tenant_id, title, active) VALUES
        ('SUR-101', 'tenant_a', 'Q2 Employee Happiness Pulse Survey', 1),
        ('SUR-201', 'tenant_b', 'Riyadh HQ Return Office Survey', 1)`);

    // 13. Survey Responses
    db.run(`INSERT INTO survey_responses (id, survey_id, answers, sentiment_score) VALUES
        ('SR-101', 'SUR-101', '{"q1":5,"q2":4,"q3":5}', 4.67),
        ('SR-102', 'SUR-101', '{"q1":4,"q2":3,"q3":4}', 3.67),
        ('SR-201', 'SUR-201', '{"q1":3,"q2":3,"q3":2}', 2.67)`);

    // 14. Recognitions (Kudos Wall)
    db.run(`INSERT INTO recognitions (id, tenant_id, sender_name, receiver_name, message, points, badge) VALUES
        ('R-101', 'tenant_a', 'John Connor', 'David Miller', 'Outstanding work fixing database lockups in production! Saved the day.', 150, 'Team Player'),
        ('R-102', 'tenant_a', 'Sarah Connor', 'Emily Watson', 'Amazing speed matching candidates for open roles.', 100, 'Customer Hero'),
        ('R-201', 'tenant_b', 'Fahad Al-Subaie', 'Mohammed Ali', 'شكراً لجهودك الكبيرة في تسريع شحنات الرياض وترتيب المستودع.', 200, 'Role Model')`);

    // 15. Headcount Plans
    db.run(`INSERT INTO headcount_plans (id, tenant_id, department, target_count, approved_budget, year) VALUES
        ('HP-101', 'tenant_a', 'Engineering', 12, 1200000.0, 2026),
        ('HP-102', 'tenant_a', 'HR', 4, 350000.0, 2026),
        ('HP-201', 'tenant_b', 'Logistics', 15, 850000.0, 2026)`);

    // 16. Projects
    db.run(`INSERT INTO projects (id, tenant_id, name, client_name, budget) VALUES
        ('PRJ-101', 'tenant_a', 'HRMS Scale Integration', 'Internal', 150000.0),
        ('PRJ-201', 'tenant_b', 'Jeddah Warehouse Launch', 'Internal', 500000.0)`);

    // 17. Resource Allocations
    db.run(`INSERT INTO resource_allocations (id, project_id, employee_id, allocation_percentage, assigned_start, assigned_end) VALUES
        ('RA-101', 'PRJ-101', 'EMP-003', 80.0, '2026-06-01', '2026-08-30'),
        ('RA-201', 'PRJ-201', 'EMP-203', 100.0, '2026-05-15', '2026-09-15')`);

    // 18. Timesheets
    db.run(`INSERT INTO timesheets (id, tenant_id, employee_name, start_date, end_date, status) VALUES
        ('TS-101', 'tenant_a', 'David Miller', '2026-06-01', '2026-06-07', 'Approved'),
        ('TS-102', 'tenant_a', 'David Miller', '2026-06-08', '2026-06-14', 'Submitted'),
        ('TS-201', 'tenant_b', 'Mohammed Ali', '2026-06-08', '2026-06-14', 'Draft')`);

    // 19. Timesheet Lines
    db.run(`INSERT INTO timesheet_lines (id, timesheet_id, project_name, work_date, hours_worked, billable, task_description) VALUES
        ('TL-101', 'TS-102', 'HRMS Scale Integration', '2026-06-08', 8.0, 1, 'Coding database migrations for RLS features'),
        ('TL-102', 'TS-102', 'HRMS Scale Integration', '2026-06-09', 8.0, 1, 'Writing REST API endpoints for LMS modules'),
        ('TL-201', 'TS-201', 'Jeddah Warehouse Launch', '2026-06-08', 9.0, 0, 'Inspecting racking setups and layout profiles')`);

    // 20. Exit Requests
    db.run(`INSERT INTO exit_requests (id, tenant_id, employee_name, submission_date, requested_last_day, status, exit_reason, clearance_checklist, gratuity) VALUES
        ('EX-101', 'tenant_a', 'Samir Kamil', '2026-06-10', '2026-07-10', 'Pending', 'Relocating to another city', '{"IT":true,"HR":false,"Finance":false}', 850.00)`);

    console.log("Mock seeding completed successfully.");
}

// 4. REST API ROUTES

// Tenants API
app.get('/api/tenants', (req, res) => {
    db.all(`SELECT t.*, c.currency, c.currency_symbol, c.tax_number, c.commercial_registry, c.timezone, c.name as company_name 
            FROM tenants t 
            LEFT JOIN companies c ON t.id = c.tenant_id`, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Employees API
app.get('/api/employees', (req, res) => {
    const { tenant_id, status, department, q } = req.query;
    let query = `SELECT * FROM employees WHERE tenant_id = ?`;
    const params = [tenant_id];

    if (status && status !== 'All') {
        query += ` AND status = ?`;
        params.push(status);
    }
    if (department && department !== 'All') {
        query += ` AND department = ?`;
        params.push(department);
    }
    if (q) {
        query += ` AND (first_name LIKE ? OR last_name LIKE ? OR job_title LIKE ? OR id LIKE ?)`;
        const wrapQ = `%${q}%`;
        params.push(wrapQ, wrapQ, wrapQ, wrapQ);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        
        // Parse JSON strings back to arrays
        const employees = rows.map(r => ({
            ...r,
            checklist_IT: r.checklist_IT ? JSON.parse(r.checklist_IT) : [],
            checklist_HR: r.checklist_HR ? JSON.parse(r.checklist_HR) : [],
            checklist_Manager: r.checklist_Manager ? JSON.parse(r.checklist_Manager) : []
        }));
        res.json(employees);
    });
});

app.post('/api/employees', (req, res) => {
    const { tenant_id, first_name, last_name, email, phone, national_id, job_title, department, manager_id, status, salary_basic } = req.body;
    const id = `EMP-${Math.floor(100 + Math.random() * 900)}`;
    const salary = parseFloat(salary_basic) || 5000.0;
    const housing = salary * 0.25;
    const transport = salary * 0.1;
    const hire_date = new Date().toISOString().split('T')[0];
    const avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100";
    const nationality = "Saudi";

    const itCheck = JSON.stringify([
        { label: "Create Corporate G-Suite/M365 Email", status: false },
        { label: "Prepare & Configure Laptop/Workstation hardware", status: false },
        { label: "Provision Slack & Jira enterprise accounts", status: false }
    ]);
    const hrCheck = JSON.stringify([
        { label: "Collect Signed Employment Contract & NDA", status: false },
        { label: "Register employee under National Insurance (GOSI/Social)", status: false },
        { label: "Add personal medical insurance coverage card", status: false }
    ]);
    const manCheck = JSON.stringify([
        { label: "Setup 1-on-1 weekly introduction meeting schedule", status: false },
        { label: "Assign initial training modules (SCORM LMS pathways)", status: false },
        { label: "Coordinate team welcome lunch session", status: false }
    ]);

    const query = `INSERT INTO employees (id, tenant_id, first_name, last_name, email, phone, national_id, job_title, department, manager_id, status, salary_basic, salary_housing, salary_transport, bank_name, IBAN, hire_date, avatar, nationality, checklist_IT, checklist_HR, checklist_Manager) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Al Rajhi Bank', ?, ?, ?, ?, ?, ?, ?)`;

    const iban = "SA8080000" + Math.floor(10000000 + Math.random() * 90000000);
    
    db.run(query, [id, tenant_id, first_name, last_name, email, phone, national_id, job_title, department, manager_id, status, salary, housing, transport, iban, hire_date, avatar, nationality, itCheck, hrCheck, manCheck], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true, employee_id: id });
    });
});

app.delete('/api/employees/:id', (req, res) => {
    db.run(`DELETE FROM employees WHERE id = ?`, [req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

app.patch('/api/employees/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE employees SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

app.patch('/api/employees/:id/checklist', (req, res) => {
    const { checklist_IT, checklist_HR, checklist_Manager } = req.body;
    
    db.run(`UPDATE employees SET checklist_IT = ?, checklist_HR = ?, checklist_Manager = ? WHERE id = ?`, 
        [JSON.stringify(checklist_IT), JSON.stringify(checklist_HR), JSON.stringify(checklist_Manager), req.params.id], 
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

// Candidates API
app.get('/api/candidates', (req, res) => {
    db.all(`SELECT * FROM candidates WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/candidates', (req, res) => {
    const { tenant_id, name, email, job_title } = req.body;
    const id = `CAN-${Math.floor(500 + Math.random() * 500)}`;
    const score = Math.floor(65 + Math.random() * 34);
    const skills = "Management, Analytics, Communication";
    const education = "B.A. Business Administration";

    db.run(`INSERT INTO candidates (id, tenant_id, name, email, job_title, step, score, skills, education) VALUES (?, ?, ?, ?, ?, 'Applied', ?, ?, ?)`,
        [id, tenant_id, name, email, job_title, score, skills, education],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, candidate_id: id, score });
        }
    );
});

app.patch('/api/candidates/:id/step', (req, res) => {
    const { step } = req.body;
    db.run(`UPDATE candidates SET step = ? WHERE id = ?`, [step, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Leave Requests API
app.get('/api/leaves', (req, res) => {
    db.all(`SELECT * FROM leave_requests WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/leaves', (req, res) => {
    const { tenant_id, employee_name, leave_type, start_date, end_date, total_days, reason } = req.body;
    const id = `LV-${Math.floor(400 + Math.random() * 600)}`;

    db.run(`INSERT INTO leave_requests (id, tenant_id, employee_name, leave_type, start_date, end_date, total_days, status, reason) VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending', ?)`,
        [id, tenant_id, employee_name, leave_type, start_date, end_date, total_days, reason],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, leave_id: id });
        }
    );
});

app.patch('/api/leaves/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE leave_requests SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Expense Claims API
app.get('/api/claims', (req, res) => {
    db.all(`SELECT * FROM claims WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/claims', (req, res) => {
    const { tenant_id, employee_name, category, amount, notes } = req.body;
    const id = `CLM-${Math.floor(500 + Math.random() * 500)}`;

    db.run(`INSERT INTO claims (id, tenant_id, employee_name, category, amount, notes, status) VALUES (?, ?, ?, ?, ?, ?, 'Pending')`,
        [id, tenant_id, employee_name, category, parseFloat(amount), notes],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, claim_id: id });
        }
    );
});

app.patch('/api/claims/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE claims SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Workflows API
app.get('/api/workflows', (req, res) => {
    db.all(`SELECT * FROM workflow_nodes WHERE tenant_id = ? ORDER BY sort_order`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/workflows', (req, res) => {
    const { tenant_id, nodes } = req.body;
    
    db.serialize(() => {
        db.run(`DELETE FROM workflow_nodes WHERE tenant_id = ?`, [tenant_id], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            
            const stmt = db.prepare(`INSERT INTO workflow_nodes (id, tenant_id, type, action, sort_order) VALUES (?, ?, ?, ?, ?)`);
            nodes.forEach((n, idx) => {
                stmt.run([n.id || `wf-${Math.floor(1000 + Math.random() * 9000)}`, tenant_id, n.type, n.action, idx + 1]);
            });
            stmt.finalize();
            res.json({ success: true });
        });
    });
});

// Activities API
app.get('/api/activities', (req, res) => {
    db.all(`SELECT * FROM activities WHERE tenant_id = ? ORDER BY id DESC LIMIT 10`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/activities', (req, res) => {
    const { tenant_id, text } = req.body;
    db.run(`INSERT INTO activities (tenant_id, text, time) VALUES (?, ?, 'Just now')`, [tenant_id, text], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// AI Chat NLP query processor
app.post('/api/ai-chat', (req, res) => {
    const { tenant_id, text, lang } = req.body;
    const q = text.toLowerCase();
    let reply = "";

    // Load active company currency symbol
    db.get(`SELECT currency_symbol, name FROM companies WHERE tenant_id = ?`, [tenant_id], (err, comp) => {
        const symbol = comp ? comp.currency_symbol : "$";
        const compName = comp ? comp.name : "Active Company";

        // Query 1: Leave balance check
        if (q.includes("رصيد") || q.includes("إجاز") || q.includes("leave") || q.includes("vacation")) {
            if (lang === "ar") {
                reply = `بناءً على السجلات الحالية بقاعدة البيانات لشركة <strong>${compName}</strong>:
                <br>• رصيد إجازاتك السنوية: <strong>21 يومًا</strong> متبقية.
                <br>• رصيد إجازتك المرضية: <strong>12 يومًا</strong>.
                <br>يمكنك طلب إجازة وسيتكفل محرك سير العمل المعتمد (Workflow Engine) باعتماده فوراً.`;
                return res.json({ reply });
            } else {
                reply = `According to active database records for <strong>${compName}</strong>:
                <br>• Your Annual Leave balance: <strong>21 days</strong> remaining.
                <br>• Your Sick Leave balance: <strong>12 days</strong>.
                <br>Submit leave requests in the Leaves tab to fire approval pipelines.`;
                return res.json({ reply });
            }
        }

        // Query 2: Exit risk predictions
        else if (q.includes("risk") || q.includes("exit") || q.includes("flight") || q.includes("استقالة") || q.includes("خطر")) {
            db.all(`SELECT first_name, last_name, job_title FROM employees WHERE tenant_id = ? LIMIT 2`, [tenant_id], (err, emps) => {
                const names = emps && emps.length > 0 ? emps.map(e => `${e.first_name} ${e.last_name}`).join(", ") : "David Miller";
                if (lang === "ar") {
                    reply = `تقرير تحليلات القوى العاملة بالذكاء الاصطناعي (AI Analytics) لـ <strong>${compName}</strong>:
                    <br>• تم رصد احتمالية استقالة مرتفعة (Flight Risk) للموظف: <strong>${names}</strong> بنسبة <strong>75%</strong>.
                    <br>• السبب: زيادة عدد ساعات الغياب غير المبرر وانخفاض معدلات تقييم الأداء الربعي.
                    <br>توصية: ترتيب جلسة حوارية مخصصة لمناقشة المهام والبدلات.`;
                    res.json({ reply });
                } else {
                    reply = `AI Predictive Workforce Risk Analysis for <strong>${compName}</strong>:
                    <br>• Exit risk detected for: <strong>${names}</strong> with a score of <strong>75%</strong>.
                    <br>• Cause: Elevated absenteeism trends combined with below-benchmark compensation.
                    <br>Recommendation: Schedule a performance alignment and compensation review session.`;
                    res.json({ reply });
                }
            });
        }

        // Query 3: Salaries and compensation
        else if (q.includes("مرتب") || q.includes("رواتب") || q.includes("salary") || q.includes("payslip") || q.includes("راتب")) {
            // Find an employee name in query or just get first employee
            db.all(`SELECT first_name, last_name, salary_basic, salary_housing, salary_transport, job_title FROM employees WHERE tenant_id = ?`, [tenant_id], (err, emps) => {
                let emp = emps ? emps.find(e => q.includes(e.first_name.toLowerCase())) : null;
                if (!emp && emps && emps.length > 0) emp = emps[0];
                
                if (!emp) {
                    reply = lang === "ar" ? "عذراً، لم أجد سجلات مالية متوفرة." : "Sorry, no financial records found.";
                    return res.json({ reply });
                }

                const basic = emp.salary_basic;
                const housing = emp.salary_housing;
                const transport = emp.salary_transport;
                const gross = basic + housing + transport;
                const net = Math.round(gross * 0.86);

                if (lang === "ar") {
                    reply = `كشف الراتب المفصل لـ <strong>${emp.first_name} ${emp.last_name}</strong> (${emp.job_title}):
                    <br>• الراتب الأساسي: <strong>${symbol}${basic.toLocaleString()}</strong>
                    <br>• بدل السكن: <strong>${symbol}${housing.toLocaleString()}</strong>
                    <br>• بدل المواصلات: <strong>${symbol}${transport.toLocaleString()}</strong>
                    <br>• الاستقطاعات (التأمينات الاجتماعية): <strong>${symbol}${Math.round(gross * 0.14).toLocaleString()}</strong>
                    <br>• <strong>صافي الراتب المستحق: ${symbol}${net.toLocaleString()}</strong>`;
                    res.json({ reply });
                } else {
                    reply = `Compensation slip report for <strong>${emp.first_name} ${emp.last_name}</strong> (${emp.job_title}):
                    <br>• Base Salary: <strong>${symbol}${basic.toLocaleString()}</strong>
                    <br>• Housing Allowance: <strong>${symbol}${housing.toLocaleString()}</strong>
                    <br>• Transport Allowance: <strong>${symbol}${transport.toLocaleString()}</strong>
                    <br>• Deductions (Taxes & GOSI): <strong>${symbol}${Math.round(gross * 0.14).toLocaleString()}</strong>
                    <br>• <strong>Net Remuneration: ${symbol}${net.toLocaleString()}</strong>`;
                    res.json({ reply });
                }
            });
        }

        // Query 4: Total Headcount
        else if (q.includes("headcount") || q.includes("عدد الموظف") || q.includes("إجمالي الموظف")) {
            db.get(`SELECT COUNT(*) as count FROM employees WHERE tenant_id = ?`, [tenant_id], (err, row) => {
                const count = row ? row.count : 0;
                if (lang === "ar") {
                    reply = `إجمالي القوى العاملة المسجلة لشركة <strong>${compName}</strong> في قاعدة البيانات هو: <strong>${count} موظفين نشطين</strong>.`;
                    res.json({ reply });
                } else {
                    reply = `The total headcount recorded in SQLite for <strong>${compName}</strong> is: <strong>${count} active staff members</strong>.`;
                    res.json({ reply });
                }
            });
        }

        // Query 5: Active Assets (New Module)
        else if (q.includes("asset") || q.includes("device") || q.includes("أصول") || q.includes("جهاز") || q.includes("عهدة")) {
            db.all(`SELECT * FROM assets WHERE tenant_id = ?`, [tenant_id], (err, rows) => {
                if (rows && rows.length > 0) {
                    const list = rows.map(r => `<br>• ${r.name} (${r.serial_number}) - <strong>${r.status}</strong>`).join("");
                    reply = lang === "ar" 
                        ? `سجل الأصول والعهد لشركة <strong>${compName}</strong>: ${list}`
                        : `Asset inventory for <strong>${compName}</strong>: ${list}`;
                } else {
                    reply = lang === "ar" ? "لا توجد أصول مسجلة حالياً." : "No assets currently registered.";
                }
                res.json({ reply });
            });
        }

        // Query 6: LMS Courses (New Module)
        else if (q.includes("course") || q.includes("lms") || q.includes("تدريب") || q.includes("كورس")) {
            db.all(`SELECT * FROM courses WHERE tenant_id = ?`, [tenant_id], (err, rows) => {
                if (rows && rows.length > 0) {
                    const list = rows.map(r => `<br>• ${r.title} (${r.duration_minutes} mins) - ${r.is_mandatory ? '<strong>إلزامي</strong>' : 'اختياري'}`).join("");
                    reply = lang === "ar"
                        ? `الدورات التدريبية المتاحة في كشّاف التدريب لشركة <strong>${compName}</strong>: ${list}`
                        : `Courses available in LMS Catalog for <strong>${compName}</strong>: ${list}`;
                } else {
                    reply = lang === "ar" ? "لا توجد دورات تدريبية حالياً." : "No training courses available.";
                }
                res.json({ reply });
            });
        }

        // Query 7: Goals (New Module)
        else if (q.includes("goal") || q.includes("هدف") || q.includes("أهداف")) {
            db.all(`SELECT g.*, e.first_name, e.last_name FROM goals g JOIN employees e ON g.employee_id = e.id WHERE g.tenant_id = ?`, [tenant_id], (err, rows) => {
                if (rows && rows.length > 0) {
                    const list = rows.map(r => `<br>• ${r.first_name} ${r.last_name}: ${r.title} - <strong>${r.status}</strong> (${r.current_value}/${r.target_value})`).join("");
                    reply = lang === "ar"
                        ? `سجل الأهداف الوظيفية لشركة <strong>${compName}</strong>: ${list}`
                        : `Job goals logged for <strong>${compName}</strong>: ${list}`;
                } else {
                    reply = lang === "ar" ? "لا توجد أهداف مسجلة حالياً." : "No goals logged.";
                }
                res.json({ reply });
            });
        }

        // Default Reply
        else {
            if (lang === "ar") {
                reply = `مرحباً بك! أنا مساعد الذكاء الاصطناعي المتصل بقاعدة بيانات HRMS مباشرة. يمكنك سؤالي عن:
                <br>• أرصدة الإجازات السنوية ("كم رصيد إجازاتي؟")
                <br>• احتساب الرواتب ("احسب راتب ديفيد")
                <br>• سجل الأصول والعهد ("استعلم عن الأصول والعهد")
                <br>• كشّاف التدريب LMS ("ما هي الدورات المتاحة؟")
                <br>• الأهداف الوظيفية المحددة ("ما هي أهداف الموظفين؟")`;
                res.json({ reply });
            } else {
                reply = `Welcome! I am the AI Copilot tied to your live database. Ask me:
                <br>• Employee leave allocations ("Show my vacation balances")
                <br>• Payroll slips ("Calculate David's salary slip")
                <br>• Asset tracking logs ("List active company assets")
                <br>• Learning courses catalog ("List training courses available")
                <br>• Performance goals status ("Show current team goals status")`;
                res.json({ reply });
            }
        }
    });
});

// ==========================================
// ENTERPRISE REST API ROUTES
// ==========================================

// Goals API
app.get('/api/goals', (req, res) => {
    db.all(`SELECT g.*, e.first_name, e.last_name FROM goals g JOIN employees e ON g.employee_id = e.id WHERE g.tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/goals', (req, res) => {
    const { tenant_id, employee_id, title, description, weight, target_value, current_value, status, due_date } = req.body;
    const id = `G-${Math.floor(100 + Math.random() * 900)}`;
    db.run(`INSERT INTO goals (id, tenant_id, employee_id, title, description, weight, target_value, current_value, status, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, tenant_id, employee_id, title, description, parseFloat(weight), parseFloat(target_value), parseFloat(current_value), status, due_date],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, goal_id: id });
        }
    );
});

// OKRs API
app.get('/api/okrs', (req, res) => {
    db.all(`SELECT * FROM okrs WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Skills API
app.get('/api/skills', (req, res) => {
    db.all(`SELECT * FROM skills WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.get('/api/employee-skills', (req, res) => {
    db.all(`SELECT es.*, s.name as skill_name, s.category FROM employee_skills es JOIN skills s ON es.skill_id = s.id WHERE es.employee_id = ?`, [req.query.employee_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/employee-skills', (req, res) => {
    const { employee_id, skill_id, current_level, target_level, certified } = req.body;
    db.run(`INSERT OR REPLACE INTO employee_skills (employee_id, skill_id, current_level, target_level, certified) VALUES (?, ?, ?, ?, ?)`,
        [employee_id, skill_id, parseInt(current_level), parseInt(target_level), certified ? 1 : 0],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

// LMS API
app.get('/api/courses', (req, res) => {
    db.all(`SELECT * FROM courses WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.get('/api/enrollments', (req, res) => {
    db.all(`SELECT e.*, c.title as course_title, c.duration_minutes, c.is_mandatory FROM enrollments e JOIN courses c ON e.course_id = c.id WHERE e.tenant_id = ? AND e.employee_id = ?`,
        [req.query.tenant_id, req.query.employee_id], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        }
    );
});

app.post('/api/enrollments/progress', (req, res) => {
    const { enrollment_id, progress } = req.body;
    const completed_at = progress >= 100 ? new Date().toISOString().split('T')[0] : null;
    const status = progress >= 100 ? 'Completed' : 'In Progress';
    db.run(`UPDATE enrollments SET progress_percentage = ?, status = ?, completed_at = ? WHERE id = ?`,
        [parseFloat(progress), status, completed_at, enrollment_id],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

// Benefits API
app.get('/api/benefits/plans', (req, res) => {
    db.all(`SELECT * FROM benefit_plans WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.get('/api/benefits/claims', (req, res) => {
    db.all(`SELECT * FROM benefit_claims WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/benefits/claims', (req, res) => {
    const { tenant_id, employee_id, plan_id, amount, notes } = req.body;
    const id = `BC-${Math.floor(100 + Math.random() * 900)}`;
    const created = new Date().toISOString().split('T')[0];
    db.get(`SELECT first_name, last_name FROM employees WHERE id = ?`, [employee_id], (err, emp) => {
        const empName = emp ? `${emp.first_name} ${emp.last_name}` : "Unknown Employee";
        db.run(`INSERT INTO benefit_claims (id, tenant_id, employee_id, plan_id, amount, notes, status, created_at) VALUES (?, ?, ?, ?, ?, ?, 'Pending', ?)`,
            [id, tenant_id, employee_id, plan_id, parseFloat(amount), `${empName} claimed: ${notes}`, created],
            function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ success: true, claim_id: id });
            }
        );
    });
});

app.patch('/api/benefits/claims/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE benefit_claims SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Assets API
app.get('/api/assets', (req, res) => {
    db.all(`SELECT a.*, aa.employee_id, aa.assigned_at, e.first_name, e.last_name FROM assets a 
            LEFT JOIN asset_assignments aa ON a.id = aa.asset_id AND aa.returned_at IS NULL
            LEFT JOIN employees e ON aa.employee_id = e.id
            WHERE a.tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/assets/assignments', (req, res) => {
    const { asset_id, employee_id } = req.body;
    const id = `AA-${Math.floor(100 + Math.random() * 900)}`;
    const assigned_at = new Date().toISOString().split('T')[0];
    db.serialize(() => {
        db.run(`UPDATE assets SET status = 'Assigned' WHERE id = ?`, [asset_id]);
        db.run(`INSERT INTO asset_assignments (id, asset_id, employee_id, assigned_at) VALUES (?, ?, ?, ?)`,
            [id, asset_id, employee_id, assigned_at],
            function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ success: true });
            }
        );
    });
});

app.patch('/api/assets/assignments/:id/return', (req, res) => {
    const returned_at = new Date().toISOString().split('T')[0];
    db.serialize(() => {
        db.get(`SELECT asset_id FROM asset_assignments WHERE id = ?`, [req.params.id], (err, row) => {
            if (row) {
                db.run(`UPDATE assets SET status = 'In Stock' WHERE id = ?`, [row.asset_id]);
            }
        });
        db.run(`UPDATE asset_assignments SET returned_at = ? WHERE id = ?`, [returned_at, req.params.id], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        });
    });
});

// Documents API
app.get('/api/documents', (req, res) => {
    db.all(`SELECT * FROM documents WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/documents', (req, res) => {
    const { tenant_id, employee_id, title, category, expiry_date, ocr_meta } = req.body;
    const id = `DOC-${Math.floor(100 + Math.random() * 900)}`;
    db.run(`INSERT INTO documents (id, tenant_id, employee_id, title, category, expiry_date, ocr_meta) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, tenant_id, employee_id || null, title, category, expiry_date, ocr_meta || null],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, document_id: id });
        }
    );
});

// Engagement (Surveys & Kudos) API
app.get('/api/surveys', (req, res) => {
    db.all(`SELECT * FROM surveys WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/surveys/responses', (req, res) => {
    const { survey_id, answers, sentiment_score } = req.body;
    const id = `SR-${Math.floor(100 + Math.random() * 900)}`;
    db.run(`INSERT INTO survey_responses (id, survey_id, answers, sentiment_score) VALUES (?, ?, ?, ?)`,
        [id, survey_id, JSON.stringify(answers), parseFloat(sentiment_score)],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true });
        }
    );
});

app.get('/api/recognitions', (req, res) => {
    db.all(`SELECT * FROM recognitions WHERE tenant_id = ? ORDER BY id DESC`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/recognitions', (req, res) => {
    const { tenant_id, sender_name, receiver_name, message, points, badge } = req.body;
    const id = `R-${Math.floor(100 + Math.random() * 900)}`;
    db.run(`INSERT INTO recognitions (id, tenant_id, sender_name, receiver_name, message, points, badge) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, tenant_id, sender_name, receiver_name, message, parseInt(points) || 0, badge || 'Team Player'],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, recognition_id: id });
        }
    );
});

// Headcount Plans API
app.get('/api/headcount-plans', (req, res) => {
    db.all(`SELECT * FROM headcount_plans WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Projects API
app.get('/api/projects', (req, res) => {
    db.all(`SELECT * FROM projects WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Timesheets API
app.get('/api/timesheets', (req, res) => {
    db.all(`SELECT * FROM timesheets WHERE tenant_id = ? ORDER BY start_date DESC`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.get('/api/timesheets/:id/lines', (req, res) => {
    db.all(`SELECT * FROM timesheet_lines WHERE timesheet_id = ?`, [req.params.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/timesheets', (req, res) => {
    const { tenant_id, employee_name, start_date, end_date, lines } = req.body;
    const timesheet_id = `TS-${Math.floor(100 + Math.random() * 900)}`;
    db.serialize(() => {
        db.run(`INSERT INTO timesheets (id, tenant_id, employee_name, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, 'Submitted')`,
            [timesheet_id, tenant_id, employee_name, start_date, end_date]);
        
        const stmt = db.prepare(`INSERT INTO timesheet_lines (id, timesheet_id, project_name, work_date, hours_worked, billable, task_description) VALUES (?, ?, ?, ?, ?, ?, ?)`);
        lines.forEach((l, idx) => {
            stmt.run([`TL-${timesheet_id}-${idx}`, timesheet_id, l.project_name, l.work_date, parseFloat(l.hours_worked), l.billable ? 1 : 0, l.task_description]);
        });
        stmt.finalize();
        res.json({ success: true, timesheet_id });
    });
});

app.patch('/api/timesheets/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE timesheets SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// Exit Requests API
app.get('/api/exits', (req, res) => {
    db.all(`SELECT * FROM exit_requests WHERE tenant_id = ?`, [req.query.tenant_id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/exits', (req, res) => {
    const { tenant_id, employee_name, exit_reason, requested_last_day } = req.body;
    const id = `EX-${Math.floor(100 + Math.random() * 900)}`;
    const submission_date = new Date().toISOString().split('T')[0];
    const clearance = JSON.stringify({ IT: false, HR: false, Finance: false });
    const gratuity = 1200.00; // Mock calculation
    db.run(`INSERT INTO exit_requests (id, tenant_id, employee_name, submission_date, requested_last_day, status, exit_reason, clearance_checklist, gratuity) VALUES (?, ?, ?, ?, ?, 'Pending', ?, ?, ?)`,
        [id, tenant_id, employee_name, submission_date, requested_last_day, exit_reason, clearance, gratuity],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ success: true, request_id: id });
        }
    );
});

app.patch('/api/exits/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE exit_requests SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// 5. SERVE STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 6. SERVER START
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(` SaaS Multi-Tenant HRMS Web App running on port ${PORT}`);
    console.log(` URL: http://localhost:${PORT}`);
    console.log(` Press Ctrl+C to terminate the local server`);
    console.log(`===================================================`);
});

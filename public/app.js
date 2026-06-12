/* ==========================================
   Antigravity HRMS - Database-Driven Client
   ========================================== */

// 1. Translation Dictionary (i18n)
const i18n = {
    en: {
        tenant: "Company Tenant",
        role: "User Access Role",
        notifications: "System Alerts",
        menu_dashboard: "Dashboard",
        menu_org: "Organizational Chart",
        menu_employees: "Employee Files",
        menu_recruitment: "ATS Recruitment",
        menu_onboarding: "Onboarding Checklists",
        menu_attendance: "Attendance & Leaves",
        menu_payroll: "Payroll & Expense",
        menu_workflows: "Workflow Builder",
        menu_ai: "AI Workspace",
        dash_title: "Executive Dashboard",
        dash_subtitle: "Real-time metrics and SQL workforce distributions",
        metric_headcount: "Total Headcount",
        metric_attendance: "Attendance Rate",
        metric_open_jobs: "Active Job Openings",
        metric_monthly_payroll: "Monthly Net Payroll",
        vs_last_month: "vs last month",
        today: "today",
        inc_allowances: "inc. allowances",
        chart_headcount_dept: "Headcount by Department",
        hiring_pipeline_stats: "Recruitment Conversion Funnel",
        recent_activities: "Recent System Actions",
        org_title: "Organizational Chart Tree",
        org_subtitle: "Explore corporate hierarchies, report structures, and departments",
        add_position: "Add Position",
        emp_title: "Employee Directory",
        emp_subtitle: "Add, manage, track status, and view detailed records of staff members",
        add_employee: "Add Employee",
        search_emp_placeholder: "Search employee name, position, department...",
        status_all: "All Statuses",
        status_active: "Active",
        status_onboarding: "Onboarding",
        status_suspended: "Suspended",
        status_resigned: "Resigned",
        dept_all: "All Departments",
        tbl_emp: "Employee",
        tbl_id: "ID",
        tbl_dept: "Department",
        tbl_position: "Position",
        tbl_status: "State",
        tbl_actions: "Actions",
        ats_title: "ATS Recruitment Pipeline",
        ats_subtitle: "Manage applicants, run parsing models, score fits, and execute hiring workflows",
        new_candidate: "Add Candidate",
        step_applied: "Applied",
        step_screening: "Screening",
        step_interview: "Interview",
        step_offer: "Offer",
        step_hired: "Hired / Closed",
        onboard_title: "Employee Onboarding Hub",
        onboard_subtitle: "Track pre-boarding checkouts, account setups, IT gear, and signatures",
        active_onboardees: "Active Onboardees",
        clock_widget_title: "Biometric Web Check-In",
        punch_in: "Clock In",
        punch_out: "Clock Out",
        leave_balances: "Your Leave Balances",
        bal_annual: "Annual Leave",
        bal_sick: "Sick Leave",
        bal_emergency: "Emergency Leave",
        request_leave_btn_txt: "Submit Leave Request",
        leave_history: "Leave Request Workflow History",
        tbl_requester: "Employee",
        tbl_leave_type: "Type",
        tbl_leave_dates: "Dates",
        tbl_days: "Days",
        tbl_workflow_status: "Workflow Status",
        payroll_title: "Payroll & Expense Reimbursements",
        payroll_subtitle: "Calculate earnings, social insurance deductions, net salaries, and process expense reimbursements",
        payslip_preview: "Payslip Calculator / Preview",
        claim_expense_title: "Submit Expense Claim",
        claim_amount: "Amount ($)",
        claim_category: "Category",
        cat_travel: "Travel & Lodging",
        cat_meals: "Meals",
        cat_fuel: "Fuel & Transit",
        cat_office: "Office Gear",
        claim_description: "Description / Notes",
        submit_claim: "Submit Claim",
        active_claims: "Active Expense Claims",
        tbl_claimant: "Claimant",
        tbl_claim_cat: "Category",
        tbl_claim_amt: "Amount",
        tbl_claim_desc: "Description",
        tbl_claim_status: "Status",
        wf_title: "No-Code Workflow Engine",
        wf_subtitle: "Design, connect, and deploy automated approval sequences for standard actions",
        deploy_workflow: "Deploy Workflow",
        wf_triggers_title: "1. Choose Triggers",
        wf_actions_title: "2. Add Action Node",
        wf_canvas_help: "Click cards in the toolbox to chain approval nodes sequentially",
        ai_title: "AI Workforce Copilot Workspace",
        ai_subtitle: "Retrieve data, print payslips, search policy, and evaluate flight risks with natural language",
        ai_capabilities: "Capabilities & Tools",
        ai_policy_search: "Policy Q&A Search",
        ai_payslip_calculator: "Payslip Engine",
        ai_flight_risk: "Exit Flight Risk",
        ai_resume_scoring: "ATS Resume Matcher",
        predictive_exit_alerts: "Predictive Attrition Risk alerts",
        online_active: "Online & Active (SQLite Database Link)",
        chat_input_placeholder: "Ask AI: 'كم رصيد إجازاتي؟' or 'Show flight risk engineering'...",
        close: "Close File",
        form_fname: "First Name",
        form_lname: "Last Name",
        form_email: "Email",
        form_phone: "Phone",
        form_dept: "Department",
        form_job: "Job Title",
        form_salary: "Basic Salary",
        form_status: "Lifecycle state",
        save_emp: "Save Employee File"
    },
    ar: {
        tenant: "شركة الـ SaaS",
        role: "صلاحية الوصول",
        notifications: "تنبيهات النظام",
        menu_dashboard: "لوحة التحكم",
        menu_org: "الهيكل التنظيمي",
        menu_employees: "ملفات الموظفين",
        menu_recruitment: "بوابة التوظيف ATS",
        menu_onboarding: "تهيئة الموظفين الجدد",
        menu_attendance: "الحضور والإجازات",
        menu_payroll: "الرواتب والمصروفات",
        menu_workflows: "مهندس سير العمل",
        menu_ai: "المساعد الذكي AI",
        dash_title: "لوحة تحكم المديرين التنفيذيين",
        dash_subtitle: "إحصائيات مباشرة ونسب توزيع القوى العاملة بالشركة",
        metric_headcount: "إجمالي الموظفين",
        metric_attendance: "نسبة الحضور اليوم",
        metric_open_jobs: "وظائف شاغرة معلنة",
        metric_monthly_payroll: "مسير الرواتب الشهري",
        vs_last_month: "مقارنة بالشهر الماضي",
        today: "اليوم",
        inc_allowances: "شامل البدلات والمنافع",
        chart_headcount_dept: "توزيع الموظفين على الإدارات",
        hiring_pipeline_stats: "قمع تحويل المرشحين بالتوظيف",
        recent_activities: "أحدث عمليات النظام",
        org_title: "الهيكل التنظيمي التفاعلي",
        org_subtitle: "استعرض خطوط الإدارة المباشرة والمناصب والإدارات المختلفة",
        add_position: "إضافة منصب",
        emp_title: "دليل ملفات الموظفين",
        emp_subtitle: "إضافة وتعديل بيانات الموظفين، ومتابعة حالتهم في دورة الحياة الوظيفية",
        add_employee: "إضافة موظف",
        search_emp_placeholder: "البحث بالاسم، المسمى الوظيفي، الإدارة...",
        status_all: "كل الحالات",
        status_active: "نشط",
        status_onboarding: "قيد التهيئة",
        status_suspended: "موقوف مؤقتاً",
        status_resigned: "مستقيل",
        dept_all: "كل الإدارات",
        tbl_emp: "الموظف",
        tbl_id: "الرقم الوظيفي",
        tbl_dept: "الإدارة",
        tbl_position: "المسمى الوظيفي",
        tbl_status: "حالة الموظف",
        tbl_actions: "الإجراءات",
        ats_title: "لوحة فرز وتوظيف المرشحين ATS",
        ats_subtitle: "إدارة المتقدمين، فرز السير الذاتية تلقائياً بـ AI وتصنيف نقاط مطابقتها",
        new_candidate: "إضافة مرشح",
        step_applied: "تم التقديم",
        step_screening: "الفحص المبدئي",
        step_interview: "المقابلات الشخصية",
        step_offer: "العرض الوظيفي",
        step_hired: "تم التوظيف",
        onboard_title: "لوحة تهيئة الموظف الجديد",
        onboard_subtitle: "متابعة تسليم العتاد، حسابات البريد الإلكتروني وتوقيع عقود العمل",
        active_onboardees: "موظفون قيد التهيئة",
        clock_widget_title: "تسجيل الحضور الرقمي",
        punch_in: "تسجيل دخول (حضور)",
        punch_out: "تسجيل خروج (انصراف)",
        leave_balances: "أرصدة إجازاتك الحالية",
        bal_annual: "إجازة سنوية",
        bal_sick: "إجازة مرضية",
        bal_emergency: "إجازة اضطرارية",
        request_leave_btn_txt: "تقديم طلب إجازة جديد",
        leave_history: "سجل طلبات الإجازة ومراحل الاعتماد",
        tbl_requester: "الموظف",
        tbl_leave_type: "نوع الإجازة",
        tbl_leave_dates: "الفترة",
        tbl_days: "الأيام",
        tbl_workflow_status: "حالة سير العمل",
        payroll_title: "الرواتب ومطالبات التعويضات",
        payroll_subtitle: "احتساب البدلات، خصومات التأمينات الاجتماعية والضرائب، وإدارة مطالبات الموظفين",
        payslip_preview: "محاكي مفردات المرتب",
        claim_expense_title: "تقديم مطالبة مصروفات",
        claim_amount: "القيمة ($)",
        claim_category: "الفئة",
        cat_travel: "السفر والفندق",
        cat_meals: "وجبات طعام",
        cat_fuel: "الوقود والمواصلات",
        cat_office: "أدوات مكتبية",
        claim_description: "الوصف / التفاصيل",
        submit_claim: "رفع المستند وتقديم الطلب",
        active_claims: "مطالبات التعويض النشطة",
        tbl_claimant: "الموظف صاحب الطلب",
        tbl_claim_cat: "الفئة",
        tbl_claim_amt: "المبلغ",
        tbl_claim_desc: "التفاصيل",
        tbl_claim_status: "الحالة",
        wf_title: "محرك ومصمم سير العمل بدون كود",
        wf_subtitle: "تصميم وربط وتفعيل خطوات الاعتماد التلقائية للطلبات الإدارية المختلفة",
        deploy_workflow: "حفظ وتفعيل مسار العمل",
        wf_triggers_title: "١. حدد الحدث المثير (Trigger)",
        wf_actions_title: "٢. أضف خطوة إجرائية (Action)",
        wf_canvas_help: "اضغط على البطاقات في اللوحة الجانبية لإنشاء تسلسل سير العمل",
        ai_title: "مساعد الذكاء الاصطناعي لإدارة القوى العاملة",
        ai_subtitle: "تخاطب مع مساعد النظام الذكي باللغتين العربية والإنجليزية لطباعة كشوفات وتوقع المخاطر",
        ai_capabilities: "الأدوات والمميزات المدعومة",
        ai_policy_search: "البحث في اللوائح والسياسات",
        ai_payslip_calculator: "محرك احتساب الرواتب",
        ai_flight_risk: "توقع احتمالية الاستقالة",
        ai_resume_scoring: "تقييم السير الذاتية بالـ AI",
        predictive_exit_alerts: "تنبيهات احتمالية الاستقالة المتوقعة",
        online_active: "نشط ومتصل بالإنترنت (قاعدة بيانات SQL)",
        chat_input_placeholder: "اسأل المساعد: 'كم رصيد إجازاتي؟' أو 'اطبع مفردات مرتب محمد'...",
        close: "إغلاق الملف",
        form_fname: "الاسم الأول",
        form_lname: "الاسم الأخير",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الجوال",
        form_dept: "الإدارة / القسم",
        form_job: "المسمى الوظيفي",
        form_salary: "الراتب الأساسي",
        form_status: "حالة الموظف الأولية",
        save_emp: "حفظ كشف ملف الموظف"
    }
};

// State Variables
const db = {
    activeTenant: "tenant_a",
    activeRole: "Owner",
    activeLanguage: "en",
    currentUser: {
        name: "Sarah Connor",
        role: "Owner / Admin",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
    },
    clockedIn: false,
    
    // Cached lists
    tenants: [],
    activeCompany: {},
    workflowNodes: []
};

// Startup
document.addEventListener("DOMContentLoaded", async () => {
    await fetchTenants();
    initApp();
    setupEventListeners();
    await refreshData();
});

function initApp() {
    const dateSpan = document.getElementById("current-date");
    if (dateSpan) {
        const d = new Date();
        dateSpan.textContent = d.toLocaleDateString(db.activeLanguage === "ar" ? "ar-SA" : "en-US", {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }
    
    // Digital clock
    setInterval(() => {
        const clockDiv = document.getElementById("digital-clock");
        if (clockDiv) {
            const now = new Date();
            clockDiv.textContent = now.toTimeString().split(' ')[0];
        }
    }, 1000);
}

// REST GETS
async function fetchTenants() {
    try {
        const res = await fetch('/api/tenants');
        db.tenants = await res.json();
        
        // Sync Active Company config
        const company = db.tenants.find(t => t.id === db.activeTenant);
        if (company) {
            db.activeCompany = company;
        }
    } catch (e) {
        console.error("Error loading tenants", e);
    }
}

async function refreshData() {
    await fetchTenants();
    await updateDashboardMetrics();
    renderAllViews();
}

// Global View Renders
function renderAllViews() {
    renderDashboardLists();
    renderOrgChart();
    renderEmployeesTable();
    renderATSKanban();
    renderOnboardingHub();
    renderLeaveHistoryTable();
    renderPayrollCalculator();
    renderExpenseClaimsTable();
    renderWorkflowCanvas();
    renderAIFlightRisks();
    applyLanguageTranslations();
    applyRolePermissions();
}

// Navigation & Switches
function setupEventListeners() {
    document.querySelectorAll(".sidebar-menu .menu-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = item.getAttribute("data-tab");
            
            document.querySelectorAll(".sidebar-menu .menu-item").forEach(el => el.classList.remove("active"));
            document.querySelectorAll(".tab-panel").forEach(el => el.classList.remove("active"));
            
            item.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Tenant switcher
    const tenantSelect = document.getElementById("tenant-select");
    if (tenantSelect) {
        tenantSelect.addEventListener("change", async (e) => {
            db.activeTenant = e.target.value;
            
            // Sync user labels
            if (db.activeTenant === "tenant_b") {
                db.currentUser = {
                    name: "Fahad Al-Subaie",
                    role: db.activeRole === "Employee" ? "Employee" : "Owner / MD",
                    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                };
            } else {
                db.currentUser = {
                    name: "Sarah Connor",
                    role: db.activeRole === "Employee" ? "Employee" : "Owner / Admin",
                    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                };
            }

            db.clockedIn = false;
            const punchBtn = document.getElementById("punch-btn");
            if (punchBtn) {
                punchBtn.innerHTML = `<i class="fa-solid fa-sign-in-alt"></i> <span>${db.activeLanguage === 'ar' ? 'تسجيل دخول' : 'Clock In'}</span>`;
                punchBtn.className = "btn btn-primary btn-large";
            }

            await logActivity(`Switched Tenant context to ${db.activeCompany.company_name || db.activeTenant}`);
            await refreshData();
        });
    }

    // Role switcher
    const roleSelect = document.getElementById("role-select");
    if (roleSelect) {
        roleSelect.addEventListener("change", (e) => {
            db.activeRole = e.target.value;
            applyRolePermissions();
            renderPayrollCalculator();
        });
    }

    // Language Toggle
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            db.activeLanguage = db.activeLanguage === "en" ? "ar" : "en";
            document.body.className = db.activeLanguage === "ar" ? "dark-theme rtl" : "dark-theme";
            
            const label = document.getElementById("lang-label");
            if (label) label.textContent = db.activeLanguage === "ar" ? "English" : "عربي";
            
            initApp();
            renderAllViews();
        });
    }

    // Modal Close
    document.querySelectorAll(".close-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("emp-modal").classList.add("hidden");
        });
    });

    document.querySelectorAll(".close-add-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("add-emp-modal").classList.add("hidden");
        });
    });

    // Add Employee Submit
    const addEmpForm = document.getElementById("add-emp-form");
    if (addEmpForm) {
        addEmpForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const fName = document.getElementById("emp-first-name").value;
            const lName = document.getElementById("emp-last-name").value;
            const email = document.getElementById("emp-email").value;
            const phone = document.getElementById("emp-phone").value;
            const dept = document.getElementById("emp-dept").value;
            const title = document.getElementById("emp-title").value;
            const salary = parseFloat(document.getElementById("emp-salary").value);
            const status = document.getElementById("emp-status").value;

            try {
                await fetch('/api/employees', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        first_name: fName,
                        last_name: lName,
                        email, phone,
                        national_id: "ID-" + Math.floor(100000 + Math.random() * 900000),
                        job_title: title,
                        department: dept,
                        manager_id: "EMP-001",
                        status,
                        salary_basic: salary
                    })
                });
                
                await logActivity(`Added employee: ${fName} ${lName} (${title})`);
                addEmpForm.reset();
                document.getElementById("add-emp-modal").classList.add("hidden");
                await refreshData();
            } catch (err) {
                console.error("Error adding employee", err);
            }
        });
    }

    // Trigger Add Employee Modal
    const addEmpBtn = document.getElementById("add-emp-btn");
    if (addEmpBtn) {
        addEmpBtn.addEventListener("click", () => {
            document.getElementById("add-emp-modal").classList.remove("hidden");
        });
    }

    // Add Candidate modal trigger
    const addCandidateBtn = document.getElementById("add-candidate-btn");
    if (addCandidateBtn) {
        addCandidateBtn.addEventListener("click", async () => {
            const name = prompt(db.activeLanguage === 'ar' ? 'أدخل اسم المرشح:' : 'Enter Candidate Full Name:');
            if (!name) return;
            const job = prompt(db.activeLanguage === 'ar' ? 'أدخل المسمى الوظيفي:' : 'Enter Target Job Title:');
            if (!job) return;
            
            try {
                const res = await fetch('/api/candidates', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        name: name,
                        email: `${name.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
                        job_title: job
                    })
                });
                const result = await res.json();
                await logActivity(`New candidate ${name} registered for ${job} (AI Score: ${result.score}%)`);
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Search input filters
    const empSearch = document.getElementById("emp-search");
    if (empSearch) empSearch.addEventListener("input", renderEmployeesTable);

    const empStatusFilter = document.getElementById("emp-status-filter");
    if (empStatusFilter) empStatusFilter.addEventListener("change", renderEmployeesTable);

    const empDeptFilter = document.getElementById("emp-dept-filter");
    if (empDeptFilter) empDeptFilter.addEventListener("change", renderEmployeesTable);

    // Clock check-in punch
    const punchBtn = document.getElementById("punch-btn");
    if (punchBtn) {
        punchBtn.addEventListener("click", async () => {
            db.clockedIn = !db.clockedIn;
            const now = new Date().toLocaleTimeString();
            if (db.clockedIn) {
                punchBtn.innerHTML = `<i class="fa-solid fa-sign-out-alt"></i> <span>${db.activeLanguage === 'ar' ? 'تسجيل خروج' : 'Clock Out'}</span>`;
                punchBtn.className = "btn btn-secondary btn-large glow-red";
                await logActivity(`${db.currentUser.name} Clocked In at ${now} via GPS Geofence`);
                alert(db.activeLanguage === 'ar' ? 'تم تسجيل حضورك بنجاح' : 'Clock In Successful');
            } else {
                punchBtn.innerHTML = `<i class="fa-solid fa-sign-in-alt"></i> <span>${db.activeLanguage === 'ar' ? 'تسجيل دخول' : 'Clock In'}</span>`;
                punchBtn.className = "btn btn-primary btn-large glow-violet";
                await logActivity(`${db.currentUser.name} Clocked Out at ${now}`);
                alert(db.activeLanguage === 'ar' ? 'تم تسجيل انصرافك بنجاح' : 'Clock Out Successful');
            }
            await refreshData();
        });
    }

    // Submit Leave request
    const requestLeaveBtn = document.getElementById("request-leave-btn");
    if (requestLeaveBtn) {
        requestLeaveBtn.addEventListener("click", async () => {
            const leaveType = prompt(db.activeLanguage === 'ar' ? 'نوع الإجازة (Annual, Sick, Emergency):' : 'Enter Leave Type (Annual, Sick, Emergency):', 'Annual');
            if (!leaveType) return;
            const days = parseInt(prompt(db.activeLanguage === 'ar' ? 'عدد الأيام المطلوبة:' : 'Enter total days requested:', '3'));
            if (!days || isNaN(days)) return;
            const reason = prompt(db.activeLanguage === 'ar' ? 'سبب الإجازة:' : 'Enter reason:');

            const start = new Date();
            const end = new Date();
            end.setDate(start.getDate() + days);

            try {
                await fetch('/api/leaves', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_name: db.currentUser.name,
                        leave_type: leaveType,
                        start_date: start.toISOString().split('T')[0],
                        end_date: end.toISOString().split('T')[0],
                        total_days: days,
                        reason: reason || "Personal reasons"
                    })
                });
                await logActivity(`${db.currentUser.name} submitted Leave Request (${days} days)`);
                await refreshData();
            } catch (err) {
                console.error("Error submitting leave", err);
            }
        });
    }

    // Expense Form submit
    const expenseForm = document.getElementById("expense-form");
    if (expenseForm) {
        expenseForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const amt = parseFloat(document.getElementById("expense-amount").value);
            const cat = document.getElementById("expense-category").value;
            const desc = document.getElementById("expense-notes").value;

            try {
                await fetch('/api/claims', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_name: db.currentUser.name,
                        category: cat,
                        amount: amt,
                        notes: desc
                    })
                });
                await logActivity(`${db.currentUser.name} submitted claim for $${amt}`);
                expenseForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Workflow Deploy
    const saveWfBtn = document.getElementById("save-workflow-btn");
    if (saveWfBtn) {
        saveWfBtn.addEventListener("click", async () => {
            try {
                await fetch('/api/workflows', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        nodes: db.workflowNodes
                    })
                });
                await logActivity("Deployed new workflow configurations to active Tenant database");
                alert(db.activeLanguage === 'ar' ? 'تم حفظ مسارات العمل وتفعيلها' : 'Workflow deployed successfully');
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Add Workflow node card
    document.querySelectorAll(".workflow-toolbox .toolbox-item").forEach(toolboxItem => {
        toolboxItem.addEventListener("click", () => {
            const action = toolboxItem.getAttribute("data-action");
            const type = toolboxItem.getAttribute("data-type");
            addWorkflowNode(type, action);
        });
    });

    const clearWfBtn = document.getElementById("clear-workflow");
    if (clearWfBtn) {
        clearWfBtn.addEventListener("click", () => {
            db.workflowNodes = [];
            renderWorkflowCanvas();
        });
    }

    // AI chat send
    const chatInput = document.getElementById("chat-input");
    const chatBtn = document.getElementById("chat-send-btn");
    if (chatBtn && chatInput) {
        chatBtn.addEventListener("click", () => {
            const query = chatInput.value.trim();
            if (!query) return;
            sendChatMessage(query);
            chatInput.value = "";
        });
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                const query = chatInput.value.trim();
                if (!query) return;
                sendChatMessage(query);
                chatInput.value = "";
            }
        });
    }

    document.getElementById("suggestion-chips").addEventListener("click", (e) => {
        if (e.target.classList.contains("chip")) {
            const query = e.target.getAttribute("data-query");
            sendChatMessage(query);
        }
    });

    const markReadBtn = document.getElementById("mark-read-btn");
    if (markReadBtn) {
        markReadBtn.addEventListener("click", () => {
            const badge = document.querySelector(".noti-badge");
            if (badge) badge.classList.add("hidden");
            document.querySelectorAll(".noti-item").forEach(el => el.classList.remove("unread"));
        });
    }

    const notiBtn = document.getElementById("noti-btn");
    if (notiBtn) {
        notiBtn.addEventListener("click", () => {
            document.getElementById("noti-dropdown").classList.toggle("hidden");
        });
    }

    // Modal tabs toggle
    document.querySelectorAll(".modal-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal-tab-btn").forEach(el => el.classList.remove("active"));
            document.querySelectorAll(".modal-tab-panel").forEach(el => el.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(btn.getAttribute("data-modal-tab")).classList.add("active");
        });
    });

    // Org Chart Zoom controls
    let orgZoom = 1;
    const orgCanvas = document.getElementById("org-canvas");
    const zoomIn = document.getElementById("zoom-in-org");
    const zoomOut = document.getElementById("zoom-out-org");
    const resetOrg = document.getElementById("reset-org");

    if (zoomIn && orgCanvas) {
        zoomIn.addEventListener("click", () => {
            orgZoom += 0.15;
            orgCanvas.style.transform = `scale(${orgZoom})`;
        });
    }
    if (zoomOut && orgCanvas) {
        zoomOut.addEventListener("click", () => {
            if (orgZoom > 0.4) {
                orgZoom -= 0.15;
                orgCanvas.style.transform = `scale(${orgZoom})`;
            }
        });
    }
    if (resetOrg && orgCanvas) {
        resetOrg.addEventListener("click", () => {
            orgZoom = 1;
            orgCanvas.style.transform = `scale(${orgZoom})`;
        });
    }

    // Drag & Drop Workflow Listeners
    const canvasEl = document.getElementById("workflow-canvas");
    const toolboxNodes = document.querySelectorAll(".workflow-toolbox .toolbox-item");

    toolboxNodes.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", JSON.stringify({
                type: item.getAttribute("data-type"),
                action: item.getAttribute("data-action")
            }));
        });
    });

    if (canvasEl) {
        canvasEl.addEventListener("dragover", (e) => {
            e.preventDefault();
            canvasEl.classList.add("drag-over");
        });
        
        canvasEl.addEventListener("dragleave", () => {
            canvasEl.classList.remove("drag-over");
        });
        
        canvasEl.addEventListener("drop", async (e) => {
            e.preventDefault();
            canvasEl.classList.remove("drag-over");
            
            try {
                const data = JSON.parse(e.dataTransfer.getData("text/plain"));
                await addWorkflowNode(data.type, data.action);
            } catch (err) {
                console.error(err);
            }
        });
    }
}

// Visual Workflow node validation & persistence
async function addWorkflowNode(type, action) {
    const nodes = db.workflowNodes;
    
    // First node validation
    if (nodes.length === 0 && type !== 'trigger') {
        alert(db.activeLanguage === 'ar' ? 'يجب أن يبدأ مسار الاعتماد بحدث مثير (Trigger) أولاً (مثال: طلب إجازة)!' : 'Workflows must start with a Trigger first (e.g. Leave Request)!');
        return;
    }
    
    // Subsequent node validation
    if (nodes.length > 0 && type === 'trigger') {
        alert(db.activeLanguage === 'ar' ? 'لا يمكن إضافة أكثر من حدث مثير (Trigger) واحد في مسار الاعتماد!' : 'Cannot add more than one Trigger to a workflow!');
        return;
    }

    db.workflowNodes.push({
        id: `wf-${Math.floor(1000 + Math.random() * 9000)}`,
        type: type,
        action: action
    });
    
    try {
        await fetch('/api/workflows', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tenant_id: db.activeTenant,
                nodes: db.workflowNodes
            })
        });
        await logActivity(`Added Workflow step: ${action}`);
        renderWorkflowCanvas();
    } catch(err) {
        console.error(err);
    }
}

// Dashboard Calculations
async function updateDashboardMetrics() {
    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const employees = await res.json();
        
        // Count
        document.getElementById("metric-total-count").textContent = employees.length;

        // Active Jobs count from candidates length
        const candRes = await fetch(`/api/candidates?tenant_id=${db.activeTenant}`);
        const candidates = await candRes.json();
        document.getElementById("metric-active-jobs").textContent = candidates.filter(c => c.step !== 'Hired').length + 2;

        // Payroll calculation
        let total = 0;
        employees.forEach(emp => {
            if (emp.status === 'Active' || emp.status === 'Onboarding') {
                total += (emp.salary_basic + emp.salary_housing + emp.salary_transport);
            }
        });
        
        const symbol = db.activeCompany.currency_symbol || "$";
        document.getElementById("metric-payroll-cost").textContent = `${symbol}${total.toLocaleString()}`;

        // Attendance rate
        const attendanceVal = db.clockedIn ? 98.4 : 96.2;
        document.getElementById("metric-attendance-rate").textContent = `${attendanceVal}%`;
    } catch (e) {
        console.error(e);
    }
}

// Dashboard items list rendering
async function renderDashboardLists() {
    try {
        // Render Department charts
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();

        const counts = {};
        emps.forEach(emp => {
            counts[emp.department] = (counts[emp.department] || 0) + 1;
        });

        const deptChart = document.getElementById("dept-chart");
        if (deptChart) {
            deptChart.innerHTML = "";
            const maxVal = Math.max(...Object.values(counts)) || 1;
            const colors = ["bg-violet", "bg-teal", "bg-amber", "bg-red"];

            Object.keys(counts).forEach((dept, idx) => {
                const val = counts[dept];
                const pct = (val / maxVal) * 100;
                const color = colors[idx % colors.length];

                deptChart.innerHTML += `
                    <div class="chart-bar-row">
                        <div class="chart-label">${dept}</div>
                        <div class="chart-bar-outer">
                            <div class="chart-bar-inner ${color}" style="width: ${pct}%;"></div>
                        </div>
                        <div class="chart-value">${val}</div>
                    </div>
                `;
            });
        }

        // Funnel
        const candRes = await fetch(`/api/candidates?tenant_id=${db.activeTenant}`);
        const candidates = await candRes.json();
        const fcounts = { Applied: 0, Screening: 0, Interview: 0, Offer: 0, Hired: 0 };
        candidates.forEach(c => {
            fcounts[c.step] = (fcounts[c.step] || 0) + 1;
        });

        const funnelChart = document.getElementById("funnel-chart");
        if (funnelChart) {
            const cApplied = candidates.length + 8;
            const cScreening = fcounts.Screening + fcounts.Interview + fcounts.Offer + fcounts.Hired + 4;
            const cInterview = fcounts.Interview + fcounts.Offer + fcounts.Hired + 2;
            const cOffer = fcounts.Offer + fcounts.Hired + 1;
            const cHired = fcounts.Hired + 1;

            funnelChart.innerHTML = `
                <div class="funnel-stage funnel-1"><span>1. Applied / Triage</span><strong>${cApplied} Candidates</strong></div>
                <div class="funnel-stage funnel-2"><span>2. Screening / Match</span><strong>${cScreening} Candidates</strong></div>
                <div class="funnel-stage funnel-3"><span>3. Interviews Scheduled</span><strong>${cInterview} Candidates</strong></div>
                <div class="funnel-stage funnel-4"><span>4. Written Offers</span><strong>${cOffer} Offers</strong></div>
                <div class="funnel-stage funnel-5"><span>5. Hired / Onboarding</span><strong>${cHired} Hires</strong></div>
            `;
        }

        // Logs
        const actRes = await fetch(`/api/activities?tenant_id=${db.activeTenant}`);
        const activities = await actRes.json();
        
        const actList = document.getElementById("activity-list");
        if (actList) {
            actList.innerHTML = "";
            const icons = [
                '<i class="fa-solid fa-user-plus bg-violet"></i>',
                '<i class="fa-solid fa-check-circle bg-teal"></i>',
                '<i class="fa-solid fa-shield-halved bg-amber"></i>',
                '<i class="fa-solid fa-money-check-dollar bg-red"></i>'
            ];
            
            activities.forEach((act, idx) => {
                const icon = icons[idx % icons.length];
                actList.innerHTML += `
                    <li class="activity-item">
                        <div class="activity-icon">${icon}</div>
                        <div class="activity-details">
                            <p>${act.text}</p>
                            <span>${act.time}</span>
                        </div>
                    </li>
                `;
            });
        }

        // Notifications
        const notiList = document.getElementById("noti-list");
        if (notiList) {
            notiList.innerHTML = `
                <div class="noti-item unread">
                    <p><strong>Recruitment Alert:</strong> New candidate Steven Hawking scored 98% in Resume Parsing.</p>
                    <small>15 mins ago</small>
                </div>
                <div class="noti-item unread">
                    <p><strong>Attendance Flag:</strong> Yasmin Salem is marked Absent today (probation period checklist incomplete).</p>
                    <small>2 hours ago</small>
                </div>
                <div class="noti-item">
                    <p><strong>Payroll processed:</strong> Bank IBAN transmission file generated successfully.</p>
                    <small>1 day ago</small>
                </div>
            `;
        }
    } catch (e) {
        console.error(e);
    }
}

// Org chart rendering
async function renderOrgChart() {
    const canvas = document.getElementById("org-canvas");
    if (!canvas) return;
    canvas.innerHTML = "";

    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const employees = await res.json();
        
        const boss = employees.find(emp => emp.manager_id === null || emp.manager_id === "");
        if (!boss) return;

        const renderNodeHTML = (nodeEmp) => {
            const subordinates = employees.filter(emp => emp.manager_id === nodeEmp.id);
            
            let subNodesHTML = "";
            if (subordinates.length > 0) {
                subNodesHTML = `<div class="org-row">`;
                subordinates.forEach(sub => {
                    subNodesHTML += renderNodeHTML(sub);
                });
                subNodesHTML += `</div>`;
            }

            return `
                <div class="org-canvas-branch" style="display:flex; flex-direction:column; align-items:center;">
                    <div class="org-node" onclick="viewEmployeeDetails('${nodeEmp.id}')">
                        <img src="${nodeEmp.avatar}" alt="Avatar">
                        <h4>${nodeEmp.first_name} ${nodeEmp.last_name}</h4>
                        <p>${nodeEmp.job_title}</p>
                        <span class="dept-badge">${nodeEmp.department}</span>
                    </div>
                    ${subordinates.length > 0 ? `<i class="fa-solid fa-arrow-down node-connector"></i>` : ""}
                    ${subNodesHTML}
                </div>
            `;
        };

        canvas.innerHTML = renderNodeHTML(boss);
        
        // Node add position click setup
        const addNodeBtn = document.getElementById("add-node-btn");
        if (addNodeBtn) {
            addNodeBtn.onclick = async () => {
                const name = prompt(db.activeLanguage === 'ar' ? 'اسم الموظف للمنصب الجديد:' : 'New position employee name:');
                if (!name) return;
                const title = prompt(db.activeLanguage === 'ar' ? 'المسمى الوظيفي:' : 'Enter Position Job Title:');
                if (!title) return;
                
                try {
                    await fetch('/api/employees', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            tenant_id: db.activeTenant,
                            first_name: name,
                            last_name: "",
                            email: `${name.toLowerCase()}@company.com`,
                            phone: "+966 50 000 0000",
                            national_id: "ID-" + Math.floor(100000 + Math.random() * 900000),
                            job_title: title,
                            department: "Engineering",
                            manager_id: boss.id,
                            status: "Active",
                            salary_basic: 5000
                        })
                    });
                    await logActivity(`Added Position for ${name} reporting to CEO`);
                    await refreshData();
                } catch (err) {
                    console.error(err);
                }
            };
        }
    } catch (e) {
        console.error(e);
    }
}

// Directory list
async function renderEmployeesTable() {
    const tbody = document.getElementById("employee-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    try {
        const query = document.getElementById("emp-search").value.toLowerCase();
        const statusVal = document.getElementById("emp-status-filter").value;
        const deptVal = document.getElementById("emp-dept-filter").value;

        const url = `/api/employees?tenant_id=${db.activeTenant}&q=${query}&status=${statusVal}&department=${deptVal}`;
        const res = await fetch(url);
        const emps = await res.json();

        // Populate Dept filters
        const deptDropdown = document.getElementById("emp-dept-filter");
        if (deptDropdown && deptDropdown.options.length <= 1) {
            const depts = [...new Set(emps.map(e => e.department))];
            depts.forEach(d => {
                const opt = document.createElement("option");
                opt.value = d;
                opt.textContent = d;
                deptDropdown.appendChild(opt);
            });
        }

        emps.forEach(emp => {
            let stateClass = "badge-teal";
            if (emp.status === "Onboarding") stateClass = "badge-orange";
            if (emp.status === "Suspended" || emp.status === "Resigned") stateClass = "badge-red";

            let actionsHTML = `<button class="btn btn-secondary btn-small" onclick="viewEmployeeDetails('${emp.id}')"><i class="fa-solid fa-eye"></i> View File</button>`;
            if (db.activeRole !== "Employee") {
                actionsHTML += ` <button class="btn btn-secondary btn-small" style="color:red;" onclick="deleteEmployee('${emp.id}')"><i class="fa-solid fa-trash"></i></button>`;
            }

            tbody.innerHTML += `
                <tr>
                    <td>
                        <div class="table-emp-cell">
                            <img src="${emp.avatar}" alt="Avatar">
                            <div>
                                <strong>${emp.first_name} ${emp.last_name}</strong>
                                <br><small>${emp.email}</small>
                            </div>
                        </div>
                    </td>
                    <td>${emp.id}</td>
                    <td>${emp.department}</td>
                    <td>${emp.job_title}</td>
                    <td><span class="badge ${stateClass}">${emp.status}</span></td>
                    <td>${actionsHTML}</td>
                </tr>
            `;
        });
    } catch (e) {
        console.error(e);
    }
}

async function viewEmployeeDetails(id) {
    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        const emp = emps.find(e => e.id === id);
        if (!emp) return;

        // Populate Modal
        document.getElementById("modal-emp-fullname").textContent = `${emp.first_name} ${emp.last_name}`;
        document.getElementById("modal-emp-sub").textContent = emp.job_title;
        document.getElementById("modal-emp-avatar").src = emp.avatar;

        document.getElementById("det-name").textContent = `${emp.first_name} ${emp.last_name}`;
        document.getElementById("det-nat").textContent = emp.nationality || "Saudi";
        document.getElementById("det-nationalid").textContent = emp.national_id;
        document.getElementById("det-email").textContent = emp.email;
        document.getElementById("det-phone").textContent = emp.phone;
        document.getElementById("det-hiredate").textContent = emp.hire_date;

        const symbol = db.activeCompany.currency_symbol || "$";
        document.getElementById("det-sal-base").textContent = `${symbol}${emp.salary_basic.toLocaleString()}`;
        document.getElementById("det-sal-house").textContent = `${symbol}${emp.salary_housing.toLocaleString()}`;
        document.getElementById("det-sal-trans").textContent = `${symbol}${emp.salary_transport.toLocaleString()}`;
        document.getElementById("det-bank").textContent = emp.bank_name || "Al Rajhi Bank";
        document.getElementById("det-iban").textContent = emp.IBAN || "SA8000000000000000";

        document.getElementById("emp-modal").classList.remove("hidden");
    } catch (e) {
        console.error(e);
    }
}

async function deleteEmployee(id) {
    if (!confirm("Are you sure you want to terminate this employee?")) return;
    try {
        const res = await fetch(`/api/employees/${id}`, { method: 'DELETE' });
        const result = await res.json();
        if (result.success) {
            await logActivity(`Deleted Employee File ID: ${id}`);
            await refreshData();
        }
    } catch (e) {
        console.error(e);
    }
}

// Kanban ATS Rendering
async function renderATSKanban() {
    try {
        const res = await fetch(`/api/candidates?tenant_id=${db.activeTenant}`);
        const candidates = await res.json();
        const stages = ["Applied", "Screening", "Interview", "Offer", "Hired"];

        stages.forEach(col => {
            const div = document.getElementById(`col-${col.toLowerCase()}`);
            if (!div) return;
            div.innerHTML = "";

            const list = candidates.filter(c => c.step === col);
            
            // Header count
            const header = div.parentElement.querySelector(".col-count");
            if (header) header.textContent = list.length;

            list.forEach(c => {
                div.innerHTML += `
                    <div class="candidate-card" draggable="true">
                        <h4>${c.name}</h4>
                        <p>${c.job_title}</p>
                        <div class="card-footer">
                            <span class="score-badge"><i class="fa-solid fa-brain"></i> Match: ${c.score}%</span>
                            <div class="card-nav-btns">
                                <button class="btn-nav" onclick="moveCandidate('${c.id}', 'prev')"><i class="fa-solid fa-chevron-left"></i></button>
                                <button class="btn-nav" onclick="moveCandidate('${c.id}', 'next')"><i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
    } catch (e) {
        console.error(e);
    }
}

async function moveCandidate(id, direction) {
    try {
        const res = await fetch(`/api/candidates?tenant_id=${db.activeTenant}`);
        const candidates = await res.json();
        const candidate = candidates.find(c => c.id === id);
        if (!candidate) return;

        const stages = ["Applied", "Screening", "Interview", "Offer", "Hired"];
        let idx = stages.indexOf(candidate.step);

        if (direction === "next" && idx < stages.length - 1) idx++;
        else if (direction === "prev" && idx > 0) idx--;
        else return;

        const targetStep = stages[idx];
        
        await fetch(`/api/candidates/${id}/step`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ step: targetStep })
        });

        // Trigger onboarding profile creation if hired
        if (targetStep === "Hired") {
            const createProfile = confirm(`Candidate ${candidate.name} hired! Create Onboarding task list and directory profile?`);
            if (createProfile) {
                await fetch('/api/employees', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        first_name: candidate.name.split(' ')[0],
                        last_name: candidate.name.split(' ')[1] || "",
                        email: candidate.email,
                        phone: "+966 50 111 2222",
                        national_id: "ID-" + Math.floor(100000 + Math.random() * 900000),
                        job_title: candidate.job_title,
                        department: "Engineering",
                        manager_id: "EMP-001",
                        status: "Onboarding",
                        salary_basic: 6000
                    })
                });
                await logActivity(`Candidate ${candidate.name} transitioned to Employee File Onboarding`);
            }
        }

        await logActivity(`Moved Candidate ${candidate.name} to stage ${targetStep}`);
        await refreshData();
    } catch (e) {
        console.error(e);
    }
}

// Onboarding Hub
let selectedOnboardeeId = null;

async function renderOnboardingHub() {
    const listDiv = document.getElementById("onboardee-list");
    if (!listDiv) return;
    listDiv.innerHTML = "";

    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        const onboardees = emps.filter(e => e.status === "Onboarding");

        if (onboardees.length === 0) {
            listDiv.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">No employees currently in Onboarding phase.</p>`;
            document.getElementById("onboarding-detail-card").classList.add("hidden");
            return;
        }

        document.getElementById("onboarding-detail-card").classList.remove("hidden");

        if (!selectedOnboardeeId || !onboardees.find(o => o.id === selectedOnboardeeId)) {
            selectedOnboardeeId = onboardees[0].id;
        }

        onboardees.forEach(o => {
            const isSelected = o.id === selectedOnboardeeId;
            listDiv.innerHTML += `
                <div class="onboardee-item ${isSelected ? 'active' : ''}" onclick="selectOnboardee('${o.id}')">
                    <h4>${o.first_name} ${o.last_name}</h4>
                    <p>${o.job_title} | <small>${o.id}</small></p>
                </div>
            `;
        });

        await renderChecklistDetails();
    } catch (e) {
        console.error(e);
    }
}

function selectOnboardee(id) {
    selectedOnboardeeId = id;
    renderOnboardingHub();
}

async function renderChecklistDetails() {
    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        const emp = emps.find(e => e.id === selectedOnboardeeId);
        if (!emp) return;

        document.getElementById("onboardee-name").textContent = `${emp.first_name} ${emp.last_name} - ${emp.job_title}`;

        const buildListHTML = (list, keyName) => {
            let html = "";
            list.forEach((item, idx) => {
                html += `
                    <li class="${item.status ? 'done' : ''}">
                        <input type="checkbox" ${item.status ? 'checked' : ''} onchange="toggleChecklistItem('${emp.id}', '${keyName}', ${idx})">
                        <span>${item.label}</span>
                    </li>
                `;
            });
            return html;
        };

        document.getElementById("it-checklist-list").innerHTML = buildListHTML(emp.checklist_IT, 'IT');
        document.getElementById("hr-checklist-list").innerHTML = buildListHTML(emp.checklist_HR, 'HR');
        document.getElementById("manager-checklist-list").innerHTML = buildListHTML(emp.checklist_Manager, 'Manager');

        const allTasks = [...emp.checklist_IT, ...emp.checklist_HR, ...emp.checklist_Manager];
        const completedTasks = allTasks.filter(t => t.status).length;
        const progress = Math.round((completedTasks / allTasks.length) * 100) || 0;

        document.getElementById("onboardee-progress").textContent = `${progress}% Done`;
        document.getElementById("onboardee-progress-bar").style.width = `${progress}%`;

        // Transition to Active if 100% complete
        if (progress === 100 && emp.status === "Onboarding") {
            const activate = confirm(`All onboarding checklist tasks completed. Set employee status to Active?`);
            if (activate) {
                await fetch(`/api/employees/${emp.id}/status`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'Active' })
                });
                await logActivity(`${emp.first_name} ${emp.last_name} onboarding checklist completed -> employee Active`);
                await refreshData();
            }
        }
    } catch (e) {
        console.error(e);
    }
}

async function toggleChecklistItem(empId, category, index) {
    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        const emp = emps.find(e => e.id === empId);
        if (!emp) return;

        emp[`checklist_${category}`][index].status = !emp[`checklist_${category}`][index].status;

        await fetch(`/api/employees/${empId}/checklist`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                checklist_IT: emp.checklist_IT,
                checklist_HR: emp.checklist_HR,
                checklist_Manager: emp.checklist_Manager
            })
        });

        await renderChecklistDetails();
    } catch (e) {
        console.error(e);
    }
}

// Leave approvals table
async function renderLeaveHistoryTable() {
    const tbody = document.getElementById("leave-requests-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    try {
        const res = await fetch(`/api/leaves?tenant_id=${db.activeTenant}`);
        const leaves = await res.json();

        leaves.forEach(req => {
            let statusClass = "badge-orange";
            if (req.status === "Approved") statusClass = "badge-teal";
            if (req.status === "Rejected") statusClass = "badge-red";

            let actionHTML = "---";
            if (req.status === "Pending" && db.activeRole !== "Employee") {
                actionHTML = `
                    <button class="btn btn-secondary btn-small" onclick="handleLeaveApproval('${req.id}', 'Approved')"><i class="fa-solid fa-circle-check" style="color:teal;"></i></button>
                    <button class="btn btn-secondary btn-small" onclick="handleLeaveApproval('${req.id}', 'Rejected')"><i class="fa-solid fa-circle-xmark" style="color:red;"></i></button>
                `;
            }

            tbody.innerHTML += `
                <tr>
                    <td><strong>${req.employee_name}</strong></td>
                    <td>${req.leave_type}</td>
                    <td>${req.start_date} to ${req.end_date}</td>
                    <td>${req.total_days} Days</td>
                    <td><span class="badge ${statusClass}">${req.status}</span></td>
                    <td>${actionHTML}</td>
                </tr>
            `;
        });
    } catch (e) {
        console.error(e);
    }
}

async function handleLeaveApproval(id, newStatus) {
    try {
        await fetch(`/api/leaves/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });
        await logActivity(`Workflow Approval: Request ${id} updated to status: ${newStatus}`);
        await refreshData();
    } catch (e) {
        console.error(e);
    }
}

// Payroll preview slip & expense claims
async function renderPayrollCalculator() {
    const body = document.getElementById("payslip-calculator-body");
    if (!body) return;
    body.innerHTML = "";

    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        
        let emp = emps[0];
        if (db.activeRole === "Employee") {
            emp = emps.find(e => e.first_name === db.currentUser.name.split(' ')[0]) || emps[0];
        }

        if (!emp) return;

        const basic = emp.salary_basic;
        const housing = emp.salary_housing;
        const transport = emp.salary_transport;
        const gross = basic + housing + transport;
        
        const tax = Math.round(gross * 0.05);
        const social = Math.round(gross * 0.09);
        const deductions = tax + social;
        const net = gross - deductions;

        const symbol = db.activeCompany.currency_symbol || "$";

        body.innerHTML = `
            <div class="payslip-summary">
                <p><strong>Employee Reference:</strong> ${emp.first_name} ${emp.last_name} (${emp.job_title})</p>
                <div class="payslip-row earning"><span>Basic Salary</span><strong>+${symbol}${basic.toLocaleString()}</strong></div>
                <div class="payslip-row earning"><span>Housing Allowance</span><strong>+${symbol}${housing.toLocaleString()}</strong></div>
                <div class="payslip-row earning"><span>Transport Allowance</span><strong>+${symbol}${transport.toLocaleString()}</strong></div>
                <div class="payslip-row deduction"><span>Income Tax</span><strong>-${symbol}${tax.toLocaleString()}</strong></div>
                <div class="payslip-row deduction"><span>Social Insurance</span><strong>-${symbol}${social.toLocaleString()}</strong></div>
                <div class="payslip-row total"><span>Estimated Net Salary</span><strong>${symbol}${net.toLocaleString()}</strong></div>
            </div>
        `;
    } catch (e) {
        console.error(e);
    }
}

async function renderExpenseClaimsTable() {
    const tbody = document.getElementById("expense-claims-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    try {
        const res = await fetch(`/api/claims?tenant_id=${db.activeTenant}`);
        const claims = await res.json();

        claims.forEach(clm => {
            let statusClass = "badge-orange";
            if (clm.status === "Approved") statusClass = "badge-teal";
            if (clm.status === "Rejected") statusClass = "badge-red";

            let actionHTML = "---";
            if (clm.status === "Pending" && db.activeRole !== "Employee") {
                actionHTML = `
                    <button class="btn btn-secondary btn-small" onclick="handleClaimApproval('${clm.id}', 'Approved')"><i class="fa-solid fa-circle-check" style="color:teal;"></i></button>
                    <button class="btn btn-secondary btn-small" onclick="handleClaimApproval('${clm.id}', 'Rejected')"><i class="fa-solid fa-circle-xmark" style="color:red;"></i></button>
                `;
            }

            const symbol = db.activeCompany.currency_symbol || "$";

            tbody.innerHTML += `
                <tr>
                    <td><strong>${clm.employee_name}</strong></td>
                    <td>${clm.category}</td>
                    <td>${symbol}${clm.amount}</td>
                    <td>${clm.notes}</td>
                    <td><span class="badge ${statusClass}">${clm.status}</span></td>
                    <td>${actionHTML}</td>
                </tr>
            `;
        });
    } catch (e) {
        console.error(e);
    }
}

async function handleClaimApproval(id, status) {
    try {
        await fetch(`/api/claims/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        await logActivity(`Expense Claim approval workflow processed. ID ${id} set to: ${status}`);
        await refreshData();
    } catch (e) {
        console.error(e);
    }
}

// Workflows API
async function renderWorkflowCanvas() {
    const canvas = document.getElementById("workflow-canvas");
    if (!canvas) return;
    canvas.innerHTML = "";

    try {
        const res = await fetch(`/api/workflows?tenant_id=${db.activeTenant}`);
        db.workflowNodes = await res.json();
        const nodes = db.workflowNodes;

        if (nodes.length === 0) {
            canvas.innerHTML = `
                <div class="canvas-empty-state">
                    <i class="fa-solid fa-diagram-next"></i>
                    <h4>${db.activeLanguage === 'ar' ? 'اسحب وأسقط Trigger للبدء' : 'Drag & Drop a Trigger to start'}</h4>
                    <p>${db.activeLanguage === 'ar' ? 'أو انقر على البطاقات الجانبية لتصميم خطوات مسار العمل لاعتماد الطلبات' : 'Or click toolbox cards to configure approvals step-by-step'}</p>
                </div>
            `;
            return;
        }

        nodes.forEach((node, idx) => {
            let icon = '<i class="fa-solid fa-cog"></i>';
            let colorClass = "icon-indigo";

            if (node.action === "Leave Request") { icon = '<i class="fa-solid fa-calendar-minus"></i>'; colorClass = "icon-orange"; }
            if (node.action === "Expense Claim") { icon = '<i class="fa-solid fa-money-bill-wave"></i>'; colorClass = "icon-teal"; }
            if (node.action === "New Hire") { icon = '<i class="fa-solid fa-user-plus"></i>'; colorClass = "icon-indigo"; }
            if (node.action === "Manager Approval") { icon = '<i class="fa-solid fa-user-check"></i>'; colorClass = "icon-green"; }
            if (node.action === "HR Director Approval") { icon = '<i class="fa-solid fa-user-shield"></i>'; colorClass = "icon-purple"; }
            if (node.action === "CEO Signoff") { icon = '<i class="fa-solid fa-user-tie"></i>'; colorClass = "icon-red"; }
            if (node.action === "Send Email Notification") { icon = '<i class="fa-solid fa-envelope"></i>'; colorClass = "icon-blue"; }

            canvas.innerHTML += `
                <div class="workflow-node-card">
                    <div class="node-info-flow">
                        <span class="${colorClass}">${icon}</span>
                        <div>
                            <small style="color:var(--text-muted); display:block; text-transform:uppercase; font-size:9px;">Step ${idx + 1}: ${node.type}</small>
                            <strong>${node.action}</strong>
                        </div>
                    </div>
                    ${db.activeRole !== 'Employee' ? `<button class="btn-remove-node" onclick="removeWorkflowNode(${idx})"><i class="fa-solid fa-trash-can"></i></button>` : ""}
                </div>
            `;

            if (idx < nodes.length - 1) {
                canvas.innerHTML += `<div class="node-connector"><i class="fa-solid fa-arrow-down"></i></div>`;
            }
        });
    } catch (e) {
        console.error(e);
    }
}

function removeWorkflowNode(idx) {
    db.workflowNodes.splice(idx, 1);
    
    // Save to server database immediately and refresh
    fetch('/api/workflows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            tenant_id: db.activeTenant,
            nodes: db.workflowNodes
        })
    }).then(() => {
        renderWorkflowCanvas();
    });
}

// AI Copilot exit risk and chat calls
async function renderAIFlightRisks() {
    const list = document.getElementById("at-risk-list");
    if (!list) return;
    list.innerHTML = "";

    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        
        const targets = emps.filter(e => e.job_title.includes("Developer") || e.job_title.includes("Sales") || e.job_title.includes("Manager"));
        targets.forEach((emp, idx) => {
            const risk = 45 + (idx * 15);
            list.innerHTML += `
                <div class="at-risk-item">
                    <h5>${emp.first_name} ${emp.last_name}</h5>
                    <p style="font-size:11px; margin-bottom:4px;">${emp.job_title}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:var(--red); font-weight:700;"><i class="fa-solid fa-triangle-exclamation"></i> Exit Risk: ${risk}%</span>
                        <small style="color:var(--text-muted); font-size:9px;">Index: Above Normal</small>
                    </div>
                </div>
            `;
        });
    } catch (e) {
        console.error(e);
    }
}

async function sendChatMessage(text) {
    const chatMessages = document.getElementById("chat-messages");
    if (!chatMessages) return;

    chatMessages.innerHTML += `<div class="message user">${text}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatMessages.innerHTML += `<div class="message ai" id="typing"><i class="fa-solid fa-circle-notch fa-spin"></i> Reading database...</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const res = await fetch('/api/ai-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tenant_id: db.activeTenant,
                text: text,
                lang: db.activeLanguage
            })
        });
        const result = await res.json();

        const spinner = document.getElementById("typing");
        if (spinner) spinner.remove();

        chatMessages.innerHTML += `<div class="message ai">${result.reply}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    } catch (e) {
        console.error(e);
    }
}

// Utility Log API
async function logActivity(text) {
    try {
        await fetch('/api/activities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tenant_id: db.activeTenant, text })
        });
    } catch (e) {
        console.error(e);
    }
}

function applyLanguageTranslations() {
    const lang = db.activeLanguage;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (i18n[lang] && i18n[lang][key]) {
            el.setAttribute("placeholder", i18n[lang][key]);
        }
    });
}

function applyRolePermissions() {
    const role = db.activeRole;
    const label = document.getElementById("user-role-label");
    if (label) label.textContent = role;

    const adminElements = document.querySelectorAll("#add-emp-btn, #add-node-btn, #add-candidate-btn, #save-workflow-btn, #clear-workflow, .toolbox-item");
    
    if (role === "Employee") {
        adminElements.forEach(el => el.classList.add("hidden"));
        document.getElementById("role-select").className = "glass-select glow-teal";
    } else {
        adminElements.forEach(el => el.classList.remove("hidden"));
        document.getElementById("role-select").className = "glass-select";
    }
}

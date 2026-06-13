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
        save_emp: "Save Employee File",
        menu_performance: "Performance & Goals",
        menu_skills_lms: "Skills Matrix & LMS",
        menu_benefits_assets: "Benefits & Assets",
        menu_dms_surveys: "DMS Vault & Surveys",
        menu_timesheets_projects: "Projects & Timesheets",
        menu_exit_hub: "Exit Hub & Clearances",
        perf_title: "Performance & OKR Hub",
        perf_subtitle: "Track individual goals, OKRs progress, and analyze talent distributions",
        perf_goals_okrs: "Goals & OKRs Management",
        lbl_assignee: "Assignee",
        lbl_title: "Title",
        lbl_weight: "Weight",
        lbl_target: "Target Value",
        btn_add_goal: "Add Goal",
        lbl_active_goals: "Active Goals",
        lbl_okr_progress: "Active OKRs Progress",
        lbl_9box_grid: "HR 9-Box Grid",
        lms_title: "Skills & Learning Center",
        lms_subtitle: "Evaluate competencies, view courses catalogs, and monitor certification pathways",
        lbl_competency_skills: "Skills & Competency Grid",
        lbl_employee: "Employee Name",
        lbl_skill: "Skill",
        lbl_current_level: "Current Level",
        lbl_target_level: "Target Level",
        lbl_certified: "Certified",
        btn_save_skill: "Update Skill Level",
        lbl_lms_courses: "LMS Catalog & SCORM Courses",
        lbl_mandatory_exam: "Mandatory Certification Exam",
        lbl_exam_help: "Answer the following question to earn your badge",
        lbl_cert_title: "OFFICIAL CERTIFICATE",
        ben_title: "Benefits & Assets Tracker",
        ben_subtitle: "Enroll in flexible corporate benefits schemes and assign IT/office equipment",
        lbl_benefit_plans: "Benefit Plans",
        lbl_benefit_plan: "Benefit Plan",
        lbl_claim_amount: "Amount ($)",
        lbl_notes: "Notes",
        btn_submit_benefit: "File Benefit Claim",
        lbl_benefit_claims_history: "Claims Log",
        lbl_assets_inventory: "Assets Inventory Ledger",
        lbl_asset_assignment: "Handover Gear Assignment",
        lbl_select_asset: "Asset",
        btn_assign_asset: "Handover Asset",
        dms_eng_title: "Digital Vault & Engagement Desk",
        dms_eng_subtitle: "Access signed company documents and appreciate achievements on Kudos wall",
        lbl_vault_explorer: "Document Vault Explorer",
        lbl_doc_title: "Document Title",
        lbl_expiry: "Expiry Date",
        btn_upload: "Upload Doc",
        lbl_active_documents: "Active Documents",
        lbl_kudos_wall: "Peer Kudos Wall",
        lbl_receiver: "Recipient Peer Name",
        lbl_kudos_msg: "Appreciation Message",
        lbl_points: "Points",
        lbl_badge: "Select Badge",
        btn_send_kudos: "Award Kudos Points",
        lbl_kudos_feed: "Appreciations Wall Feed",
        lbl_pulse_surveys: "Anonymous Pulse Surveys",
        lbl_select_survey: "Select Active Survey",
        btn_submit_feedback: "Submit Feedback",
        timesheets_title: "Timesheets & Allocations",
        timesheets_subtitle: "Log timesheet billable hours and track headcount planning approvals",
        lbl_headcount_planning: "Headcount Budget Planning",
        lbl_target_headcount: "Target Staff",
        lbl_budget: "Budget",
        lbl_year: "Year",
        lbl_project_allocations: "Projects & Allocations",
        lbl_timesheet_log: "Timesheet Grid matrix",
        lbl_project: "Project",
        lbl_week_start: "Week Start",
        lbl_week_end: "Week End",
        lbl_work_done: "Work Done Notes",
        btn_submit_timesheet: "Submit Weekly Matrix",
        lbl_timesheets_history: "Timesheets History Log",
        exit_title: "Exit Hub & Offboarding",
        exit_subtitle: "File voluntary resignation requests, check clearance checkouts and calculate gratuity",
        lbl_submit_resignation: "Voluntary Resignation Request",
        lbl_requested_last_day: "Last Working Day",
        lbl_exit_reason: "Resignation Reason",
        btn_submit_exit: "File Exit Request",
        lbl_exit_requests_log: "Exit Hub Status logs",
        tbl_asset: "Asset Name",
        tbl_serial: "Serial Number",
        tbl_category: "Category",
        tbl_ocr_status: "AI OCR Meta",
        tbl_gratuity: "Gratuity Reward",
        tbl_clearance_checklist: "Clearance Status",
        tbl_goal_title: "Goal Title",
        tbl_due: "Due Date",
        tbl_plan: "Benefit Plan",
        tbl_project: "Project",
        tbl_dates: "Date Scope",
        tbl_exit_reason: "Reason",
        tbl_exit_last_day: "Last Day"
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
        save_emp: "حفظ كشف ملف الموظف",
        menu_performance: "الأداء والأهداف",
        menu_skills_lms: "المهارات والتدريب LMS",
        menu_benefits_assets: "المنافع والعهدة",
        menu_dms_surveys: "المستندات والاستبيانات",
        menu_timesheets_projects: "المشاريع والتايم شيت",
        menu_exit_hub: "سجل إنهاء الخدمة",
        perf_title: "مركز تقييم الأداء والأهداف OKRs",
        perf_subtitle: "تابع أهداف الموظفين الفردية، وتقدم نتائج الأهداف والنتائج الرئيسية OKRs وتوزيع الكفاءات",
        perf_goals_okrs: "إدارة الأهداف والنتائج الرئيسية",
        lbl_assignee: "الموظف المسؤول",
        lbl_title: "عنوان الهدف",
        lbl_weight: "الوزن النسبي",
        lbl_target: "القيمة المستهدفة",
        btn_add_goal: "إضافة هدف جديد",
        lbl_active_goals: "الأهداف النشطة حالياً",
        lbl_okr_progress: "مستوى تقدم الأهداف الرئيسية OKR",
        lbl_9box_grid: "مصفوفة الكفاءة والأداء التساعية 9-Box Grid",
        lms_title: "منصة الكفاءات والتطوير والتدريب",
        lms_subtitle: "قيم كفاءات الموظفين، استعرض دورات التدريب المتاحة، وتابع مسارات الشهادات المعتمدة",
        lbl_competency_skills: "لوحة تقييم المهارات والكفاءات",
        lbl_employee: "الموظف",
        lbl_skill: "المهارة / الكفاءة",
        lbl_current_level: "المستوى الحالي",
        lbl_target_level: "المستوى المستهدف",
        lbl_certified: "معتمد ومرخص رسمياً",
        btn_save_skill: "تحديث مستوى المهارة",
        lbl_lms_courses: "كتالوج التدريب ودورات SCORM التفاعلية",
        lbl_mandatory_exam: "الاختبار الإلزامي المعتمد",
        lbl_exam_help: "أجب عن السؤال التالي للحصول على شهادتك:",
        lbl_cert_title: "شهادة اجتياز معتمدة",
        ben_title: "بوابة المزايا وتتبع العهد والأصول",
        ben_subtitle: "اشترك في خطط التأمين والمنافع المرنة، وقم بتسليم العهد والأجهزة للكوادر الوظيفية",
        lbl_benefit_plans: "خطط المنافع المتاحة",
        lbl_benefit_plan: "خطة المنفعة",
        lbl_claim_amount: "قيمة المطالبة ($)",
        lbl_notes: "التفاصيل / الملاحظات",
        btn_submit_benefit: "تقديم طلب مطالبة بمستند",
        lbl_benefit_claims_history: "سجل مطالبات التعويض والمنافع",
        lbl_assets_inventory: "دفتر الأصول والعهدة المتاحة للشركة",
        lbl_asset_assignment: "تسليم عهدة جديدة لموظف",
        lbl_select_asset: "العهدة المراد تسليمها",
        btn_assign_asset: "تأكيد تسليم العهدة",
        dms_eng_title: "أرشيف الوثائق وصندوق تفاعل الموظفين",
        dms_eng_subtitle: "تصفح الوثائق والملفات الموقعة رسمياً وقدم الشكر والتقدير لزملائك عبر جدار الثناء",
        lbl_vault_explorer: "مستكشف وثائق الموظفين والشركة",
        lbl_doc_title: "عنوان الملف / المستند",
        lbl_expiry: "تاريخ الانتهاء",
        btn_upload: "رفع وثيقة جديدة",
        lbl_active_documents: "الوثائق النشطة والمؤرشفة",
        lbl_kudos_wall: "جدار الثناء والتقدير للزملاء",
        lbl_receiver: "الموظف الموجه له الثناء",
        lbl_kudos_msg: "رسالة التقدير",
        lbl_points: "نقاط التقدير",
        lbl_badge: "شعار التقدير",
        btn_send_kudos: "إرسال شكر ومنح نقاط تقدير",
        lbl_kudos_feed: "أحدث عبارات الثناء وجدار التميز",
        lbl_pulse_surveys: "استبيانات قياس الرضا والنبض الوظيفي",
        lbl_select_survey: "اختر الاستبيان النشط",
        btn_submit_feedback: "إرسال المشاركة بشكل مجهول",
        timesheets_title: "التايم شيت وساعات المشاريع",
        timesheets_subtitle: "سجل ساعات العمل على المشاريع وتابع خطط التوظيف السنوية وإحصائيات الميزانية",
        lbl_headcount_planning: "تخطيط القوى العاملة والميزانية المعتمدة",
        lbl_target_headcount: "عدد الكوادر المستهدفة",
        lbl_budget: "الميزانية المعتمدة",
        lbl_year: "السنة المالية",
        lbl_project_allocations: "المشاريع وتخصيص الموارد البشرية",
        lbl_timesheet_log: "تعبئة مصفوفة الساعات الأسبوعية (Timesheet)",
        lbl_project: "المشروع المرتبط",
        lbl_week_start: "بداية الأسبوع",
        lbl_week_end: "نهاية الأسبوع",
        lbl_work_done: "تفاصيل المهام المنجزة",
        btn_submit_timesheet: "اعتماد ورفع التايم شيت",
        lbl_timesheets_history: "سجل التايم شيت الأسبوعي المعتمد",
        exit_title: "مركز إنهاء الخدمة والمخالصات المالية",
        exit_subtitle: "قدم طلب استقالة اختياري، وتابع إجراءات المخالصة الإدارية واحتسب مكافأة نهاية الخدمة",
        lbl_submit_resignation: "تقديم طلب استقالة اختياري",
        lbl_requested_last_day: "آخر يوم عمل مطلوب",
        lbl_exit_reason: "سبب الاستقالة الأساسي",
        btn_submit_exit: "تسجيل ورفع طلب الاستقالة",
        lbl_exit_requests_log: "مراحل المخالصة وتسوية نهاية الخدمة للموظفين",
        tbl_asset: "العهدة / الجهاز",
        tbl_serial: "الرقم التسلسلي",
        tbl_category: "الفئة",
        tbl_ocr_status: "بيانات AI OCR",
        tbl_gratuity: "مكافأة نهاية الخدمة",
        tbl_clearance_checklist: "حالة المخالصة الإدارية",
        tbl_goal_title: "الهدف الوظيفي",
        tbl_due: "تاريخ الاستحقاق",
        tbl_plan: "خطة المنافع",
        tbl_project: "المشروع",
        tbl_dates: "الفترة الزمنية",
        tbl_exit_reason: "السبب",
        tbl_exit_last_day: "آخر يوم عمل"
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

    // Enterprise Modules Renders
    renderPerformanceTab();
    renderSkillsLMSTab();
    renderBenefitsAssetsTab();
    renderDMSEngagementTab();
    renderTimesheetsProjectsTab();
    renderExitHubTab();

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
            
            } catch (err) {
                console.error(err);
            }
        });
    }

    // ==========================================
    // ENTERPRISE MODULES EVENT LISTENERS
    // ==========================================

    // Goals Form submit
    const goalForm = document.getElementById("add-goal-form");
    if (goalForm) {
        goalForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const empId = document.getElementById("goal-emp-id").value;
            const title = document.getElementById("goal-title").value;
            const weight = parseFloat(document.getElementById("goal-weight").value);
            const target = parseFloat(document.getElementById("goal-target").value);
            try {
                await fetch('/api/goals', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_id: empId,
                        title,
                        description: "Standard Goal",
                        weight,
                        target_value: target,
                        current_value: 0,
                        status: "Not Started",
                        due_date: "2026-12-31"
                    })
                });
                await logActivity(`Created Goal for ${empId}: ${title}`);
                goalForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Skills Form submit
    const skillForm = document.getElementById("log-skill-form");
    if (skillForm) {
        skillForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const empId = document.getElementById("skill-emp-select").value;
            const skillId = document.getElementById("skill-library-select").value;
            const current = parseInt(document.getElementById("skill-current").value);
            const target = parseInt(document.getElementById("skill-target").value);
            const certified = document.getElementById("skill-certified").checked;
            try {
                await fetch('/api/employee-skills', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        employee_id: empId,
                        skill_id: skillId,
                        current_level: current,
                        target_level: target,
                        certified
                    })
                });
                await logActivity(`Updated competency skill ${skillId} level for ${empId}`);
                skillForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // LMS SCORM Media Player Actions
    let activeEnrollmentId = null;
    let activeEnrollmentProgress = 0;
    
    window.startLMSCourse = function(enrollmentId, courseTitle, progress) {
        activeEnrollmentId = enrollmentId;
        activeEnrollmentProgress = progress;
        document.getElementById("scorm-course-title").textContent = courseTitle;
        document.getElementById("player-progress-bar").style.width = `${progress}%`;
        document.getElementById("player-percent-label").textContent = `${Math.round(progress)}%`;
        document.getElementById("scorm-player-card").classList.remove("hidden");
        document.getElementById("certificate-display").classList.add("hidden");
        document.getElementById("course-exam-panel").classList.add("hidden");

        if (progress >= 100) {
            document.getElementById("certificate-display").classList.remove("hidden");
            document.getElementById("cert-course-name").textContent = courseTitle;
        } else {
            document.getElementById("course-exam-panel").classList.add("hidden");
        }
        
        document.getElementById("scorm-player-card").scrollIntoView({ behavior: 'smooth' });
    };

    const closeScormBtn = document.getElementById("close-scorm-btn");
    if (closeScormBtn) {
        closeScormBtn.addEventListener("click", () => {
            document.getElementById("scorm-player-card").classList.add("hidden");
        });
    }

    const playTriggerBtn = document.getElementById("play-trigger-btn");
    if (playTriggerBtn) {
        playTriggerBtn.addEventListener("click", async () => {
            if (!activeEnrollmentId) return;
            const spin = document.getElementById("player-spin");
            spin.classList.remove("hidden");
            playTriggerBtn.disabled = true;

            setTimeout(async () => {
                spin.classList.add("hidden");
                playTriggerBtn.disabled = false;
                
                activeEnrollmentProgress = Math.min(activeEnrollmentProgress + 20, 100);
                document.getElementById("player-progress-bar").style.width = `${activeEnrollmentProgress}%`;
                document.getElementById("player-percent-label").textContent = `${activeEnrollmentProgress}%`;

                try {
                    await fetch('/api/enrollments/progress', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            enrollment_id: activeEnrollmentId,
                            progress: activeEnrollmentProgress
                        })
                    });

                    if (activeEnrollmentProgress >= 100) {
                        document.getElementById("course-exam-panel").classList.remove("hidden");
                    }
                    await refreshData();
                } catch(e) {
                    console.error(e);
                }
            }, 800);
        });
    }

    const submitExamBtn = document.getElementById("submit-exam-btn");
    if (submitExamBtn) {
        submitExamBtn.addEventListener("click", () => {
            const answer = document.querySelector('input[name="exam-q1"]:checked');
            if (answer && answer.value === "correct") {
                document.getElementById("course-exam-panel").classList.add("hidden");
                document.getElementById("certificate-display").classList.remove("hidden");
                document.getElementById("cert-course-name").textContent = document.getElementById("scorm-course-title").textContent;
                alert(db.activeLanguage === 'ar' ? 'تهانينا! لقد نجحت في الاختبار وحصلت على الشهادة!' : 'Congratulations! You passed the exam and earned a certificate!');
            } else {
                alert(db.activeLanguage === 'ar' ? 'إجابة خاطئة. يرجى مراجعة المواد والمحاولة مرة أخرى.' : 'Incorrect answer. Please review materials and try again.');
            }
        });
    }

    // Benefits Form submit
    const benForm = document.getElementById("benefit-claim-form");
    if (benForm) {
        benForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const empId = document.getElementById("ben-emp-select").value;
            const planId = document.getElementById("ben-plan-select").value;
            const amount = parseFloat(document.getElementById("ben-amount").value);
            const notes = document.getElementById("ben-notes").value;
            try {
                await fetch('/api/benefits/claims', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_id: empId,
                        plan_id: planId,
                        amount,
                        notes
                    })
                });
                await logActivity(`Filed Benefit Claim for ${empId}: ${planId}`);
                benForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Asset Assign Form submit
    const assetAssignForm = document.getElementById("asset-assign-form");
    if (assetAssignForm) {
        assetAssignForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const assetId = document.getElementById("asset-select").value;
            const empId = document.getElementById("asset-emp-select").value;
            try {
                await fetch('/api/assets/assignments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ asset_id: assetId, employee_id: empId })
                });
                await logActivity(`Assigned asset ${assetId} to employee ${empId}`);
                assetAssignForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Document Form submit
    const docForm = document.getElementById("add-document-form");
    if (docForm) {
        docForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const title = document.getElementById("doc-title").value;
            const cat = document.getElementById("doc-category").value;
            const expiry = document.getElementById("doc-expiry").value;
            try {
                await fetch('/api/documents', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_id: "EMP-003",
                        title,
                        category: cat,
                        expiry_date: expiry,
                        ocr_meta: JSON.stringify({ verified: true, parsed_date: new Date().toISOString().split('T')[0] })
                    })
                });
                await logActivity(`Uploaded Document: ${title}`);
                docForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Survey Response Form submit
    const surveyForm = document.getElementById("pulse-survey-form");
    if (surveyForm) {
        surveyForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const surveyId = document.getElementById("survey-select").value;
            const q1 = parseInt(document.getElementById("survey-q1").value);
            const q2 = parseInt(document.getElementById("survey-q2").value);
            const score = ((q1 + q2) / 2).toFixed(2);
            try {
                await fetch('/api/surveys/responses', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        survey_id: surveyId,
                        answers: { q1, q2 },
                        sentiment_score: score
                    })
                });
                await logActivity(`Submitted pulse survey response. Average Score: ${score}`);
                alert(db.activeLanguage === 'ar' ? 'شكراً لك! تم تقديم رأيك بنجاح وبسرية تامة.' : 'Thank you! Your anonymous response was submitted.');
                surveyForm.reset();
                await refreshData();
            } catch(err) {
                console.error(err);
            }
        });
    }

    // Kudos Form submit
    const kudosFormForm = document.getElementById("kudos-form");
    if (kudosFormForm) {
        kudosFormForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const receiver = document.getElementById("kudos-receiver").value;
            const message = document.getElementById("kudos-message").value;
            const points = parseInt(document.getElementById("kudos-points").value);
            const badge = document.getElementById("kudos-badge").value;
            try {
                await fetch('/api/recognitions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        sender_name: db.currentUser.name,
                        receiver_name: receiver,
                        message,
                        points,
                        badge
                    })
                });
                await logActivity(`Awarded Kudos points to ${receiver}`);
                kudosFormForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Timesheet Form submit
    const tsForm = document.getElementById("timesheet-form");
    if (tsForm) {
        tsForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const empName = document.getElementById("ts-emp-name").value;
            const project = document.getElementById("ts-project-select").value;
            const start = document.getElementById("ts-start").value;
            const end = document.getElementById("ts-end").value;
            
            const mon = parseFloat(document.getElementById("ts-mon").value) || 0;
            const tue = parseFloat(document.getElementById("ts-tue").value) || 0;
            const wed = parseFloat(document.getElementById("ts-wed").value) || 0;
            const thu = parseFloat(document.getElementById("ts-thu").value) || 0;
            const fri = parseFloat(document.getElementById("ts-fri").value) || 0;
            
            const notes = document.getElementById("ts-notes").value;
            
            const lines = [
                { project_name: project, work_date: 'Monday', hours_worked: mon, billable: true, task_description: notes },
                { project_name: project, work_date: 'Tuesday', hours_worked: tue, billable: true, task_description: notes },
                { project_name: project, work_date: 'Wednesday', hours_worked: wed, billable: true, task_description: notes },
                { project_name: project, work_date: 'Thursday', hours_worked: thu, billable: true, task_description: notes },
                { project_name: project, work_date: 'Friday', hours_worked: fri, billable: true, task_description: notes }
            ];

            try {
                await fetch('/api/timesheets', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_name: empName,
                        start_date: start,
                        end_date: end,
                        lines
                    })
                });
                await logActivity(`Timesheet submitted for ${empName}`);
                tsForm.reset();
                await refreshData();
            } catch (err) {
                console.error(err);
            }
        });
    }

    // Exit Hub Form submit
    const exitHubForm = document.getElementById("exit-request-form");
    if (exitHubForm) {
        exitHubForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const empName = document.getElementById("exit-emp-name").value;
            const date = document.getElementById("exit-date").value;
            const reason = document.getElementById("exit-reason").value;
            try {
                await fetch('/api/exits', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tenant_id: db.activeTenant,
                        employee_name: empName,
                        requested_last_day: date,
                        exit_reason: reason
                    })
                });
                await logActivity(`Voluntary Resignation Exit Request filed for ${empName}`);
                exitHubForm.reset();
                await refreshData();
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

// ==========================================
// ENTERPRISE MODULES RENDERING LOGIC
// ==========================================

// Helper to fill employee options in form select tags
async function populateEmployeeSelects() {
    try {
        const res = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await res.json();
        const selectors = [
            document.getElementById("goal-emp-id"),
            document.getElementById("skill-emp-select"),
            document.getElementById("ben-emp-select"),
            document.getElementById("asset-emp-select")
        ];
        
        selectors.forEach(sel => {
            if (!sel) return;
            sel.innerHTML = "";
            emps.forEach(e => {
                const opt = document.createElement("option");
                opt.value = e.id;
                opt.textContent = `${e.first_name} ${e.last_name} (${e.job_title})`;
                sel.appendChild(opt);
            });
        });

        const tsNameInput = document.getElementById("ts-emp-name");
        if (tsNameInput) tsNameInput.value = db.currentUser.name;
        
        const exitNameInput = document.getElementById("exit-emp-name");
        if (exitNameInput) exitNameInput.value = db.currentUser.name;
        
    } catch (e) {
        console.error(e);
    }
}

// 1. Performance Tab Render
async function renderPerformanceTab() {
    await populateEmployeeSelects();
    const tbody = document.getElementById("goals-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    try {
        const res = await fetch(`/api/goals?tenant_id=${db.activeTenant}`);
        const goals = await res.json();

        goals.forEach(g => {
            const pct = Math.round((g.current_value / g.target_value) * 100) || 0;
            tbody.innerHTML += `
                <tr>
                    <td><strong>${g.first_name} ${g.last_name}</strong></td>
                    <td>${g.title}</td>
                    <td>${g.weight}</td>
                    <td>
                        <div class="progress-bar-outer" style="width:100px;">
                            <div class="progress-bar-inner bg-teal" style="width: ${pct}%;"></div>
                        </div>
                        <span style="font-size:10px;">${pct}% (${g.current_value}/${g.target_value})</span>
                    </td>
                    <td><span class="badge ${g.status === 'Completed' ? 'badge-teal' : 'badge-orange'}">${g.status}</span></td>
                    <td>${g.due_date || 'N/A'}</td>
                </tr>
            `;
        });

        const okrRes = await fetch(`/api/okrs?tenant_id=${db.activeTenant}`);
        const okrs = await okrRes.json();
        const okrList = document.getElementById("okrs-progress-list");
        if (okrList) {
            okrList.innerHTML = "";
            okrs.forEach(o => {
                okrList.innerHTML += `
                    <div style="margin-bottom:12px;">
                        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                            <strong>${o.title}</strong>
                            <span>${o.progress}%</span>
                        </div>
                        <div class="progress-bar-outer">
                            <div class="progress-bar-inner bg-violet" style="width: ${o.progress}%;"></div>
                        </div>
                    </div>
                `;
            });
        }

        const empRes = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await empRes.json();
        
        document.querySelectorAll(".nine-box-grid .cell-members").forEach(c => c.innerHTML = "");

        const boxes = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
        emps.forEach((e, idx) => {
            const boxId = boxes[idx % boxes.length];
            const cell = document.querySelector(`.nine-box-grid [data-box="${boxId}"] .cell-members`);
            if (cell) {
                cell.innerHTML += `<span class="member-chip">${e.first_name} ${e.last_name[0] || ''}.</span>`;
            }
        });

    } catch (e) {
        console.error(e);
    }
}

// 2. Skills & LMS Tab Render
async function renderSkillsLMSTab() {
    const matrixDiv = document.getElementById("skills-matrix-results");
    if (!matrixDiv) return;
    matrixDiv.innerHTML = "";

    try {
        const skillsRes = await fetch(`/api/skills?tenant_id=${db.activeTenant}`);
        const skills = await skillsRes.json();

        const librarySelect = document.getElementById("skill-library-select");
        if (librarySelect) {
            librarySelect.innerHTML = "";
            skills.forEach(s => {
                const opt = document.createElement("option");
                opt.value = s.id;
                opt.textContent = `${s.name} (${s.category})`;
                librarySelect.appendChild(opt);
            });
        }

        const empRes = await fetch(`/api/employees?tenant_id=${db.activeTenant}`);
        const emps = await empRes.json();
        
        let matrixHTML = `<h4 style="margin-bottom:8px;">Competency Gap Analysis</h4><div class="glass-table-wrapper"><table class="glass-table"><thead><tr><th>Employee</th><th>Skill</th><th>Current</th><th>Target</th><th>Gap</th><th>Certified</th></tr></thead><tbody>`;

        for (const emp of emps) {
            const skillDetailsRes = await fetch(`/api/employee-skills?employee_id=${emp.id}`);
            const empSkills = await skillDetailsRes.json();

            empSkills.forEach(es => {
                const gap = es.target_level - es.current_level;
                const gapColor = gap > 0 ? 'red' : 'green';
                const gapText = gap > 0 ? `-${gap} Level` : 'Met / Exceeded';
                matrixHTML += `
                    <tr>
                        <td><strong>${emp.first_name} ${emp.last_name}</strong></td>
                        <td>${es.skill_name}</td>
                        <td>${es.current_level} / 5</td>
                        <td>${es.target_level} / 5</td>
                        <td style="color:${gapColor}; font-weight:700;">${gapText}</td>
                        <td><span class="badge ${es.certified ? 'badge-teal' : 'badge-orange'}">${es.certified ? 'Certified' : 'Self-declared'}</span></td>
                    </tr>
                `;
            });
        }
        matrixHTML += `</tbody></table></div>`;
        matrixDiv.innerHTML = matrixHTML;

        const coursesRes = await fetch(`/api/courses?tenant_id=${db.activeTenant}`);
        const courses = await coursesRes.json();

        const coursesDeck = document.getElementById("courses-deck-container");
        if (coursesDeck) {
            coursesDeck.innerHTML = "";
            document.getElementById("courses-count").textContent = `${courses.length} Courses`;
            
            const enrollRes = await fetch(`/api/enrollments?tenant_id=${db.activeTenant}&employee_id=EMP-003`);
            const enrollments = await enrollRes.json();

            courses.forEach(c => {
                const enrollment = enrollments.find(e => e.course_id === c.id);
                const progress = enrollment ? enrollment.progress_percentage : 0;
                const status = enrollment ? enrollment.status : "Not Started";
                const enrollmentId = enrollment ? enrollment.id : `mock-e-${c.id}`;

                let cardClass = "glow-violet";
                if (status === "Completed") cardClass = "glow-teal";

                coursesDeck.innerHTML += `
                    <div class="course-card ${cardClass}">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span class="badge ${c.is_mandatory ? 'badge-red' : 'badge-orange'}">${c.is_mandatory ? 'Mandatory' : 'Optional'}</span>
                                <span class="badge">${status}</span>
                            </div>
                            <h4>${c.title}</h4>
                            <p>${c.description}</p>
                        </div>
                        <div>
                            <div class="card-meta">
                                <span><i class="fa-regular fa-clock"></i> ${c.duration_minutes} Mins</span>
                                <strong>${progress}% Completed</strong>
                            </div>
                            <div class="progress-bar-outer" style="margin-top:6px; margin-bottom:12px;">
                                <div class="progress-bar-inner bg-teal" style="width: ${progress}%;"></div>
                            </div>
                            <button class="btn btn-secondary btn-small w-full" onclick="startLMSCourse('${enrollmentId}', '${c.title}', ${progress})"><i class="fa-solid fa-graduation-cap"></i> Start Learning</button>
                        </div>
                    </div>
                `;
            });
        }

    } catch(e) {
        console.error(e);
    }
}

// 3. Benefits & Assets Tab Render
async function renderBenefitsAssetsTab() {
    const claimsTbody = document.getElementById("ben-claims-table-body");
    if (!claimsTbody) return;
    claimsTbody.innerHTML = "";

    try {
        const plansRes = await fetch(`/api/benefits/plans?tenant_id=${db.activeTenant}`);
        const plans = await plansRes.json();

        const planSelect = document.getElementById("ben-plan-select");
        if (planSelect) {
            planSelect.innerHTML = "";
            plans.forEach(p => {
                const opt = document.createElement("option");
                opt.value = p.id;
                opt.textContent = `${p.name} (${p.type}) allowance: $${p.monthly_allowance}`;
                planSelect.appendChild(opt);
            });
        }

        const claimsRes = await fetch(`/api/benefits/claims?tenant_id=${db.activeTenant}`);
        const claims = await claimsRes.json();

        claims.forEach(c => {
            let statusClass = "badge-orange";
            if (c.status === "Approved") statusClass = "badge-teal";
            if (c.status === "Rejected") statusClass = "badge-red";

            let actionHTML = "---";
            if (c.status === "Pending" && db.activeRole !== "Employee") {
                actionHTML = `
                    <button class="btn btn-secondary btn-small" onclick="handleBenefitClaimApproval('${c.id}', 'Approved')"><i class="fa-solid fa-circle-check" style="color:teal;"></i></button>
                    <button class="btn btn-secondary btn-small" onclick="handleBenefitClaimApproval('${c.id}', 'Rejected')"><i class="fa-solid fa-circle-xmark" style="color:red;"></i></button>
                `;
            }

            claimsTbody.innerHTML += `
                <tr>
                    <td>${c.id}</td>
                    <td><strong>${c.employee_id}</strong></td>
                    <td>${c.plan_id}</td>
                    <td>$${c.amount}</td>
                    <td>${c.notes}</td>
                    <td><span class="badge ${statusClass}">${c.status}</span></td>
                    <td>${actionHTML}</td>
                </tr>
            `;
        });

        const assetsRes = await fetch(`/api/assets?tenant_id=${db.activeTenant}`);
        const assets = await assetsRes.json();

        const assetsTbody = document.getElementById("assets-table-body");
        const assetSelect = document.getElementById("asset-select");
        if (assetsTbody) {
            assetsTbody.innerHTML = "";
            if (assetSelect) assetSelect.innerHTML = "";

            assets.forEach(a => {
                let statusClass = "badge-teal";
                if (a.status === "Assigned") statusClass = "badge-orange";
                if (a.status === "Maintenance") statusClass = "badge-red";

                let actionHTML = "---";
                if (a.status === "Assigned") {
                    actionHTML = `<button class="btn btn-secondary btn-small" style="color:var(--orange);" onclick="returnAssetAssignment('${a.id}')"><i class="fa-solid fa-rotate-left"></i> Return Asset</button>`;
                } else if (a.status === "In Stock" && assetSelect) {
                    const opt = document.createElement("option");
                    opt.value = a.id;
                    opt.textContent = `${a.name} (SN: ${a.serial_number})`;
                    assetSelect.appendChild(opt);
                }

                assetsTbody.innerHTML += `
                    <tr>
                        <td><strong>${a.name}</strong></td>
                        <td>${a.serial_number}</td>
                        <td>${a.category}</td>
                        <td><span class="badge ${statusClass}">${a.status}</span></td>
                        <td>${a.employee_id ? `<strong>${a.first_name} ${a.last_name}</strong>` : 'Available in Stock'}</td>
                        <td>${actionHTML}</td>
                    </tr>
                `;
            });
        }

    } catch (e) {
        console.error(e);
    }
}

window.handleBenefitClaimApproval = async function(id, status) {
    try {
        await fetch(`/api/benefits/claims/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        await logActivity(`Benefit Claim ${id} updated to status: ${status}`);
        await refreshData();
    } catch(e) {
        console.error(e);
    }
};

window.returnAssetAssignment = async function(assetId) {
    try {
        let assignmentId = "AA-101";
        if (assetId === "AST-201") assignmentId = "AA-201";

        await fetch(`/api/assets/assignments/${assignmentId}/return`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        });
        await logActivity(`Returned corporate asset device: ${assetId}`);
        await refreshData();
    } catch(e) {
        console.error(e);
    }
};

// 4. DMS & Surveys Tab Render
async function renderDMSEngagementTab() {
    const docTbody = document.getElementById("documents-table-body");
    if (!docTbody) return;
    docTbody.innerHTML = "";

    try {
        const docRes = await fetch(`/api/documents?tenant_id=${db.activeTenant}`);
        const docs = await docRes.json();

        docs.forEach(d => {
            docTbody.innerHTML += `
                <tr>
                    <td>${d.id}</td>
                    <td><strong>${d.title}</strong></td>
                    <td>${d.category}</td>
                    <td>${d.expiry_date || 'N/A'}</td>
                    <td><small style="color:var(--teal); font-family:monospace;">${d.ocr_meta || 'No OCR processed'}</small></td>
                </tr>
            `;
        });

        const surveySelect = document.getElementById("survey-select");
        const surveyRes = await fetch(`/api/surveys?tenant_id=${db.activeTenant}`);
        const surveys = await surveyRes.json();

        if (surveySelect) {
            surveySelect.innerHTML = "";
            surveys.forEach(s => {
                const opt = document.createElement("option");
                opt.value = s.id;
                opt.textContent = s.title;
                surveySelect.appendChild(opt);
            });
        }

        const kudosRes = await fetch(`/api/recognitions?tenant_id=${db.activeTenant}`);
        const kudos = await kudosRes.json();

        const kudosFeed = document.getElementById("kudos-wall-feed");
        if (kudosFeed) {
            kudosFeed.innerHTML = "";
            kudos.forEach(k => {
                kudosFeed.innerHTML += `
                    <div class="kudos-item">
                        <div class="kudos-header">
                            <strong>${k.sender_name} <i class="fa-solid fa-arrow-right-long text-teal"></i> ${k.receiver_name}</strong>
                            <span class="kudos-badge-chip"><i class="fa-solid fa-star"></i> ${k.badge}</span>
                        </div>
                        <p>${k.message}</p>
                        <small style="color:var(--text-secondary); display:block; margin-top:4px;"><i class="fa-solid fa-heart icon-red"></i> Awarded: <strong>+${k.points} Points</strong></small>
                    </div>
                `;
            });
        }

    } catch (e) {
        console.error(e);
    }
}

// 5. Timesheets & Projects Tab Render
async function renderTimesheetsProjectsTab() {
    const headcountTbody = document.getElementById("headcount-plans-table-body");
    if (!headcountTbody) return;
    headcountTbody.innerHTML = "";

    try {
        const hcRes = await fetch(`/api/headcount-plans?tenant_id=${db.activeTenant}`);
        const plans = await hcRes.json();

        plans.forEach(p => {
            headcountTbody.innerHTML += `
                <tr>
                    <td><strong>${p.department}</strong></td>
                    <td>${p.target_count} Employees</td>
                    <td>$${p.approved_budget.toLocaleString()}</td>
                    <td>FY ${p.year}</td>
                </tr>
            `;
        });

        const prjRes = await fetch(`/api/projects?tenant_id=${db.activeTenant}`);
        const projects = await prjRes.json();

        const prjList = document.getElementById("projects-list-container");
        const prjSelect = document.getElementById("ts-project-select");
        if (prjList) {
            prjList.innerHTML = "";
            if (prjSelect) prjSelect.innerHTML = "";

            projects.forEach(p => {
                if (prjSelect) {
                    const opt = document.createElement("option");
                    opt.value = p.name;
                    opt.textContent = p.name;
                    prjSelect.appendChild(opt);
                }

                prjList.innerHTML += `
                    <div class="project-item-card">
                        <div>
                            <strong>${p.name}</strong>
                            <br><small style="color:var(--text-secondary);">Client: ${p.client_name || 'Internal'}</small>
                        </div>
                        <span class="badge badge-teal">$${p.budget.toLocaleString()}</span>
                    </div>
                `;
            });
        }

        const tsRes = await fetch(`/api/timesheets?tenant_id=${db.activeTenant}`);
        const timesheets = await tsRes.json();

        const tsTbody = document.getElementById("timesheets-table-body");
        if (tsTbody) {
            tsTbody.innerHTML = "";
            timesheets.forEach(ts => {
                let statusClass = "badge-orange";
                if (ts.status === "Approved") statusClass = "badge-teal";
                if (ts.status === "Rejected") statusClass = "badge-red";

                let actionHTML = "---";
                if (ts.status === "Submitted" && db.activeRole !== "Employee") {
                    actionHTML = `
                        <button class="btn btn-secondary btn-small" onclick="handleTimesheetApproval('${ts.id}', 'Approved')"><i class="fa-solid fa-circle-check" style="color:teal;"></i></button>
                        <button class="btn btn-secondary btn-small" onclick="handleTimesheetApproval('${ts.id}', 'Rejected')"><i class="fa-solid fa-circle-xmark" style="color:red;"></i></button>
                    `;
                }

                tsTbody.innerHTML += `
                    <tr>
                        <td>${ts.id}</td>
                        <td><strong>${ts.employee_name}</strong></td>
                        <td>${ts.start_date} to ${ts.end_date}</td>
                        <td><span class="badge ${statusClass}">${ts.status}</span></td>
                        <td>${actionHTML}</td>
                    </tr>
                `;
            });
        }

    } catch (e) {
        console.error(e);
    }
}

window.handleTimesheetApproval = async function(id, status) {
    try {
        await fetch(`/api/timesheets/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        await logActivity(`Timesheet ${id} updated to status: ${status}`);
        await refreshData();
    } catch(e) {
        console.error(e);
    }
};

// 6. Exit Hub Tab Render
async function renderExitHubTab() {
    const tbody = document.getElementById("exits-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    try {
        const exitsRes = await fetch(`/api/exits?tenant_id=${db.activeTenant}`);
        const exits = await exitsRes.json();

        exits.forEach(ex => {
            let statusClass = "badge-orange";
            if (ex.status === "Approved") statusClass = "badge-teal";
            if (ex.status === "Rejected") statusClass = "badge-red";

            let actionHTML = "---";
            if (ex.status === "Pending" && db.activeRole !== "Employee") {
                actionHTML = `
                    <button class="btn btn-secondary btn-small" onclick="handleExitApproval('${ex.id}', 'Approved')"><i class="fa-solid fa-circle-check" style="color:teal;"></i> Approve</button>
                    <button class="btn btn-secondary btn-small" onclick="handleExitApproval('${ex.id}', 'Rejected')"><i class="fa-solid fa-circle-xmark" style="color:red;"></i> Reject</button>
                `;
            }

            const clearance = JSON.parse(ex.clearance_checklist || '{}');
            const itCheck = clearance.IT ? '✅ IT' : '❌ IT';
            const hrCheck = clearance.HR ? '✅ HR' : '❌ HR';
            const finCheck = clearance.Finance ? '✅ Finance' : '❌ Finance';

            tbody.innerHTML += `
                <tr>
                    <td><strong>${ex.employee_name}</strong></td>
                    <td>${ex.exit_reason}</td>
                    <td>${ex.requested_last_day}</td>
                    <td>$${ex.gratuity.toLocaleString()}</td>
                    <td><small style="color:var(--text-secondary); font-family:monospace;">${itCheck} | ${hrCheck} | ${finCheck}</small></td>
                    <td><span class="badge ${statusClass}">${ex.status}</span></td>
                    <td>${actionHTML}</td>
                </tr>
            `;
        });

    } catch (e) {
        console.error(e);
    }
}

window.handleExitApproval = async function(id, status) {
    try {
        await fetch(`/api/exits/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        await logActivity(`Exit Request clearance workflow processed for ID: ${id}. Status set: ${status}`);
        await refreshData();
    } catch (e) {
        console.error(e);
    }
}

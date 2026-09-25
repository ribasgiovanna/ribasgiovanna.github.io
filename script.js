(function () {
  "use strict";

  /* ---------------------------------------------------------------
     i18n — every visible string keyed here, EN + PT.
     HTML carries the English text so the page reads fine with no JS.
     --------------------------------------------------------------- */
  var I18N = {
    en: {
      skip: "Skip to content",
      nav_about: "About", nav_work: "Archive", nav_playground: "Outside the IDE", nav_cv: "CV", nav_cv_aria: "CV (PDF, opens Google Drive)", nav_contact: "Contact",

      datasus_lead: "Automating the collection and cleaning of Paran&aacute; hemotherapy records from SUS, with an interactive dashboard on top.",
      pm_hint: "open &nearr;",
      pm_project: "Project",
      tab_projects: "Projects", tab_tech: "Technologies", tab_certs: "Learning",
      folders_edition: "working archive",
      folders_bottom_hint: "Choose a tab to explore.",
      peek_projects_cap: "Corrida para a Faculdade",
      peek_projects_diagram_cap: "from flow to solution",
      peek_tech_cap: "City light",
      peek_certs_cap: "Python at Harve &middot; 2026",
      cover_projects_title: "Projects<br><em>&amp; process.</em>",
      cover_projects_meta: "AUTOMATION &middot; WEB &middot; GAMES &middot; IoT",
      cover_projects_cta: "Explore projects",
      cover_projects_count: "08 projects",
      cover_tech_title: "My<br><em>toolkit.</em>",
      cover_tech_meta: "FROM CODE TO COMPOSITION",
      cover_tech_cta: "See the tools",
      cover_tech_count: "06 groups",
      cover_certs_title: "Learning,<br><em>on record.</em>",
      cover_certs_meta: "COURSES &middot; EDUCATION &middot; PARTICIPATION",
      cover_certs_cta: "Flip through records",
      cover_certs_count: "05 records",
      cover_certs_rubber: "IN CONSTANT<span>progress</span>",
      gr_stamp_projects: "CURITIBA<br>BRAZIL",
      gr_stamp_tech: "CODE<br>CREATION",
      gr_pager_prev: "&larr; Previous",
      gr_pager_next: "Next &rarr;",
      gr_stage_aria: "Archive of projects, technologies and certificates",
      gr_folder_projects_aria: "Projects folder",
      gr_folder_tech_aria: "Technologies folder",
      gr_folder_certs_aria: "Learning and education folder",
      gr_reader_aria: "Folder contents",
      reader_return: "&larr; Save to the folder",
      reader_pause_sub: "SELF-REGULATION<br>&amp; ANXIETY",
      p1_cat: "Data &amp; automation",
      tag_reqs: "requirements analysis", tag_uxflows: "user roles", tag_team: "team project",
      tag_embedded: "embedded C", tag_sens: "sensors",
      dg_h: "Doggo", dg_cat: "IoT",
      dg_date: "Academic team project &middot; ESP32 &middot; in progress",
      dg_sub: "Embedded ESP32 system for pet-shop / kennel automation",
      dg_lead: "An ESP32 acting as an HTTP server for a pet station &mdash; it tracks water temperature, doses food by weight and switches the water fountain, from a web page and a small REST API.",
      dg_body:
        "<h4>The idea</h4>" +
        "<p>An ESP32 runs as an HTTP server on the local network and hosts its own web page to monitor and control a pet-care station &mdash; a water fountain and a food dispenser.</p>" +
        "<h4>Hardware</h4>" +
        "<ul>" +
        "<li><strong>Sensors</strong> &mdash; a 1&nbsp;kg load cell with an HX711 module for the food weight in the bowl, and a waterproof DS18B20 for the water temperature.</li>" +
        "<li><strong>Actuators</strong> &mdash; an SG90 servo that opens the dispenser until a target weight is reached, and a 5&nbsp;V relay that switches the water fountain.</li>" +
        "</ul>" +
        "<h4>The web interface</h4>" +
        "<p>The page shows the live weight and water temperature and lets you start a dosing run to a target number of grams or turn the fountain on and off. The same actions are available as a small REST API for other clients.</p>" +
        "<h4>Reliability</h4>" +
        "<p>The board reconnects to Wi-Fi on its own; events are stamped with the real date and time from a public time server and written to internal flash memory as <code>[INFO]</code> / <code>[AVISO]</code> / <code>[ERRO]</code> lines, so the log survives a restart.</p>" +
        "<h4>Current stage</h4>" +
        "<p>A course project, in the design phase: the technical specification &mdash; protocols, hardware, endpoints and logging &mdash; is in the repository. Firmware in progress.</p>",
      mk_h: "MKpause", mk_cat: "Product",
      mk_date: "Academic team project &middot; PUCPR &middot; in progress",
      mk_sub: "Self-regulation &amp; psychological-support platform",
      mk_lead: "A platform to support the emotional self-regulation of adolescents at school &mdash; mood tracking, guided activities and a channel to ask for help.",
      mk_body:
        "<h4>The context</h4>" +
        "<p>Adolescents at school don&rsquo;t always have a clear path to ask for help or to keep track of how they&rsquo;re feeling. MKpause proposes a tool that supports self-regulation and connects the student, the teacher and the psychologist &mdash; each seeing only what their role allows.</p>" +
        "<h4>The proposal</h4>" +
        "<ul>" +
        "<li><strong>Self-regulation</strong> &mdash; activities, games and videos the student uses on their own.</li>" +
        "<li><strong>Mood logging</strong> &mdash; how the student feels before and after each session, with date, time, level and duration.</li>" +
        "<li><strong>Asking for help</strong> &mdash; an alert to leave the classroom and a help request to a school professional.</li>" +
        "<li><strong>Follow-up</strong> &mdash; teachers and psychologists review history, mood and notes, each within their own permissions.</li>" +
        "</ul>" +
        "<h4>Roles</h4>" +
        "<p>Four roles with their own rules: student, psychologist, teacher / school psychologist, and administrator.</p>" +
        "<h4>My contribution</h4>" +
        "<p>I came up with the project&rsquo;s name and work on its development, together with the team.</p>" +
        "<h4>Current stage</h4>" +
        "<p>The analysis phase &mdash; a vision document, user roles and functional requirements per role &mdash; is gathered in the repository. Implementation hasn&rsquo;t started yet.</p>",
      tech_lead: "An organised view of the tools and languages I work with.",
      tech_da_h: "Data &amp; automation", tech_dw_h: "Web development", tech_cv_h: "Visual creation", tech_tools_h: "Work tools",
      tech_method_h: "Ways of working", tech_spoken_h: "Spoken languages",
      tech_pm: "project management",
      tech_pt: "Portuguese &mdash; native", tech_en: "English &mdash; fluent", tech_fr: "French &mdash; basic",
      cert_degree_h: "Software Engineering", cert_degree_d: "B.Sc. in progress at PUCPR, Curitiba.",
      cert_dio_h: "Data Engineering &amp; ML Fundamentals", cert_dio_d: "Course at DIO &mdash; Mar 2026.",
      cert_hotmilk_h: "Problem Solving with AI &mdash; talk", cert_hotmilk_d: "HOTMILK, PUCPR Innovation Ecosystem &mdash; Mar 2026.",
      cert_harve_h: "Python Programming", cert_harve_d: "Course at Escola Harve, Curitiba &mdash; Jan&ndash;Apr 2026.",
      cert_ficem_h: "Scientific research &mdash; FICEM", cert_ficem_d: "Science-fair research project at Col&eacute;gio Bom Jesus.",
      cert_vgc_h: "English Immersion &mdash; Winter Camp", cert_vgc_d: "VGC International College, Canada &mdash; Jan 2024.",
      cert_met_h: "MET &mdash; Michigan English Test", cert_met_d: "Michigan Language Assessment &mdash; Feb 2023.",
      corrida_lead: "A student who&rsquo;s late for class dodges obstacles across the city &mdash; the challenge is to manage three lives and reach the goal before the run ends.",
      pibble_lead: "One application to organise clients, products, employees and deliveries in the same system.",
      p1_date: "Team project &middot; Harve &middot; Apr 2026",
      p2_date: "Individual project &middot; Academic &middot; Jun 2026",
      p3_date: "Academic team project &middot; Jun 2026",
      nav_home: "Home",
      pg_prev: "Previous page", pg_next: "Next page",
      cat_photo: "Photography",
      cat_kitchen: "In the kitchen",
      cat_digitalart: "Digital art",
      cat_graphicdesign: "Graphic design",
      pg_sunset: "Sunset",
      pg_zucchini: "Zucchini gnocchi",
      pg_citylight: "City light",
      pg_nave: "Cathedral nave",
      pg_potroast: "Pot roast",
      pg_challah: "Challah bread",
      pg_tart: "Chocolate caramel tart",
      pg_pitabread: "Pita bread",
      pg_carrotcake: "Carrot cake",
      pg_chickenpie: "Creamy chicken pie",
      pg_ryeloaves: "Rye loaves",
      pg_rosemarysteak: "Rosemary steak",
      pg_olivebaguette: "Olive baguette",
      pg_hotchococake: "Hot chocolate cake",
      pg_orangecake: "Orange cake",
      p1_sub: "SUS hemotherapy data automation &amp; analysis pipeline",
      p2_sub: "2D runner in Python and Pygame",
      p3_sub: "Delivery-management web system",
      flood_sub: "IoT prototype for level monitoring and alerts",
      bpmn_sub: "Business process modeling in BPMN",
      bpmn_link: "View process manual and diagrams &nearr;",
      work_sub: "What I built, how I approached it, and what I learned.",
      coffee_ig: "@coffeecodepucpr &nearr;",
      iot_cap1: "Circuit built in a simulator: ESP32 with an HC-SR04 ultrasonic sensor and a buzzer.",
      iot_cap2: "Blynk dashboard setup, with indicators and an alert widget (edit mode).",
      home_greet: "Hello, I&rsquo;m",
      home_tag_a: "Software Engineering",
      home_tag_b: "Coffee &amp; Code &mdash; founder",
      home_tag_c: "Curitiba, Brazil",
      home_ios_quote: "&ldquo;I build where code, design &amp; people meet.&rdquo;",
      home_line: "<em>Code, design &amp; people</em> &mdash; I build where they meet.",
      ph_portrait: "portrait &mdash; image pending",
      about_kicker: "My trajectory",
      p4_date: "Academic team project &middot; Jun 2026", p5_date: "Team project &middot; Jun 2026",
      flood_h: "Storm-drain Monitor",
      flood_lead: "A proposal for remote monitoring &mdash; to track levels and flag situations in urban drainage that need attention.",
      bpmn_h: "Veterinary Clinic",
      bpmn_lead: "From the conversation with management to the diagrams: a visual map of a veterinary clinic&rsquo;s processes.",
      tag_sensors: "ultrasonic sensor", tag_web: "web", tag_alerts: "alerts",
      bpmn_role: "Five-person team: Ana Beatriz Patussi Reolon, Ana Clara Ernandes Nogueira, Emelize Bonfim Mlot, Giovanna Ribas dos Reis, Ot&aacute;vio Brito Fonseca.",
      tag_analysis: "process analysis", tag_diagrams: "diagrams",
      stack_more: "For more projects, visit my GitHub &rarr;",

      p1_body:
        "<h4>The challenge</h4>" +
        "<p>Querying different periods on DATASUS TabNet means repeating the same steps through the form and stitching the results back together. The goal was to automate that work and organise the data so periods could be compared over time.</p>" +
        "<h4>The solution</h4>" +
        "<p>A Python pipeline that queries the SUS Outpatient Production system, pulls hemotherapy records for Paran&aacute;, cleans the files and shows the result in a dashboard.</p>" +
        "<ul>" +
        "<li><strong>Automated extraction</strong> &mdash; Selenium drives the form and pandas reads the result tables, with BeautifulSoup as a parsing fallback.</li>" +
        "<li><strong>Parallel queries</strong> &mdash; up to three processes, with the first tasks started in a staggered way.</li>" +
        "<li><strong>Resumable collection</strong> &mdash; existing files are checked per period, so a re-run doesn&rsquo;t download them again.</li>" +
        "<li><strong>Cleaning &amp; visualisation</strong> &mdash; totals rows and empty fields removed, column names standardised, and a Streamlit dashboard for month-by-month and year-by-year comparison.</li>" +
        "</ul>" +
        "<h4>My contribution</h4>" +
        "<p>I proposed the topic and the automation approach, and was responsible for the architecture and for the extraction and data-treatment modules. This was integrated with the rest of the team&rsquo;s work on orchestration, parallel execution and the dashboard.</p>" +
        "<h4>Decisions &amp; process</h4>" +
        "<p>Identifying each form field by a stable marker, because the TabNet&rsquo;s internal labels are accented and change from page to page; waiting for the page to respond before every step, since the server is slow and uneven; and detecting when a new browser tab has opened, instead of assuming it always opens in the same order.</p>" +
        "<h4>Result &amp; evidence</h4>" +
        "<p>The repository holds the per-period extraction, the batch processing, the file treatment and the dashboard. The metric shown is the approved quantity of hemotherapy procedures recorded in SUS for the range queried &mdash; an indicator related to, but not the same as, blood donations.</p>" +
        "<h4>What I learned</h4>" +
        "<p>The pipeline is built to be re-run: it skips periods already downloaded, so an interrupted collection picks up where it stopped. Extending it to other TabNet datasets would mostly mean mapping new fields.</p>",

      p2_body:
        "<h4>Overview</h4>" +
        "<p>A 2D game in Python and Pygame, with obstacles, ramping difficulty and a win condition at 1,000 points.</p>" +
        "<h4>How I built it</h4>" +
        "<ul>" +
        "<li><strong>Game states</strong> &mdash; the flow between menu, play and a win/lose ending, written by hand.</li>" +
        "<li><strong>Movement &amp; collisions</strong> &mdash; a gravity-based jump and a short invincibility window after taking a hit.</li>" +
        "<li><strong>Ramping difficulty</strong> &mdash; speed rises every 100 points up to a cap, and obstacles spawn closer together as the score climbs. An endless-runner feel, but with a finish line.</li>" +
        "<li><strong>Running without art</strong> &mdash; if a visual asset is missing, the game falls back to simple shapes and keeps working.</li>" +
        "<li><strong>Feedback &amp; high score</strong> &mdash; a HUD shows lives, score and progress to the goal; the best score is saved locally.</li>" +
        "</ul>" +
        "<h4>My contribution &amp; assets</h4>" +
        "<p>I wrote the code and the game logic. The visual assets were generated with the help of ChatGPT and integrated into the project.</p>" +
        "<h4>Decisions &amp; process</h4>" +
        "<p>A hand-written state machine instead of a framework, to keep the whole loop visible; difficulty tuned by two knobs &mdash; speed rising every 100 points up to a cap, and the gap between obstacles shrinking with the score; a fallback to plain shapes when an art file is missing, so a broken asset never stops the game.</p>" +
        "<h4>What I learned</h4>" +
        "<p>Keeping the states explicit made the win/lose conditions and the HUD easy to reason about; the same structure would carry a second level or a pause screen with little change.</p>",

      p3_body:
        "<h4>Overview</h4>" +
        "<p>Built as a team, a Django application that represents the operation of a fictional logistics company. It brings together registrations, authentication, an admin dashboard and an API built with Django REST Framework.</p>" +
        "<h4>Project structure</h4>" +
        "<ul>" +
        "<li><strong>Integrated modules</strong> &mdash; clients, products, employees and deliveries.</li>" +
        "<li><strong>Users &amp; profiles</strong> &mdash; each employee is linked to a login account, with an administrative and an operational profile.</li>" +
        "<li><strong>API</strong> &mdash; a REST API that exposes the four core resources for integration.</li>" +
        "<li><strong>Interface</strong> &mdash; forms, input masks and a dashboard with operational information.</li>" +
        "</ul>" +
        "<h4>My contribution</h4>" +
        "<p>I built the employees module and its integration with deliveries. I also built the admin dashboard, worked on the input masks and the visual standardisation of the forms, and organised the logout flow between areas of the system.</p>" +
        "<h4>Decisions &amp; process</h4>" +
        "<p>Linking each employee to a login account through a one-to-one relation, with an administrative and an operational profile; standardising the four modules&rsquo; forms and the logout flow so the system behaves the same everywhere; input masks on the client side for the registration fields.</p>" +
        "<h4>Evidence</h4>" +
        "<p>The repository holds the code, the documentation and captures of the dashboard and the employees module.</p>" +
        "<h4>What I learned</h4>" +
        "<p>Working in a shared codebase with the team meant agreeing on conventions early &mdash; field names, where validation lives, how the modules talk to each other.</p>",

      p4_body:
        "<h4>The challenge</h4>" +
        "<p>A blocked storm drain can contribute to a street flooding. This project explores how sensors and a remote dashboard could support keeping an eye on those conditions.</p>" +
        "<h4>The technical proposal</h4>" +
        "<p>Built as a team and developed entirely in simulation: an ESP32 with an ultrasonic sensor wired in a circuit simulator, and a Blynk dashboard to represent the monitoring and its alerts. Nothing was assembled or deployed physically.</p>" +
        "<ul>" +
        "<li><strong>Distance reading</strong> &mdash; an ultrasonic sensor (HC-SR04) gives a distance measurement that stands in for a level, against a reference set in the model.</li>" +
        "<li><strong>Remote view</strong> &mdash; a Blynk dashboard collects the indicators for the simulated values.</li>" +
        "<li><strong>Signalling</strong> &mdash; the project foresees a buzzer and digital indicators to flag when a configured threshold is crossed.</li>" +
        "</ul>" +
        "<h4>Decisions &amp; process</h4>" +
        "<p>Using an ultrasonic distance reading as a proxy for how full a drain is, rather than trying to measure flow or volume; one configurable threshold per monitored point; keeping the whole thing in simulation to test the logic and the dashboard before any hardware.</p>" +
        "<h4>Evidence of the work</h4>" +
        "<p>A circuit schematic and a capture of the Blynk dashboard in edit mode &mdash; a model and an interface, not photos of a physical build. A real street deployment &mdash; enclosure, power, calibration, scale &mdash; would be a separate stage.</p>",

      p5_body:
        "<h4>The context</h4>" +
        "<p>As a team, we analysed the processes of a real veterinary clinic, keeping it unnamed. The goal was to understand how the work actually happens, record responsibilities and make the flows clearer for analysis.</p>" +
        "<h4>What we produced</h4>" +
        "<ul>" +
        "<li><strong>Three core processes</strong> &mdash; appointment management, stock control and staff management.</li>" +
        "<li><strong>Subprocesses</strong> &mdash; routines such as client registration and checkout/payment, detailed out.</li>" +
        "<li><strong>Responsibilities &amp; decisions</strong> &mdash; activities laid out in responsibility lanes, with decision points and the hand-off of work between people.</li>" +
        "<li><strong>Documentation</strong> &mdash; BPMN diagrams in Bizagi Modeler, gathered into the process manual.</li>" +
        "</ul>" +
        "<h4>My contribution</h4>" +
        "<p>I ran interviews with the clinic&rsquo;s management to gather the routines and the business rules, and worked on turning that into BPMN diagrams &mdash; organising activities, events, decisions and responsibilities.</p>" +
        "<h4>Decisions &amp; process</h4>" +
        "<p>Choosing three core processes to model end to end &mdash; appointments, stock and staff &mdash; with client registration and payment broken out as subprocesses; laying activities in responsibility lanes so each step has a clear owner and the hand-offs are visible; building from the interviews rather than assumptions.</p>" +
        "<h4>Result &amp; evidence</h4>" +
        "<p>The work produced documentation of the processes studied, which can serve as a basis for discussing improvement opportunities.</p>" +
        "<h4>What I learned</h4>" +
        "<p>The value was in the documentation itself: a shared picture the clinic can use to spot where a process could be simplified.</p>",

      now_h: "Currently",
      story_p1: "I&rsquo;ve had an ease with the digital world since I was little. In 2020 that curiosity found a direction in illustration &mdash; I consumed references, published my drawings, and thought about concept art for games. The pressure to keep improving eventually cost me the joy of it, and I stepped back for a while.",
      story_p2: "I found a lighter way to create in graphic and digital design, mostly for school presentations &mdash; which led to FICEM 2024, where I proposed and helped produce a project on the science of dreams. At the same time, another drive stayed with me: the friction I kept running into in the software I used, and the wish to understand and fix it myself.",
      story_p3: "In 2025 I had my first contact with programming, through Java. The following year I continued with Python at Escola de Tecnologia Harve and started Software Engineering at PUCPR &mdash; bringing the attention to form and communication I built through drawing and design into how I build software today.",

      work_h: "Archive",
      work_intro: "Software, data, a game, a community. Different languages for the same habit — making things.",

      tag_states: "state machine",
      tag_auth: "authentication",

      coffee_why: "A university tech club I started and run with a team of friends.",
      coffee_p1: "A space to study technology together, share doubts and put ideas into practice, at each person&rsquo;s own pace. I develop the visual identity, write the study materials, and work with the team on organising it.",
      coffee_proposal: "&#8220;I want Coffee &amp; Code to be a place where people don&rsquo;t feel afraid to get it wrong, and find company to try again.&#8221;",

      creative_h: "Outside the IDE",
      creative_intro: "Everything I make away from a code editor &mdash; design, illustration, drawing, photography, things I bake.",
      gal_grid: "Creative pieces", gal_prev: "Scroll left", gal_next: "Scroll right",
      pf_all: "All",
      pf_design: "Graphic design",
      pf_illustration: "Digital illustration",
      pf_traditional: "Traditional drawing",
      pf_photo: "Photography",
      pf_kitchen: "In the kitchen",
      pf_community: "Volunteering &amp; events",
      pg_ink: "Digital study <i>Character studies</i>",
      pg_pencil: "Pencil study <i>Traditional</i>",
      pg_borboleta: "Awareness campaign <i>Graphic design</i>",
      pg_photo: "Photograph <i>Photography</i>",
      pg_kitchen: "Baked by me <i>In the kitchen</i>",
      pg_vol: "Volunteering &amp; events <i>Community</i>",
      cta_behance: "Behance &rarr;",
      cta_vsco: "VSCO &rarr;",
      cta_github: "More projects on GitHub &rarr;",

      community_h: "Community &amp; social impact",
      community_lead: "Building with people &mdash; a different role, a different place, every time.",
      group_community_aria: "Open community roles", group_event_aria: "Open events",
      group_community_cap: "Community", group_community_count: "8 roles",
      group_event_cap: "Events", group_event_count: "6 events",
      ci_meiwa_role: "Environmental Education Volunteer", ci_meiwa_period: "Jun 2018",
      ci_meiwa_t1: "Reverse logistics for EPS/styrofoam recycling (Movimento Viramais)",
      ci_meiwa_t2: "Circular-economy education",
      ci_bomjesus_role: "Volunteer", ci_bomjesus_period: "Mar&ndash;Nov 2024",
      ci_bomjesus_t1: "Visits to nursing homes, CMEIs/daycare centres and refugee-support centres",
      ci_bomjesus_t2: "Games and art workshops",
      ci_bomjesus_t3: "Donation drives",
      ci_pp_role: "Volunteer &mdash; &ldquo;Jovem Abra&ccedil;a Crian&ccedil;a&rdquo;", ci_pp_period: "Mar&ndash;Nov 2024",
      ci_pp_t1: "Recreational activities for hospitalised children and teens",
      ci_pp_t2: "Humanised support during hospital stays",
      ci_interact_role: "Projects Coordinator", ci_interact_period: "Aug&ndash;Nov 2024",
      ci_interact_t0: "Led the Projects team: partnership outreach and volunteer mobilization for community-impact initiatives",
      ci_interact_t1: "Tree-planting and river-cleanup initiatives (Distrito 4730)",
      ci_interact_t2: "Activities with children around the city",
      ci_interact_t3: "Handmade decorations and materials for club events",
      ci_ddm_role: "Events Coordinator", ci_ddm_period: "Since Mar 2026",
      ci_ddm_t1: "Plan and run events and talks on inclusion and women&rsquo;s participation on campus",
      ci_blood_h: "Blood Donor", ci_blood_role: "Recurring Donor", ci_blood_org: "CHC Biobanco / Hemobanco UFPR", ci_blood_period: "Since Mar 2026",
      ci_borboleta_role: "Design &amp; Visual Communication Volunteer", ci_borboleta_period: "Since Apr 2026",
      ci_borboleta_t1: "Visual identity and awareness pieces on menstrual dignity and intimate health",
      ci_borboleta_t2: "Translate health concepts into approachable visuals for kids, teens and the community",
      ci_teia_role: "Social Media Strategist", ci_teia_period: "Since Aug 2026",
      ci_teia_t1: "Build the editorial calendar",
      ci_teia_t2: "Write the content briefings",
      ci_teia_t3: "Track campaign performance to grow reach",
      ci_vf_org: "Diretoria da Mulher &mdash; PUCPR", ci_vf_period: "Jun 11, 2026",
      ci_vf_t1: "Project giving space to women&rsquo;s voices on campus.",
      ci_lce_org: "Diretoria da Mulher &mdash; PUCPR", ci_lce_period: "Aug 20, 2026",
      ci_lce_t1: "First edition of this gathering on women&rsquo;s literature and participation.",
      ci_dce_org: "SOMA (DCE) + Identidade Institucional PUCPR", ci_dce_period: "Aug 26, 2026",
      ci_dce_t1: "1st Student Relationship Gathering &mdash; team integration and strategic topics such as leadership, student protagonism and spirituality, through institutional presentations and guided activities.",
      ci_mp_h: "CAC Debate: 20 Years of the Lei Maria da Penha",
      ci_mp_org: "OAB Paran&aacute;", ci_mp_period: "Sep 1, 2026",
      ci_mp_t1: "With Fabiane Pieruccini (Desembargadora, TJ/PR), Maryah Salgado and Marina Jonsson (lawyers) &mdash; hosted by the Advocacia Iniciante, Estudos sobre Viol&ecirc;ncia de G&ecirc;nero, Advocacia Criminal and Mulheres Advogadas committees.",
      ci_mf_org: "1st edition", ci_mf_period: "Sep 6, 2026",
      ci_mf_t1: "Experienced the maker culture firsthand &mdash; collaboration, trial-and-error, building in community &mdash; and helped Prof. F&aacute;bio Garcez Bettio at his maker-space exhibit.",
      ci_hack_h: "Hackathon da Cidadania OAB/PR", ci_hack_org: "OAB Paran&aacute;", ci_hack_period: "Sep 11&ndash;13, 2026",
      ci_hack_t1: "Built AdversIA with a team, an assistant for family-law lawyers that reviews a case strategy as if it were the opposing side &mdash; surfacing contradictions, unproven claims and hard questions before they come up in a hearing.",
      ci_hack_t2: "Prototype scope: Direito de Fam&iacute;lia (divorce, asset division, alimony, custody), with an evidence plan and a hearing-simulation feature.",

      edu1_role: "Software Engineering", edu1_company: "PUCPR", edu1_period: "Since March 2026",
      xp1_role: "Software Development Intern",
      xp1_company: "Condo Consult &mdash; Garantidora de Condom&iacute;nios",
      xp1_period: "Since Apr 2026",
      xp1_lead: "Building, maintaining and supporting internal systems for the team, applying programming logic, problem-solving and agile routines in a corporate environment.",
      xp1_t1: "Development and maintenance of internal systems, including new modules, bug fixes and improvements",
      xp1_t2: "Back-end development with Python and FastAPI, front-end with Next.js and TypeScript, plus API creation and integration",
      xp1_t3: "Automation and ETL development, reducing manual tasks and making internal processes more efficient",
      xp1_t4: "Working with SQL Server, PostgreSQL and MongoDB databases &mdash; querying, cleaning and integrating data",
      xp1_t5: "Testing, deployment and troubleshooting, using Git, GitHub and Docker in a collaborative development environment",
      xp2_role: "Freelance Software Engineer",
      xp2_company: "Azevedo e Surkamp",
      xp2_period: "Since Jul 2026",
      xp2_lead: "Frontend, internal systems and development support.",
      xp2_t1: "Frontend and interface development &mdash; implementing new features, building and adjusting visual components, keeping the system functional, intuitive and easy to use",
      xp2_t2: "Supporting task direction, organizing demands and providing technical follow-up for the backend developer",
      xp2_t3: "Organizing and resolving support tickets, plus ongoing maintenance of the internal system",

      contact_h: "Contact",
      contact_line: "Have an idea? Let&rsquo;s build it together.",
      foot_credit: "Curated and organised with AI assistance (Claude Sonnet 5).",

      modal_todo: "Full image and a short note about this piece are being added."
    },

    pt: {
      skip: "Pular para o conte&uacute;do",
      nav_about: "Sobre", nav_work: "Arquivo", nav_playground: "Fora da IDE", nav_cv: "CV", nav_cv_aria: "CV (PDF, abre no Google Drive)", nav_contact: "Contato",

      datasus_lead: "Automa&ccedil;&atilde;o da coleta e do tratamento de registros de hemoterapia do Paran&aacute;, com visualiza&ccedil;&atilde;o em um painel interativo.",
      pm_hint: "abrir &nearr;",
      pm_project: "Projeto",
      tab_projects: "Projetos", tab_tech: "Tecnologias", tab_certs: "Aprendizado",
      folders_edition: "arquivo de trabalho",
      folders_bottom_hint: "Escolha uma aba para explorar.",
      peek_projects_cap: "Corrida para a Faculdade",
      peek_projects_diagram_cap: "do fluxo &agrave; solu&ccedil;&atilde;o",
      peek_tech_cap: "Luz da cidade",
      peek_certs_cap: "Python na Harve &middot; 2026",
      cover_projects_title: "Projetos<br><em>&amp; processos.</em>",
      cover_projects_meta: "AUTOMA&Ccedil;&Atilde;O &middot; WEB &middot; JOGOS &middot; IoT",
      cover_projects_cta: "Explorar projetos",
      cover_projects_count: "08 projetos",
      cover_tech_title: "Minhas<br><em>ferramentas.</em>",
      cover_tech_meta: "DO C&Oacute;DIGO &Agrave; COMPOSI&Ccedil;&Atilde;O",
      cover_tech_cta: "Ver ferramentas",
      cover_tech_count: "06 grupos",
      cover_certs_title: "Aprender,<br><em>registrar.</em>",
      cover_certs_meta: "CURSOS &middot; FORMA&Ccedil;&Atilde;O &middot; PARTICIPA&Ccedil;&Otilde;ES",
      cover_certs_cta: "Folhear registros",
      cover_certs_count: "05 registros",
      cover_certs_rubber: "EM CONSTANTE<span>constru&ccedil;&atilde;o</span>",
      gr_stamp_projects: "CURITIBA<br>BRASIL",
      gr_stamp_tech: "C&Oacute;DIGO<br>CRIA&Ccedil;&Atilde;O",
      gr_pager_prev: "&larr; Anterior",
      gr_pager_next: "Pr&oacute;ximo &rarr;",
      gr_stage_aria: "Arquivo de projetos, tecnologias e certificados",
      gr_folder_projects_aria: "Pasta de projetos",
      gr_folder_tech_aria: "Pasta de tecnologias",
      gr_folder_certs_aria: "Pasta de aprendizado e forma&ccedil;&atilde;o",
      gr_reader_aria: "Conte&uacute;do da pasta",
      reader_return: "&larr; Guardar na pasta",
      reader_pause_sub: "AUTORREGULA&Ccedil;&Atilde;O<br>&amp; ANSIEDADE",
      p1_cat: "Dados &amp; automa&ccedil;&atilde;o",
      tag_reqs: "an&aacute;lise de requisitos", tag_uxflows: "perfis de usu&aacute;rio", tag_team: "projeto em equipe",
      tag_embedded: "C embarcado", tag_sens: "sensores",
      dg_h: "Doggo", dg_cat: "IoT",
      dg_date: "Projeto acad&ecirc;mico em equipe &middot; ESP32 &middot; em desenvolvimento",
      dg_sub: "Sistema IoT embarcado em ESP32 para automa&ccedil;&atilde;o de pet shop / canil",
      dg_lead: "Um ESP32 como servidor HTTP para uma esta&ccedil;&atilde;o de pets &mdash; acompanha a temperatura da &aacute;gua, dosa a ra&ccedil;&atilde;o por peso e liga a fonte, por uma p&aacute;gina web e uma pequena API REST.",
      dg_body:
        "<h4>A ideia</h4>" +
        "<p>Um ESP32 roda como servidor HTTP na rede local e serve a pr&oacute;pria p&aacute;gina web para monitorar e controlar uma esta&ccedil;&atilde;o de cuidado de pets &mdash; uma fonte de &aacute;gua e um dispenser de ra&ccedil;&atilde;o.</p>" +
        "<h4>Hardware</h4>" +
        "<ul>" +
        "<li><strong>Sensores</strong> &mdash; uma c&eacute;lula de carga de 1&nbsp;kg com m&oacute;dulo HX711 para o peso da ra&ccedil;&atilde;o na tigela, e um DS18B20 &agrave; prova d&rsquo;&aacute;gua para a temperatura da &aacute;gua.</li>" +
        "<li><strong>Atuadores</strong> &mdash; um servo SG90 que abre o dispenser at&eacute; atingir um peso alvo, e um rel&ecirc; de 5&nbsp;V que liga e desliga a fonte de &aacute;gua.</li>" +
        "</ul>" +
        "<h4>A interface web</h4>" +
        "<p>A p&aacute;gina mostra o peso e a temperatura da &aacute;gua em tempo real e permite iniciar uma dosagem at&eacute; um n&uacute;mero de gramas ou ligar/desligar a fonte. As mesmas a&ccedil;&otilde;es ficam dispon&iacute;veis como uma pequena API REST para outros clientes.</p>" +
        "<h4>Confiabilidade</h4>" +
        "<p>A placa reconecta ao Wi-Fi sozinha; os eventos s&atilde;o carimbados com data e hora reais de um servidor de tempo p&uacute;blico e gravados na mem&oacute;ria flash interna em linhas <code>[INFO]</code> / <code>[AVISO]</code> / <code>[ERRO]</code>, ent&atilde;o o log sobrevive a uma reinicializa&ccedil;&atilde;o.</p>" +
        "<h4>Est&aacute;gio atual</h4>" +
        "<p>Projeto de disciplina, na fase de projeto: a especifica&ccedil;&atilde;o t&eacute;cnica &mdash; protocolos, hardware, endpoints e logging &mdash; est&aacute; no reposit&oacute;rio. Firmware em andamento.</p>",
      mk_h: "MKpause", mk_cat: "Produto",
      mk_date: "Projeto acad&ecirc;mico em equipe &middot; PUCPR &middot; em desenvolvimento",
      mk_sub: "Plataforma de autorregula&ccedil;&atilde;o e acompanhamento psicol&oacute;gico",
      mk_lead: "Uma plataforma para apoiar a autorregula&ccedil;&atilde;o emocional de adolescentes na escola &mdash; registro de humor, atividades guiadas e um canal para pedir ajuda.",
      mk_body:
        "<h4>O contexto</h4>" +
        "<p>Adolescentes no ambiente escolar nem sempre t&ecirc;m um caminho claro para pedir ajuda ou para acompanhar o pr&oacute;prio estado emocional. O MKpause prop&otilde;e uma ferramenta que apoia a autorregula&ccedil;&atilde;o e liga aluno, professor e psic&oacute;logo &mdash; respeitando o que cada perfil pode ver.</p>" +
        "<h4>A proposta</h4>" +
        "<ul>" +
        "<li><strong>Autorregula&ccedil;&atilde;o</strong> &mdash; atividades, jogos e v&iacute;deos que o aluno acessa por conta pr&oacute;pria.</li>" +
        "<li><strong>Registro de humor</strong> &mdash; o estado emocional antes e depois de cada sess&atilde;o, com data, hor&aacute;rio, n&iacute;vel e dura&ccedil;&atilde;o.</li>" +
        "<li><strong>Pedir ajuda</strong> &mdash; um alerta para sair da sala e uma solicita&ccedil;&atilde;o de aux&iacute;lio a um profissional da escola.</li>" +
        "<li><strong>Acompanhamento</strong> &mdash; professor e psic&oacute;logo consultam hist&oacute;rico, humor e observa&ccedil;&otilde;es, cada um dentro das suas permiss&otilde;es.</li>" +
        "</ul>" +
        "<h4>Perfis</h4>" +
        "<p>Quatro perfis com regras pr&oacute;prias: aluno, psic&oacute;logo, professor / psic&oacute;logo escolar e administrador.</p>" +
        "<h4>Minha contribui&ccedil;&atilde;o</h4>" +
        "<p>Criei o nome do projeto e atuo no seu desenvolvimento, junto com a equipe.</p>" +
        "<h4>Est&aacute;gio atual</h4>" +
        "<p>A fase de an&aacute;lise &mdash; documento de vis&atilde;o, perfis de usu&aacute;rio e requisitos funcionais por perfil &mdash; est&aacute; reunida no reposit&oacute;rio. A implementa&ccedil;&atilde;o ainda n&atilde;o come&ccedil;ou.</p>",
      tech_lead: "Uma vis&atilde;o organizada das ferramentas e linguagens com que trabalho.",
      tech_da_h: "Dados &amp; automa&ccedil;&atilde;o", tech_dw_h: "Desenvolvimento web", tech_cv_h: "Cria&ccedil;&atilde;o visual", tech_tools_h: "Ferramentas de trabalho",
      tech_method_h: "M&eacute;todos de trabalho", tech_spoken_h: "Idiomas",
      tech_pm: "gest&atilde;o de projetos",
      tech_pt: "Portugu&ecirc;s &mdash; nativo", tech_en: "Ingl&ecirc;s &mdash; fluente", tech_fr: "Franc&ecirc;s &mdash; b&aacute;sico",
      cert_degree_h: "Engenharia de Software", cert_degree_d: "Bacharelado em curso na PUCPR, Curitiba.",
      cert_dio_h: "Fundamentos de Engenharia de Dados e Machine Learning", cert_dio_d: "Curso na DIO &mdash; mar 2026.",
      cert_hotmilk_h: "Problem Solving com IA &mdash; palestra", cert_hotmilk_d: "HOTMILK, Ecossistema de Inova&ccedil;&atilde;o PUCPR &mdash; mar 2026.",
      cert_harve_h: "Programa&ccedil;&atilde;o em Python", cert_harve_d: "Curso na Escola Harve, Curitiba &mdash; jan&ndash;abr 2026.",
      cert_ficem_h: "Inicia&ccedil;&atilde;o cient&iacute;fica &mdash; FICEM", cert_ficem_d: "Projeto de pesquisa para a feira cient&iacute;fica no Col&eacute;gio Bom Jesus.",
      cert_vgc_h: "Imers&atilde;o em ingl&ecirc;s &mdash; Winter Camp", cert_vgc_d: "VGC International College, Canad&aacute; &mdash; jan 2024.",
      cert_met_h: "MET &mdash; Michigan English Test", cert_met_d: "Michigan Language Assessment &mdash; fev 2023.",
      corrida_lead: "Um estudante atrasado enfrenta obst&aacute;culos pela cidade &mdash; o desafio &eacute; administrar as tr&ecirc;s vidas e chegar &agrave; meta antes de perder a partida.",
      pibble_lead: "Uma aplica&ccedil;&atilde;o para organizar clientes, produtos, funcion&aacute;rios e entregas em um mesmo sistema.",
      p1_date: "Projeto em equipe &middot; Harve &middot; abr 2026",
      p2_date: "Projeto individual &middot; acad&ecirc;mico &middot; jun 2026",
      p3_date: "Projeto acad&ecirc;mico em equipe &middot; jun 2026",
      nav_home: "In&iacute;cio",
      pg_prev: "P&aacute;gina anterior", pg_next: "Pr&oacute;xima p&aacute;gina",
      cat_photo: "Fotografia",
      cat_kitchen: "Na cozinha",
      cat_digitalart: "Arte digital",
      cat_graphicdesign: "Design gr&aacute;fico",
      pg_sunset: "P&ocirc;r do sol",
      pg_zucchini: "Nhoque de abobrinha",
      pg_citylight: "Luz da cidade",
      pg_nave: "Nave da catedral",
      pg_potroast: "Carne assada de panela",
      pg_challah: "P&atilde;o challah",
      pg_tart: "Torta de caramelo e chocolate",
      pg_pitabread: "P&atilde;o pita",
      pg_carrotcake: "Bolo de cenoura",
      pg_chickenpie: "Torta cremosa de frango",
      pg_ryeloaves: "P&atilde;es de centeio",
      pg_rosemarysteak: "Bife com alecrim",
      pg_olivebaguette: "Baguete de azeitona",
      pg_hotchococake: "Bolo quente de chocolate",
      pg_orangecake: "Bolo de laranja",
      p1_sub: "Pipeline de automa&ccedil;&atilde;o e an&aacute;lise de dados de hemoterapia do SUS",
      p2_sub: "Runner 2D em Python e Pygame",
      p3_sub: "Sistema web de gest&atilde;o de entregas",
      flood_sub: "Prot&oacute;tipo IoT de monitoramento de n&iacute;vel e alertas",
      bpmn_sub: "Modelagem de processos de neg&oacute;cio em BPMN",
      bpmn_link: "Ver manual e diagramas &nearr;",
      work_sub: "O que constru&iacute;, como pensei e o que aprendi.",
      coffee_ig: "@coffeecodepucpr &nearr;",
      iot_cap1: "Circuito montado em simulador: ESP32 com sensor ultrass&ocirc;nico HC-SR04 e buzzer.",
      iot_cap2: "Configura&ccedil;&atilde;o do painel no Blynk, com indicadores e sinaliza&ccedil;&atilde;o de alerta (modo de edi&ccedil;&atilde;o).",
      home_greet: "Ol&aacute;, eu sou a",
      home_tag_a: "Engenharia de Software",
      home_tag_b: "Coffee &amp; Code &mdash; fundadora",
      home_tag_c: "Curitiba, Brasil",
      home_ios_quote: "&ldquo;Construo onde c&oacute;digo, design e pessoas se encontram.&rdquo;",
      home_line: "<em>C&oacute;digo, design &amp; pessoas</em> &mdash; construo onde eles se encontram.",
      ph_portrait: "retrato &mdash; imagem pendente",
      about_kicker: "Minha trajet&oacute;ria",
      p4_date: "Projeto acad&ecirc;mico em equipe &middot; jun 2026", p5_date: "Projeto em equipe &middot; jun 2026",
      flood_h: "Monitor de Bueiros",
      flood_lead: "Uma proposta de monitoramento remoto para acompanhar n&iacute;veis e sinalizar situa&ccedil;&otilde;es que precisam de aten&ccedil;&atilde;o na drenagem urbana.",
      bpmn_h: "Cl&iacute;nica Veterin&aacute;ria",
      bpmn_lead: "Da conversa com a gest&atilde;o aos diagramas: organiza&ccedil;&atilde;o visual dos processos de uma cl&iacute;nica veterin&aacute;ria.",
      tag_sensors: "sensor ultrass&ocirc;nico", tag_web: "web", tag_alerts: "alertas",
      bpmn_role: "Equipe de cinco: Ana Beatriz Patussi Reolon, Ana Clara Ernandes Nogueira, Emelize Bonfim Mlot, Giovanna Ribas dos Reis, Ot&aacute;vio Brito Fonseca.",
      tag_analysis: "an&aacute;lise de processos", tag_diagrams: "diagramas",
      stack_more: "Para mais projetos, visite o meu GitHub &rarr;",

      p1_body:
        "<h4>O desafio</h4>" +
        "<p>Consultar diferentes per&iacute;odos no DATASUS TabNet exige repetir etapas em formul&aacute;rios e reunir os resultados. O desafio foi automatizar esse trabalho e organizar os dados para compara&ccedil;&atilde;o ao longo do tempo.</p>" +
        "<h4>A solu&ccedil;&atilde;o</h4>" +
        "<p>Um fluxo em Python que consulta a Produ&ccedil;&atilde;o Ambulatorial do SUS, extrai registros de hemoterapia do Paran&aacute;, trata os arquivos e apresenta os resultados em um dashboard.</p>" +
        "<ul>" +
        "<li><strong>Extra&ccedil;&atilde;o automatizada</strong> &mdash; navega&ccedil;&atilde;o com Selenium e leitura das tabelas com pandas, usando BeautifulSoup como alternativa de leitura do HTML.</li>" +
        "<li><strong>Consultas em paralelo</strong> &mdash; execu&ccedil;&atilde;o com at&eacute; tr&ecirc;s processos e in&iacute;cio escalonado das primeiras tarefas.</li>" +
        "<li><strong>Retomada da coleta</strong> &mdash; verifica&ccedil;&atilde;o dos arquivos j&aacute; existentes por per&iacute;odo, para evitar repetir downloads ao executar de novo.</li>" +
        "<li><strong>Tratamento e visualiza&ccedil;&atilde;o</strong> &mdash; remo&ccedil;&atilde;o de linhas de totaliza&ccedil;&atilde;o e campos vazios, padroniza&ccedil;&atilde;o de nomes de colunas e dashboard em Streamlit para compara&ccedil;&otilde;es mensais e anuais.</li>" +
        "</ul>" +
        "<h4>Minha contribui&ccedil;&atilde;o</h4>" +
        "<p>Propus o tema e a solu&ccedil;&atilde;o de automa&ccedil;&atilde;o e fui respons&aacute;vel pela arquitetura e pelos m&oacute;dulos de extra&ccedil;&atilde;o e tratamento dos dados. O trabalho foi integrado &agrave;s entregas do restante da equipe em orquestra&ccedil;&atilde;o, execu&ccedil;&atilde;o paralela e dashboard.</p>" +
        "<h4>Decis&otilde;es e processo</h4>" +
        "<p>Identificar cada campo do formul&aacute;rio por um marcador est&aacute;vel, porque os r&oacute;tulos internos do TabNet v&ecirc;m com acento e mudam de p&aacute;gina para p&aacute;gina; esperar a p&aacute;gina responder antes de cada passo, j&aacute; que o servidor &eacute; lento e irregular; e detectar quando uma nova aba do navegador abriu, em vez de assumir que ela abre sempre na mesma ordem.</p>" +
        "<h4>Resultado e evid&ecirc;ncias</h4>" +
        "<p>O reposit&oacute;rio re&uacute;ne a extra&ccedil;&atilde;o por per&iacute;odo, o processamento em lote, o tratamento dos arquivos e o painel. A m&eacute;trica apresentada &eacute; a quantidade aprovada de procedimentos de hemoterapia registrados no SUS, no recorte consultado &mdash; um indicador relacionado a, mas diferente de, doa&ccedil;&otilde;es de sangue.</p>" +
        "<h4>O que aprendi</h4>" +
        "<p>O fluxo foi feito para ser reexecutado: pula os per&iacute;odos j&aacute; baixados, ent&atilde;o uma coleta interrompida continua de onde parou. Estend&ecirc;-lo a outras bases do TabNet seria, no essencial, mapear novos campos.</p>",

      p2_body:
        "<h4>Vis&atilde;o geral</h4>" +
        "<p>Um jogo 2D em Python e Pygame, com obst&aacute;culos, dificuldade progressiva e uma condi&ccedil;&atilde;o de vit&oacute;ria ao alcan&ccedil;ar 1.000 pontos.</p>" +
        "<h4>Como constru&iacute;</h4>" +
        "<ul>" +
        "<li><strong>Estados do jogo</strong> &mdash; o fluxo entre menu, partida e encerramento por vit&oacute;ria ou derrota, escrito &agrave; m&atilde;o.</li>" +
        "<li><strong>Movimento e colis&otilde;es</strong> &mdash; pulo com gravidade e um per&iacute;odo de invencibilidade ap&oacute;s sofrer dano.</li>" +
        "<li><strong>Dificuldade progressiva</strong> &mdash; a velocidade aumenta a cada 100 pontos, at&eacute; um limite, e o intervalo entre obst&aacute;culos diminui com a pontua&ccedil;&atilde;o. Um estilo endless runner, mas com meta de vit&oacute;ria.</li>" +
        "<li><strong>Continuidade sem imagens</strong> &mdash; quando um recurso visual n&atilde;o &eacute; encontrado, o jogo usa formas simples para continuar funcionando.</li>" +
        "<li><strong>Feedback e recordes</strong> &mdash; a interface mostra vidas, pontua&ccedil;&atilde;o e progresso at&eacute; a meta; o recorde fica salvo localmente.</li>" +
        "</ul>" +
        "<h4>Minha contribui&ccedil;&atilde;o e recursos visuais</h4>" +
        "<p>Desenvolvi o c&oacute;digo e a l&oacute;gica do jogo. Os recursos visuais foram gerados com aux&iacute;lio do ChatGPT e integrados ao projeto.</p>" +
        "<h4>Decis&otilde;es e processo</h4>" +
        "<p>Uma m&aacute;quina de estados escrita &agrave; m&atilde;o em vez de um framework, para manter todo o loop &agrave; vista; a dificuldade ajustada por dois par&acirc;metros &mdash; a velocidade subindo a cada 100 pontos at&eacute; um teto e o intervalo entre obst&aacute;culos diminuindo com a pontua&ccedil;&atilde;o; uma queda para formas simples quando falta um arquivo de arte, para que um asset quebrado nunca trave o jogo.</p>" +
        "<h4>O que aprendi</h4>" +
        "<p>Manter os estados expl&iacute;citos deixou as condi&ccedil;&otilde;es de vit&oacute;ria/derrota e o HUD f&aacute;ceis de acompanhar; a mesma estrutura levaria um segundo n&iacute;vel ou uma tela de pausa com pouca mudan&ccedil;a.</p>",

      p3_body:
        "<h4>Vis&atilde;o geral</h4>" +
        "<p>Em equipe, desenvolvemos uma aplica&ccedil;&atilde;o em Django para representar a opera&ccedil;&atilde;o de uma empresa fict&iacute;cia de log&iacute;stica. O sistema re&uacute;ne cadastros, autentica&ccedil;&atilde;o, um painel administrativo e uma API com Django REST Framework.</p>" +
        "<h4>Estrutura do projeto</h4>" +
        "<ul>" +
        "<li><strong>M&oacute;dulos integrados</strong> &mdash; clientes, produtos, funcion&aacute;rios e entregas.</li>" +
        "<li><strong>Usu&aacute;rios e perfis</strong> &mdash; associa&ccedil;&atilde;o entre o funcion&aacute;rio e a conta de acesso, com perfis administrativo e operacional.</li>" +
        "<li><strong>API</strong> &mdash; uma API REST que exp&otilde;e os quatro recursos centrais para integra&ccedil;&atilde;o.</li>" +
        "<li><strong>Interface</strong> &mdash; formul&aacute;rios, m&aacute;scaras de entrada e painel com informa&ccedil;&otilde;es da opera&ccedil;&atilde;o.</li>" +
        "</ul>" +
        "<h4>Minha contribui&ccedil;&atilde;o</h4>" +
        "<p>Desenvolvi o m&oacute;dulo de funcion&aacute;rios e sua integra&ccedil;&atilde;o com entregas. Tamb&eacute;m constru&iacute; o painel administrativo, trabalhei nas m&aacute;scaras de entrada e na padroniza&ccedil;&atilde;o visual dos formul&aacute;rios e organizei o fluxo de logout entre as &aacute;reas do sistema.</p>" +
        "<h4>Decis&otilde;es e processo</h4>" +
        "<p>Ligar cada funcion&aacute;rio a uma conta de acesso por uma rela&ccedil;&atilde;o um-para-um, com um perfil administrativo e um operacional; padronizar os formul&aacute;rios dos quatro m&oacute;dulos e o fluxo de logout para o sistema se comportar igual em todo lugar; m&aacute;scaras de entrada no cliente para os campos de cadastro.</p>" +
        "<h4>Evid&ecirc;ncias</h4>" +
        "<p>O reposit&oacute;rio re&uacute;ne o c&oacute;digo, a documenta&ccedil;&atilde;o e capturas do painel e do m&oacute;dulo de funcion&aacute;rios.</p>" +
        "<h4>O que aprendi</h4>" +
        "<p>Trabalhar numa base de c&oacute;digo compartilhada com a equipe exigiu combinar conven&ccedil;&otilde;es cedo &mdash; nomes de campos, onde fica a valida&ccedil;&atilde;o, como os m&oacute;dulos conversam entre si.</p>",

      p4_body:
        "<h4>O desafio</h4>" +
        "<p>Um bueiro obstru&iacute;do pode contribuir para o alagamento de uma via. O projeto explora como sensores e visualiza&ccedil;&atilde;o remota podem apoiar o acompanhamento dessas condi&ccedil;&otilde;es.</p>" +
        "<h4>A proposta t&eacute;cnica</h4>" +
        "<p>Feito em equipe e desenvolvido inteiramente em simula&ccedil;&atilde;o: um ESP32 com sensor ultrass&ocirc;nico montado em um simulador de circuito e um painel Blynk para representar o monitoramento e seus alertas. Nada foi montado ou instalado fisicamente.</p>" +
        "<ul>" +
        "<li><strong>Leitura de dist&acirc;ncia</strong> &mdash; um sensor ultrass&ocirc;nico (HC-SR04) fornece uma medida de dist&acirc;ncia que faz as vezes de n&iacute;vel, a partir de uma refer&ecirc;ncia definida no modelo.</li>" +
        "<li><strong>Visualiza&ccedil;&atilde;o remota</strong> &mdash; um painel Blynk re&uacute;ne os indicadores dos valores simulados.</li>" +
        "<li><strong>Sinaliza&ccedil;&atilde;o</strong> &mdash; o projeto prev&ecirc; um buzzer e indicadores digitais para comunicar a ultrapassagem de um limite configurado.</li>" +
        "</ul>" +
        "<h4>Decis&otilde;es e processo</h4>" +
        "<p>Usar a leitura ultrass&ocirc;nica de dist&acirc;ncia como indicador de qu&atilde;o cheio um bueiro est&aacute;, em vez de tentar medir vaz&atilde;o ou volume; um limite configur&aacute;vel por ponto monitorado; manter tudo em simula&ccedil;&atilde;o para testar a l&oacute;gica e o painel antes de qualquer hardware.</p>" +
        "<h4>Evid&ecirc;ncias do desenvolvimento</h4>" +
        "<p>Um esquema de circuito e uma captura do painel Blynk em modo de edi&ccedil;&atilde;o &mdash; um modelo e uma interface, n&atilde;o fotos de uma montagem f&iacute;sica. Uma implanta&ccedil;&atilde;o real na rua &mdash; case, alimenta&ccedil;&atilde;o, calibra&ccedil;&atilde;o, escala &mdash; seria uma etapa &agrave; parte.</p>",

      p5_body:
        "<h4>O contexto</h4>" +
        "<p>Em equipe, analisamos os processos de uma cl&iacute;nica veterin&aacute;ria real, preservando sua identifica&ccedil;&atilde;o. O objetivo foi compreender como as atividades acontecem, registrar responsabilidades e tornar os fluxos mais claros para an&aacute;lise.</p>" +
        "<h4>O que desenvolvemos</h4>" +
        "<ul>" +
        "<li><strong>Tr&ecirc;s processos centrais</strong> &mdash; gerenciamento de consultas, controle de estoque e gest&atilde;o de pessoas.</li>" +
        "<li><strong>Subprocessos</strong> &mdash; detalhamento de rotinas como cadastro de clientes e checkout/pagamento.</li>" +
        "<li><strong>Responsabilidades e decis&otilde;es</strong> &mdash; atividades representadas por raias de responsabilidades, com pontos de decis&atilde;o e passagem do trabalho entre respons&aacute;veis.</li>" +
        "<li><strong>Documenta&ccedil;&atilde;o</strong> &mdash; diagramas em BPMN no Bizagi Modeler, reunidos no manual do processo.</li>" +
        "</ul>" +
        "<h4>Minha contribui&ccedil;&atilde;o</h4>" +
        "<p>Realizei entrevistas com a gest&atilde;o para levantar as rotinas e as regras do neg&oacute;cio e trabalhei na transforma&ccedil;&atilde;o dessas informa&ccedil;&otilde;es em diagramas BPMN &mdash; organizando atividades, eventos, decis&otilde;es e responsabilidades.</p>" +
        "<h4>Decis&otilde;es e processo</h4>" +
        "<p>Escolher tr&ecirc;s processos centrais para modelar de ponta a ponta &mdash; consultas, estoque e pessoas &mdash; com cadastro de cliente e pagamento separados como subprocessos; dispor as atividades em raias de responsabilidades para cada passo ter um respons&aacute;vel claro e as passagens ficarem vis&iacute;veis; construir a partir das entrevistas, e n&atilde;o de suposi&ccedil;&otilde;es.</p>" +
        "<h4>Resultado e evid&ecirc;ncias</h4>" +
        "<p>O trabalho resultou na documenta&ccedil;&atilde;o dos processos estudados, que pode servir de base para discutir oportunidades de melhoria.</p>" +
        "<h4>O que aprendi</h4>" +
        "<p>O valor esteve na pr&oacute;pria documenta&ccedil;&atilde;o: uma vis&atilde;o comum que a cl&iacute;nica pode usar para enxergar onde um processo poderia ser simplificado.</p>",

      now_h: "Atualmente",
      story_p1: "Desde pequena, tive facilidade com o mundo digital. Em 2020, essa curiosidade ganhou uma dire&ccedil;&atilde;o na ilustra&ccedil;&atilde;o — consumia refer&ecirc;ncias, publicava meus desenhos e pensava em arte conceitual para jogos. A press&atilde;o para melhorar acabou custando o prazer de desenhar, e dei um passo atr&aacute;s por um tempo.",
      story_p2: "Encontrei uma forma mais leve de criar no design gr&aacute;fico e digital, principalmente em apresenta&ccedil;&otilde;es escolares — o que me levou &agrave; FICEM 2024, onde propus e ajudei a produzir um trabalho sobre a ci&ecirc;ncia dos sonhos. Ao mesmo tempo, outra vontade continuava presente: o inc&ocirc;modo com dificuldades nos softwares que usava, e a vontade de entender e resolver isso por conta pr&oacute;pria.",
      story_p3: "Em 2025 tive meu primeiro contato com programa&ccedil;&atilde;o, atrav&eacute;s de Java. No ano seguinte, continuei com Python na Escola de Tecnologia Harve e comecei Engenharia de Software na PUCPR — trazendo para a forma como construo software hoje a aten&ccedil;&atilde;o &agrave; forma e &agrave; comunica&ccedil;&atilde;o que desenvolvi atrav&eacute;s do desenho e do design.",
      work_h: "Arquivo",
      work_intro: "Software, dados, um jogo, uma comunidade. Linguagens diferentes para o mesmo h&aacute;bito — fazer coisas.",

      tag_states: "m&aacute;quina de estados",
      tag_auth: "autentica&ccedil;&atilde;o",

      coffee_why: "Um clube universit&aacute;rio de tecnologia que criei e toco com uma equipe de amigos.",
      coffee_p1: "Um espa&ccedil;o para estudar tecnologia junto, compartilhar d&uacute;vidas e colocar ideias em pr&aacute;tica, no ritmo de cada um. Desenvolvo a identidade visual, escrevo os materiais de estudo e trabalho com a equipe na organiza&ccedil;&atilde;o.",
      coffee_proposal: "&#8220;Quero que o Coffee &amp; Code seja um lugar em que as pessoas n&atilde;o sintam medo de errar e encontrem companhia para tentar de novo.&#8221;",

      creative_h: "Fora da IDE",
      creative_intro: "Tudo que eu fa&ccedil;o fora do editor de c&oacute;digo &mdash; design, ilustra&ccedil;&atilde;o, desenho, fotografia, coisas que eu asso.",
      gal_grid: "Pe&ccedil;as criativas", gal_prev: "Rolar para a esquerda", gal_next: "Rolar para a direita",
      pf_all: "Todos",
      pf_design: "Design gr&aacute;fico",
      pf_illustration: "Ilustra&ccedil;&atilde;o digital",
      pf_traditional: "Desenho tradicional",
      pf_photo: "Fotografia",
      pf_kitchen: "Na cozinha",
      pf_community: "Voluntariado &amp; eventos",
      pg_ink: "Estudo digital <i>Estudos de personagem</i>",
      pg_pencil: "Estudo a l&aacute;pis <i>Tradicional</i>",
      pg_borboleta: "Campanha de conscientiza&ccedil;&atilde;o <i>Design gr&aacute;fico</i>",
      pg_photo: "Fotografia <i>Fotografia</i>",
      pg_kitchen: "Feito por mim <i>Na cozinha</i>",
      pg_vol: "Voluntariado &amp; eventos <i>Comunidade</i>",
      cta_behance: "Behance &rarr;",
      cta_vsco: "VSCO &rarr;",
      cta_github: "Mais projetos no GitHub &rarr;",

      community_h: "Comunidade &amp; impacto social",
      community_lead: "Construir com pessoas — um papel diferente, em um lugar diferente, sempre.",
      group_community_aria: "Abrir pap&eacute;is na comunidade", group_event_aria: "Abrir eventos",
      group_community_cap: "Comunidade", group_community_count: "8 pap&eacute;is",
      group_event_cap: "Eventos", group_event_count: "6 eventos",
      ci_meiwa_role: "Volunt&aacute;ria de Educa&ccedil;&atilde;o Ambiental", ci_meiwa_period: "jun 2018",
      ci_meiwa_t1: "Log&iacute;stica reversa de reciclagem do EPS/isopor (Movimento Viramais)",
      ci_meiwa_t2: "Educa&ccedil;&atilde;o em economia circular",
      ci_bomjesus_role: "Volunt&aacute;ria", ci_bomjesus_period: "Mar&ndash;nov 2024",
      ci_bomjesus_t1: "Visitas a asilos, CMEIs/creches e centros de apoio a refugiados",
      ci_bomjesus_t2: "Gincanas e oficinas de arte",
      ci_bomjesus_t3: "Campanhas de doa&ccedil;&atilde;o",
      ci_pp_role: "Volunt&aacute;ria &mdash; &ldquo;Jovem Abra&ccedil;a Crian&ccedil;a&rdquo;", ci_pp_period: "Mar&ndash;nov 2024",
      ci_pp_t1: "Atividades recreativas para crian&ccedil;as e adolescentes internados",
      ci_pp_t2: "Apoio humanizado durante a interna&ccedil;&atilde;o",
      ci_interact_role: "Coordenadora de Projetos", ci_interact_period: "Ago&ndash;nov 2024",
      ci_interact_t0: "Liderei a equipe de Projetos: prospec&ccedil;&atilde;o de parcerias e mobiliza&ccedil;&atilde;o de volunt&aacute;rios para a&ccedil;&otilde;es de impacto comunit&aacute;rio",
      ci_interact_t1: "Plantio de &aacute;rvores e limpeza de rio (Distrito 4730)",
      ci_interact_t2: "Atividades com crian&ccedil;as pela cidade",
      ci_interact_t3: "Confec&ccedil;&atilde;o de decora&ccedil;&otilde;es e materiais artesanais para eventos do clube",
      ci_ddm_role: "Coordenadora de Eventos", ci_ddm_period: "Desde mar 2026",
      ci_ddm_t1: "Planejo e conduzo eventos e palestras sobre inclus&atilde;o e participa&ccedil;&atilde;o das mulheres no ambiente acad&ecirc;mico",
      ci_blood_h: "Doadora de Sangue", ci_blood_role: "Doadora Recorrente", ci_blood_org: "CHC Biobanco / Hemobanco UFPR", ci_blood_period: "Desde mar 2026",
      ci_borboleta_role: "Volunt&aacute;ria de Design e Comunica&ccedil;&atilde;o Visual", ci_borboleta_period: "Desde abr 2026",
      ci_borboleta_t1: "Identidade visual e pe&ccedil;as de conscientiza&ccedil;&atilde;o sobre dignidade menstrual e sa&uacute;de &iacute;ntima",
      ci_borboleta_t2: "Traduzo conceitos de sa&uacute;de em linguagem visual acess&iacute;vel para crian&ccedil;as, adolescentes e a comunidade",
      ci_teia_role: "Estrategista de M&iacute;dias Sociais", ci_teia_period: "Desde ago 2026",
      ci_teia_t1: "Monto o cronograma editorial",
      ci_teia_t2: "Escrevo os briefings de conte&uacute;do",
      ci_teia_t3: "Acompanho o desempenho das campanhas para ampliar o alcance",
      ci_vf_org: "Diretoria da Mulher &mdash; PUCPR", ci_vf_period: "11 de jun de 2026",
      ci_vf_t1: "Projeto que d&aacute; espa&ccedil;o &agrave;s vozes femininas no ambiente acad&ecirc;mico.",
      ci_lce_org: "Diretoria da Mulher &mdash; PUCPR", ci_lce_period: "20 de ago de 2026",
      ci_lce_t1: "Primeira edi&ccedil;&atilde;o desse encontro sobre literatura e participa&ccedil;&atilde;o das mulheres.",
      ci_dce_org: "Gest&atilde;o SOMA (DCE) + Identidade Institucional PUCPR", ci_dce_period: "26 de ago de 2026",
      ci_dce_t1: "1&ordm; Encontro do Relacionamento Estudantil &mdash; integra&ccedil;&atilde;o entre as equipes e aprofundamento em pautas estrat&eacute;gicas como lideran&ccedil;a, protagonismo estudantil e espiritualidade, por meio de apresenta&ccedil;&otilde;es institucionais e din&acirc;micas direcionadas.",
      ci_mp_h: "CAC Debate: 20 Anos da Lei Maria da Penha",
      ci_mp_org: "OAB Paran&aacute;", ci_mp_period: "1 de set de 2026",
      ci_mp_t1: "Com Fabiane Pieruccini (Desembargadora do TJ/PR), Maryah Salgado e Marina Jonsson (advogadas) &mdash; promovido pelas Comiss&otilde;es da Advocacia Iniciante, de Estudos sobre Viol&ecirc;ncia de G&ecirc;nero, de Advocacia Criminal e das Mulheres Advogadas.",
      ci_mf_org: "1&ordf; edi&ccedil;&atilde;o", ci_mf_period: "6 de set de 2026",
      ci_mf_t1: "Vivenciei a cultura maker ao vivo &mdash; colabora&ccedil;&atilde;o, tentativa e erro, construir em comunidade &mdash; e ajudei o professor F&aacute;bio Garcez Bettio na exposi&ccedil;&atilde;o do seu espa&ccedil;o maker.",
      ci_hack_h: "Hackathon da Cidadania OAB/PR", ci_hack_org: "OAB Paran&aacute;", ci_hack_period: "11&ndash;13 de set de 2026",
      ci_hack_t1: "Construí a AdversIA com uma equipe, um assistente para advogados de fam&iacute;lia que revisa a estrat&eacute;gia do caso como se fosse a parte contr&aacute;ria &mdash; mostrando contradi&ccedil;&otilde;es, alega&ccedil;&otilde;es sem prova e perguntas dif&iacute;ceis antes que apare&ccedil;am na audi&ecirc;ncia.",
      ci_hack_t2: "Escopo do prot&oacute;tipo: Direito de Fam&iacute;lia (div&oacute;rcio, partilha de bens, pens&atilde;o aliment&iacute;cia, guarda), com plano de provas e simula&ccedil;&atilde;o de audi&ecirc;ncia.",

      edu1_role: "Engenharia de Software", edu1_company: "PUCPR", edu1_period: "Desde março de 2026",
      xp1_role: "Estagi&aacute;ria de Desenvolvimento de Software",
      xp1_company: "Condo Consult &mdash; Garantidora de Condom&iacute;nios",
      xp1_period: "Desde abr. 2026",
      xp1_lead: "Atua&ccedil;&atilde;o no desenvolvimento, manuten&ccedil;&atilde;o e suporte dos sistemas internos para a equipe, aplicando l&oacute;gica de programa&ccedil;&atilde;o, resolu&ccedil;&atilde;o de problemas e rotinas de gest&atilde;o &aacute;gil no ambiente corporativo.",
      xp1_t1: "Desenvolvimento e manuten&ccedil;&atilde;o de sistemas internos, incluindo cria&ccedil;&atilde;o de novos m&oacute;dulos, corre&ccedil;&atilde;o de bugs e implementa&ccedil;&atilde;o de melhorias",
      xp1_t2: "Desenvolvimento de solu&ccedil;&otilde;es back-end com Python e FastAPI, front-end com Next.js e TypeScript, al&eacute;m da cria&ccedil;&atilde;o e integra&ccedil;&atilde;o de APIs",
      xp1_t3: "Desenvolvimento de automa&ccedil;&otilde;es e processos de ETL, reduzindo tarefas manuais e tornando processos internos mais eficientes",
      xp1_t4: "Atua&ccedil;&atilde;o com bancos de dados SQL Server, PostgreSQL e MongoDB, incluindo consultas, tratamento e integra&ccedil;&atilde;o de dados",
      xp1_t5: "Participa&ccedil;&atilde;o em testes, deploy e resolu&ccedil;&atilde;o de problemas, utilizando Git, GitHub e Docker em ambiente de desenvolvimento colaborativo",
      xp2_role: "Engenheira de Software Freelance",
      xp2_company: "Azevedo e Surkamp",
      xp2_period: "Desde jul. 2026",
      xp2_lead: "Frontend, sistemas internos e apoio ao desenvolvimento.",
      xp2_t1: "Desenvolvimento Frontend e Interface com a implementa&ccedil;&atilde;o de novas funcionalidades, cria&ccedil;&atilde;o e ajuste de componentes visuais, garantindo que o sistema seja funcional, intuitivo e de boa usabilidade",
      xp2_t2: "Suporte no direcionamento de tarefas, organiza&ccedil;&atilde;o das demandas e acompanhamento t&eacute;cnico do desenvolvedor backend",
      xp2_t3: "Organiza&ccedil;&atilde;o e resolu&ccedil;&atilde;o de chamados de suporte e manuten&ccedil;&atilde;o continuada do sistema interno",

      contact_h: "Contato",
      contact_line: "Tem uma ideia? Vamos construir juntos.",
      foot_credit: "Curadoria e organiza&ccedil;&atilde;o com apoio de IA (Claude Sonnet 5).",

      modal_todo: "A imagem completa e uma nota curta sobre a pe&ccedil;a est&atilde;o sendo adicionadas."
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = (lang === "pt") ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    var _dec = document.createElement("textarea");
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (dict[k] == null) return;
      _dec.innerHTML = String(dict[k]).replace(/<[^>]+>/g, "");
      el.setAttribute("aria-label", _dec.value);
    });
    var btn = document.getElementById("lang");
    if (btn) { btn.textContent = (lang === "pt") ? "EN" : "PT"; }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    try { var s = localStorage.getItem("lang"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return /^pt\b/i.test(navigator.language || "") ? "pt" : "en";
  }

  /* process notes shared by a whole medium (per-piece data-note overrides) */
  var ART_PROCESS = {
    "Character studies": { en: "Digital studies of pose and expression.", pt: "Estudos de pose e expressão feitos no digital." },
    "Traditional / pencil": { en: "Graphite figure and portrait studies.", pt: "Estudos de figura e retrato a grafite." }
  };

  /* ---------- artwork modal ---------- */
  function initModal() {
    var modal = document.getElementById("modal");
    if (!modal) return;
    var box = modal.querySelector(".modal__box");
    var closeBtn = document.getElementById("modal-close");
    var titleEl = document.getElementById("modal-title");
    var catEl = document.getElementById("modal-cat");
    var noteEl = document.getElementById("modal-note");
    var phEl = document.getElementById("modal-ph");
    var imgEl = document.getElementById("modal-img");
    var lastFocus = null;

    function open(btn) {
      lastFocus = btn;
      var isPt = document.documentElement.lang === "pt-BR";
      var title = (isPt && btn.getAttribute("data-title-pt")) || btn.getAttribute("data-title") || "";
      titleEl.textContent = title;
      var cat = (isPt && btn.getAttribute("data-cat-pt")) || btn.getAttribute("data-cat") || "";
      catEl.textContent = cat;
      if (noteEl) {
        var lang = isPt ? "pt" : "en";
        var note = (isPt && btn.getAttribute("data-note-pt")) || btn.getAttribute("data-note") ||
                   (ART_PROCESS[btn.getAttribute("data-cat")] && ART_PROCESS[btn.getAttribute("data-cat")][lang]) || "";
        noteEl.textContent = note;
        noteEl.hidden = !note;
      }
      var full = btn.getAttribute("data-full") || "";
      if (imgEl) {
        if (full) { imgEl.src = full; imgEl.alt = title; imgEl.hidden = false; }
        else { imgEl.removeAttribute("src"); imgEl.hidden = true; }
      }
      if (phEl) phEl.textContent = full ? "" : title;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocus) lastFocus.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        var f = box.querySelectorAll("button, a[href]");
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    /* delegated so cloned gallery items (for the auto-scroll loop) work too */
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".art, .deckpic");
      if (b) open(b);
    });
    /* the #gr-archive reader's sheet images (certificates, project/tech
       visuals) are plain <img> tags re-rendered by gr-archive.js with no
       data-* attributes and no click behavior of their own — set the same
       attributes open() expects directly on the img at click time instead
       of touching that file, and reuse this same lightbox for them. */
    document.addEventListener("click", function (e) {
      var img = e.target.closest && e.target.closest(".gr-sheet-image img");
      if (!img) return;
      img.tabIndex = -1;
      img.setAttribute("data-title", img.alt || "");
      img.setAttribute("data-full", img.currentSrc || img.src || "");
      open(img);
    });
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  }

  /* ---------- playground gallery: a continuous strip, positioned with
     translateX. Arrow/keyboard steps ease in then decelerate (the CSS
     transition on .gallery__track); dragging tracks the pointer directly,
     1:1, with no easing while the finger/mouse is actually moving it.
     Nothing moves on its own — movement only happens when the visitor
     navigates. Bounded (not looped): the last piece is a hard stop, the
     arrows disable there rather than wrapping. ---------- */
  function initGallery() {
    var scroller = document.querySelector(".gallery__scroller");
    var viewport = document.querySelector(".gallery__viewport");
    var track = document.getElementById("gallery-track");
    if (!scroller || !viewport || !track) return;
    var chips = [].slice.call(document.querySelectorAll(".gallery__filters .chip"));
    var prevBtn = scroller.querySelector(".gallery__nav--prev");
    var nextBtn = scroller.querySelector(".gallery__nav--next");

    var x = 0;          /* current translateX */
    var headW = 0;       /* width of the cloned lead-in strip (mirrors the end of the set) */
    var realW = 0;        /* total width of the real (non-cloned) items, incl. gaps */
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Autoplay: a slow continuous drift, interspersed with faster eased
       advances every few seconds. Pauses on hover/focus/drag so a visitor
       can still stop to look at a piece. */
    var AUTO_DRIFT_PX_S = 16;
    var AUTO_ADVANCE_MS = 4200;
    var driftRAF = null, driftPrevTs = null, advanceTimer = null, autoSuspended = false;

    function itemSpan(el) {
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return el.getBoundingClientRect().width + gap;
    }
    function anchorX() { return -headW; }

    /* Rebuilds the clone strips at both ends of the track so the loop has
       real content to glide into in either direction — at least one
       viewport-width of clones per side, cycling through the visible set
       as many times as needed for narrow filtered sets. */
    function buildClones() {
      [].slice.call(track.querySelectorAll(".art--clone")).forEach(function (c) { c.remove(); });
      var real = [].slice.call(track.querySelectorAll(".art")).filter(function (a) { return !a.hidden; });
      if (!real.length) { headW = 0; realW = 0; return; }
      var need = viewport.clientWidth + 60;

      function makeClone(src) {
        var c = src.cloneNode(true);
        c.classList.add("art--clone");
        c.setAttribute("aria-hidden", "true");
        c.tabIndex = -1;
        return c;
      }

      var tailFrag = document.createDocumentFragment(), tw = 0, i = 0;
      while (tw < need) {
        var src = real[i % real.length];
        tailFrag.appendChild(makeClone(src));
        tw += itemSpan(src);
        i++;
      }
      track.appendChild(tailFrag);

      var headNodes = [], hw = 0, j = 0;
      while (hw < need) {
        var src2 = real[(real.length - 1 - (j % real.length) + real.length) % real.length];
        headNodes.unshift(makeClone(src2));
        hw += itemSpan(src2);
        j++;
      }
      var headFrag = document.createDocumentFragment();
      headNodes.forEach(function (n) { headFrag.appendChild(n); });
      track.insertBefore(headFrag, track.firstChild);

      headW = hw;
      realW = real.reduce(function (sum, el) { return sum + itemSpan(el); }, 0);
    }

    function place(v, animate) {
      x = v;
      track.classList.toggle("is-dragging", !animate);
      track.style.transform = "translateX(" + x + "px)";
      updateTrackingChip();
    }

    /* As the strip moves (drag, arrows or autoplay), highlight whichever
       filter chip matches the category of the card sitting at the viewport's
       own center — a live "you're looking at X now" cue, distinct from the
       solid .is-on fill that marks an actually-applied filter. Throttled:
       this runs on every animation frame during drift/drag, but a
       getBoundingClientRect scan over the whole strip only needs to happen a
       few times a second to read as instant. */
    var lastTrackingCheck = 0;
    function updateTrackingChip() {
      if (activeFilter) return; /* a real filter's own .is-on already covers this */
      var now = (window.performance && performance.now) ? performance.now() : Date.now();
      if (now - lastTrackingCheck < 120) return;
      lastTrackingCheck = now;
      var vRect = viewport.getBoundingClientRect();
      var centerX = vRect.left + vRect.width / 2;
      var items = [].slice.call(track.children);
      var closest = null, closestDist = Infinity;
      items.forEach(function (it) {
        var r = it.getBoundingClientRect();
        if (r.width === 0) return;
        var mid = r.left + r.width / 2;
        var d = Math.abs(mid - centerX);
        if (d < closestDist) { closestDist = d; closest = it; }
      });
      var kind = closest && closest.getAttribute("data-kind");
      chips.forEach(function (c) {
        c.classList.toggle("is-tracking", !!kind && c.getAttribute("data-filter") === kind);
      });
    }

    /* Once a pass has fully crossed into a clone region, wrap back by
       real-content-widths (a `while` — not `if` — since a burst of rapid
       clicks can interrupt transitions before transitionend ever fires,
       letting x drift more than one loop past the boundary) — the clone
       mirrors the real content exactly at that point, so the jump is
       visually silent. Returns true if it moved x. */
    function settleInstant() {
      if (!realW) return false;
      var moved = false;
      while (x <= anchorX() - realW + 1) { x += realW; moved = true; }
      while (x >= anchorX() + realW - 1) { x -= realW; moved = true; }
      if (moved) {
        track.classList.add("is-dragging"); /* no transition for the snap itself */
        track.style.transform = "translateX(" + x + "px)";
        track.offsetWidth; /* force layout so the browser commits this frame before we animate again */
        track.classList.remove("is-dragging"); /* leave transitions enabled for whatever comes next */
      }
      return moved;
    }

    function stepBy(dir) {
      stopDrift();
      settleInstant(); /* normalize first so a rapid burst of clicks can't outrun the clone buffer */
      place(x - dir * viewport.clientWidth * 0.82, true);
      queueDriftResume();
    }

    track.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") settleInstant();
    });

    /* ---- autoplay: slow drift + periodic faster eased advance ---- */
    function driftTick(ts) {
      if (autoSuspended || reduceMotion) { driftRAF = null; driftPrevTs = null; return; }
      if (driftPrevTs == null) driftPrevTs = ts;
      var dt = (ts - driftPrevTs) / 1000;
      driftPrevTs = ts;
      settleInstant();
      place(x - AUTO_DRIFT_PX_S * dt, false);
      driftRAF = requestAnimationFrame(driftTick);
    }
    function startDrift() {
      if (driftRAF || autoSuspended || reduceMotion) return;
      driftPrevTs = null;
      driftRAF = requestAnimationFrame(driftTick);
    }
    function stopDrift() {
      if (driftRAF) { cancelAnimationFrame(driftRAF); driftRAF = null; }
      driftPrevTs = null;
    }
    function queueDriftResume() {
      /* wait out the eased-step transition before the slow drift takes back over */
      window.setTimeout(function () { if (!autoSuspended) startDrift(); }, 720);
    }
    function autoAdvance() {
      if (autoSuspended || reduceMotion) return;
      stepBy(1); /* same eased step as clicking "next" — this is the faster beat in the rhythm */
    }
    function suspendAutoplay() {
      autoSuspended = true;
      stopDrift();
    }
    function resumeAutoplay() {
      if (reduceMotion) return;
      autoSuspended = false;
      startDrift();
    }
    if (!reduceMotion) {
      advanceTimer = window.setInterval(autoAdvance, AUTO_ADVANCE_MS);
      startDrift();
    }
    scroller.addEventListener("pointerenter", suspendAutoplay);
    scroller.addEventListener("pointerleave", resumeAutoplay);
    scroller.addEventListener("focusin", suspendAutoplay);
    scroller.addEventListener("focusout", function (e) {
      if (!scroller.contains(e.relatedTarget)) resumeAutoplay();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopDrift(); else if (!autoSuspended) startDrift();
    });

    function applyFilter(kind) {
      [].slice.call(track.querySelectorAll(".art:not(.art--clone)")).forEach(function (a) {
        a.hidden = !!kind && a.getAttribute("data-kind") !== kind;
      });
      chips.forEach(function (c) {
        var f = c.getAttribute("data-filter");
        var on = kind ? f === kind : f === "all";
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
        c.classList.remove("is-tracking"); /* a real filter choice replaces the scroll-tracking cue */
      });
      /* Behance only has her graphic design work — hide the link for the
         categories that were never posted there (illustration, traditional,
         photography, kitchen), show it for "all" and "design". */
      var behanceCta = document.getElementById("behance-cta");
      if (behanceCta) behanceCta.hidden = !!kind && kind !== "design";
      requestAnimationFrame(function () {
        buildClones();
        place(anchorX(), false);
      });
    }
    var activeFilter = null;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        activeFilter = (f === "all" || f === activeFilter) ? null : f;
        applyFilter(activeFilter);
      });
    });

    if (prevBtn) prevBtn.addEventListener("click", function () { stepBy(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { stepBy(1); });
    viewport.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); stepBy(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); stepBy(-1); }
    });
    window.addEventListener("resize", function () {
      buildClones();
      place(anchorX(), false);
    });

    /* pointer drag — 1:1 with the pointer, no easing, frame+photo move together */
    var isDown = false, dragged = false, startX = 0, startAt = 0, pressTarget = null;
    viewport.addEventListener("pointerdown", function (e) {
      isDown = true; dragged = false;
      startX = e.clientX; startAt = x;
      pressTarget = e.target;
      stopDrift();
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener("pointermove", function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 5) dragged = true;
      place(startAt + dx, false);
    });
    function endDrag(e) {
      if (!isDown) return;
      isDown = false;
      /* While the pointer is captured, Chromium resolves the paired pointerup
         (and the click synthesized from it) to the *capturing* element
         (.gallery__viewport) instead of the actual card under the finger/
         cursor — so a plain, no-drag tap on a card never reached the
         delegated "open the lightbox" listener (its `closest(".art")` found
         the viewport div, not the card). Since we can't fix where the browser
         points that click, we bypass it: on a real tap (not a drag), find the
         card from the *pointerdown* target — captured correctly — and fire a
         real click on it ourselves. The mis-targeted native click still
         follows right after but matches nothing (the viewport isn't inside
         an `.art`), so there's no double-open. */
      if (!dragged && pressTarget) {
        var card = pressTarget.closest && pressTarget.closest(".art");
        if (card) card.click();
      }
      settleInstant();
      track.classList.remove("is-dragging"); /* drag itself is transition-less; re-enable it for the next eased step */
      if (!autoSuspended) startDrift();
    }
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("click", function (e) {
      if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; }
    }, true);

    applyFilter(null);
  }

  /* ---------- trait deck: click the front card, it goes to the back ---------- */
  /* ---------- story beats: fade in left/right as they scroll into view,
     the connecting line between each pair draws in behind them ---------- */
  /* ---------- story path: a scroll-linked line connecting stickers ----------
     A single organic SVG path is built at runtime from the actual measured
     gaps between story beats (never hardcoded coordinates, so it adapts to
     any viewport/content reflow), alternating through whichever side of each
     paragraph is free. Its stroke-dashoffset is driven directly by how far
     the section has scrolled — not a one-shot reveal — so it pauses exactly
     where the user pauses. Each sticker sits at one of those gap points and
     pops in (once, permanently) the instant the line's drawn length reaches
     it, found via the path's own geometry (getPointAtLength) rather than a
     fixed delay, so it can never drift out of sync with the line. */
  function initStoryPath() {
    var story = document.querySelector(".about__story");
    var overlay = document.querySelector(".story-line-overlay");
    var svg = overlay && overlay.querySelector(".story-line-svg");
    var path = overlay && overlay.querySelector(".story-line-path");
    var beats = [].slice.call(document.querySelectorAll(".story-beat"));
    var stickers = [].slice.call(document.querySelectorAll(".story-sticker"));
    if (!story || !svg || !path || beats.length < 2 || !stickers.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var TILTS = [4, -7, -5]; /* final resting tilt per sticker, a hand-picked scatter */
    var totalLen = 0;
    var stickerTrigger = []; /* path length at which each sticker should pop */
    var popped = stickers.map(function () { return false; });
    var maxProgress = 0;

    /* A real Catmull-Rom-through-cubic-Bezier spline: unlike stitching
       together independent 2-point bezier segments (each with its own,
       unrelated control points — which is what produced visible corners
       at every join), this keeps the tangent continuous across the whole
       run of points, so the line reads as one smooth, rounded curve from
       end to end instead of a chain of separately-curved pieces. */
    function catmullRomD(pts) {
      if (pts.length < 2) return "";
      var d = "M " + pts[0].x.toFixed(1) + "," + pts[0].y.toFixed(1);
      for (var i = 0; i < pts.length - 1; i++) {
        var p0 = pts[i - 1] || pts[i];
        var p1 = pts[i];
        var p2 = pts[i + 1];
        var p3 = pts[i + 2] || p2;
        var c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
        var c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
        d += " C " + c1x.toFixed(1) + "," + c1y.toFixed(1) + " " + c2x.toFixed(1) + "," + c2y.toFixed(1) + " " + p2.x.toFixed(1) + "," + p2.y.toFixed(1);
      }
      return d;
    }

    function build() {
      var rect = story.getBoundingClientRect();
      var W = rect.width, H = story.scrollHeight;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);

      var isMobile = window.innerWidth <= 700;
      var d, targets;

      if (!isMobile) {
        /* Each beat gets a vertical "corridor" hugging the free edge for its
           own full height (0.9 W from its own side, well clear of its text
           column) — not just a single point near it — so the line only ever
           sweeps sideways during the actual blank gap between two beats,
           never across a paragraph's own lines. */
        var EDGE = 0.90, LEAD = 10;
        var corridors = beats.map(function (beat) {
          var r = beat.getBoundingClientRect();
          var isLeft = beat.classList.contains("story-beat--l");
          return {
            x: isLeft ? W * EDGE : W * (1 - EDGE),
            top: (r.top - rect.top) - LEAD,
            bottom: (r.bottom - rect.top) + LEAD
          };
        });

        var pts = [];
        corridors.forEach(function (c) {
          pts.push({ x: c.x, y: c.top });
          pts.push({ x: c.x, y: c.bottom });
        });

        d = catmullRomD(pts);
        path.setAttribute("d", d);
        var pathTmpLen = path.getTotalLength();

        /* One sticker per beat, each sitting exactly at the local max/min
           of the curve — the widest point of that beat's own bulge to the
           side — rather than some fraction-of-the-way point along it. Find
           it by locating where this corridor's own top/bottom points fall
           in path-length terms, then scanning that stretch for the point
           farthest from the path's horizontal centerline (the actual
           extremum), not just the closest match to a guessed target. */
        function nearestLen(target) {
          var best = 0, bestD = Infinity, steps = 200;
          for (var s = 0; s <= steps; s++) {
            var L = (s / steps) * pathTmpLen;
            var pt = path.getPointAtLength(L);
            var dist = (pt.x - target.x) * (pt.x - target.x) + (pt.y - target.y) * (pt.y - target.y);
            if (dist < bestD) { bestD = dist; best = L; }
          }
          return best;
        }
        var centerX = W / 2;
        targets = corridors.map(function (c) {
          var loL = nearestLen({ x: c.x, y: c.top });
          var hiL = nearestLen({ x: c.x, y: c.bottom });
          if (hiL < loL) { var tmp = loL; loL = hiL; hiL = tmp; }
          var best = (loL + hiL) / 2, bestDev = -1, steps = 80;
          for (var s = 0; s <= steps; s++) {
            var L = loL + (s / steps) * (hiL - loL);
            var pt = path.getPointAtLength(L);
            var dev = Math.abs(pt.x - centerX);
            if (dev > bestDev) { bestDev = dev; best = L; }
          }
          var extremum = path.getPointAtLength(best);
          return { x: extremum.x, y: extremum.y };
        });
      } else {
        /* Mobile: beats stack full-width (see the 700px breakpoint below),
           so there's no side channel left to route a continuous line
           through without crossing text. Draw one small independent
           squiggle per gap instead — each its own subpath, confined
           entirely to that gap's blank band — rather than force a single
           unbroken line through paragraphs that now span edge to edge. */
        d = ""; targets = [];
        var r0 = beats[0].getBoundingClientRect();
        var leadBot = (r0.top - rect.top) - 6, leadTop = Math.max(4, leadBot - 90);
        var leadMidx = W * 0.5, leadSwing = W * 0.16;
        d += " " + catmullRomD([
          { x: leadMidx - leadSwing, y: leadTop },
          { x: leadMidx + leadSwing, y: leadTop + (leadBot - leadTop) * 0.35 },
          { x: leadMidx - leadSwing, y: leadTop + (leadBot - leadTop) * 0.65 },
          { x: leadMidx + leadSwing, y: leadBot }
        ]);
        targets.push({ x: leadMidx, y: (leadTop + leadBot) / 2 });
        /* only the first (beats.length - 2) gaps get a squiggle — the last
           gap is skipped in favor of a trailing squiggle after the final
           beat, symmetric to the lead-in one, for the last sticker (418). */
        for (var m = 0; m < beats.length - 2; m++) {
          var ra = beats[m].getBoundingClientRect(), rb = beats[m + 1].getBoundingClientRect();
          var top = (ra.bottom - rect.top) + 6, bot = (rb.top - rect.top) - 6;
          if (bot <= top) bot = top + 4;
          var midx = W * 0.5, swing = W * 0.16 * (m % 2 === 0 ? 1 : -1);
          var segPts = [
            { x: midx - swing, y: top },
            { x: midx + swing, y: top + (bot - top) * 0.35 },
            { x: midx - swing, y: top + (bot - top) * 0.65 },
            { x: midx + swing, y: bot }
          ];
          d += " " + catmullRomD(segPts);
          targets.push({ x: midx, y: (top + bot) / 2 });
        }
        var rLast = beats[beats.length - 1].getBoundingClientRect();
        var tailTop = (rLast.bottom - rect.top) + 6, tailBot = tailTop + 90;
        var tailMidx = W * 0.5, tailSwing = W * 0.16 * ((beats.length - 2) % 2 === 0 ? 1 : -1);
        d += " " + catmullRomD([
          { x: tailMidx - tailSwing, y: tailTop },
          { x: tailMidx + tailSwing, y: tailTop + (tailBot - tailTop) * 0.35 },
          { x: tailMidx - tailSwing, y: tailTop + (tailBot - tailTop) * 0.65 },
          { x: tailMidx + tailSwing, y: tailBot }
        ]);
        targets.push({ x: tailMidx, y: (tailTop + tailBot) / 2 });
      }

      path.setAttribute("d", d.trim());
      totalLen = path.getTotalLength();
      path.style.strokeDasharray = totalLen;
      stickerTrigger = targets.map(function (g) {
        /* coarse pass across the whole path, then a fine pass zoomed into
           the neighborhood of the best coarse match — a flat 80-step scan
           over the *entire* length gives each individual segment (most of
           which is spent on other stickers) poor local resolution, which
           was leaving stickers snapped several pixels off their intended
           target instead of sitting exactly on it. */
        function search(lo, hi, steps) {
          var best = lo, bestD = Infinity;
          for (var s = 0; s <= steps; s++) {
            var L = lo + (s / steps) * (hi - lo);
            var pt = path.getPointAtLength(L);
            var dist = (pt.x - g.x) * (pt.x - g.x) + (pt.y - g.y) * (pt.y - g.y);
            if (dist < bestD) { bestD = dist; best = L; }
          }
          return best;
        }
        var coarse = search(0, totalLen, 100);
        var span = totalLen / 100;
        return search(Math.max(0, coarse - span), Math.min(totalLen, coarse + span), 60);
      });

      stickers.forEach(function (el, i) {
        var L = stickerTrigger[i];
        if (L == null) return;
        var pt = path.getPointAtLength(L);
        el.style.left = pt.x + "px";
        el.style.top = pt.y + "px";
        el.style.setProperty("--tilt-end", TILTS[i % TILTS.length] + "deg");
        el.style.setProperty("--tilt-start", (TILTS[i % TILTS.length] - 16) + "deg");
      });

      if (reduceMotion) {
        path.style.strokeDashoffset = 0;
        stickers.forEach(function (el, i) { el.classList.add("is-popped"); popped[i] = true; });
      } else {
        applyProgress(maxProgress, true);
      }
    }

    function applyProgress(progress, force) {
      if (!force && progress <= maxProgress) return;
      maxProgress = Math.max(maxProgress, progress);
      path.style.strokeDashoffset = totalLen * (1 - maxProgress);
      var reach = maxProgress * totalLen;
      stickerTrigger.forEach(function (trig, i) {
        if (!popped[i] && reach >= trig) {
          popped[i] = true;
          stickers[i].classList.add("is-popped");
        }
      });
    }

    /* Paragraphs fade in the same way the line draws itself — opacity set
       directly from live scroll position every frame, no CSS transition
       and no separate slide/translate, instead of the old one-shot
       IntersectionObserver-triggered slide-in. Each beat keeps its own
       high-water mark so it doesn't fade back out scrolling up. */
    var beatMaxOpacity = beats.map(function () { return 0; });
    function updateBeats() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      beats.forEach(function (b, i) {
        var r = b.getBoundingClientRect();
        var p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.35)));
        if (p > beatMaxOpacity[i]) beatMaxOpacity[i] = p;
        b.style.opacity = beatMaxOpacity[i];
      });
    }

    function scrollProgress() {
      var rect = story.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      /* 0 when the section's top just enters the bottom of the viewport,
         1 once the *last beat's own first line* reaches ~70% down the
         viewport — a natural "just started reading it" position — rather
         than the whole section's bottom, which only happens well after
         the next section (Formação acadêmica) is already on screen. */
      var lastRect = beats[beats.length - 1].getBoundingClientRect();
      var internalOffset = lastRect.top - rect.top;
      var span = vh * 0.7 + internalOffset;
      var traveled = vh - rect.top;
      return Math.max(0, Math.min(1, traveled / span));
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        applyProgress(scrollProgress());
        updateBeats();
        ticking = false;
      });
    }

    if (reduceMotion) {
      beats.forEach(function (b) { b.style.opacity = 1; });
    }

    build();
    /* web fonts finishing their swap after the first layout pass reflows
       paragraph heights (different metrics), which would leave the path
       measured against stale positions — rebuild once they're actually in. */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { build(); if (!reduceMotion) { applyProgress(scrollProgress(), true); updateBeats(); } });
    }
    if (!reduceMotion) {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      var resizeT;
      window.addEventListener("resize", function () {
        clearTimeout(resizeT);
        resizeT = setTimeout(function () { build(); applyProgress(scrollProgress(), true); updateBeats(); }, 150);
      });
    }
  }


  /* ---------- community catalog: two group covers -> paged detail modal ----------
     Clicking "Community" or "Events" opens #cmodal already loaded with the first
     entry in that group; prev/next page through every entry in the same group
     without closing the modal, reusing the exact detail markup each entry already
     had (role/period/bullet list), just no longer as 13 separate grid tiles. */
  function initCommunityCatalog() {
    var modal = document.getElementById("cmodal");
    var groupBtns = [].slice.call(document.querySelectorAll(".cat--group"));
    if (!modal || !groupBtns.length) return;
    var box = modal.querySelector(".cmodal__box");
    var closeBtn = document.getElementById("cm-close");
    var imgEl = document.getElementById("cm-img");
    var thumbsEl = document.getElementById("cm-thumbs");
    var bodyEl = document.getElementById("cm-body");
    var pagerEl = document.getElementById("cm-pager");
    var prevBtn = document.getElementById("cm-prev");
    var nextBtn = document.getElementById("cm-next");
    var pageInfoEl = document.getElementById("cm-pageinfo");
    var lastFocus = null;
    var pageItems = [];
    var pageIndex = 0;

    /* some entries (e.g. Interact Club) have more than one real photo —
       data-images lists them; clicking a thumbnail swaps the main image
       without leaving this entry or touching the prev/next group pager */
    function renderThumbs(btn) {
      var raw = btn.getAttribute("data-images");
      var paths = raw ? raw.split(",").map(function (s) { return s.trim(); }).filter(Boolean) : [];
      thumbsEl.innerHTML = "";
      if (paths.length < 2) { thumbsEl.hidden = true; return; }
      paths.forEach(function (src, i) {
        var t = document.createElement("button");
        t.type = "button";
        t.className = "cmodal__thumb" + (i === 0 ? " is-on" : "");
        t.setAttribute("aria-label", "Photo " + (i + 1) + " of " + paths.length);
        t.innerHTML = '<img src="' + src + '" alt="">';
        t.addEventListener("click", function () {
          imgEl.src = src;
          thumbsEl.querySelectorAll(".cmodal__thumb").forEach(function (el) { el.classList.remove("is-on"); });
          t.classList.add("is-on");
        });
        thumbsEl.appendChild(t);
      });
      thumbsEl.hidden = false;
    }

    function renderPage() {
      var btn = pageItems[pageIndex];
      if (!btn) return;
      var srcImg = btn.querySelector("img");
      imgEl.src = srcImg.src;
      imgEl.alt = srcImg.alt || "";
      renderThumbs(btn);
      var detail = document.getElementById(btn.getAttribute("data-detail"));
      bodyEl.innerHTML = detail ? detail.innerHTML : "";
      box.scrollTop = 0;
      if (pageItems.length > 1) {
        pagerEl.hidden = false;
        pageInfoEl.textContent = (pageIndex + 1) + " / " + pageItems.length;
        prevBtn.disabled = pageIndex === 0;
        nextBtn.disabled = pageIndex === pageItems.length - 1;
      } else {
        pagerEl.hidden = true;
      }
    }
    function openGroup(btn) {
      lastFocus = btn;
      var kind = btn.getAttribute("data-group");
      pageItems = [].slice.call(document.querySelectorAll('#community-items .cat[data-kind="' + kind + '"]'));
      pageIndex = 0;
      renderPage();
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocus) lastFocus.focus();
    }
    function goPrev() { if (pageIndex > 0) { pageIndex--; renderPage(); } }
    function goNext() { if (pageIndex < pageItems.length - 1) { pageIndex++; renderPage(); } }
    function onKey(e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowRight") { goNext(); return; }
      if (e.key === "ArrowLeft") { goPrev(); return; }
      if (e.key === "Tab") {
        var f = box.querySelectorAll("button:not(:disabled), a[href]");
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    groupBtns.forEach(function (btn) { btn.addEventListener("click", function () { openGroup(btn); }); });
    prevBtn.addEventListener("click", goPrev);
    nextBtn.addEventListener("click", goNext);
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });

    /* swipe left/right on the card pages through the group on touch screens;
       vertical drags are left alone so the card can still scroll */
    var touchX = null, touchY = 0;
    box.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { touchX = null; return; }
      touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
    }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      var dy = e.changedTouches[0].clientY - touchY;
      touchX = null;
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (dx < 0) goNext(); else goPrev();
    }, { passive: true });
  }

  /* ---------- hero name: typewriter reveal ---------- */
  function initNameTypewriter() {
    var target = document.getElementById("home-name-type");
    if (!target) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    var full = target.getAttribute("data-typewriter") || target.textContent.trim();
    target.textContent = "";
    var i = 0;
    (function tick() {
      target.textContent = full.slice(0, i);
      i++;
      if (i <= full.length) setTimeout(tick, 90);
    })();
  }

  /* ---------- hero quote: typewriter reveal, re-runs on language switch
     since the quote's text (unlike the name) changes per language ---------- */
  function initQuoteTypewriter() {
    var target = document.querySelector(".home__iosQuote");
    if (!target) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    var full = target.textContent;
    target.textContent = "";
    var i = 0;
    (function tick() {
      target.textContent = full.slice(0, i);
      i++;
      if (i <= full.length) setTimeout(tick, 32);
    })();
  }

  function initAboutFan() {
    var deck = document.querySelector(".about__deck");
    if (!deck) return;
    deck.classList.add("is-armed");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      deck.classList.add("is-in");
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.disconnect();
        deck.classList.add("is-in");
      });
    }, { threshold: 0.4 });
    io.observe(deck);
  }

  /* fade+rise entrance the first time a card scrolls into view, staggered
     within each group — reuses the .reveal utility class in style.css */
  function initScrollReveals() {
    var groups = [
      document.querySelectorAll(".community__grid .cat"),
      document.querySelectorAll("#about .xp")
    ];
    var els = [];
    groups.forEach(function (list) {
      list.forEach(function (el, i) {
        el.classList.add("reveal");
        el.style.setProperty("--i", i % 6); // cap the stagger so later items don't wait too long
        els.push(el);
      });
    });
    // section headings get the same fade+rise, unstaggered (one per section)
    document.querySelectorAll(".section-label").forEach(function (el) {
      el.classList.add("reveal");
      els.push(el);
    });
    // lead paragraphs, closing lines and stand-alone images across sections —
    // the .gallery__scroller (not individual .art cards, which are cloned
    // for the infinite drag loop) fades in as one piece so the reveal never
    // has to touch that carousel's own clone machinery.
    [
      ".coffee__why", ".coffee__proposal",
      ".community__lead", ".gallery__intro", ".gallery__scroller",
      ".contact__line", ".contact__links"
    ].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) { el.classList.add("reveal"); els.push(el); }
    });
    document.querySelectorAll(".filters").forEach(function (el) {
      el.classList.add("reveal");
      els.push(el);
    });
    var poster = document.querySelector(".cmedia--poster");
    if (poster) { poster.classList.add("reveal"); els.push(poster); }

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    applyLang(initialLang());
    var btn = document.getElementById("lang");
    var main = document.getElementById("main");
    if (btn) btn.addEventListener("click", function () {
      var next = document.documentElement.lang === "pt-BR" ? "en" : "pt";
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !main) { applyLang(next); return; }
      main.classList.add("is-switching-lang");
      setTimeout(function () {
        applyLang(next);
        initQuoteTypewriter();
        requestAnimationFrame(function () { main.classList.remove("is-switching-lang"); });
      }, 180);
    });

    initModal();
    initGallery();
    initCommunityCatalog();
    initNameTypewriter();
    initQuoteTypewriter();
    initAboutFan();
    initStoryPath();
    initScrollReveals();
  });
})();

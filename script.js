(function () {
  "use strict";

  /* ---------------------------------------------------------------
     i18n — every visible string keyed here, EN + PT.
     HTML carries the English text so the page reads fine with no JS.
     --------------------------------------------------------------- */
  var I18N = {
    en: {
      skip: "Skip to content",
      nav_work: "Work", nav_coffee: "Coffee &amp; Code", nav_currently: "Currently", nav_contact: "Contact",

      hero_kicker: "Portfolio — built by hand",
      hero_meta_build: "building across code, design &amp; people",

      id_title: "CREATIVE ID",
      id_name: "NAME", id_based: "BASED IN", id_study: "STUDY", id_work: "WORK",
      id_work_v: "Software Development Intern",
      id_builds: "BUILDS",
      id_builds_v: "software &middot; interfaces &middot; systems &middot; communities &middot; visual identities",
      id_status: "open to build things with good people",

      roles_h: "Current roles",
      role_1: "Software Engineering Student", role_1_sub: "PUCPR — foundations, systems, practice",
      role_2: "Software Development Intern", role_2_sub: "production software, day to day",
      role_3: "Visual &amp; Creative Designer", role_3_sub: "identity, illustration, image, photography",
      role_4_sub: "founder &amp; lead",

      work_h: "Selected work",
      work_intro: "Software, data, a game, a community. Different languages for the same habit — making things.",
      f_all: "All", f_code: "Code", f_design: "Design", f_people: "People", f_play: "Play",
      wk_datasus: "RPA + pandas + a dashboard for public health data",
      wk_game: "a small 2D game in Python / Pygame",
      wk_pibble: "Django delivery system — team project",
      wk_coffee: "a student tech club I started and lead",
      wk_creative_t: "Creative gallery", wk_creative: "illustration, image manipulation, experiments",
      ph_identity: "identity &amp; posters — image pending",

      case_featured: "Featured technical case",
      datasus_cap: "Streamlit dashboard over the consolidated data.",
      fl_processed: "processed data",
      lbl_context: "Context", lbl_built: "What we built", lbl_role: "My role",
      datasus_context: "Hemotherapy figures for the state of Paraná live in the DATASUS TabNet — a slow public interface, one query and one export at a time.",
      datasus_built: "A robot (Selenium) that runs the queries and reads the result tables, a pandas layer that cleans and consolidates every period, and a Streamlit dashboard to compare volume across months and years. Final project for a Python course, with two teammates.",
      datasus_role: "I proposed using the blood-bank data and worked on the extraction and treatment modules. Teammates: Jackson Beggi and wingCODING (RPA orchestration and dashboard).",
      cta_source: "View source on GitHub &rarr;",

      case_game: "Game — individual project",
      corrida_cap: "Start screen. Art is AI-generated (noted below).",
      corrida_p1: "A 2D endless-runner: a student is late for class and has to dodge the city. Reach 1000 points to pass; lose three lives and it's over.",
      corrida_p2: "Written in Python and Pygame — a clean state machine (menu / play / end), jump physics with gravity, random obstacles, difficulty that ramps with the score, lives with temporary invincibility, a HUD and a saved high score.",
      corrida_note: "The code is my own work. The visual assets are AI-generated and shown transparently.",
      tag_states: "state machine",

      case_team: "Web — team project",
      pibble_p: "A Django delivery-management system: authentication, ADM/FUNC access levels, CRUD for clients, products, employees and deliveries, a REST API and an integrated frontend. Built with two teammates.",
      pibble_role_h: "My contribution",
      pibble_r1: "Employees module and its integration with Deliveries",
      pibble_r2: "Registration accepting CPF or CNPJ (form + migration)",
      pibble_r3: "Administrative dashboard",
      pibble_r4: "Form standardization and interface adjustments",
      tag_auth: "authentication",

      coffee_why: "A university tech club I started and actively build, with the team.",
      coffee_p1: "It exists to give students a lower-barrier, hands-on place to learn, build projects together and share what they know — outside the pressure of a graded room.",
      coffee_p2: "I lead it where design and technology meet: the visual identity, the materials, how sessions are run, and how people are brought in.",
      ph_logo: "logo &amp; identity — image pending",
      ph_poster: "poster / session — image pending",
      ph_social: "social piece — image pending",

      creative_h: "Creative work",
      creative_intro: "Graphic design, image manipulation, digital illustration, photography and visual experiments. A selection — images are being prepared.",
      cta_behance: "More visual work on Behance &rarr;",

      community_h: "Community &amp; social impact",
      community_lead: "Building with people — collaboration, volunteering, communication and events.",
      ph_action: "selected photo — image pending",
      ci_ddm: "Events Coordinator: organizing events and communication, and initiatives around inclusion and social impact.",
      ci_teia: "Social media: communication and outreach for the project's actions.",
      ci_vol_h: "Interact &amp; volunteer work",
      ci_vol: "Environmental actions, activities with children and other volunteer work.",
      privacy_note: "Photos are selected with care — no children's faces in sensitive contexts, no legible badges or personal data.",

      currently_h: "Currently",
      cur_role: "Software Development Intern",
      cur_p: "Working on the development and maintenance of production software across frontend, backend, APIs and databases — implementing features, investigating bugs and integrating layers of existing systems.",
      cur_note: "Due to the proprietary nature of the systems I work on, source code and internal materials are not publicly available.",
      cur_study_h: "Study", cur_more_h: "More projects", cur_allrepos: "All repositories &rarr;",

      beyond_h: "Beyond the screen",
      beyond_lead: "Things I like making away from a keyboard — mostly baking, some photography.",
      ph_food: "bread — image pending", ph_photo: "photography — image pending",

      contact_h: "Contact",
      contact_line: "Open to build things with good people.",

      foot_note: "Built by hand with HTML, CSS &amp; JavaScript. No framework.",
      modal_todo: "Full image and a short note about this piece are being added."
    },

    pt: {
      skip: "Pular para o conte&uacute;do",
      nav_work: "Trabalhos", nav_coffee: "Coffee &amp; Code", nav_currently: "Atualmente", nav_contact: "Contato",

      hero_kicker: "Portf&oacute;lio — feito &agrave; m&atilde;o",
      hero_meta_build: "construindo entre c&oacute;digo, design &amp; pessoas",

      id_title: "CREATIVE ID",
      id_name: "NOME", id_based: "ONDE", id_study: "ESTUDO", id_work: "TRABALHO",
      id_work_v: "Estagi&aacute;ria de Desenvolvimento de Software",
      id_builds: "CONSTR&Oacute;I",
      id_builds_v: "software &middot; interfaces &middot; sistemas &middot; comunidades &middot; identidades visuais",
      id_status: "aberta a construir coisas com gente boa",

      roles_h: "Fun&ccedil;&otilde;es atuais",
      role_1: "Estudante de Engenharia de Software", role_1_sub: "PUCPR — base, sistemas, pr&aacute;tica",
      role_2: "Estagi&aacute;ria de Desenvolvimento", role_2_sub: "software em produ&ccedil;&atilde;o, no dia a dia",
      role_3: "Designer Visual &amp; Criativa", role_3_sub: "identidade, ilustra&ccedil;&atilde;o, imagem, fotografia",
      role_4_sub: "fundadora &amp; l&iacute;der",

      work_h: "Trabalhos selecionados",
      work_intro: "Software, dados, um jogo, uma comunidade. Linguagens diferentes para o mesmo h&aacute;bito — fazer coisas.",
      f_all: "Tudo", f_code: "C&oacute;digo", f_design: "Design", f_people: "Pessoas", f_play: "Jogo",
      wk_datasus: "RPA + pandas + um dashboard para dados p&uacute;blicos de sa&uacute;de",
      wk_game: "um joguinho 2D em Python / Pygame",
      wk_pibble: "sistema de entregas em Django — projeto em equipe",
      wk_coffee: "um clube universit&aacute;rio de tecnologia que criei e lidero",
      wk_creative_t: "Galeria criativa", wk_creative: "ilustra&ccedil;&atilde;o, manipula&ccedil;&atilde;o de imagem, experimentos",
      ph_identity: "identidade &amp; p&ocirc;steres — imagem pendente",

      case_featured: "Caso t&eacute;cnico em destaque",
      datasus_cap: "Dashboard em Streamlit sobre os dados consolidados.",
      fl_processed: "dados tratados",
      lbl_context: "Contexto", lbl_built: "O que constru&iacute;mos", lbl_role: "Meu papel",
      datasus_context: "Os n&uacute;meros de hemoterapia do Paran&aacute; ficam no TabNet do DATASUS — uma interface p&uacute;blica lenta, uma consulta e um export por vez.",
      datasus_built: "Um rob&ocirc; (Selenium) que roda as consultas e l&ecirc; as tabelas de resultado, uma camada em pandas que limpa e consolida cada per&iacute;odo, e um dashboard em Streamlit para comparar o volume entre meses e anos. Trabalho final de um curso de Python, com dois colegas.",
      datasus_role: "Sugeri usar os dados de banco de sangue e trabalhei nos m&oacute;dulos de extra&ccedil;&atilde;o e tratamento. Colegas: Jackson Beggi e wingCODING (orquestra&ccedil;&atilde;o da RPA e dashboard).",
      cta_source: "Ver o c&oacute;digo no GitHub &rarr;",

      case_game: "Jogo — projeto individual",
      corrida_cap: "Tela inicial. A arte &eacute; gerada por IA (nota abaixo).",
      corrida_p1: "Um endless-runner 2D: o estudante est&aacute; atrasado para a aula e precisa desviar da cidade. Chegue a 1000 pontos para passar; perca tr&ecirc;s vidas e acabou.",
      corrida_p2: "Feito em Python e Pygame — m&aacute;quina de estados limpa (menu / jogo / fim), f&iacute;sica de pulo com gravidade, obst&aacute;culos aleat&oacute;rios, dificuldade que sobe com a pontua&ccedil;&atilde;o, vidas com invencibilidade tempor&aacute;ria, um HUD e recorde salvo.",
      corrida_note: "O c&oacute;digo &eacute; de autoria pr&oacute;pria. Os assets visuais s&atilde;o gerados por IA e mostrados com transpar&ecirc;ncia.",
      tag_states: "m&aacute;quina de estados",

      case_team: "Web — projeto em equipe",
      pibble_p: "Um sistema de gest&atilde;o de entregas em Django: autentica&ccedil;&atilde;o, n&iacute;veis de acesso ADM/FUNC, CRUD de clientes, produtos, funcion&aacute;rios e entregas, uma API REST e frontend integrado. Feito com dois colegas.",
      pibble_role_h: "Minha contribui&ccedil;&atilde;o",
      pibble_r1: "M&oacute;dulo de Funcion&aacute;rios e sua integra&ccedil;&atilde;o com Entregas",
      pibble_r2: "Cadastro aceitando CPF ou CNPJ (formul&aacute;rio + migra&ccedil;&atilde;o)",
      pibble_r3: "Dashboard administrativo",
      pibble_r4: "Padroniza&ccedil;&atilde;o de formul&aacute;rios e ajustes de interface",
      tag_auth: "autentica&ccedil;&atilde;o",

      coffee_why: "Um clube universit&aacute;rio de tecnologia que criei e construo ativamente, com a equipe.",
      coffee_p1: "Existe para dar aos estudantes um espa&ccedil;o com menos barreira e mais pr&aacute;tica para aprender, construir projetos juntos e trocar o que sabem — fora da press&atilde;o da sala de aula.",
      coffee_p2: "Lidero onde design e tecnologia se encontram: a identidade visual, os materiais, como os encontros acontecem e como as pessoas s&atilde;o convidadas.",
      ph_logo: "logo &amp; identidade — imagem pendente",
      ph_poster: "p&ocirc;ster / encontro — imagem pendente",
      ph_social: "pe&ccedil;a de social — imagem pendente",

      creative_h: "Trabalho criativo",
      creative_intro: "Design gr&aacute;fico, manipula&ccedil;&atilde;o de imagem, ilustra&ccedil;&atilde;o digital, fotografia e experimenta&ccedil;&otilde;es visuais. Uma sele&ccedil;&atilde;o — as imagens est&atilde;o sendo preparadas.",
      cta_behance: "Mais trabalho visual no Behance &rarr;",

      community_h: "Comunidade &amp; impacto social",
      community_lead: "Construir com pessoas — colabora&ccedil;&atilde;o, voluntariado, comunica&ccedil;&atilde;o e eventos.",
      ph_action: "foto selecionada — imagem pendente",
      ci_ddm: "Coordenadora de Eventos: organiza&ccedil;&atilde;o de eventos e comunica&ccedil;&atilde;o, e iniciativas de inclus&atilde;o e impacto social.",
      ci_teia: "Social media: comunica&ccedil;&atilde;o e divulga&ccedil;&atilde;o das a&ccedil;&otilde;es do projeto.",
      ci_vol_h: "Interact &amp; voluntariado",
      ci_vol: "A&ccedil;&otilde;es ambientais, atividades com crian&ccedil;as e outros voluntariados.",
      privacy_note: "As fotos s&atilde;o escolhidas com cuidado — sem rostos de crian&ccedil;as em contexto sens&iacute;vel, sem crach&aacute;s leg&iacute;veis ou dados pessoais.",

      currently_h: "Atualmente",
      cur_role: "Estagi&aacute;ria de Desenvolvimento de Software",
      cur_p: "Atuo no desenvolvimento e na manuten&ccedil;&atilde;o de software em produ&ccedil;&atilde;o, entre frontend, backend, APIs e bancos de dados — implementa&ccedil;&atilde;o de funcionalidades, investiga&ccedil;&atilde;o de bugs e integra&ccedil;&atilde;o de camadas de sistemas existentes.",
      cur_note: "Por serem sistemas propriet&aacute;rios, o c&oacute;digo-fonte e os materiais internos n&atilde;o est&atilde;o dispon&iacute;veis publicamente.",
      cur_study_h: "Estudo", cur_more_h: "Mais projetos", cur_allrepos: "Todos os reposit&oacute;rios &rarr;",

      beyond_h: "Al&eacute;m da tela",
      beyond_lead: "Coisas que gosto de fazer longe do teclado — principalmente confeitaria, um pouco de fotografia.",
      ph_food: "p&atilde;o — imagem pendente", ph_photo: "fotografia — imagem pendente",

      contact_h: "Contato",
      contact_line: "Aberta a construir coisas com gente boa.",

      foot_note: "Feito &agrave; m&atilde;o com HTML, CSS &amp; JavaScript. Sem framework.",
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
    var btn = document.getElementById("lang");
    if (btn) { btn.textContent = (lang === "pt") ? "EN" : "PT"; }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    try { var s = localStorage.getItem("lang"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return /^pt\b/i.test(navigator.language || "") ? "pt" : "en";
  }

  /* ---------- work filters ---------- */
  function initFilters() {
    var chips = document.querySelectorAll(".filters .chip");
    var items = document.querySelectorAll(".work__grid .wk");
    if (!chips.length) return;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.getAttribute("data-filter");
        chips.forEach(function (c) { c.classList.toggle("is-on", c === chip); c.setAttribute("aria-pressed", c === chip); });
        items.forEach(function (it) {
          it.hidden = !(f === "all" || it.getAttribute("data-kind") === f);
        });
      });
    });
  }

  /* ---------- artwork modal ---------- */
  function initModal() {
    var modal = document.getElementById("modal");
    if (!modal) return;
    var box = modal.querySelector(".modal__box");
    var closeBtn = document.getElementById("modal-close");
    var titleEl = document.getElementById("modal-title");
    var catEl = document.getElementById("modal-cat");
    var phEl = document.getElementById("modal-ph");
    var lastFocus = null;

    function open(btn) {
      lastFocus = btn;
      titleEl.textContent = btn.getAttribute("data-title") || "";
      catEl.textContent = btn.getAttribute("data-cat") || "";
      phEl.textContent = btn.getAttribute("data-title") || "";
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
    document.querySelectorAll(".art").forEach(function (b) {
      b.addEventListener("click", function () { open(b); });
    });
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    applyLang(initialLang());
    var btn = document.getElementById("lang");
    if (btn) btn.addEventListener("click", function () {
      applyLang(document.documentElement.lang === "pt-BR" ? "en" : "pt");
    });

    initFilters();
    initModal();
  });
})();

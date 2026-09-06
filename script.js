(function () {
  "use strict";

  var I18N = {
    en: {
      role: "Software Engineering student &amp; software development intern",
      tagline: "Personal hub and central portfolio &mdash; where software engineering meets design, creativity, people and social impact.",
      link_creative: "Creative Collection",
      link_contact: "Contact",

      explore_h: "Explore what I do",
      tile_tech: "TECH",
      tile_creative: "CREATIVE",
      tile_community: "COMMUNITY",
      tile_community_sub: "Social impact",
      tile_coffee_sub: "Founder",

      about_h: "About",
      about_p: "Software Engineering student and software development intern. I work across software, data and design: building production features and ETL pipelines, replacing manual and error-prone processes with automation, and developing web and interactive applications, supported by a background in visual design and digital identity.",

      education_h: "Education",
      education_p: "Software Engineering student &mdash; PUCPR.",

      experience_h: "Experience",
      experience_role: "Software Development Intern &mdash; currently",
      experience_p1: "Working on the development and maintenance of production software across frontend, backend, APIs and databases: implementing features, investigating bugs, and integrating different layers of existing systems.",
      experience_p2: "Due to the proprietary nature of the systems I work on, source code and internal materials are not publicly available.",

      projects_h: "Projects",
      badge_team: "team",
      datasus_flow: "Public data &rarr; automation &rarr; processing &rarr; visualization.",
      datasus_p: "Automated extraction (RPA / Selenium) of hemotherapy data from the DATASUS TabNet, with parallel execution, checkpointing, data treatment with pandas and a Streamlit dashboard. Project idea and work on the extraction and treatment modules.",
      game_p: "Individual game in Python / Pygame: state-driven programming, jump physics, collisions, progressive difficulty, HUD and input handling. The game code is my own work; the visual assets are AI-generated and presented transparently.",
      tag_gamedev: "game development",
      pibble_p: "Django delivery-management system with authentication, access levels, CRUD, a REST API, models and an integrated frontend. My contribution: the Employees module and its integration with Deliveries, CPF/CNPJ registration, the administrative dashboard, and form standardization / interface adjustments.",
      tag_auth: "authentication",
      coffee_h: "Coffee &amp; Code &mdash; university tech club",
      coffee_p: "A university tech club I created and lead, built to give students a more accessible, collaborative and hands-on environment to learn, build projects and exchange knowledge. It connects technology, education, community, leadership, design and initiative.",

      skills_h: "Technical Skills",
      skills_lang: "Languages:",
      skills_web: "Web:",
      skills_data: "Data &amp; automation:",
      skills_db: "Databases:",
      skills_tools: "Tools &amp; infrastructure:",
      skills_concepts: "Concepts:",
      skills_concepts_v: "frontend, backend, CRUD, authentication, access levels, bug investigation",

      creative_h: "Creative Work",
      creative_p: "Graphic design, image manipulation, digital illustration, photography and visual experiments.",
      creative_pieces_label: "Selected pieces:",
      creative_link: "See the full Creative Collection &rarr;",

      community_h: "Community &amp; Social Impact",
      community_p: "Initiatives around collaboration, volunteering, communication, events, social responsibility and collective building:",
      community_1: "<strong>Diretoria da Mulher (PUCPR)</strong> &mdash; Events Coordinator",
      community_2: "<strong>Teia do Bem</strong> &mdash; social media, communication and outreach",
      community_3: "<strong>Interact</strong>, environmental actions, activities with children and other volunteer work",

      beyond_h: "Beyond the Screen",
      beyond_p: "Creative curiosity away from the computer, including cooking &mdash; breads, sweets, cookies and other experiments.",

      more_h: "More on GitHub",
      more_1: "cleaning and standardization of DATASUS data with pandas",
      more_2: "ETL study: consolidates spreadsheets, extracts campaigns from UTM links, outputs CSV/XLSX",
      more_3: "static site, a guide to bars in Curitiba (team)",
      more_4: "&hellip;and other academic projects",

      contact_h: "Contact",
      contact_email: "Email:",
      contact_email_edu: "Academic email:",
      contact_drive: "Creative Collection folders",
      footer_built: "built with HTML, CSS and JavaScript, hosted on GitHub Pages"
    },

    pt: {
      role: "Estudante de Engenharia de Software &amp; estagi&aacute;ria de desenvolvimento",
      tagline: "Hub pessoal e portf&oacute;lio central &mdash; onde engenharia de software encontra design, criatividade, pessoas e impacto social.",
      link_creative: "Cole&ccedil;&atilde;o Criativa",
      link_contact: "Contato",

      explore_h: "Explore o que eu fa&ccedil;o",
      tile_tech: "TECH",
      tile_creative: "CRIATIVO",
      tile_community: "COMUNIDADE",
      tile_community_sub: "Impacto social",
      tile_coffee_sub: "Fundadora",

      about_h: "Sobre",
      about_p: "Estudante de Engenharia de Software e estagi&aacute;ria de desenvolvimento. Trabalho na interse&ccedil;&atilde;o entre software, dados e design: construindo funcionalidades em produ&ccedil;&atilde;o e pipelines de ETL, substituindo processos manuais e sujeitos a erro por automa&ccedil;&atilde;o, e desenvolvendo aplica&ccedil;&otilde;es web e interativas &mdash; com base tamb&eacute;m em design visual e identidade digital.",

      education_h: "Forma&ccedil;&atilde;o",
      education_p: "Estudante de Engenharia de Software &mdash; PUCPR.",

      experience_h: "Experi&ecirc;ncia",
      experience_role: "Estagi&aacute;ria de Desenvolvimento de Software &mdash; atualmente",
      experience_p1: "Atuo no desenvolvimento e na manuten&ccedil;&atilde;o de software em produ&ccedil;&atilde;o, entre frontend, backend, APIs e bancos de dados: implementa&ccedil;&atilde;o de funcionalidades, investiga&ccedil;&atilde;o de bugs e integra&ccedil;&atilde;o entre diferentes camadas de sistemas existentes.",
      experience_p2: "Por serem sistemas propriet&aacute;rios, o c&oacute;digo-fonte e os materiais internos n&atilde;o est&atilde;o dispon&iacute;veis publicamente.",

      projects_h: "Projetos",
      badge_team: "em equipe",
      datasus_flow: "Dados p&uacute;blicos &rarr; automa&ccedil;&atilde;o &rarr; processamento &rarr; visualiza&ccedil;&atilde;o.",
      datasus_p: "Extra&ccedil;&atilde;o automatizada (RPA / Selenium) de dados de hemoterapia do TabNet do DATASUS, com execu&ccedil;&atilde;o paralela, checkpoint, tratamento dos dados com pandas e um dashboard em Streamlit. Ideia do projeto e trabalho nos m&oacute;dulos de extra&ccedil;&atilde;o e tratamento.",
      game_p: "Jogo individual em Python / Pygame: programa&ccedil;&atilde;o orientada a estados, f&iacute;sica de pulo, colis&otilde;es, dificuldade progressiva, HUD e tratamento de entrada. O c&oacute;digo do jogo &eacute; de autoria pr&oacute;pria; os assets visuais foram gerados por IA e s&atilde;o apresentados com transpar&ecirc;ncia.",
      tag_gamedev: "game dev",
      pibble_p: "Sistema Django de gest&atilde;o de entregas com autentica&ccedil;&atilde;o, n&iacute;veis de acesso, CRUD, API REST, modelos e frontend integrado. Minha contribui&ccedil;&atilde;o: o m&oacute;dulo de Funcion&aacute;rios e sua integra&ccedil;&atilde;o com Entregas, cadastro com CPF/CNPJ, o dashboard administrativo e padroniza&ccedil;&atilde;o de formul&aacute;rios / ajustes de interface.",
      tag_auth: "autentica&ccedil;&atilde;o",
      coffee_h: "Coffee &amp; Code &mdash; clube universit&aacute;rio de tecnologia",
      coffee_p: "Clube universit&aacute;rio de tecnologia que criei e lidero, feito para dar aos estudantes um ambiente mais acess&iacute;vel, colaborativo e pr&aacute;tico para aprender, construir projetos e trocar conhecimento. Conecta tecnologia, educa&ccedil;&atilde;o, comunidade, lideran&ccedil;a, design e iniciativa.",

      skills_h: "Habilidades T&eacute;cnicas",
      skills_lang: "Linguagens:",
      skills_web: "Web:",
      skills_data: "Dados &amp; automa&ccedil;&atilde;o:",
      skills_db: "Bancos de dados:",
      skills_tools: "Ferramentas &amp; infraestrutura:",
      skills_concepts: "Conceitos:",
      skills_concepts_v: "frontend, backend, CRUD, autentica&ccedil;&atilde;o, n&iacute;veis de acesso, investiga&ccedil;&atilde;o de bugs",

      creative_h: "Trabalho Criativo",
      creative_p: "Design gr&aacute;fico, manipula&ccedil;&atilde;o de imagem, ilustra&ccedil;&atilde;o digital, fotografia e experimenta&ccedil;&otilde;es visuais.",
      creative_pieces_label: "Pe&ccedil;as selecionadas:",
      creative_link: "Ver a Cole&ccedil;&atilde;o Criativa completa &rarr;",

      community_h: "Comunidade &amp; Impacto Social",
      community_p: "Iniciativas de colabora&ccedil;&atilde;o, voluntariado, comunica&ccedil;&atilde;o, eventos, responsabilidade social e constru&ccedil;&atilde;o coletiva:",
      community_1: "<strong>Diretoria da Mulher (PUCPR)</strong> &mdash; Coordenadora de Eventos",
      community_2: "<strong>Teia do Bem</strong> &mdash; social media, comunica&ccedil;&atilde;o e divulga&ccedil;&atilde;o",
      community_3: "<strong>Interact</strong>, a&ccedil;&otilde;es ambientais, a&ccedil;&otilde;es com crian&ccedil;as e outros voluntariados",

      beyond_h: "Al&eacute;m da Tela",
      beyond_p: "Curiosidade criativa longe do computador, incluindo culin&aacute;ria &mdash; p&atilde;es, doces, cookies e outras cria&ccedil;&otilde;es.",

      more_h: "Mais no GitHub",
      more_1: "limpeza e padroniza&ccedil;&atilde;o de dados do DATASUS com pandas",
      more_2: "estudo de ETL: consolida planilhas, extrai a campanha de links UTM, gera CSV/XLSX",
      more_3: "site est&aacute;tico, um guia de bares de Curitiba (em equipe)",
      more_4: "&hellip;e outros projetos acad&ecirc;micos",

      contact_h: "Contato",
      contact_email: "E-mail:",
      contact_email_edu: "E-mail institucional:",
      contact_drive: "Pastas da Cole&ccedil;&atilde;o Criativa",
      footer_built: "feito com HTML, CSS e JavaScript, hospedado no GitHub Pages"
    }
  };

  function apply(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = (lang === "pt") ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = (lang === "pt") ? "EN" : "PT";
      btn.setAttribute("aria-label", (lang === "pt") ? "Switch to English" : "Mudar para português");
    }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    var lang = initialLang();
    apply(lang);

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        lang = (document.documentElement.lang === "pt-BR") ? "en" : "pt";
        apply(lang);
      });
    }
  });
})();

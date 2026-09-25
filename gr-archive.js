/* gr-archive.js — the "pastas retrô" folder archive.
   Engine (selectFolder / itemMarkup / renderSheet / openReader / closeReader,
   the exact timings, easings and Web Animations keyframes) is preserved as
   provided. The only additions are: a bilingual LIBRARY/STRINGS pair instead
   of a single hardcoded object, a currentLangKey() read of the page's own
   lang state (shared with the rest of the site's EN/PT toggle), and a relang()
   hook wired to the existing #lang button so the open sheet and announcements
   follow the language switch. Everything else — DOM structure read, class
   names, animation math — matches the source component. */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('gr-archive');
  if (!root) return;
  const assetsEl = document.getElementById('gr-archive-assets');
  const assets = assetsEl ? JSON.parse(assetsEl.textContent) : {};
  root.querySelectorAll('[data-asset]').forEach(img=>{img.src=assets[img.dataset.asset]||'';});
  const folders=[...root.querySelectorAll('[data-folder]')];
  const reader=root.querySelector('.gr-reader');
  const sheet=root.querySelector('.gr-sheet');
  const returnButton=root.querySelector('.gr-return');
  const prev=root.querySelector('[data-page="prev"]');
  const next=root.querySelector('[data-page="next"]');
  const announcement=root.querySelector('[data-announcement]');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  let order=['projects','tech','certs'];
  let active='projects';
  let page=0;
  let lastOpener=null;
  let turnAnimation=null;

  function currentLangKey(){ return document.documentElement.lang==='pt-BR' ? 'pt' : 'en'; }

  const STRINGS = {
    pt: {
      folderNames: { projects:'Projetos', tech:'Tecnologias', certs:'Aprendizado' },
      announceSelect: name => 'Pasta '+name+' selecionada.',
      announceClose: name => 'Folhas guardadas. Pasta '+name+'.',
      announceSheet: (title,n,total) => title+'. Folha '+n+' de '+total+'.',
      pauseSub: 'AUTORREGULAÇÃO<br>& ANSIEDADE'
    },
    en: {
      folderNames: { projects:'Projects', tech:'Technologies', certs:'Learning' },
      announceSelect: name => name+' folder selected.',
      announceClose: name => 'Sheets put away. '+name+' folder.',
      announceSheet: (title,n,total) => title+'. Sheet '+n+' of '+total+'.',
      pauseSub: 'SELF-REGULATION<br>&amp; ANXIETY'
    }
  };
  function strings(){ return STRINGS[currentLangKey()]; }

  const LIBRARY = {
    pt: {
      projects:{label:'Projetos · arquivo de trabalho',items:[
        {title:'Bloody Mary — DATASUS',type:'Dados & automação · Python',description:'Extração e tratamento de registros de hemoterapia do SUS, com um painel interativo. Idealizei a solução e desenvolvi os módulos de coleta e limpeza.',image:'datasus',caption:'painel do DATASUS',url:'https://github.com/ribasgiovanna/datasus',link:'Ver repositório'},
        {title:'Corrida para a Faculdade',type:'Jogo 2D · Pygame',description:'Um estudante atrasado atravessa a cidade. Projeto individual com física, obstáculos, estados de jogo e recordes.',image:'game',caption:'um pouco de gameplay',credit:'Recursos visuais gerados com auxílio do ChatGPT.',url:'https://github.com/ribasgiovanna/jogo-atrasado-para-a-faculdade',link:'Ver repositório'},
        {title:'Pibble Express',type:'Desenvolvimento web · Django',description:'Sistema acadêmico de logística. Minha contribuição inclui funcionários, integração com entregas, painel e formulários.',image:'pibble',caption:'organizando a operação',url:'https://github.com/ribasgiovanna/pibble_express',link:'Ver repositório'},
        {title:'Monitor de Bueiros',type:'Protótipo IoT · ESP32 & Blynk',description:'Monitoramento de nível e alertas para explorar problemas da drenagem urbana. Projeto acadêmico em equipe.',image:'iot',caption:'painel em desenvolvimento',url:'https://youtu.be/_Lq13BLEQ2o',link:'Ver vídeo do projeto'},
        {title:'Clínica Veterinária',type:'Processos · BPMN',description:'Entrevistas e modelagem de processos de consultas, estoque e gestão de pessoas. Projeto em equipe.',image:'bpmn',caption:'entendendo os processos',url:'https://drive.google.com/file/d/1vz2DTqKIOmveiAA17f5Lz_a-c5_N7zTZ/view',link:'Ver manual e diagramas'},
        {title:'Make a Pause',type:'Projeto acadêmico em andamento · Engenharia de Software',description:'Plataforma para apoiar a autorregulação emocional de adolescentes na escola: o aluno faz atividades guiadas, registra o humor antes e depois e pode pedir ajuda ou avisar que precisa sair da sala. Professores e psicólogos acompanham os registros, cada um com as suas permissões. Projeto em equipe, na fase de requisitos.',icon:'chinchilla',iconLabel:'Chinchila, mascote do Make a Pause',url:'https://github.com/ribasgiovanna/mkpause',link:'Ver repositório'},
        {title:'Doggo',type:'Projeto acadêmico em andamento · IoT',description:'Um ESP32 atuando como servidor HTTP para uma estação pet — acompanha a temperatura da água, dosa ração por peso e liga a fonte de água, a partir de uma página web e uma pequena API REST.',icon:'dog',iconLabel:'Cachorro, mascote do Doggo'},
        {title:'AdversIA',type:'Hackathon · assistente jurídico com IA',description:'Assistente para advogados de Direito de Família: analisa os documentos do caso como se fosse a parte contrária, apontando contradições, alegações sem prova e perguntas difíceis antes da audiência. Protótipo em equipe no Hackathon da Cidadania OAB/PR 2026.',image:'adversia',focus:'left top',caption:'a tela inicial',url:'https://adversia.vercel.app',link:'Acessar o site'},
        {title:'Cobot',type:'Bot do Discord · Python',description:'Bot do Discord do Coffee & Code: a equipe publica eventos no fórum com um comando e o bot apaga o post sozinho quando as inscrições encerram. Roda 24/7 numa VM da Oracle Cloud, como serviço do systemd, com SQLite guardando os eventos ativos.',image:'cobot',caption:'o mascote do Cobot'}
      ]},
      tech:{label:'Tecnologias · ferramentas em uso',items:[
        {title:'Dados e automação',type:'Coleta, tratamento & RPA',description:'Ferramentas que uso para coletar, tratar e apresentar dados, e para automatizar tarefas repetitivas.',tools:['Python','pandas','openpyxl','Selenium','Playwright','BeautifulSoup','Streamlit','Excel'],url:'https://github.com/ribasgiovanna/datasus',link:'Ver aplicação no projeto'},
        {title:'Back-end & APIs',type:'Serviços & regras de negócio',description:'APIs, autenticação e acesso a dados, no estágio e nos projetos acadêmicos.',tools:['FastAPI','Pydantic','SQLAlchemy','Alembic','Django','Django REST Framework','Node.js','Express','Prisma'],url:'https://github.com/ribasgiovanna/pibble_express',link:'Ver aplicação no projeto'},
        {title:'Front-end',type:'Interfaces web',description:'Construção de interfaces, formulários e painéis.',tools:['HTML + CSS','JavaScript','TypeScript','React','Next.js']},
        {title:'Bancos de dados',type:'Consulta & organização',description:'Bancos relacionais e não relacionais com que trabalho no dia a dia.',tools:['SQL','SQL Server','PostgreSQL','MongoDB','SQLite','SSMS']},
        {title:'IA & integrações',type:'LLMs & agentes',description:'Integração de modelos de linguagem em aplicações e ferramentas.',tools:['Claude API','OpenAI API','MCP'],url:'https://adversia.vercel.app',link:'Ver aplicação na AdversIA'},
        {title:'Testes',type:'Qualidade',description:'Testes automatizados de back-end, front-end e ponta a ponta.',tools:['pytest','Jest','Testing Library','Playwright']},
        {title:'Deploy & ambiente',type:'Infraestrutura & SO',description:'Containers, integração contínua e o ambiente em que desenvolvo.',tools:['Docker','Docker Compose','GitHub Actions','Nginx','Oracle Cloud','Ubuntu','PowerShell']},
        {title:'Desenvolver e organizar',type:'Código & processos',description:'Versionamento, edição de código e modelagem de processos de negócio.',tools:['Git','GitHub','VS Code','Bizagi Modeler']},
        {title:'Criação visual',type:'Design gráfico & ilustração',description:'Composição de pôsteres, tratamento de imagens, ilustração e materiais de comunicação.',tools:['Figma','Affinity','Photoshop','Procreate','Canva'],url:'https://www.behance.net/ribestudio',link:'Ver design gráfico no Behance'}
      ]},
      certs:{label:'Aprendizado & formação · registros',items:[
        {title:'Engenharia de Software',type:'PUCPR · iniciada em 2026',description:'Graduação em andamento, em Curitiba.',record:'PUCPR',recordSub:'FORMAÇÃO ACADÊMICA',recordBottom:'Em andamento'},
        {title:'Programação em Python',type:'Escola Harve · jan.–abr. 2026',description:'Formação em Python que também deu origem ao Bloody Mary, projeto desenvolvido em equipe.',image:'harve',caption:'a turma da Harve'},
        {title:'Iniciação científica — FICEM',type:'Colégio Bom Jesus · 2024',description:'Pesquisa sobre a ciência dos sonhos, com produção da apresentação e do vídeo.',image:'cert_ficem',caption:'certificado de participação',url:'https://drive.google.com/file/d/1v3gQgXM4yTNJDaBZlyMATUE02FfPQoqw/view?usp=sharing',link:'Ver PDF da iniciação científica'},
        {title:'Engenharia de Dados e Machine Learning',type:'DIO · mar. 2026',description:'Curso de fundamentos de Engenharia de Dados e Machine Learning.',image:'cert_dio',caption:'certificado do curso'},
        {title:'Parcerias que Conectam — Scrum + Kanban',type:'Escola Politécnica PUCPR · abr. 2026',description:'Oficina de gestão de projetos na prática, na 2ª edição do Parcerias que Conectam.',image:'cert_scrum',caption:'certificado da oficina'}
      ]}
    },
    en: {
      projects:{label:'Projects · working archive',items:[
        {title:'Bloody Mary — DATASUS',type:'Data & automation · Python',description:'Extraction and treatment of SUS hemotherapy records, with an interactive dashboard on top. I proposed the solution and built the collection and cleaning modules.',image:'datasus',caption:'the DATASUS dashboard',url:'https://github.com/ribasgiovanna/datasus',link:'View repository'},
        {title:'Corrida para a Faculdade',type:'2D Game · Pygame',description:'A student running late crosses the city. A solo project with physics, obstacles, game states and high scores.',image:'game',caption:'a bit of gameplay',credit:'Visual assets generated with the help of ChatGPT.',url:'https://github.com/ribasgiovanna/jogo-atrasado-para-a-faculdade',link:'View repository'},
        {title:'Pibble Express',type:'Web development · Django',description:'Academic logistics system. My contribution covers employees, delivery integration, dashboard and forms.',image:'pibble',caption:'keeping the operation organized',url:'https://github.com/ribasgiovanna/pibble_express',link:'View repository'},
        {title:'Monitor de Bueiros',type:'IoT prototype · ESP32 & Blynk',description:'Level monitoring and alerts to explore urban-drainage problems. Academic team project.',image:'iot',caption:'dashboard in progress',url:'https://youtu.be/_Lq13BLEQ2o',link:'Watch project video'},
        {title:'Clínica Veterinária',type:'Processes · BPMN',description:'Interviews and process modeling for appointments, stock and people management. Team project.',image:'bpmn',caption:'understanding the processes',url:'https://drive.google.com/file/d/1vz2DTqKIOmveiAA17f5Lz_a-c5_N7zTZ/view',link:'View manual and diagrams'},
        {title:'Make a Pause',type:'Ongoing academic project · Software Engineering',description:'A platform to support teenagers’ emotional self-regulation at school: students do guided activities, log their mood before and after, and can ask for help or flag that they need to step out of class. Teachers and psychologists follow the records, each with their own permissions. Team project, currently in the requirements phase.',icon:'chinchilla',iconLabel:'Chinchilla, the Make a Pause mascot',url:'https://github.com/ribasgiovanna/mkpause',link:'View repository'},
        {title:'Doggo',type:'Ongoing academic project · IoT',description:'An ESP32 acting as an HTTP server for a pet station — it tracks water temperature, doses food by weight and switches the water fountain, from a web page and a small REST API.',icon:'dog',iconLabel:'Dog, the Doggo mascot'},
        {title:'AdversIA',type:'Hackathon · AI legal assistant',description:'An assistant for family-law lawyers: reviews the case documents as if it were the opposing side, surfacing contradictions, unproven claims and hard questions before the hearing. Prototype built with a team at the Hackathon da Cidadania OAB/PR 2026.',image:'adversia',focus:'left top',caption:'the home screen',url:'https://adversia.vercel.app',link:'Visit the live site'},
        {title:'Cobot',type:'Discord bot · Python',description:'Discord bot for Coffee & Code: the team posts events to the forum with a single command, and the bot deletes the post on its own once registration closes. Runs 24/7 on an Oracle Cloud VM as a systemd service, with SQLite keeping track of active events.',image:'cobot',caption:'the Cobot mascot'}
      ]},
      tech:{label:'Technologies · tools in use',items:[
        {title:'Data & automation',type:'Collection, cleaning & RPA',description:'Tools I use to collect, clean and present data, and to automate repetitive work.',tools:['Python','pandas','openpyxl','Selenium','Playwright','BeautifulSoup','Streamlit','Excel'],url:'https://github.com/ribasgiovanna/datasus',link:'See it applied in the project'},
        {title:'Back-end & APIs',type:'Services & business logic',description:'APIs, authentication and data access, at my internship and in academic projects.',tools:['FastAPI','Pydantic','SQLAlchemy','Alembic','Django','Django REST Framework','Node.js','Express','Prisma'],url:'https://github.com/ribasgiovanna/pibble_express',link:'See it applied in the project'},
        {title:'Front-end',type:'Web interfaces',description:'Building interfaces, forms and dashboards.',tools:['HTML + CSS','JavaScript','TypeScript','React','Next.js']},
        {title:'Databases',type:'Querying & organization',description:'Relational and non-relational databases I work with day to day.',tools:['SQL','SQL Server','PostgreSQL','MongoDB','SQLite','SSMS']},
        {title:'AI & integrations',type:'LLMs & agents',description:'Bringing language models into applications and tools.',tools:['Claude API','OpenAI API','MCP'],url:'https://adversia.vercel.app',link:'See it applied in AdversIA'},
        {title:'Testing',type:'Quality',description:'Automated back-end, front-end and end-to-end tests.',tools:['pytest','Jest','Testing Library','Playwright']},
        {title:'Deploy & environment',type:'Infrastructure & OS',description:'Containers, continuous integration and the environment I develop in.',tools:['Docker','Docker Compose','GitHub Actions','Nginx','Oracle Cloud','Ubuntu','PowerShell']},
        {title:'Building & organizing',type:'Code & processes',description:'Version control, code editing and business-process modeling.',tools:['Git','GitHub','VS Code','Bizagi Modeler']},
        {title:'Visual creation',type:'Graphic design & illustration',description:'Poster composition, image treatment, illustration and communication materials.',tools:['Figma','Affinity','Photoshop','Procreate','Canva'],url:'https://www.behance.net/ribestudio',link:'See graphic design on Behance'}
      ]},
      certs:{label:'Learning & education · records',items:[
        {title:'Software Engineering',type:'PUCPR · started in 2026',description:'Degree in progress, in Curitiba.',record:'PUCPR',recordSub:'ACADEMIC DEGREE',recordBottom:'In progress'},
        {title:'Python Programming',type:'Escola Harve · Jan.–Apr. 2026',description:'Python training that also gave rise to Bloody Mary, a project built with a team.',image:'harve',caption:'the Harve cohort'},
        {title:'Iniciação científica — FICEM',type:'Colégio Bom Jesus · 2024',description:'Research on the science of dreams, including the presentation and video.',image:'cert_ficem',caption:'participation certificate',url:'https://drive.google.com/file/d/1v3gQgXM4yTNJDaBZlyMATUE02FfPQoqw/view?usp=sharing',link:'View scientific-initiation PDF'},
        {title:'Data Engineering & Machine Learning',type:'DIO · Mar. 2026',description:'Fundamentals course in Data Engineering and Machine Learning.',image:'cert_dio',caption:'course certificate'},
        {title:'Parcerias que Conectam — Scrum + Kanban',type:'PUCPR Polytechnic School · Apr. 2026',description:'Project-management-in-practice workshop, in the 2nd edition of Parcerias que Conectam.',image:'cert_scrum',caption:'workshop certificate'}
      ]}
    }
  };
  let library = LIBRARY[currentLangKey()];

  const escapeText=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function selectFolder(id){
    if(id===active)return;
    if(!reader.hidden)closeReader(false);
    const old=new Map(folders.map(f=>[f,getComputedStyle(f).transform]));
    folders.forEach(f=>f.getAnimations().forEach(a=>a.cancel()));
    order=[id,...order.filter(x=>x!==id)];active=id;
    folders.forEach(f=>{
      const depth=order.indexOf(f.dataset.folder);
      f.dataset.depth=String(depth);
      f.querySelector('.gr-tab').setAttribute('aria-pressed',String(depth===0));
      f.querySelector('.gr-cover').inert=depth!==0;
      if(!reduce.matches){
        const to=getComputedStyle(f).transform;
        const from=old.get(f);
        if(depth===0){
          const lifted=root.clientWidth<=540?28:39;
          f.animate([{transform:from},{transform:`translateY(${lifted}px) rotate(-3deg) scale(1.012)`,offset:.4},{transform:to}],{duration:740,easing:'cubic-bezier(.22,.7,.22,1)'});
        }else f.animate([{transform:from},{transform:to}],{duration:650,easing:'cubic-bezier(.2,.75,.2,1)'});
      }
    });
    announcement.textContent=strings().announceSelect(strings().folderNames[id]);
  }
  const ICONS={chinchilla:'<svg viewBox="0 0 120 100" fill="none" stroke="#6d4835" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M86 70c10 1 16-7 14-16-1-6-7-8-10-4"/><circle cx="41" cy="28" r="13" fill="#eee6d3"/><circle cx="79" cy="28" r="13" fill="#eee6d3"/><path d="M36 31a6 6 0 0 1 8-8M84 31a6 6 0 0 0-8-8"/><path d="M60 32c17 0 29 11 29 27 0 16-13 25-29 25S31 75 31 59c0-16 12-27 29-27z" fill="#eee6d3"/><circle cx="50" cy="55" r="1.8" fill="#6d4835" stroke="none"/><circle cx="70" cy="55" r="1.8" fill="#6d4835" stroke="none"/><path d="M58 62l2 2 2-2M60 64v2M56 67q2 2 4 0q2 2 4 0"/><path d="M53 64l-14-3M53 66l-14 2M67 64l14-3M67 66l14 2"/><path d="M49 84q2 4 6 1M71 84q-2 4-6 1"/></svg>',dog:'<svg viewBox="0 0 120 100" fill="none" stroke="#6d4835" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M60 22c17 0 28 12 28 29 0 17-12 29-28 29S32 68 32 51c0-17 11-29 28-29z" fill="#eee6d3"/><path d="M37 32c-8-2-14 6-13 17 1 9 5 14 10 12"/><path d="M83 32c8-2 14 6 13 17-1 9-5 14-10 12"/><circle cx="50" cy="48" r="1.8" fill="#6d4835" stroke="none"/><circle cx="70" cy="48" r="1.8" fill="#6d4835" stroke="none"/><path d="M55 57q5-3 10 0q-2 4-5 4t-5-4z"/><path d="M60 61v4M60 65q-4 4-8 1M60 65q4 4 8 1"/><path d="M44 77q16 7 32 0"/><circle cx="60" cy="84" r="2.5"/></svg>'};
  function itemMarkup(item){
    let visual='';
    const card=active==='projects'?' gr-card':'';
    if(item.image) visual=`<figure class="gr-sheet-image${card}"><img src="${assets[item.image]}" alt="${escapeText(item.title)}"${item.focus?` style="object-position:${item.focus}"`:''}><figcaption>${escapeText(item.caption||'')}</figcaption></figure>`;
    else if(item.tools) visual=`<div class="gr-tool-sheet" aria-label="${currentLangKey()==='pt'?'Ferramentas':'Tools'}">${item.tools.map(t=>'<span>'+escapeText(t)+'</span>').join('')}</div>`;
    else if(item.icon) visual=`<div class="gr-icon-sheet gr-icon-sheet--${item.icon}${card}" role="img" aria-label="${escapeText(item.iconLabel||item.title)}">${ICONS[item.icon]||''}</div>`;
    else if(item.pause) visual=`<div class="gr-pause-sheet${card}"><span>Make<br>a Pause.</span><small>${strings().pauseSub}</small></div>`;
    else visual=`<div class="gr-record-sheet${card}"><small>${escapeText(item.recordSub||'')}</small><strong>${escapeText(item.record||item.title)}</strong><span class="gr-record-stamp">${escapeText(item.recordBottom||'')}</span></div>`;
    const links=item.links?item.links:(item.url?[{url:item.url,label:item.link}]:[]);
    const linksHtml=links.length?`<div class="gr-sheet-links">${links.map(l=>`<a class="gr-sheet-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeText(l.label)} ↗</a>`).join('')}</div>`:'';
    return `<div class="gr-sheet-layout">${visual}<div class="gr-sheet-copy"><p class="gr-sheet-type">${escapeText(item.type)}</p><h3>${escapeText(item.title)}</h3><p class="gr-sheet-description">${escapeText(item.description)}</p>${linksHtml}${item.credit?`<p class="gr-sheet-credit">${escapeText(item.credit)}</p>`:''}</div></div>`;
  }
  function renderSheet(direction=0){
    const collection=library[active];
    const item=collection.items[page];
    sheet.innerHTML=itemMarkup(item);
    root.querySelector('.gr-reader-label').textContent=collection.label;
    root.querySelector('.gr-page-number').textContent=String(page+1).padStart(2,'0')+' / '+String(collection.items.length).padStart(2,'0');
    prev.disabled=page===0;next.disabled=page===collection.items.length-1;
    announcement.textContent=strings().announceSheet(item.title,page+1,collection.items.length);
    if(turnAnimation)turnAnimation.cancel();
    if(direction&&!reduce.matches)turnAnimation=sheet.animate([{opacity:.2,transform:`translateX(${direction*20}px) rotate(${direction*.7}deg)`},{opacity:1,transform:'translateX(0) rotate(0)'}],{duration:310,easing:'cubic-bezier(.2,.7,.2,1)'});
  }
  function openReader(id,opener){
    if(active!==id)selectFolder(id);
    page=0;lastOpener=opener;
    reader.hidden=false;root.dataset.reading='true';
    folders.forEach(f=>f.inert=true);
    renderSheet();
    if(!reduce.matches)reader.animate([{opacity:.1,transform:'translateY(120px) rotate(-4deg) scale(.92)'},{opacity:1,transform:'translateY(0) rotate(0) scale(1)'}],{duration:520,easing:'cubic-bezier(.2,.75,.2,1)'});
    returnButton.focus({preventScroll:true});
  }
  function closeReader(restore=true){
    reader.getAnimations().forEach(a=>a.cancel());
    reader.hidden=true;root.dataset.reading='false';
    folders.forEach(f=>f.inert=false);
    if(restore&&lastOpener)lastOpener.focus({preventScroll:true});
    announcement.textContent=strings().announceClose(strings().folderNames[active]);
  }
  folders.forEach(f=>f.querySelector('.gr-tab').addEventListener('click',()=>selectFolder(f.dataset.folder)));
  root.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openReader(b.dataset.open,b)));
  returnButton.addEventListener('click',()=>closeReader());
  prev.addEventListener('click',()=>{if(page>0){page--;renderSheet(-1);if(prev.disabled)next.focus({preventScroll:true});}});
  next.addEventListener('click',()=>{if(page<library[active].items.length-1){page++;renderSheet(1);if(next.disabled)prev.focus({preventScroll:true});}});
  root.addEventListener('keydown',event=>{
    if(reader.hidden)return;
    if(event.key==='Escape'){event.preventDefault();closeReader();}
    else if(event.key==='ArrowRight'&&page<library[active].items.length-1){event.preventDefault();page++;renderSheet(1);}
    else if(event.key==='ArrowLeft'&&page>0){event.preventDefault();page--;renderSheet(-1);}
  });

  /* bilingual hook: the site's own #lang button already flips document
     lang + re-scans [data-i18n]; here we just swap the item library and,
     if a sheet is open, re-render the same page in the new language. */
  const langBtn = document.getElementById('lang');
  if (langBtn) langBtn.addEventListener('click', () => {
    library = LIBRARY[currentLangKey()];
    if (!reader.hidden) {
      renderSheet();
      /* clicking the site's lang toggle (outside #gr-archive) moves focus
         there; without this, a follow-up Escape would miss root's keydown
         listener and fail to close the still-open reader */
      returnButton.focus({preventScroll:true});
    }
  });
});

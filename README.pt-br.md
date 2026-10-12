# ribasgiovanna.github.io

[English](README.md) · Português

Portfólio pessoal de **Giovanna Ribas** — engenharia de software, automação de dados,
tecnologia criativa, design visual e trabalho em comunidade.

O site é o destino: projetos, trabalhos criativos e comunidade aparecem na própria
página. GitHub, Behance e LinkedIn são aprofundamentos opcionais, não o lugar onde
finalmente se vê o trabalho.

**Site:** https://ribasgiovanna.github.io/

## Stack

**HTML + CSS + JavaScript** puros. Sem framework e sem etapa de build. Hospedado no
GitHub Pages.

- `Fraunces` (serifada de destaque) + `Inter` (texto) + monoespaçada do sistema (rótulos),
  via Google Fonts. `Caveat` e `DM Mono`/`DM Sans` são carregadas só para o componente
  Archive, descrito abaixo.
- Tema claro e escuro (`prefers-color-scheme`), responsivo até 320px
- Alternância de idioma EN/PT (veja abaixo), modais acessíveis e filtros na galeria
- HTML semântico, skip link, foco visível e respeito a `prefers-reduced-motion`
- `loading="lazy"` + `decoding="async"` em toda imagem abaixo da primeira dobra

## Estrutura

```
.
├── index.html            # todo o conteúdo
├── style.css             # sistema editorial: tokens, layout, seções
├── script.js             # dicionário de i18n, filtros, modais, linha narrativa ligada à rolagem
├── gr-archive.html-in-index / gr-archive.css / gr-archive.js
│                         # o componente de pastas "Archive" (Projects / Technologies /
│                         # Learning), um widget autocontido; os próprios textos de
│                         # projetos e certificados ficam na LIBRARY dentro do gr-archive.js
├── 404.html
└── assets/
    ├── images/
    │   ├── profile/      # foto do cartão de identidade
    │   ├── about/        # retrato da seção About + adesivos recortados da linha narrativa
    │   ├── tech/          # capturas reais dos projetos (webp)
    │   ├── certs/         # certificados e diplomas usados dentro do Archive
    │   ├── coffee-code/   # pôster do clube
    │   ├── community/     # fotos reais de eventos + certificados de Community & Events
    │   └── playground/    # design / ilustração / fotografia / comida, por categoria
    └── og/                # imagem de compartilhamento og.png
```

## Editando o conteúdo

- O texto em inglês fica no `index.html`. Todo elemento traduzível tem `data-i18n="chave"`.
- Os dois idiomas ficam no objeto `I18N = { en, pt }` do `script.js`. Mantenha as duas
  metades sincronizadas **por chave**: é a única regra que impede o alternador de
  idioma de sair de sincronia.
- Os textos próprios do Archive (projetos, tecnologias e aprendizados) ficam separados,
  no objeto bilíngue `LIBRARY` dentro do `gr-archive.js`, e não no `I18N` do `script.js`.
- Para adicionar uma imagem real, coloque o arquivo na pasta `assets/images/...`
  correspondente e use-o diretamente em um `<img>` (as imagens do Archive passam pelo
  bloco JSON `#gr-archive-assets` e são referenciadas por chave no `gr-archive.js`).

## Rodando localmente

Sem build. Abra o `index.html` ou rode:

```bash
python -m http.server
```

## Publicação

Faça push na `main`. O GitHub Pages serve a raiz do repositório. Confira o site depois de
cada push.

## Privacidade e transparência

- Nenhum código, captura de tela, endpoint, arquitetura, chamado, dado de cliente ou
  material interno de empresa. A experiência profissional é descrita apenas no nível
  das competências.
- O jogo *Corrida para a Faculdade*: o código é da Giovanna; os elementos visuais foram
  gerados por IA e estão identificados assim no site.
- Os projetos em equipe (DATASUS, Pibble Express, Clínica Veterinária) creditam os
  colaboradores e informam a contribuição específica da Giovanna.
- As fotos de comunidade são escolhidas com cuidado: sem rostos de crianças em contextos
  sensíveis, sem crachás legíveis ou dados pessoais.

## Créditos

Design e desenvolvimento: Giovanna Ribas. As capturas dos projetos foram geradas a partir
das aplicações e dos dados reais dos repositórios citados.

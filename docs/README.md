# Rede Solidária Brasil

Rede Solidária Brasil é uma plataforma web estática que conecta ONGs brasileiras a voluntários e doadores. Esta é a Entrega I do projeto, contendo três páginas semânticas, formulário avançado e recursos de acessibilidade, SEO e desempenho.

## Como rodar

1. Clone ou faça download deste repositório.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou `Ctrl+O` → selecionar o arquivo).
3. Navegue pelas páginas utilizando o menu principal.

## Estrutura de pastas

```
/
├── index.html
├── projetos.html
├── cadastro.html
├── assets/
│   ├── icons/
│   │   └── logo.svg
│   └── img/
│       ├── hero-colaboracao.svg
│       ├── projeto-educacao.svg
│       ├── projeto-meio-ambiente.svg
│       ├── projeto-saude.svg
│       └── og-image.svg
├── css/
│   ├── styles.css
│   └── styles.min.css
├── js/
│   ├── masks.js
│   ├── validate.js
│   ├── main.js
│   └── main.min.js
├── docs/
│   ├── README.md
│   └── ACCESSIBILITY.md
├── LICENSE
└── .editorconfig
```

## Checklist de validação

- [ ] 3 páginas HTML5 semânticas criadas (index, projetos, cadastro) e **válidas no W3C**.
- [ ] Hierarquia de títulos correta (um `h1` por página).
- [ ] Formulário com todos os campos, agrupamentos, **máscaras** e **validação nativa**.
- [ ] Acessibilidade: navegação por teclado, labels, foco visível, mensagens de erro acessíveis.
- [ ] Responsividade mobile-first + breakpoints (480/768/1024).
- [ ] Desempenho básico: CSS/JS minificados, `loading="lazy"`.
- [ ] SEO básico com `<title>`, `meta description`, OG tags.
- [ ] Repositório com estrutura solicitada e arquivos de documentação.

Marque cada item após validar manualmente ou com as ferramentas indicadas (ex.: [W3C Markup Validation Service](https://validator.w3.org/)).

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub e envie todos os arquivos para a branch `main`.
2. No GitHub, acesse **Settings** → **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/` (root), depois clique em **Save**.
5. Aguarde a publicação e acesse a URL fornecida pelo GitHub Pages.

## Créditos

Projeto desenvolvido como entrega inicial da plataforma Rede Solidária Brasil.

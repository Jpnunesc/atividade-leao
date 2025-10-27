# Acessibilidade na Rede Solidária Brasil

Esta documentação resume os requisitos de acessibilidade (WCAG 2.1 AA) implementados no projeto e orienta como verificá-los.

## Recursos implementados

- **Estrutura semântica**: uso de `header`, `main`, `section`, `article`, `nav`, `footer` e hierarquia correta de títulos (Guideline 1.3 - Adaptable).
- **Texto alternativo**: todas as imagens possuem `alt` descritivo ou contexto adequado (1.1 - Text Alternatives).
- **Navegação por teclado**: todos os componentes interativos podem ser acessados via `Tab`, com foco visível customizado (2.1 - Keyboard, 2.4 - Navigable).
- **Skip link**: link "Ir para o conteúdo principal" disponível para leitores de tela e navegação por teclado (2.4.1 - Bypass Blocks).
- **Contraste**: paleta segue contraste mínimo 4.5:1 para textos e botões (1.4.3 - Contrast Minimum).
- **Formulário acessível**: `label` associado a cada campo, uso de `aria-describedby`, mensagens de erro com `role="alert"` e atributos `aria-invalid` (3.3 - Input Assistance).
- **Responsividade**: layout responsivo com breakpoints garantindo legibilidade em dispositivos móveis (1.4.10 - Reflow).
- **Preferência de movimento reduzido**: tratamento de `prefers-reduced-motion` para minimizar animações (2.3 - Seizures and Physical Reactions).

## Como testar

1. **Teclado**: utilize somente `Tab`, `Shift+Tab`, `Enter` e `Espaço` para navegar. Verifique se o foco segue ordem lógica e é sempre visível.
2. **Leitores de tela**: teste com NVDA, VoiceOver ou Narrator. Confirme leitura correta dos rótulos, mensagens de erro e da hierarquia de títulos.
3. **Validação de contraste**: use ferramentas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) com as cores definidas em `css/styles.css`.
4. **Validador W3C**: envie cada página (HTML) para o [W3C Validator](https://validator.w3.org/). Corrija eventuais alertas.
5. **Testes responsivos**: redimensione o navegador ou use ferramentas de device toolbar para testar nos tamanhos 360px, 768px e 1024px.
6. **Preferências do usuário**: habilite "reduzir movimento" no sistema operacional e confira se animações ficam desabilitadas.

## Próximos passos sugeridos

- Criar versões com tradução em Libras e legendas para vídeos.
- Implementar modo alto contraste alternativo.
- Adicionar testes automatizados (ex.: axe-core) no pipeline de publicação.

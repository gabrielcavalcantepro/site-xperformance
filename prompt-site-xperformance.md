# Prompt — Desenvolvimento do Site X Performance Digital

---

## Contexto geral

Você vai construir o site institucional/landing page da **X Performance Digital**, uma agência de marketing digital focada em PMEs e negócios locais. O site é uma página única (single-page), com scroll contínuo e âncoras de navegação.

O visual de referência é o site **kemetdigital.com.br**. Estude ele mentalmente como referência de estrutura, hierarquia, densidade de informação, alternância de fundos claros e escuros, tipografia bold e cards. **A identidade visual, cores e conteúdo serão completamente diferentes** — só o estilo de layout, sofisticação e estrutura de seções devem ser inspirados nele.

---

## Identidade visual da X Performance Digital

### Paleta de cores
- **Fundo primário:** `#151515` (quase preto, usado na maioria das seções)
- **Fundo alternativo escuro:** `#000000` (preto puro, para seções de destaque máximo)
- **Fundo claro (seção de contraste):** `#f2f2f0` ou `#fafafa` — usado em 1 ou 2 seções para quebrar o ritmo visual, exatamente como a Kemet faz
- **Cor de destaque / acento:** `#fad214` (amarelo vibrante — substitui o laranja/roxo da Kemet em todos os contextos: CTAs, ícones de acento, pontos de marcação, bordas de blockquote, números de seção, hover de cards)
- **Texto principal:** `#ffffff`
- **Texto secundário / subtítulos:** `#a0a0a0` ou similar (cinza claro)
- **Bordas de cards:** sutis, em tom levemente mais claro que o fundo

### Logo
- O arquivo da logo será fornecido separadamente. Utilize a versão branca em fundos escuros e a versão escura (preta) nos fundos claros.
- A logo deve aparecer no navbar e no footer.

### Tipografia
- Use uma fonte display/grotesk bold e moderna para os headings (algo como Inter, Sora, Outfit, ou similar disponível no Google Fonts). Os títulos de seção devem ser grandes, pesados e impactantes.
- Corpo de texto em peso regular, com boa legibilidade.
- Nomes de seção (ex: "01 · SOLUÇÕES") em caixa alta, tamanho pequeno, espaçamento de letras amplo, cor `#fad214`.

### Glow / gradiente de fundo
- Na Hero e em seções escuras, aplicar um efeito de brilho/glow difuso na cor `#fad214` com baixa opacidade (como se houvesse uma luz amarela suave iluminando o fundo de forma radial). Não deve ser agressivo — sutil, assim como a Kemet usa roxo.
- Algumas seções escuras podem ter um gradiente radial do preto para um tom muito escuro de amarelo.

### Animações e microinterações
- Entradas de elementos com fade-in + leve slide-up conforme o scroll (sem exageros).
- Cards com hover suave: elevação (shadow), borda levemente iluminada em `#fad214`, transição suave.
- O carrossel de logos de clientes deve ter rolagem horizontal contínua e automática (marquee/infinite scroll).
- CTAs com leve efeito de brilho ou shimmer no hover.
- Números da seção de stats podem ter efeito de contagem ao entrar na viewport.
- Transições de seção suaves.

---

## Estrutura de seções (ordem da página)

---

### SEÇÃO 01 — NAVBAR (fixa no topo)

**Comportamento:** Fixa durante o scroll. Em fundo transparente no topo, com leve blur/glassmorphism ao rolar.

**Conteúdo:**
- Pill/cápsula com fundo semi-transparente e blur de fundo (exatamente como a Kemet faz com o navbar em forma de cápsula centralizada)
- **Esquerda:** Logo da X Performance + texto pequeno em caixa alta: `SISTEMA DE PERFORMANCE`
- **Centro:** Links de navegação: `Soluções` · `A X Performance` · `Fundadores` · `Atributos` · `Contato`
- **Direita:** Botão com ícone do WhatsApp + texto `WhatsApp`, borda arredondada

**Botão flutuante fixo no canto inferior direito da tela (em todo o site):**
- Ícone WhatsApp + `Falar com a X Performance`
- Fundo escuro arredondado

---

### SEÇÃO 02 — HERO

**Fundo:** `#000000` com glow radial amarelo (`#fad214`) difuso e suave ao centro/direita do fundo. Efeito de textura ou ruído sutil opcional.

**Conteúdo (centralizado):**

Badge topo:
```
● SISTEMA DE CRESCIMENTO DE PERFORMANCE
```
(pill pequena, fundo escuro com borda sutil, ponto amarelo)

Headline principal (grande, bold, centralizada):
```
Marketing que coloca
resultado no caixa
do empreendedor.
```
*(a palavra "resultado" em destaque na cor `#fad214`)*

Subtítulo:
```
Para PMEs e negócios locais. Tráfego, UI/UX Design, desenvolvimento,
SEO/GEO e automação com IA integrados em um sistema único.
```

Dois botões lado a lado:
- **Botão primário (amarelo `#fad214`, texto escuro, bold):** `Quero o diagnóstico gratuito →`
- **Botão secundário (fundo escuro, borda, texto branco):** `Ver como a gente trabalha`

Texto de confiança abaixo dos botões:
```
Sem cobrança. Sem proposta automática. Se não fizer sentido, a gente diz.
```

**Placeholder de imagem / elemento visual:** Logo da agência ou ícone animado ao fundo (deixar espaço para um elemento gráfico ou imagem de fundo, indicando com um comentário no código onde será inserido).

---

### SEÇÃO 03 — CLIENTES / PARCEIROS (carrossel)

**Fundo:** `#151515` (continuação da hero, sem quebra brusca)

**Conteúdo:**
- Label pequena em caixa alta à esquerda: `OPERAÇÃO ATIVA COM MARCAS NACIONAIS` (com ponto amarelo)
- Rolagem horizontal contínua e automática (marquee infinito) com logos de clientes em tons de branco/cinza

**Logos a incluir (deixar placeholders retangulares com o nome da empresa):**
- BW Outlet
- Inux
- TableGrill
- Georgia
- Spazzio
- Mafra
- HEX03
- Sasso
- CMGB
- Trio
- Acordfácil

*(Deixar cada logo como um retângulo placeholder `[LOGO: nome]` — o cliente vai substituir pelos arquivos reais)*

---

### SEÇÃO 04 — SOLUÇÕES

**Label:** `● 02 · SOLUÇÕES`

**Fundo:** `#151515`

**Headline:**
```
Cinco frentes. Um
sistema integrado.
```

**Subtítulo:**
```
Cada uma resolve uma etapa do crescimento: entender o cliente, montar a
oferta, atrair e converter. O resultado aparece quando elas trabalham juntas,
dentro de um mesmo sistema.
```

**Cards (grid — 3 na primeira linha, 2 na segunda):**

Cada card tem: ícone no topo esquerdo + badge de categoria (pill pequena com texto) no topo direito + título + descrição. Fundo de card ligeiramente mais claro que o fundo da seção. Borda sutil. Hover com borda amarela.

**Card 1 — Badge: `AQUISIÇÃO`**
- Ícone: alvo/target
- Título: `Tráfego Pago`
- Descrição: `Um fluxo constante de leads qualificados no Google, Meta e YouTube Ads, no volume que o seu comercial consegue atender.`

**Card 2 — Badge: `AQUISIÇÃO`**
- Ícone: layout/tela
- Título: `UI/UX Design`
- Descrição: `Interfaces que convertem, para web e celular, desenhadas a partir do funil de vendas e da jornada de quem compra.`

**Card 3 — Badge: `AQUISIÇÃO`**
- Ícone: código/colchetes
- Título: `Desenvolvimento Web`
- Descrição: `Sites e landing pages de alto padrão que carregam rápido, ranqueiam e vendem.`

**Card 4 — Badge: `SISTEMA`**
- Ícone: lupa/busca
- Título: `SEO / GEO`
- Descrição: `Sua empresa encontrada no Google e nas respostas das IAs, com tráfego orgânico que não depende de mídia paga.`

**Card 5 — Badge: `SISTEMA`**
- Ícone: robô/automação
- Título: `IA + CRM + Automação`
- Descrição: `Pipeline organizado, follow-up automático e agentes de IA no operacional repetitivo. Lead não se perde por falta de processo.`

*(Badge "AQUISIÇÃO" com fundo roxo/escuro como Kemet, mas usar tom neutro escuro ou usar `#fad214` com text escuro para diferenciação — escolha o que ficar mais elegante com a identidade amarela)*

---

### SEÇÃO 05 — A X PERFORMANCE

**Fundo:** `#f2f2f0` ou `#fafafa` (seção clara — contraste com as demais)

**Cor do texto:** quase preto `#111111`

**Label:** `● 03 · A X PERFORMANCE` (ponto amarelo, resto em cinza escuro)

**Headline:**
```
Não somos uma agência
de marketing comum.
```

**Texto:**
```
A maioria das agências entrega trabalho solto — uma campanha aqui, um conteúdo
ali — e some depois que o contrato é assinado. A X Performance trabalha o conjunto:
entender o cliente, montar a oferta, atrair e converter, tudo conectado. Por isso a
relação dura anos. O que segura o cliente é o resultado, não o contrato.
```

**Blockquote destacado** (com borda esquerda na cor `#fad214`, fundo levemente diferenciado):
```
"A gente fala quando não somos o caminho certo.
E quando somos, o resultado aparece no caixa."
```

**Sub-label abaixo:**
```
MARCAS QUE CONFIAM NA X PERFORMANCE
```

**Faixa de logos** (igual ao carrossel da seção 03, mas estática ou leve — fundo preto, logos brancos, dentro de um container arredondado/pill largo):
- Mesmos logos da seção 03 como placeholders

**Caption abaixo:**
```
Atendemos marcas nacionais e negócios locais ao mesmo tempo,
o que mostra a nossa profundidade técnica.
```

---

### SEÇÃO 06 — OS FUNDADORES

**Fundo:** `#151515` (volta ao escuro)

**Label:** `● 04 · OS FUNDADORES`

**Layout:** Duas colunas (ou dois blocos lado a lado que empilham no mobile)

---

**Bloco Fundador 1 (coluna esquerda):**

Placeholder de imagem (foto quadrada/retangular com bordas arredondadas):
```
┌─────────────────────┐
│                     │
│   [FOTO: Fundador   │
│     Principal]      │
│                     │
│  NOME · CARGO       │
└─────────────────────┘
```
*(Indicar no código: `/* INSERIR FOTO DO FUNDADOR AQUI */`)*

**Conteúdo ao lado direito do bloco:**
- Label: `[NOME DO FUNDADOR]` em amarelo `#fad214`, caixa alta
- Headline: `+15 anos construindo sistemas que vendem.`
- Blockquote: `Construímos sistemas que geram caixa para quem empreende.`
- Texto: `Venda consultiva, técnica e sem pressa. [Nome] entra na conversa para entender o seu negócio antes de propor qualquer coisa, e fala com honestidade quando a X Performance não é o caminho. É essa relação que faz o cliente ficar mais de dez anos com a gente.`

---

**Bloco Fundador 2 (coluna direita ou abaixo):**

Placeholder de imagem:
```
┌─────────────────────┐
│                     │
│   [FOTO: Fundador   │
│         2]          │
│                     │
│  NOME · CARGO       │
└─────────────────────┘
```

**Conteúdo ao lado:**
- Label: `[NOME DO FUNDADOR 2]` em amarelo
- Headline: `10 anos desenvolvendo times e estratégias.`
- Blockquote: `Gestão, pessoas e processo: o que transforma marketing em resultado recorrente.`
- Texto: `[Breve bio do segundo fundador. Especialidade, abordagem, diferencial. Deixar espaço para o cliente preencher com o texto correto.] ← PLACEHOLDER DE TEXTO`

---

### SEÇÃO 07 — ATRIBUTOS (Como a X Performance trabalha)

**Fundo:** `#fafafa` (claro novamente — segunda seção clara da página)

**Cor do texto:** `#111111`

**Label:** `● 05 · ATRIBUTOS`

**Headline:**
```
Como a X Performance trabalha.
```

**Subtítulo:**
```
Cinco traços que aparecem em toda conversa, todo projeto, toda entrega.
```

**Cards (grid — 3 na primeira linha, 2 na segunda):**

Fundo branco, borda sutil, número da cor `#fad214`, título bold, texto descritivo.

**Card 01:**
- Título: `Observa antes de falar`
- Descrição: `Escuta com atenção de verdade, para entender o seu contexto antes de propor qualquer coisa.`

**Card 02:**
- Título: `Confronta com respeito`
- Descrição: `Questiona planos e desafia certezas, sempre com cuidado, nunca com arrogância.`

**Card 03:**
- Título: `Profunda além do esperado`
- Descrição: `Conhece a fundo marketing, tecnologia e operação — mais áreas do que costuma aparentar.`

**Card 04:**
- Título: `Humana e presente`
- Descrição: `Reconhece o esforço de quem empreende e dá atenção total a cada conversa.`

**Card 05:**
- Título: `Prova antes de proclamar`
- Descrição: `Não anuncia o que é. Mostra pelo que entrega, com resultado que dá para acompanhar e medir.`

---

### SEÇÃO 08 — EM NÚMEROS

**Fundo:** `#000000` (preto puro — destaque máximo)

**Label:** `● 06 · EM NÚMEROS`

**Headline:**
```
O que sustenta o discurso.
```

**Quatro stats em linha (com divisores verticais sutis entre eles):**

| Número | Descrição |
|--------|-----------|
| `+15` | anos de experiência acumulada |
| `+100` | marcas e negócios atendidos |
| `+10` | estados do Brasil com clientes ativos |
| `5` | frentes integradas em um sistema |

*(Números grandes, bold, branco. Ao entrar na viewport, contar de 0 até o valor final com animação de contagem.)*

---

### SEÇÃO 09 — CASES / RESULTADOS

**Fundo:** `#151515`

**Label:** `● 07 · CASES`

**Headline:**
```
Resultado que aparece
no caixa.
```

**Subtítulo:**
```
Não falamos do que fazemos. Mostramos o que entregamos.
```

**Três cards de case (layout em grid):**

**Case 1:**
- Placeholder: `[LOGO: BW Outlet]`
- Resultado destaque: `+300%` em vendas
- Texto: `Saímos de um canal de vendas e fomos para 3 canais com crescimento de mais de 300% em vendas. Desenvolvemos estratégias internas para movimentar a marca e um time de marketing focado em mídias sociais.`

**Case 2:**
- Placeholder: `[LOGO: Inux]`
- Resultado destaque: `CRM + Time`
- Texto: `Criamos processos de vendas dentro do CRM para acompanhar todos os indicadores de conversão. Mais de 70 colaboradores com canais de mídia criados do zero.`

**Case 3:**
- Placeholder: `[LOGO: TableGrill]`
- Resultado destaque: `De R$280k para R$780k`
- Texto: `Faturamento triplicado em doze meses. Criamos as estratégias para entrada da marca nos marketplaces, integrando departamentos de vendas aos PDVs.`

*(Cada card com fundo levemente mais claro, borda sutil, número/resultado em `#fad214` grande, e um separador elegante.)*

---

### SEÇÃO 10 — DIAGNÓSTICO / CONTATO

**Fundo:** Gradiente escuro `#151515` → `#0a0a0a`, com glow amarelo sutil ao fundo

**Layout:** Duas colunas — esquerda com copy, direita com formulário

**Coluna esquerda:**

Label: `● 08 · DIAGNÓSTICO`

Headline:
```
Diagnóstico
gratuito.
```

Texto:
```
Sem cobrança. A gente entende o seu cenário, aponta o gargalo e
diz com honestidade se faz sentido trabalhar junto. Se não fizer,
você sai com clareza mesmo assim.
```

**Três linhas de especificação (key-value em row):**
- `30 min` → `Tempo total da conversa`
- `Sem cobrança` → `Não faz sentido? A gente diz.`
- `1 dia útil` → `Tempo de resposta`

Texto alternativo:
```
Ou fale direto no WhatsApp: (85) 9 8840-5521
```
*(número em amarelo `#fad214`, clicável)*

**Coluna direita — Formulário:**

Container com fundo levemente mais escuro e borda sutil arredondada.

Label topo: `FORM · 06 CAMPOS` + `≤ 2 min` (à direita)

Campos:
1. `NOME *` → input texto, placeholder: `Seu nome`
2. `WHATSAPP *` → input, placeholder: `(00) 0 0000-0000`
3. `EMPRESA *` → input texto, placeholder: `Nome da sua empresa`
4. `SEGMENTO DO NEGÓCIO` → input, placeholder: `Clínica, restaurante, e-commerce...`
5. `FATURAMENTO MENSAL *` → select dropdown com placeholder `Selecione a faixa`
6. `O QUE ESTÁ TRAVANDO O RESULTADO HOJE?` → textarea, placeholder: `Opcional · contexto curto`

**Botão de submit (full width, amarelo `#fad214`, texto escuro bold):**
```
Agendar diagnóstico
```

Caption abaixo do botão:
```
Resposta em até 1 dia útil. Os dados são tratados conforme a LGPD
e usados só para retorno comercial.
```

---

### SEÇÃO 11 — FOOTER

**Fundo:** `#0a0a0a` ou `#000000`

**Layout 3 colunas:**

**Coluna 1 (esquerda):**
- Logo da X Performance (versão branca)
- Tagline em caixa alta, pequena: `SISTEMA · PERFORMANCE · ESCALA`
- Descrição: `Sistema de crescimento de receita para PMEs e negócios locais. Tráfego, UI/UX Design, desenvolvimento, SEO/GEO e automação com IA, tudo integrado.`

**Coluna 2 (centro):**
- Label: `NAVEGAR`
- Links: Soluções · A X Performance · Fundadores · Atributos · Cases · Contato

**Coluna 3 (direita):**
- Label: `CONTATO`
- `contato@xperformancedigital.com.br`
- `WhatsApp · (85) 9 8840-5521`
- `@xperformancedigital`
- `Fortaleza · CE`

**Barra inferior (abaixo de um divisor):**
- Esquerda: `© 2026 X Performance Digital · CNPJ [CNPJ AQUI]`
- Direita: `Privacidade · Termos` + `Feito em Fortaleza · atuação nacional`

---

## Notas técnicas sobre imagens

Em **todo lugar onde houver imagem** (fotos dos fundadores, logos de clientes), inserir um bloco visual placeholder claro no HTML/CSS com:
- Fundo cinza escuro (`#2a2a2a`) com bordas arredondadas
- Texto centralizado descrevendo o que vai ali (ex: `INSERIR FOTO — FUNDADOR 1`)
- Proporção correta (ex: 3:4 para retratos, 16:9 para banners, dimensões variadas para logos)
- Comentário no código indicando onde substituir

Exemplo de placeholder de foto:
```
[────────────────────]
│                    │
│   📷               │
│  FOTO FUNDADOR 1   │
│  (substituir aqui) │
│                    │
[────────────────────]
```

---

## Responsividade

O site deve funcionar perfeitamente em mobile (a maioria dos usuários acessará por celular). No mobile:
- Navbar vira hamburguer menu
- Grids de 3 colunas colapsam para 1 coluna
- A seção do fundador empilha (foto acima, texto abaixo)
- O formulário ocupa 100% da largura
- Os stats ficam em grid 2x2

---

## Tom e personalidade do site

O site deve transmitir **autoridade sem arrogância, sofisticação sem frieza**. O visual preto/amarelo é direto, confiante e premium — como uma agência que sabe o que faz e não precisa se vender muito. A copy é direta ao ponto, sem buzzwords vazios.

---

## Entregável esperado

Uma única página HTML (ou estrutura de projeto web — escolha a melhor abordagem técnica) que:
- Seja completamente funcional e navegável
- Tenha todos os efeitos visuais e animações descritos
- Tenha placeholders claros para todas as imagens
- Seja responsiva para mobile e desktop
- Tenha o formulário de contato com validação básica de campos obrigatórios
- Tenha links de WhatsApp funcionais (número: 5585988405521)

---

*Este documento contém tudo o que precisa para construir o site. Tome as melhores decisões técnicas e de implementação que achar adequadas para entregar o resultado descrito acima.*

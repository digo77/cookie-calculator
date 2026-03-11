# 🍪 Cookie Calculator Pro
### Calculadora Profissional de Cookies - Chef Áureo Magalhães

## 📋 O QUE É

Um app web completo que substitui a planilha Excel, com:

✅ **37 receitas profissionais** do Chef Áureo  
✅ **Calculadora inteligente** - escala automaticamente as quantidades  
✅ **3 idiomas** - Português, English, Español  
✅ **Conversão de unidades** - gramas ⇄ ounces ⇄ cups  
✅ **Lista de compras consolidada** - soma ingredientes de múltiplas receitas  
✅ **Precificação completa** - custo + margem + preço sugerido  
✅ **Dark mode** - perfeito para trabalhar à noite  
✅ **Mobile-first** - funciona perfeitamente no celular  
✅ **Salvamento automático** - LocalStorage guarda tudo

---

## 🚀 COMO RODAR (3 OPÇÕES)

### OPÇÃO 1: HOSPEDAGEM GRÁTIS NO VERCEL (Recomendado)

**Mais fácil e profissional - Deploy em 5 minutos!**

#### Passo 1: Criar conta no GitHub (se não tiver)
1. Acesse [github.com](https://github.com)
2. Clique em "Sign up" e crie uma conta grátis

#### Passo 2: Subir o código para o GitHub
1. Crie um novo repositório: [github.com/new](https://github.com/new)
2. Nome: `cookie-calculator-pro`
3. Público ou Privado (tanto faz)
4. Clique em "Create repository"

5. No seu computador, abra o terminal/CMD e rode:
```bash
cd [pasta onde você baixou os arquivos]
git init
git add .
git commit -m "Cookie Calculator Pro v1.0"
git remote add origin https://github.com/SEU_USUARIO/cookie-calculator-pro.git
git push -u origin main
```

#### Passo 3: Deploy no Vercel (GRÁTIS!)
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e use sua conta do GitHub
3. Clique em "New Project"
4. Selecione o repositório `cookie-calculator-pro`
5. Clique em "Deploy"

**PRONTO!** Em 2 minutos seu app estará no ar em um link tipo:
```
https://cookie-calculator-pro.vercel.app
```

#### Passo 4: Domínio Personalizado (Opcional)
No Vercel, vá em:
- Settings → Domains
- Adicione: `calculadora.casabrig.com.br`
- Siga as instruções para configurar o DNS

---

### OPÇÃO 2: RODAR LOCALMENTE NO SEU COMPUTADOR

**Para testar antes de publicar:**

#### Requisitos:
- Node.js instalado ([nodejs.org](https://nodejs.org))

#### Passos:
```bash
# 1. Navegar até a pasta do projeto
cd cookie-calculator-pro

# 2. Instalar dependências
npm install

# 3. Rodar o servidor local
npm run dev

# 4. Abrir no navegador
# Acesse: http://localhost:5173
```

Pronto! O app estará rodando no seu computador.

---

### OPÇÃO 3: EMBEDAR NO WORDPRESS (Não recomendado)

**Se você REALMENTE quiser dentro do WordPress:**

#### Método A: iFrame
1. Hospede o app no Vercel (Opção 1)
2. No WordPress, crie uma página
3. Adicione um bloco HTML
4. Cole o código:

```html
<iframe 
  src="https://seu-app.vercel.app" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none; border-radius: 10px;">
</iframe>
```

#### Método B: Plugin (Mais complexo)
1. Instale o plugin "WP React Plugin" ou "Insert Pages"
2. Configure o plugin para carregar o React app
3. Adicione o shortcode na página

**⚠️ IMPORTANTE**: Embedar no WordPress é **muito mais lento** que hospedar separadamente. Recomendo criar um **link/botão** na sua página do curso que leva para o app hospedado no Vercel.

Exemplo no WordPress:
```html
<a href="https://calculadora.casabrig.com.br" 
   class="button-primary" 
   style="background: #F59E0B; color: white; padding: 20px 40px; border-radius: 10px; font-size: 18px;">
   🍪 Acessar Calculadora de Cookies
</a>
```

---

## 📁 ESTRUTURA DOS ARQUIVOS

```
cookie-calculator-pro/
├── index.html              # Página principal
├── main.jsx                # Entry point do React
├── cookie-calculator-app.jsx  # App completo (TODO o código)
├── index.css               # Estilos Tailwind
├── package.json            # Dependências
├── vite.config.js          # Config do Vite
├── tailwind.config.js      # Config do Tailwind
└── README.md               # Este arquivo
```

---

## 🎨 FUNCIONALIDADES

### 1. **Calculadora de Receitas**
- Seleciona entre 37 receitas profissionais
- Define peso por unidade (ex: 150g)
- Define quantidade (ex: 10 cookies)
- Calcula automaticamente todos os ingredientes
- Conversão g → oz → cups

### 2. **Lista de Compras Consolidada**
- Adiciona múltiplas receitas
- Soma automaticamente ingredientes repetidos
- Evita desperdício e facilita compras
- Exportar PDF (em desenvolvimento)

### 3. **Precificação Inteligente**
- Insere custo de cada ingrediente (R$/kg)
- Adiciona custo de embalagem
- Define margem de lucro desejada (%)
- Calcula automaticamente:
  - Custo total de ingredientes
  - Custo por unidade
  - Preço de venda sugerido
  - Lucro por venda

### 4. **Multi-idioma**
- Português (Brasil)
- English (US) - com unidades imperiais
- Español (Latino)
- Todas as labels e receitas traduzidas

### 5. **Conversão de Unidades**
- Gramas ⇄ Ounces (oz)
- Gramas ⇄ Pounds (lb)
- Gramas ⇄ Cups (aproximado)
- Automático baseado no ingrediente

### 6. **Dark Mode**
- Modo escuro para trabalhar à noite
- Salva preferência do usuário
- Toggle fácil no header

### 7. **Salvamento Automático**
- LocalStorage guarda:
  - Lista de compras
  - Custos de ingredientes
  - Idioma preferido
  - Tema (claro/escuro)
- Não perde dados ao fechar o navegador

---

## 🔄 COMPARAÇÃO: PLANILHA vs APP

| Feature | Planilha Excel | App Web |
|---------|---------------|---------|
| **Acesso Mobile** | ❌ Ruim | ✅ Perfeito |
| **Conversão de Unidades** | ❌ Manual | ✅ Automática |
| **Multi-idioma** | ⚠️ Limitado | ✅ 3 idiomas |
| **Interface** | ❌ Complexa | ✅ Intuitiva |
| **Compartilhar** | ❌ Arquivo pesado | ✅ Link simples |
| **Atualizações** | ❌ Manual | ✅ Automática |
| **Dark Mode** | ❌ Não | ✅ Sim |
| **Salvamento** | ⚠️ Arquivo local | ✅ Automático |
| **Custo** | $ Licença Office | 💚 Grátis |

---

## 🛠️ TECNOLOGIAS USADAS

- **React 18** - Framework JavaScript moderno
- **Vite** - Build tool super rápido
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos
- **LocalStorage API** - Salvamento local
- **Vercel** - Hospedagem gratuita

---

## 📈 ROADMAP (Próximas Versões)

### v1.1 (Próximos 30 dias)
- [ ] Exportar PDF da lista de compras
- [ ] Imprimir receita formatada
- [ ] Adicionar mais receitas (até 50)
- [ ] Suporte a mais idiomas (Francês, Italiano)

### v2.0 (60-90 dias)
- [ ] Login de usuário (Firebase/Supabase)
- [ ] Salvar receitas favoritas na nuvem
- [ ] Histórico de produções
- [ ] Compartilhar listas via WhatsApp
- [ ] Modo colaborativo (equipe)

### v3.0 (Futuro)
- [ ] App mobile nativo (iOS/Android)
- [ ] Scanner de código de barras para preços
- [ ] IA para sugerir receitas
- [ ] Integração com marketplaces
- [ ] Sistema de pagamento (freemium)

---

## 💰 MODELO DE MONETIZAÇÃO (Futuro)

### Gratuito (Atual)
✅ 10 receitas básicas  
✅ Calculadora completa  
✅ Lista de compras  
✅ 3 idiomas  

### Premium ($4.99/mês)
✅ Todas as 50+ receitas  
✅ Exportar PDF profissional  
✅ Salvar na nuvem  
✅ Sem anúncios  
✅ Suporte prioritário  

### Business ($14.99/mês)
✅ Tudo do Premium  
✅ Multi-usuário (até 5 pessoas)  
✅ Relatórios avançados  
✅ API de integração  
✅ White-label (marca própria)  

---

## 🆘 SUPORTE

### Problemas Comuns:

**1. "npm: command not found"**
- Solução: Instale o Node.js em [nodejs.org](https://nodejs.org)

**2. "App não carrega no celular"**
- Solução: Certifique-se que está usando HTTPS (Vercel faz isso automaticamente)

**3. "Perdeu meus dados"**
- Solução: LocalStorage só funciona no mesmo navegador/device. Use versão Premium com sync na nuvem (futuro)

**4. "Como adicionar mais receitas?"**
- Solução: Edite o arquivo `cookie-calculator-app.jsx` e adicione no array `RECIPES_DATA`

### Contato:
- Email: rodrigo@pixelnrock.com
- Instagram: [@chefaureomagalhaes](https://instagram.com/chefaureomagalhaes)

---

## 📄 LICENÇA

© 2024 Chef Áureo Magalhães - Todos os direitos reservados  
Desenvolvido por Pixel N Rock

**Uso permitido:**
- ✅ Alunos do curso (gratuito)
- ✅ Uso pessoal/educacional
- ❌ Revenda sem autorização
- ❌ Redistribuição comercial

---

## 🎯 PRÓXIMOS PASSOS

### Para começar AGORA:

1. ⬇️ **Baixe todos os arquivos** desta pasta
2. 📁 **Crie conta no GitHub** (se não tiver)
3. 🚀 **Faça deploy no Vercel** (5 minutos)
4. 🔗 **Compartilhe o link** com seus alunos
5. 🎉 **Aproveite!**

### Dúvidas?

Me chama que eu te ajudo a subir no ar! 💪

---

**Feito com 🍪 e ❤️ para a comunidade de confeiteiros**

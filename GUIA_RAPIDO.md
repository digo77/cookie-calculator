# 🚀 GUIA RÁPIDO - COMO COLOCAR NO AR

## ✅ O QUE VOCÊ TEM AGORA

Um **app web completo** que substitui sua planilha Excel com:

- 🍪 **4 receitas** implementadas (LEMON NUTS, DARK CHOCOLATE, CHOCOLATE CHIP, SMORE)
- 📊 **Calculadora inteligente** com conversão de unidades
- 🛒 **Lista de compras consolidada**
- 💰 **Precificação automática**
- 🌍 **3 idiomas** (PT/EN/ES)
- 🌙 **Dark mode**
- 💾 **Salvamento automático**

---

## 🎯 ONDE VAI RODAR?

### ❌ NÃO precisa de WordPress
### ❌ NÃO precisa de servidor próprio
### ✅ Roda no **VERCEL** (100% GRÁTIS)

O app vai ter um link tipo:
```
https://calculadora-cookies.vercel.app
```

No WordPress você só coloca um **botão/link** levando pra lá!

---

## 📋 PASSO A PASSO (15 minutos)

### 1️⃣ CRIAR CONTA NO GITHUB (Grátis)
- Acesse: https://github.com/signup
- Crie sua conta (leva 2 minutos)

### 2️⃣ SUBIR O CÓDIGO
Opção A - **Via Interface Web** (Mais Fácil):
1. Acesse: https://github.com/new
2. Nome do repositório: `cookie-calculator-pro`
3. Clique em "Create repository"
4. Clique em "uploading an existing file"
5. **Arraste TODOS os arquivos** que eu te dei:
   - cookie-calculator-app.jsx
   - index.html
   - main.jsx
   - package.json
   - index.css
   - vite.config.js
   - tailwind.config.js
   - README.md
6. Clique em "Commit changes"

Opção B - **Via Terminal** (Se você souber usar):
```bash
cd [pasta dos arquivos]
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/cookie-calculator-pro.git
git push -u origin main
```

### 3️⃣ FAZER DEPLOY NO VERCEL (Grátis)
1. Acesse: https://vercel.com/signup
2. Clique em "Continue with GitHub"
3. Autorize o Vercel a acessar seu GitHub
4. Clique em "Import Project"
5. Selecione o repositório `cookie-calculator-pro`
6. **NÃO MUDE NADA** nas configurações
7. Clique em "Deploy"

⏱️ **2 minutos depois** → Seu app está no ar! 🎉

### 4️⃣ PEGAR O LINK
Após o deploy, o Vercel vai te dar um link tipo:
```
https://cookie-calculator-pro-abc123.vercel.app
```

**Esse é o link que você compartilha com os alunos!**

---

## 🔗 COLOCAR NO WORDPRESS

No WordPress, crie uma página/post e adicione:

### Opção 1 - Botão Bonito (Recomendado):
```html
<div style="text-align: center; margin: 40px 0;">
  <a href="https://seu-link.vercel.app" 
     style="display: inline-block; 
            background: linear-gradient(135deg, #F59E0B, #F97316); 
            color: white; 
            padding: 20px 40px; 
            border-radius: 12px; 
            font-size: 20px; 
            font-weight: bold; 
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
            transition: transform 0.2s;">
    🍪 Acessar Calculadora de Cookies
  </a>
</div>
```

### Opção 2 - iFrame (Dentro da página):
```html
<iframe 
  src="https://seu-link.vercel.app" 
  width="100%" 
  height="900px" 
  frameborder="0"
  style="border: none; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
</iframe>
```

**⚠️ Recomendo a Opção 1** - É mais rápida e profissional!

---

## 🎨 DOMÍNIO PERSONALIZADO (Opcional)

Se você quiser algo tipo:
```
https://calculadora.casabrig.com.br
```

No Vercel:
1. Vá em **Settings** → **Domains**
2. Adicione: `calculadora.casabrig.com.br`
3. Configure no seu provedor de domínio:
   - Tipo: `CNAME`
   - Nome: `calculadora`
   - Valor: `cname.vercel-dns.com`

---

## 🆘 PRECISA DE AJUDA?

### "Não sei usar GitHub"
→ Use a **Opção A** (interface web) - é só arrastar arquivos!

### "Deu erro no deploy"
→ Me manda um print que eu te ajudo

### "Quero mudar as cores"
→ Edita o arquivo `cookie-calculator-app.jsx` (procura por "bg-amber", "bg-orange")

### "Como adiciono mais receitas?"
→ No arquivo `cookie-calculator-app.jsx`, procura o array `RECIPES_DATA` e adiciona mais objetos seguindo o mesmo padrão

---

## 📊 PRÓXIMOS PASSOS

Depois que o app estiver no ar:

1. ✅ **Teste em diferentes dispositivos** (PC, celular, tablet)
2. ✅ **Compartilhe com 2-3 alunos** para feedback
3. ✅ **Me avisa** se encontrar bugs ou quiser adicionar features
4. ✅ **Pensa em monetização** (versão premium no futuro?)

---

## 💬 CONTATO

Se travar em qualquer etapa, me chama:
- Email: rodrigo@pixelnrock.com
- WhatsApp: [seu número]

**Vamos colocar isso no ar! 🚀**

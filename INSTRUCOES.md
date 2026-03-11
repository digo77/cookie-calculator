# 🍪 INSTRUÇÕES DE DEPLOY - Cookie Calculator

## 📦 O QUE TEM NESTE ZIP

Todos os arquivos necessários para rodar o app:

✅ index.html
✅ main.jsx  
✅ cookie-calculator-app.jsx
✅ index.css
✅ package.json
✅ vite.config.js
✅ tailwind.config.js
✅ postcss.config.js
✅ vercel.json ← IMPORTANTE!
✅ .gitignore
✅ README.md

---

## 🚀 COMO FAZER DEPLOY (Método Mais Fácil)

### OPÇÃO 1 - Upload direto no Vercel (SEM GitHub)

1. Acesse: https://vercel.com/new

2. Clique na aba **"Deploy"** (não é Import)

3. **Arraste esta pasta inteira** para o Vercel
   (ou clique em "Browse" e selecione a pasta)

4. Vercel vai detectar automaticamente:
   - Framework: Vite
   - Build Command: npm run build
   - Output Directory: dist

5. Clique em **"Deploy"**

6. Aguarde 2-3 minutos

7. **PRONTO!** Seu link estará funcionando:
   ```
   https://cookie-calculator-xyz.vercel.app
   ```

---

## 🔄 OPÇÃO 2 - Via GitHub (Recomendado para atualizações)

### Passo 1: Criar repositório NOVO no GitHub

1. Acesse: https://github.com/new
2. Nome: `cookie-calculator-pro`
3. **NÃO** marque "Add README"
4. Clique em "Create repository"

### Passo 2: Subir os arquivos

**Via Interface Web:**
1. Na página do repositório vazio, clique em "uploading an existing file"
2. **Arraste TODOS os arquivos** desta pasta
3. Commit changes

**Via Terminal (se souber usar Git):**
```bash
cd [pasta onde você descompactou o ZIP]
git init
git add .
git commit -m "Initial commit - Cookie Calculator"
git remote add origin https://github.com/SEU_USUARIO/cookie-calculator-pro.git
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Vercel

1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione o repositório `cookie-calculator-pro`
4. Clique em "Import"
5. **NÃO MUDE NADA** nas configurações
6. Clique em "Deploy"

---

## 🌐 ADICIONAR DOMÍNIO CUSTOM

Depois que o deploy funcionar:

### No Vercel:
1. Vá em **Settings** → **Domains**
2. Clique em "Add Domain"
3. Digite: `calculator.chefaureomagalhaes.com`
4. Copie as configurações de DNS que aparecerem

### No Cloudflare:
1. Acesse seu painel do Cloudflare
2. Selecione o domínio `chefaureomagalhaes.com`
3. Vá em **DNS** → **Records**
4. Clique em "Add record"
5. Configure:
   - Type: `CNAME`
   - Name: `calculator`
   - Target: `cname.vercel-dns.com`
   - Proxy status: **DNS only** (desliga o laranja)
   - TTL: Auto
6. Save

Aguarde 15-30 minutos e teste:
```
https://calculator.chefaureomagalhaes.com
```

---

## ✅ VERIFICAR SE ESTÁ FUNCIONANDO

Teste o app abrindo:
```
https://seu-link.vercel.app
```

Você deve ver:
- ✅ Calculadora de Cookies
- ✅ 3 abas (Calculadora, Lista de Compras, Precificação)
- ✅ Seletor de idioma (PT/EN/ES)
- ✅ Dark mode funcionando
- ✅ 4 receitas disponíveis

---

## 🆘 PROBLEMAS COMUNS

**"404 NOT_FOUND"**
→ Certifique-se que o arquivo `vercel.json` está no repositório

**"Build failed"**
→ Verifique se TODOS os arquivos foram enviados

**"Domain not working"**
→ Aguarde 15-30 min após configurar DNS
→ Verifique se o proxy do Cloudflare está DESLIGADO (cinza)

**"App não carrega no celular"**
→ Limpe o cache do navegador
→ Teste em modo anônimo

---

## 📞 PRECISA DE AJUDA?

Se algo não funcionar, me chama que eu te ajudo!

Email: rodrigo@pixelnrock.com

---

**Boa sorte! 🚀🍪**

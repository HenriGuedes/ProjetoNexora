# Nexora — Landing Page com Integração Back-end

---

## 📋 Sobre o Projeto

A **Nexora** é uma landing page fictícia de uma agência de marketing digital, desenvolvida com foco em boas práticas de desenvolvimento web, tanto no **front-end quanto no back-end**.

O projeto apresenta um design moderno (dark theme), animações ao rolar a página e um formulário totalmente funcional que realiza o envio de dados para um banco de dados MySQL utilizando PHP.

---

## 🎯 Objetivo

Este projeto foi desenvolvido como parte de um teste técnico, com o objetivo de demonstrar:

- Construção de interfaces modernas e responsivas
- Manipulação de eventos com JavaScript
- Integração com back-end em PHP
- Persistência de dados em banco MySQL

---

## 🎨 Visual do Projeto

| Seção | Descrição |
|------|----------|
| **Hero** | Título principal + formulário de captura de leads |
| **Quem Somos** | Apresentação da empresa com métricas |
| **Serviços** | Grid com os serviços oferecidos |
| **FAQ** | Perguntas frequentes interativas |
| **CTA Final** | Chamada para conversão |

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Uso |
|----------|-----|
| **HTML5** | Estrutura da página |
| **CSS3** | Estilização, responsividade e animações |
| **JavaScript** | Interatividade, validações e envio de dados |
| **PHP** | Processamento do formulário |
| **MySQL** | Armazenamento dos dados |

---

## 📁 Estrutura do Projeto


nexora/
├── index.html → estrutura da página
├── style.css → estilos e layout
├── script.js → interatividade
├── processa.php → back-end (salva dados no banco)
├── banco.sql → estrutura do banco de dados
└── README.md → documentação


---

## ✅ Funcionalidades

### 📩 Formulário funcional
- Captura de nome, e-mail, telefone e mensagem
- Envio assíncrono via `fetch()`
- Integração com PHP
- Armazenamento no banco de dados

### 🎨 Interface e UX
- Design moderno em tema escuro
- Animações ao rolar a página
- Feedback visual ao enviar formulário
- Contador de caracteres

### 📱 Responsividade
- Layout adaptado para desktop, tablet e mobile

---

## 🗄 Banco de Dados

O projeto utiliza uma tabela simples para armazenar os dados do formulário.

### Estrutura (`banco.sql`)

```sql
CREATE TABLE `dados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(25) NOT NULL,
  `mensagem` text,
  `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
⚙️ Como Executar o Projeto
🔹 Rodando localmente

Clone o repositório:

git clone https://github.com/seu-usuario/ProjetoNexora.git

Abra a pasta no VS Code

Execute com um servidor local (Live Server)

⚠️ Para funcionamento completo do PHP, utilize:

XAMPP
WAMP
Laragon
🔌 Configuração do Banco de Dados
Crie um banco de dados no MySQL
Importe o arquivo banco.sql
Configure o arquivo processa.php:
$servidor = "SEU_HOST";
$usuario = "SEU_USUARIO";
$senha = "SUA_SENHA";
$banco = "SEU_BANCO";
🌐 Deploy

O projeto foi hospedado utilizando hospedagem gratuita com suporte a PHP:

Front-end + Back-end integrados
Banco de dados MySQL externo
🧪 Como Testar
Acesse a landing page
Preencha o formulário
Envie os dados
Verifique se foram inseridos no banco
📌 Diferenciais do Projeto
Integração completa Front + Back
Uso de fetch() para envio assíncrono
Estrutura organizada
Código limpo e de fácil manutenção
Banco de dados preparado para expansão
👨‍💻 Autor

Desenvolvido por Henrique Guedes
- GitHub: [HenriqueGuedes](https://github.com/HenriGuedes)  
- LinkedIn: [Henrique Guedes](https://www.linkedin.com/in/henrique-guedes-silv/)  

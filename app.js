// 🔥 Firebase Configuration (substitua pelos seus dados)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

// 🚀 Inicializando Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 📩 Mostrar mensagens no status
function showMessage(text, isError = false) {
  const msg = document.getElementById("status-message");
  msg.style.display = "block";
  msg.style.color = isError ? "#d9534f" : "#5941c6";
  msg.textContent = text;
}

// 🔐 Login de usuário
function login(event) {
  if (event) event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  showMessage("Entrando...");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => showMessage("Bem-vindo de volta! 🎉"))
    .catch(error => showMessage(error.message, true));
}

// ✍️ Criar nova conta
function signup(event) {
  if (event) event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  showMessage("Criando conta...");

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      showMessage("Conta criada! 🚀");
      // Redireciona para outro HTML após criar conta
      setTimeout(function() {
        window.location.href = "feed.html";
      }, 1000); // espera 1 segundo para mostrar a mensagem
    })
    .catch(error => showMessage(error.message, true));
}

// 📧 Recuperação de senha
function forgotPassword() {
  const email = document.getElementById("email").value;

  if (!email) {
    showMessage("Por favor, insira seu e-mail para redefinir a senha.", true);
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => showMessage("Link para redefinir senha enviado! ✉️"))
    .catch(error => showMessage(error.message, true));
}

// 📜 Exibir modal da política de privacidade
function showPrivacyPolicy() {
  document.getElementById("policyModal").style.display = "block";
}

// ❌ Fechar modal
function closeModal() {
  document.getElementById("policyModal").style.display = "none";
}

// 📮 Postar novo conteúdo (em breve integração com banco de dados)
function postContent() {
  const text = document.querySelector(".new-post textarea").value;
  if (!text.trim()) return;

  alert("Post enviado com sucesso! (Funcionalidade de banco de dados em breve 🛠️)");
  document.querySelector(".new-post textarea").value = "";
}


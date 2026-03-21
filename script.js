document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("authCard");
  const toggles = document.querySelectorAll("[data-mode]");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const forms = document.querySelectorAll("form");

  // troca login e cadastro
  const setMode = (mode) => {
    const isRegister = mode === "register";
    card.classList.toggle("register-mode", isRegister);
    card.classList.toggle("login-mode", !isRegister);
    tabButtons.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.mode === mode)
    );
  };

  // clique nos botoes
  toggles.forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  // envia sem recarregar
  forms.forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "home.html";
    })
  );

  // modo inicial
  setMode("login");
});
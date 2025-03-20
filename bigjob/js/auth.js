document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêcher le rechargement de la page
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const passwordConfirm = document.getElementById("signup-password-confirm").value;

    // Vérification de la correspondance des mots de passe
    if (password !== passwordConfirm) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    // Vérification de l'email
    const regex = /^[a-zA-Z0-9._%+-]+@laplateforme\.io$/;
    if (!regex.test(email)) {
        alert("Seuls les emails @laplateforme.io sont autorisés !");
        return;
    }

    // Vérification si l'email existe déjà dans LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
        alert("Cet email est déjà inscrit !");
        return;
    }

    // Ajout de l'utilisateur dans LocalStorage
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription réussie !");
});

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêcher le rechargement de la page
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Vérification si l'email et le mot de passe sont valides
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Connexion réussie !");
        // Rediriger vers une autre page, par exemple
        // window.location.href = "dashboard.html";
    } else {
        alert("Email ou mot de passe incorrect.");
    }
});
const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Réponse reçue :", response);

      if (!response.ok) {
        console.error("Erreur HTTP :", response.status);
        throw new Error("Erreur lors de la déconnexion");
      }

      const data = await response.json();
      console.log("Données reçues :", data);

      if (data.message === "Déconnexion réussie") {
        // Supprimer le jeton et rediriger
        localStorage.removeItem("token");
        alert("Déconnexion réussie !");
        window.location.href = "/login";
      } else {
        alert("Message inattendu :", data.message);
      }
    } catch (error) {
      console.error("Erreur attrapée :", error);
      alert("Une erreur est survenue lors de la déconnexion.");
    }
  };

  return (
    <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: 'lightblue'}}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
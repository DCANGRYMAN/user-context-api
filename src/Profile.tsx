import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export function Profile() {
  const context = useContext(UserContext);
  if (!context) throw new Error("Profile deve estar dentro de UserProvider");

  const { user, setUser } = context;

  return (
    <div>
      {user ? (
        <>
          <h2>Bem-vindo, {user.name}</h2>
          <button onClick={() => setUser(null)}>Sair</button>
        </>
      ) : (
        <button
          onClick={() =>
            setUser({ name: "Darlan", email: "darlan@email.com" })
          }
        >
          Entrar
        </button>
      )}
    </div>
  );
}

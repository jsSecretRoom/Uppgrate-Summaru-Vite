import './GoogleAuthPopup.scss';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../FirestoreSDK"; // Замените этот путь на путь к файлу с вашей конфигурацией Firebase

const GoogleAuthPopup = () => {
  const auth = getAuth(app); // Передайте объект app в функцию getAuth
  
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Аутентификация успешна, можно обрабатывать результат
      const user = result.user;
      console.log("Успешная аутентификация:", user);
    } catch (error) {
      // Обработка ошибки аутентификации
      console.error("Ошибка аутентификации:", error);
    }
  };

  return (
    <section className='auth'>
      <p>Log in to view reviews or leave your own:</p>
      <div className="auth-popup">
        <button onClick={signInWithGoogle}>Google authentication</button>
      </div>
      
    </section>
  );
};

export default GoogleAuthPopup;
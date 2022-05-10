import Button from "./Button";
import { Routes } from "./routes/Routes";
import {useAuth} from "./context/AuthProvider"
import RegistrationForm from "./RegistrationForm";

function App() {

const {token} = useAuth()

  return (
    <>
    <Button />
      {token ? <div>
        <h1>Hey, User logged in succesfully</h1>
        <h4 className="token">Your personal access token is: ${token}</h4>
      </div> : <h1>Login to access</h1>}
      
      <Routes />
    </>
  );
}

export default App;

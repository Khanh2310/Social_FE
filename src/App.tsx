import './App.css';
import { Login } from './components/templates/Login';
import { useRecoilValue } from 'recoil';
import { authScreenAtom } from './states/authAtoms';
function App() {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;

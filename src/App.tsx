import './App.css';
import { useRecoilValue } from 'recoil';
import { authScreenAtom } from './states/authAtoms';
import { SignIn } from './components/templates/SignIn';
function App() {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  return <SignIn />;
}

export default App;

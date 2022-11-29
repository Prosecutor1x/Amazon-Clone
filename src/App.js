import './App.css';
import { Nav } from './navigation/navigation';
import { AuthContextProvider } from './utils/StateProvider';

function App() {
  return (
    <AuthContextProvider>
      <Nav />
    </AuthContextProvider>  
  );
}

export default App;

import './App.css';
import ButtonAppBar  from './appbar/Appbar';
import Login from './components/login&Signup/login/Login';

function App() {
  return (
    <>
    <ButtonAppBar />
      <div className="App">
        <p>
          Hello User!
      </p>
      </div>
      <Login/>    
    </>
  );
}

export default App;

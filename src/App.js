import './App.css';
import AppMenu from './appbar/AppMenu';
import Login from './components/login&Signup/login/Login';

function App() {
  return (
    <>
      <AppMenu />
      <div className="App">
        <h4>Hello Pratik Here!</h4>
        <Login />
      </div>
    </>
  );
}

export default App;

import './App.css';
import AppMenu from './appbar/AppMenu';
import Login from './components/login&Signup/login/Login';
import Register from './components/login&Signup/register/Register';
import FooBarForm from './components/SampleForm';

function App() {
  return (
    <>
      <AppMenu />
      <div className="App">
        <p>Hello User!</p>
        <Login />
        {/* <Register /> */}
      </div>
    </>
  );
}

export default App;

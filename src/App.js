import './App.css';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="mainWrapper">
      <aside className="asideImage"></aside>
      <div className="loginConteiner">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

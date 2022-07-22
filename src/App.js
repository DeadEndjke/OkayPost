
import s from './App.module.scss';
import Header from './components/Header/Header'

function App() {
  return (
    <div className={s.App}>
      <div className={s.contaiter}>
        <Header />
      </div>
    </div>
  );
}

export default App;

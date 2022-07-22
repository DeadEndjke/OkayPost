
import s from './App.module.scss';
import Content from './components/Content/Content';
import Header from './components/Header/Header'

function App() {
  return (
    <div className={s.App}>
      <div className={s.contaiter}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;

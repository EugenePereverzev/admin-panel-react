import './App.css';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Table from '../Table/Table';
import ThemeMenu from '../ThemeMenu/ThemeMenu';

function App() {
  return (
    <div className="App">
      <Header title="Список заказов">
        <ThemeMenu />
      </Header>  
      <Filter />
      <Table />
      <div className="footer typography-x-small color-style-main">
          <span className="footer-item">Подвал страницы</span><span className="footer-item">2021 &copy; Переверзев Евгений Алексеевич</span>
      </div>
    </div>
  );
}

export default App;

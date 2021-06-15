import './App.css';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Table from '../Table/Table';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import { IconsLib } from '../Icons/Icons';

function App() {
  return (
    <div className="App">
      <Header title="Список заказов">
        <ThemeMenu />
      </Header>  
      <Filter />
      <Table />
      <div className="footer">
          <span className="footer-item">2021 &copy; Переверзев Евгений Алексеевич</span>
      </div>
      <IconsLib/>
    </div>
  );
}

export default App;

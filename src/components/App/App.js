import { Provider } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Table from '../Table/Table';
import ThemeMenu from '../ThemeMenu/ThemeMenu';
import { IconsLib } from '../../lib/Icons/Icons';
import { store } from '../../store/store'


function App() {
  return (
    <div className="App">
      <Header title="Список заказов">
        <ThemeMenu />
      </Header>  
      <Provider store={store}>
        <Filter />
        <Table />
      </Provider>
      <div className="footer">
          <span className="footer-item">2021 &copy; Переверзев Евгений Алексеевич</span>
      </div>
      <IconsLib/>
    </div>
  );
}

export default App;

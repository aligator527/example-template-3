import './App.scss';
import logo from './assets/img/Logo.svg';
import FilterPanel from './components/FilterPanel';
import TicketsPanel from './components/TicketsPanel';

/**
 * App Component
 *
 * @component
 * @return {React.ReactElement}
 */
function App() {
  return (
    <div>
      <header className='logo'>
        <img src={logo} alt='' />
      </header>
      <main className='main-container'>
        <FilterPanel></FilterPanel>
        <TicketsPanel></TicketsPanel>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import { Menu } from './components/Menu';
import { TrainersList } from './components/TrainersList';
import { Card } from './components/Card';
import { Home } from './pages/Home';
import { Trainer } from './pages/Trainer';
import { FormTrainers } from './pages/FormTrainers';
import { NotFound } from './pages/NotFound';



function App() {

  return (
    <>
      <Menu />
      <TrainersList />
      <Card />

      <Home />
      <Trainer />
      <FormTrainers />
      <NotFound />


    </>
  )
}

export default App

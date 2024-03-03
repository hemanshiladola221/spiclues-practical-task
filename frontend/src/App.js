
import './App.css';
import { Header } from './components/Header';
import { HomeSec } from './components/HomeSec';
import { MainHeader } from './components/MainHeader';
import { Awesec } from './components/awssec';
import { Bulbsec } from './components/bulbsec';
import { Callumsec } from './components/callumsec';
import { Cardsec } from './components/cardsec';
import { Eightsec } from './components/eightsec';
import { Footer } from './components/footer';
import { Imagesec } from './components/imagesec';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHeader />
      <HomeSec />
      <Eightsec />
      <Cardsec />
      <Imagesec />
      <Bulbsec />
      <Callumsec />
      <Awesec />
      <Footer/>
    </div>
  );
}

export default App;

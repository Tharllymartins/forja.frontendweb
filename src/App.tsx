import React from 'react';
import { Card } from './components/card/Card';
import { Header } from './components/header/Header';
import { MainBanner } from './components/mainBanner/MainBanner';
import banner1 from "./static/img/banner.png";
import banner2 from "./static/img/banner.jpg";

const cards = [
  {
    name: "SSD 256gb"
  },
  {
    name: "Carregador USB C"
  },
  {
    name: "Fone de ouvido Eddifier"
  }
]

const banners = [
  {
    img: banner1
  },
  {
    img: banner2
  }
]


function App() {

  return (
    <div className="App">
      <Header />

      <MainBanner img={banners[0].img}/>

      <div className='cards'>
        {cards.map(card => {
          return <Card name={card.name} />
        })}
      </div>

    </div>
  );
}

export default App;

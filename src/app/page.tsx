'use client';
import Header from '../elements/Header/Header';
import Footer from '../elements/Footer/Footer';
import Fooldal from '@/pages/Fooldal/Fooldal';
import Fegyvertar from '@/pages/Fegyvertar/Fegyvertar';
import Belepes from '@/pages/Belepes/Belepes';
import { useState } from 'react';

export default function App() {

  const [selectedMenu, setSelectedMenu] = useState('fooldal');
  
  function handleSelect(data: string) {
    setSelectedMenu(data);
  }

  function Content() {
    if (selectedMenu == 'Fooldal') {
      console.log('Fooldal');
      return <Fooldal />;
    }
    if (selectedMenu == 'Fegyvertar') {
      console.log('Fegyvertar');
      return <Fegyvertar />;
    }
    if (selectedMenu == 'Belepes') {
      console.log('Belepes');
      return <Belepes />;
    }
  }

  return (
    <>
      <Header selectedPage={selectedMenu} handleSelect={handleSelect} />
      <Content />
      <Footer />
    </>
  );
}
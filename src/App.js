
import BookGrid from './comp/Grids/BookGrid';
import React, { useState } from 'react';
import SideBar from './comp/SideBar';
import Modal from './comp/Modal'
import UserGrid from './comp/Grids/UserGrid';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [book, setSelectedBook] = useState(null);
  const [view, setView] = useState("Books")


  return (
    <div >
      <SideBar setView={setView}/>
      {view=="Books"&&
      <BookGrid setSelectedBook={setSelectedBook} setSelectedImg={setSelectedImg} />
  }
      {view=="Users"&&
      <UserGrid/>
    }

{ selectedImg &&
    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
}

    </div >

  )
}

export default App;

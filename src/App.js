
import BookGrid from './comp/Grids/BookGrid';
import React, { useState } from 'react';
import SideBar from './comp/SideBar';
import Modal from './comp/Modal'
import UserGrid from './comp/Grids/UserGrid';
import Auth from './comp/Auth';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [book, setSelectedBook] = useState(null);
  const [view, setView] = useState("Books")
  const [auth, setAuth] = useState('no')




  return (

    <div>
      {auth == 'no' &&
        <Auth setAuth={setAuth} />
      }

      {auth == 'yes' &&  
      <div >
        <div className='pageContainer'>
          <SideBar className="dd" setView={setView} />
          <div className='ss'>
            {view == "Books" &&
              <BookGrid setSelectedBook={setSelectedBook} setSelectedImg={setSelectedImg} />
            }
            {view == "Users" &&
              <UserGrid />
            }

            {selectedImg &&
              <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            }

          </div >

        </div>
      </div >
      }
    </div>
  )
}

export default App;

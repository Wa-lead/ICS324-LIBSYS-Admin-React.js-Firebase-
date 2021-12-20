
import BookGrid from './comp/Grids/BookGrid';
import React, { useState } from 'react';
import SideBar from './comp/SideBar';
import Modal from './comp/Modal'
import UserGrid from './comp/Grids/UserGrid';
import Auth from './comp/Auth';
import ReportGrid from './comp/Grids/ReportGrid';
import BorrowGrid from './comp/Grids/BorrowGrid';
import ModalBorrow from './comp/ModalBorrow';


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
              {view == "Reports" &&
                <ReportGrid />
              }

              {view == "Borrow" &&
                <BorrowGrid setSelectedBook={setSelectedBook} setSelectedImg={setSelectedImg} />}

              {(selectedImg && view == 'Books') &&
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
              }

              {(selectedImg && view == 'Borrow') &&
                <ModalBorrow selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
              }


            </div >

          </div>
        </div >
      }
    </div>
  )
}

export default App;

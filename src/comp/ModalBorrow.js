import { Button, IconButton } from "@mui/material";
import React from "react";
import UpdateBook from "./Forms/UpdateBook";
import BorrowBook from './Forms/BorrowBook';

const ModalBorrow = ({ selectedImg, setSelectedImg}) => {

  

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  // const deleteImage = () => {
  //   var answer = window.confirm("Are you sure you want to delete this image?");
  //   if (answer) {
  //     DeleteImage(selectedImg.id);
  //     setSelectedImg(null);
  //   }
  //   else {
  //   }
  // }


  return (
    <div className="backdrop" onClick={handleClick}>
        {/* <Button onClick={deleteImage}> delete </Button> */}
      <div className="modalWrapper">


        <img src={selectedImg.imageURL} alt="enalaged img" className="modalStoryImg" />

        <div className="inputStoryDiv">
          <BorrowBook book={selectedImg} setSelectedImg={setSelectedImg}/>
        </div>


      </div>
    </div>

  )
}

export default ModalBorrow;
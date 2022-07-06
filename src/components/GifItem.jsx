import React, { useState } from "react";
import Modal from "./Modal";

export const GifItem = ({title, url}) => {

    const [modalOpen, setModalOpen] = useState(false);

  return (
     

     <div className="card">
            
          <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        +
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    
    <img src={url} alt="gif" />
            <p>{title}</p>
            
            </div>
  );
}


        

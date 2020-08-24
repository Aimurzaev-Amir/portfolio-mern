import React from "react";
import "../../aboutMePage.css";
import "../../../Media.css";
import BlockTitleText from "../../../../common/BlockTitle";
import PhotoCard from "./PhotoCard";
import first from "../../img/photos/1.jpg";
import second from "../../img/photos/2.jpg";
import third from "../../img/photos/3.jpg";
import fourth from "../../img/photos/4.jpg";
import fifth from "../../img/photos/5.jpg";
import sixth from "../../img/photos/6.jpg";
import next from "../../img/photos/next.png";
import prev from "../../img/photos/prev.png";
import { useState } from "react";

let AboutMePhotos = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImg] = useState(0);
  // const [finish, setFinish] = useState(false);

  const getModal = () => {
    setShowModal(true);
  };
  const CloseModal = () => {
    setShowModal(false);
  };
  const setModalImg = (e) => {
    const imgId = e.currentTarget.id;
    setImg(imgId);
    setShowModal(true);
  };

  const nextPhoto = () => {
    setImg(imgModal + 1);
    if (imgModal === 5) {
      console.log("hello!");
    }
  };

  const prevPhoto = () => {
    setImg(imgModal - 1);
  };

  let PhotosBlock = props.photos.map((photo) => {
    return (
      <PhotoCard
        key={photo.id}
        id={photo.id}
        imgDescr={photo.imdDescr}
        img={photo.img}
        setModalImg={setModalImg}
      />
    );
  });

  return (
    <div className="glanceCover wrapper">
      <BlockTitleText titleclassName={"titleLines titleLines2"} blockTitleText={"A Glance At Me"} />
      <div className="glanceCards">
        <div className="photos">
          {PhotosBlock}
          <div id="myModal" className={showModal ? "modal showModal" : "modal closeModal"}>
            <span className="close" onClick={CloseModal}>
              &times;
            </span>
            {/* <img
              id="nextPhoto"
              className="nextPhoto galleryButton"
              src={next}
              alt="next button"
              onClick={nextPhoto}
            />
            <img
              id="prevPhoto"
              className="prevPhoto galleryButton"
              src={prev}
              alt="previous button"
              onClick={prevPhoto}
            /> */}
            <img className="modalContent" src={props.photos[imgModal].img} alt="" />
            <div>
              <p>{props.photos[imgModal].imdDescr}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePhotos;

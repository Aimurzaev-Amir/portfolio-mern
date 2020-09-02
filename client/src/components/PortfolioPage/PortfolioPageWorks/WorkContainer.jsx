import React, { useEffect } from "react";
import { connect } from "react-redux";
import Work from "./Work";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { useHttp } from "../../../hooks/http.hook";
import {
  setColor,
  setWhatIDid,
  setWork,
  setWorkId,
  setStyle,
  setImagesData,
} from "../../../Redux/WorksReducer";
import { useState } from "react";

let WorkContainer = (props) => {
  let workName = props.match.params.workName;
  const { loading, error, request } = useHttp();
  useEffect(() => {
    const getLastWorkData = async () => {
      const worksData = await request("/api/works", "GET", null);
      props.setWork(worksData);
      if (worksData.length != 0 || props.works.length != 0) {
        worksData.map(async (data) => {
          if (data.urlAdress === workName) {
            props.setWorkId(data._id);
            const worksColors = await request(`/api/works/colors/${data._id}`, "GET", null);
            props.setColor(worksColors);
            const worksStyles = await request(`/api/works/textStyles/${data._id}`, "GET", null);
            props.setStyle(worksStyles);
            const whatIDid = await request(`/api/works/didPoint/${data._id}`, "GET", null);
            props.setWhatIDid(whatIDid);
            const images = await request(`/api/works/getPhotos/${data._id}`, "GET", null);
            props.setImagesData(images);
          }
        });
      }
    };
    getLastWorkData();
  }, []);

  return <Work works={props.works} workName={workName} images={props.images} loading={loading} />;
};

let mapStateToProps = (state) => {
  return {
    // works: state.works.Works,
    works: state.works.works,
    images: state.works.images,
  };
};

export default compose(
  connect(mapStateToProps, { setColor, setWhatIDid, setWork, setWorkId, setStyle, setImagesData }),
  withRouter
)(WorkContainer);

import React, { useState } from "react";
import ReactDOM from "react-dom";

// Import React FilePond
import { FilePond, File, registerPlugin, setOptions } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageResize
);

const FilePondWorks = (props) => {
  const [files, setFiles] = useState([]);

  return (
    <div className="filePondWorks wrapper">
      <form action="/api/works/addPhoto" method="POST">
        <h2 className="editImageDataTitle">Add image to work</h2>
        <div className="editImgData">
          <div className="editInput imgInput">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
          </div>
          <div className="editInput imgInput">
            <label htmlFor="descr">Description: </label>
            <input type="text" name="descr" />
          </div>
          {props.allWorks ? (
            <div className="editInput imgInput hideInput">
              <label htmlFor="owner">Owner: </label>
              <input
                type="text"
                name="owner"
                value={props.allWorks[props.allWorks.length - 1]._id}
              />
            </div>
          ) : null}
          <div className="editFontStyle">
            <label htmlFor="type">Type: </label>
            <select name="type" id="">
              <option value="workPhoto">workPhoto</option>
              <option value="workPreviw">workPreviw</option>
              <option value="workBackground">workBackground</option>
              <option value="desktopImg">desktopImg</option>
              <option value="mobileImg">mobileImg</option>
            </select>
          </div>
        </div>
        <div className="filePondArea">
          <FilePond
            setOptions={{
              stylePanelAspectRatio: 150 / 100,
              imageResizeTargetWidth: 100,
              imageResizeTargetHight: 150,
            }}
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            maxFiles={1}
            name="img"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <div className="buttonPage">
            <button type="submit">Save</button>
          </div>
        </div>
        <div>{props.loading ? "loading..." : null}</div>
      </form>
    </div>
  );
};

export default FilePondWorks;

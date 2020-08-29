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
    <div className="filePondWorks">
      <form action="/api/works/addPhoto" method="POST">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="descr">Description: </label>
          <input type="text" name="descr" />
        </div>
        <div>
          <label htmlFor="type">Type: </label>
          <select name="type" id="">
            <option value="workPhoto">workPhoto</option>
            <option value="workPreviw">workPreviw</option>
            <option value="workBackground">workBackground</option>
            <option value="desktopImg">desktopImg</option>
            <option value="mobileImg">mobileImg</option>
          </select>
        </div>
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
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default FilePondWorks;

//     <div className="filePondWorks">
//       <form onSubmit={props.handleSubmit}>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <Field placeholder="Name of the image" name="name" type="text" component="input" />
//         </div>
//         <div>
//           <label htmlFor="descr">Description: </label>
//           <Field
//             placeholder="Description of the image"
//             name="descr"
//             type="text"
//             component="input"
//           />
//         </div>
//         <div>
//           <label htmlFor="type">Type: </label>
//           <Field name="type" component="select">
//             <option></option>
//             <option>workPhoto</option>
//             <option>workPreviw</option>
//             <option>workBackground</option>
//             <option>desktopImg</option>
//             <option>mobileImg</option>
//           </Field>
//         </div>
//         <FilePond
//           setOptions={{
//             stylePanelAspectRatio: 150 / 100,
//             imageResizeTargetWidth: 100,
//             imageResizeTargetHight: 150,
//           }}
//           files={files}
//           onupdatefiles={setFiles}
//           allowMultiple={false}
//           maxFiles={1}
//           name="img"
//           labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
//         />

//         <button>Save</button>
//       </form>
//     </div>
//   );
// };

// const SendImageToDatabase = reduxForm({ form: "sendImg" })(FilePondWorks);

// export default SendImageToDatabase;

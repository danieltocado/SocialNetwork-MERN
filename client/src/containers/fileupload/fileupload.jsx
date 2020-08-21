import React, { Fragment, useState } from "react";
import axios from "axios";
//import { upload } from "../../redux/actions/files";
import Message from "./message.jsx"

import "./fileupload.scss";


const FileUpload = () => {

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('')

  const onChange = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
      e.preventDefault();
      const file = {
        file: e.target.file.value,
        file_name: e.target.file_name.value,
        file_description: e.target.file_description.value,
      
      };
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await axios.post('/files/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },

        });
        
        const { file_name, file_path } = res.data;

        setUploadedFile({ file_name, file_path })

        setMessage('File uploaded.');

      } catch (error) {
          if(error.response.status === 500) {
              setMessage('There was a problem with the server'); 
          } else {
              setMessage(error.response.data.message)
          }
      }

     // upload(file)
              
      console.log(file);
  }

    return (
        <div className="container mt-4">
        {message ? <Message message={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input type="file" name="file" className="custom-file-input" id="customFile" onChange={onChange}/>
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
            Nombre: <input type="text" name="file_name"/>
            Descripción: <input type="text" name="file_description"/>
          </div>

          <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
        </form>

        { uploadedFile ? <div className="row mt-5">
          <div className="col-md-6 m-auto">
              <h3 className="text-center"> { uploadedFile.file_name } </h3>
              <img style={{ width: '100%' }} src={uploadedFile.file_path} alt=""/>
          </div>
        </div> 
        : null }

      </div>
    );
};

export default FileUpload;

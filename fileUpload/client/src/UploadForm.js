import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

function UploadForm() {
  const [fileArray, setFileArray] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
  });
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      uploadFile({ variables: { file } }).then((r) =>
        setFileArray([...fileArray, r.data.uploadFile.url])
      );
    }
  };
  console.log(fileArray);
  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default UploadForm;

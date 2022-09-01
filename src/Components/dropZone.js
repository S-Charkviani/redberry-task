import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./dropZone.module.css";

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={classes.imageBox}>
      <input {...getInputProps()} />
      <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
      <button>ატვირთე</button>
    </div>
  );
};
export default Dropzone;
import { useDropzone } from "react-dropzone";
import classes from "./dropZone.module.css";

const Dropzone = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
const buttonHandler=(event)=> {
  event.preventDefault();
}
  return (
    <div {...getRootProps()} className={classes.imageBox}>
      <input {...getInputProps()} />
      <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
      <button onClick={buttonHandler}>ატვირთე</button>

      <aside>
        <ul>{files}</ul>
      </aside>

    </div>
  );
};
export default Dropzone;

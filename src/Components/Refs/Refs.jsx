import React, { useRef, useState } from "react";

const Refs = () => {
  // let [state, setState] = useState(false);
  // let [ref, setRef] = useState("");
  let [file, setFile] = useState("");

  let ref1 = useRef();
  let checkRef = useRef();

  let handleRef = () => {
    ref1.current.value = "";
    setFile([]);
  };
  let handleCheck = e => {
    checkRef.current.checked = true;
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  console.log(file);

  return (
    <div>
      <input type="file" ref={ref1} onChange={handleCheck} />
      <input type="checkbox" ref={checkRef} onChange={handleRef} />
      <figure>
        <img src={file} alt="img.png" />
      </figure>
    </div>
  );
};

export default Refs;


import React, { useRef, useState } from "react";
import SunEditor,{buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
// import ReactHtmlParser from 'react-html-parser';

export default function Sun() {
  const [adddata, setAddData] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (content) => {
    setAddData(content);
  };

  return (
    // <div>
    //   <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    //   <div>
    //     <CKEditor editor={ClassicEditor} data={adddata} onChange={handleChange}
    //     //  config={{ckfinder: {
    //     //     // Upload the images to the server using the CKFinder QuickUpload command.
    //     //     uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
    //     //   }}}
    //     />
    //   </div>
    //   <div>{adddata ? adddata : ""}</div>
    //   {/* <div>{show ? ReactHtmlParser(adddata) : ""}</div> */}
    //   <div dangerouslySetInnerHTML={{ __html: adddata }} />
    // </div>
<>
aaaaaaaaaaaaa
    <SunEditor onChange={handleChange}  defaultValue={adddata} name="adddata" setOptions={{
        height: 200,
        buttonList: buttonList.complex  // Or Array of button list, eg. [['font', 'align'], ['image']]
        // plugins: [font] set plugins, all plugins are set by default
        // Other option
}} />
ssssssssss
<h1 onClick={()=> console.log(adddata)}>kkkkkkkkkkkkkk</h1>
</>
  );
}

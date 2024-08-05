import React, { useState } from 'react';
import axios from "axios";

export default function AddButton() {
    const [file, setFile] = useState("");

    function addFile() {
        console.log(file);
        axios
            .post("http://localhost:5000/addfile", {
                name: file,
                parent: "66b052297da7903c806d0efe"
            })
            .then((response) => {
                console.log(response);
                window.location.reload();

            });
    }

    function handleChange(e) {
        setFile(e.target.value);
    }

    return (
        <>
              <h1 style={{ color: "green" }}>welcome to file system</h1>

            <input type="text" name="file_name" onChange={handleChange} value={file} />
            <button onClick={addFile}>Add file</button>
        </>
    );
}

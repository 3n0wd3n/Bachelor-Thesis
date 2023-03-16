import React, { useState } from 'react';

export default function FileContent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // tady můžete něco dělat se souborem (např. ho nahrát na server)
    console.log(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vyberte soubor:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Nahrát soubor</button>
    </form>
  );
}


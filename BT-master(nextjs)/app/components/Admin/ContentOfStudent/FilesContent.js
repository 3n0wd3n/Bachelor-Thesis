import React, { useState } from 'react';
import { FaFolderOpen, FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import { FileContentBackButtonContainer, FileContentAddButtonContainer, FileContentUploadButton, FileContentInput, FileContentChooseFile, FileContentItem, FileContentItemContainer, FileContentAddContainer, FileContentContainer } from './FilesContent.style'

export default function FileContent({ setData, student }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [add, setAdd] = React.useState(false)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);
  };
  console.log(student);

  return (
    <>
      {add
        ?
        <>
          <FileContentContainer>
            <FileContentAddContainer>
              <FileContentChooseFile>
                <span>Choose file:</span>
                <FileContentInput type="file" onChange={handleFileChange} />
              </FileContentChooseFile>
            </FileContentAddContainer>
            <FileContentUploadButton onClick={handleSubmit}>upload file</FileContentUploadButton>
          </FileContentContainer>
          <FileContentBackButtonContainer onClick={() => setAdd(prevState => !prevState)}>
            <FaMinusSquare />
          </FileContentBackButtonContainer>
        </>
        :

        student.files.length > 0
          ?
          <>
            <FileContentContainer>
              <FileContentItemContainer>
                <FileContentItem>Files:</FileContentItem>
                {/* test */}
                {student.files[0]}
                <br />
                {student.files[1]}
              </FileContentItemContainer>
            </FileContentContainer>
            <FileContentAddButtonContainer onClick={() => setAdd(prevState => !prevState)}>
              <FaPlusSquare />
            </FileContentAddButtonContainer>
          </>
          :
          <>
            <FileContentContainer>
              <p>You have not imported any file yet!</p>
              <FaFolderOpen />

            </FileContentContainer>
            <FileContentAddButtonContainer onClick={() => setAdd(prevState => !prevState)}>
              <FaPlusSquare />
            </FileContentAddButtonContainer>
          </>
      }
    </>
  );
}
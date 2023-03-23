import React, { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa'
import { FileContentUploadButton, FileContentInput, FileContentChooseFile, FileContentItem, FileContentItemContainer, FileContentAddContainer, FileContentContainer } from './FilesContent.style'

export default function FileContent({ setData, student }) {
  const [selectedFile, setSelectedFile] = useState(null);

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
      {
        student.files.length > 0
          ?
          <FileContentContainer>
            <FileContentItemContainer>
              <FileContentItem>Files:</FileContentItem>
              {/* test */}
              {student.files[0]}
              <br/>
              {student.files[1]}
            </FileContentItemContainer>
            <FileContentAddContainer>
              <FileContentChooseFile>
                Choose file:
                <FileContentInput type="file" onChange={handleFileChange} />
              </FileContentChooseFile>
            </FileContentAddContainer>
            <FileContentUploadButton onClick={handleSubmit}>upload file</FileContentUploadButton>
          </FileContentContainer>
          :
          <>
          <FileContentContainer>
            <p>You have not imported any file yet!</p>
            <FaFolderOpen />
            <FileContentAddContainer>
              <FileContentChooseFile>
                Choose file:
                <FileContentInput type="file" onChange={handleFileChange} />
              </FileContentChooseFile>
            </FileContentAddContainer>
            <FileContentUploadButton onClick={handleSubmit}>upload file</FileContentUploadButton>
          </FileContentContainer>
          </>
      }
    </>
  );
}
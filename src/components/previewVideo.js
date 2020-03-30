import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Button } from 'antd';

class PreviewVideoAntdUpload extends React.Component {
  state = {
    fileList: [],
    selectedAttachment: null,
  };

  viewAttachment = (file) => {
    let reader = new FileReader();

    //if reading completed
    reader.onload = (e) => {
      //set values of selected attachment
      let newSelectedAttachment = {};
      newSelectedAttachment.file = file;
      newSelectedAttachment.blobData = e.target.result;

      //if file type is image then show the attachment or download the same
      if (file.type.includes('video')) {
        this.setState({
          selectedAttachment: newSelectedAttachment,
        });
      }
    };

    //read the file
    reader.readAsDataURL(file);
  };

  render = () => {
    return (
      <React.Fragment>
        <Upload
          multiple={false}
          beforeUpload={(e) => false}
          showUploadList={false}
          onChange={(info) => {
            if (info.file.status !== 'uploading') {
              let newFileList = this.state.fileList;
              newFileList.push(info.file);
              this.setState({
                fileList: newFileList,
              });
            }
          }}>
          <Button>
             Upload Video
          </Button>
        </Upload>
        {this.state.fileList.length > 0 && (
          <ul>
            {this.state.fileList.map((file, index) => {
              return (
                <li
                  onClick={() => this.viewAttachment(file)}
                  style={{ cursor: 'pointer' }}
                  key={index}>
                  {file.name}
                </li>
              );
            })}
          </ul>
        )}
        {this.state.selectedAttachment && (
          <video width="400" controls>
            <source
              src={this.state.selectedAttachment.blobData}
              type={this.state.selectedAttachment.file.type}
            />
            Your browser does not support HTML5 video.
          </video>
        )}
      </React.Fragment>
    );
  };
}

export default PreviewVideoAntdUpload;

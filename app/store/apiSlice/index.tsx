import DocumentPicker from 'react-native-document-picker';
export const selectOneFile = async () => {
  //Opening Document Picker for selection of one file
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      //There can me more options as well
      // DocumentPicker.types.allFiles
      // DocumentPicker.types.images
      // DocumentPicker.types.plainText
      // DocumentPicker.types.audio
      // DocumentPicker.types.pdf
    });
    //Printing the log realted to the file
    console.log('res : ' + JSON.stringify(res));
    console.log('URI : ' + res.uri);
    console.log('Type : ' + res.type);
    console.log('File Name : ' + res.name);
    console.log('File Size : ' + res.size);
    //Setting the state to show single file attributes
    // setSingleFile(res);
  } catch (err) {
    //Handling any exception (If any)
    if (DocumentPicker.isCancel(err)) {
      //If user canceled the document selection
      alert('Canceled from single doc picker');
    } else {
      //For Unknown Error
      alert('Unknown Error: ' + JSON.stringify(err));
      throw err;
    }
  }
};

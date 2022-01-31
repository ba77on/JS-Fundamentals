function extractFile(input) {

    let i = input.lastIndexOf(".");
    let fileNameIndex = input.lastIndexOf('\\');
    let fileName = input.substring(fileNameIndex + 1, i);
    let extension = input.substring(i + 1,);



    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)



}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
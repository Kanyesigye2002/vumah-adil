import axios from 'axios';

export const UploadImage = async (file) => {
  const API_ENDPOINT = 'https://cyzkstzeu7.execute-api.us-east-2.amazonaws.com/default/getPresignedImageUrl';

  // * GET request: pre-signed URL
  const response = await axios({
    method: 'GET',
    url: API_ENDPOINT
  }).catch((e) => {
    console.log(e);
    return undefined;
  });

  // * PUT request: upload file to S3
  const result = await fetch(response.data.uploadURL, {
    method: 'PUT',
    body: file
  }).catch((e) => {
    console.log(e);
    return undefined;
  });

  if (result.ok) {
    return response.data.Key;
  } else {
    return undefined;
  }
};

export const UploadImages = async (files) => {
  const upLoadedFiles = [];
  await Promise.all(
    (
      await files
    ).map(async (file) => {
      const fileUp = await UploadImage(file);
      if (fileUp !== undefined) {
        upLoadedFiles.push({ url: 'https://vumah-store.s3.us-east-2.amazonaws.com/' + fileUp });
      }
      return fileUp;
    })
  );

  console.log('Uploaded All file: ', upLoadedFiles);

  return upLoadedFiles;
};

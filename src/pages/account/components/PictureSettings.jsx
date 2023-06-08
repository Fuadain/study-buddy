import { useState, useEffect, useContext } from 'react';
import { Box, Button, Input } from '@mui/material';
import AxiosContext from '../../../components/axios-context'
import axios from 'axios'

const PictureSettings = () => {
  const [image, setImage] = useState();
  const {hostname, axiosConfig} = useContext(AxiosContext)

  useEffect(() => {
    // Check if image is not set and then fetch the image
    if (!image) {
      fetch('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541')
        .then(response => response.blob())
        .then(blob => {
          setImage(blob);
        });
    }
  }, [image]);

  function handleImage(e) {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      setImage(file);
    } else if (e.target.files.length > 0) { // prevent alert on cancel
      setImage(null);
      alert("Please select an image file.");
    }
  }

  function handleUpload() {
    //code to send image to server
    axios.post(`${hostname}/`, {image: image}, axiosConfig)
    .then(res=>{
      
    })
  }

  return (
    <Box className='container'
      flexDirection='row'
      sx={{
        height: '10vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white'
      }}
      m={2}
    >

      <Box
        style={{
          height: '100px',
          width: '100px',
          borderRadius: '40px',
          marginRight: '1em',
          overflow: 'hidden' /* add overflow hidden to the box container */
        }}
      >
        <img
          src={image ? URL.createObjectURL(image) : ''}
          alt='Uploaded File'
          style={{
            maxWidth: '100%', /* add max-width and max-height to the image */
            maxHeight: '100%'
          }}
        />
      </Box>

      <Box display='flex' flexDirection='column'>
        <Input type='file' onChange={handleImage} sx={{ mb: '1em' }} />
        <Button variant='contained' onClick={handleUpload}>Upload Image</Button>
      </Box>

    </Box>
  )
}

export default PictureSettings;
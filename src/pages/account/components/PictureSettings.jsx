import { useState, useEffect } from 'react';
import { Box, Button, Input } from '@mui/material';

const PictureSettings = () => {
  const [image, setImage] = useState();

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
    setImage(e.target.files[0]);
  }

  function handleUpload() {
    //code to send image to server
  }

  return (
    <Box className='container'
      flexDirection='row' 
      sx={{
        height: '10vh',
        
      }}
      m={2}
    >

      <Box 
        
      >
      <img 
        src={image ? URL.createObjectURL(image) : ''} 
        alt='Uploaded File' 
        style={{
          height: '100px', 
          borderRadius: '40px',
          marginRight: '1em'
        }}
      />
      </Box>
      

      <Box display='flex' flexDirection='column'>
        <Input type='file' onChange={handleImage} sx={{mb: '1em'}} />
        <Button variant='contained' onClick={handleUpload}>Upload Image</Button>
      </Box>

    </Box>
  )
}

export default PictureSettings;
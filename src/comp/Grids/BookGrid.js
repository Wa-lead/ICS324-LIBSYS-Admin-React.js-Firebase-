
import useFirestore from '../../hooks/useFirestore';
import React from 'react';
import UploadForm from '../Forms/UploadBook';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem'

const BookGrid = ({ setSelectedBook, setSelectedImg }) => {
  const { docs } = useFirestore('Book')


  return (
    <div>
      <UploadForm setSelectedBook={setSelectedBook} />


      <div className="grid">
        <ImageList sx={{ width: 1000, height: 1000 }} cols={4} rowHeight={300}>
          {docs && docs.map(doc => (
            <ImageListItem>
              <Card style={{ backgroundColor: "#DEE2E5" }}
                sx={{ maxWidth: 200 }} onClick={() => setSelectedImg(doc)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={doc.imageURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                      {doc.title}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div" >
                      {doc.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ImageListItem>


          ))}
        </ImageList>

      </div>

    </div>

  )

}


export default BookGrid;
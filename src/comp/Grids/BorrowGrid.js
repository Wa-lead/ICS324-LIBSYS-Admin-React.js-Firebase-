
import useFirestore from '../../hooks/useFirestore';
import React from 'react';
import UploadForm from '../Forms/UploadBook';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem'

const BorrowGrid = ({ setSelectedBook, setSelectedImg }) => {
  const { docs } = useFirestore('LibraryBorrow')


  return (
    <div>

      <div className="grid">
      <Typography variant="h2" sx={{ mb:3, mt: 3, fontWeight: 900}}> You can borrow</Typography>

        <ImageList sx={{ height: 1000 }} cols={3} rowHeight={300}>
          {docs && docs.map(doc => (
            <ImageListItem>
              <Card style={{ backgroundColor: "#7CD1B8" }}
                sx={{ maxWidth: 200 }} onClick={() => setSelectedImg(doc)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={doc.imageURL}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div" sx={{ pb: 2 }}>
                      {doc.title}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div" sx={{ pb: 1 }}>
                      {doc.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Subject: {doc.subject}
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


export default BorrowGrid;
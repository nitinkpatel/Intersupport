import { Card, Fab, Grid } from "@mui/material";
import {IconButton} from '@mui/material';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import styled from 'styled-components';


const StyledButton = styled(IconButton)`
  z-index: 100;
  left: 500px;
  top: 15ppx;
  border: solid
`;

export default function StoneMedia(props){
 
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card >
          <iframe
            height="450px"
            src={props.stone.videoUrl}
            width="100%"
          ></iframe>
          <StyledButton >
            <FileDownloadIcon/>
          </StyledButton>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card>
          <img 
            height="450px"
            src={props.stone.imageUrl}
            width="100%"
          />
          <StyledButton>
            <FileDownloadIcon />
          </StyledButton>
        </Card>
      </Grid> 
    </Grid>
  ); 
}
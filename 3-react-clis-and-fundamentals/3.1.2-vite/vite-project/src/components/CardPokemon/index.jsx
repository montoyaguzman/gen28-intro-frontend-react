
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';

function CardPokemon({ name, img, description }) {

  // const name = props.name;
  // const img = props.img;

  // const { name, img } = props;

  // const styleTitlePokemon = {
  //   color: 'green',
  //   backgroundColor: 'yellow',
  //   fontSize: '22px',
  // };

  // comentario

  /**
   * varias
   * lineas
   */

  return ( /** JSX */
    <>

      <Card sx={{ width: 150 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{name}</Button>
        </CardActions>
      </Card>


    </>
  )
}

export { CardPokemon };
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cards = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="projeto1.png" title="projeto1" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          PokeOlympics
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Projeto Hackathon das Olimpíadas de Paris 2024
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Repositório</Button>
        <Button size="small">Acesse</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;

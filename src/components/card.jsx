import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cards = ({ title, description, image }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 200 }} image={image} title={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small">Repositório</Button>
        <Button size="small" variant="contained">
          Acesse
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;

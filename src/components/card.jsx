import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cards = ({ title, description, image, repoUrl, liveUrl }) => {
  return (
    <Card
      sx={{
        width: 345,
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={image || "computer.svg"}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "var(--font-size-h5)",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" href={repoUrl} target="_blank">
          Repositório
        </Button>
        <Button size="small" variant="contained" href={liveUrl} target="_blank">
          Acesse
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;

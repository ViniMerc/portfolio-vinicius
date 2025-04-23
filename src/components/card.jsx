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
        backgroundColor: "rgba(228, 240, 229, 0.05)", // Based on #e4f0e5
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(228, 240, 229, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 16px rgba(228, 240, 229, 0.1)",
          borderColor: "rgba(228, 240, 229, 0.2)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
         image={image || "noimage.svg"}
        title={title}
      />
      <CardContent sx={{ minHeight: "120px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "var(--font-size-h5)",
            marginBottom: "0.75rem",
            color: "#e4f0e5",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(228, 240, 229, 0.8)",
            fontSize: "0.9rem",
            lineHeight: "1.6",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          padding: "16px",
          borderTop: "1px solid rgba(228, 240, 229, 0.1)",
          gap: 2,
          display: "flex",
        }}
      >
        <Button
          size="small"
          href={repoUrl}
          target="_blank"
          sx={{
            color: "rgba(228, 240, 229, 0.9)",
            flex: 1,
            maxWidth: "140px",
            border: "1px solid rgba(228, 240, 229, 0.2)",
            "&:hover": {
              color: "#e4f0e5",
              backgroundColor: "rgba(228, 240, 229, 0.05)",
              borderColor: "#e4f0e5",
            },
          }}
        >
          Repositório
        </Button>
        <Button
          size="small"
          variant="contained"
          href={liveUrl}
          target="_blank"
          sx={{
            backgroundColor: "rgba(228, 240, 229, 0.1)",
            flex: 1,
            maxWidth: "140px",
            "&:hover": {
              backgroundColor: "rgba(228, 240, 229, 0.2)",
            },
          }}
        >
          Acesse
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;

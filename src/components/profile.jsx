import { Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Grid item size={12} sx={{ textAlign: "center" }}>
        <img src="Foto.png" alt="Profile photo of Vinícius Chede" />
      </Grid>
      <Grid item size={12} sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "var(--font-size-h2)",
            marginBottom: 1,
          }}
        >
          Vinícius Medeiros Rodrigues Chede
        </Typography>
      </Grid>
    </>
  );
};

export default Profile;

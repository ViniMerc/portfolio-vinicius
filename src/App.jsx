import { Stack, Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import Cards from "./components/card";

function App() {
  return (
    <>
      <Grid container>
        <Grid
          item
          size={12}
          sx={{
            textAlign: "center",
          }}
        >
          <img src="Foto.png" />
        </Grid>

        <Grid
          item
          size={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h2">
            Vinícius Medeiros Rodrigues Chede
          </Typography>
        </Grid>
        <Grid item size={12}>
          <Stack direction="row" spacing={5}>
            <Cards />
            <Cards />
            <Cards />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

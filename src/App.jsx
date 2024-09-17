import "./App.css";
import { Grid, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <img src="public\Foto.png" />
        </Grid>

        <Grid item xs={12}>
          <Typography>Vinícius Medeiros Rodrigues Chede</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

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
          <img src="Foto.png" alt="Foto" />
        </Grid>

        <Grid
          item
          size={12}
          sx={{
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography variant="h2">
            Vinícius Medeiros Rodrigues Chede
          </Typography>
        </Grid>
        <Grid
          item
          size={12}
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6">Projetos</Typography>
        </Grid>

        <Grid
          item
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={5}>
            <Cards
              title="PokeOlympics"
              description="Projeto Hackathon das Olimpíadas de Paris 2024"
              image="projeto1.png"
            />
            <Cards
              title="Vinicius Viagens 1.0"
              description="Site de viagens com HTML e CSS"
              image=""
            />
            <Cards
              title="Vinicius Viagens 2.0"
              description="Site de viagens refeito com protótipo de Desing e utlilzando React e Material UI"
              image=""
            />
            
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

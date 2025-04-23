import { Stack, Typography } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";
import Cards from "./components/card";
import Profile from "./components/profile";
import { projects } from "./data/projects";

function App() {
  return (
    <>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <Grid container>
        <Profile />
        <Grid item size={12} sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "var(--font-size-h4)",
              marginBottom: "1rem",
            }}
          >
            Projetos
          </Typography>
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
          <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
            {projects.map((project, index) => (
              <Cards key={index} {...project} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

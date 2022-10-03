import logo from "./logo.svg";
import "./App.css";
import { Typography, Box, Grid, Grow, Container } from "@mui/material";
import Todo from "./components/Todo/Todo";
import Todos from "./components/Todos/Todos";
import HighPrio from "./components/HighPrio/HighPrio";
import LowPrio from "./components/LowPrio/LowPrio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Container maxWidth="lg" sx={{ padding: "120px" }}>
      <Grow in>
        <Container>
          <Grid
            display="flex"
            justify="space-between"
            alignItems="stretch"
            spacing={7}
          >
            <Grid item xs={12} sm={7} margin="auto" marginTop="0">
              <Todos />
            </Grid>
            <Grid item xs={12} sm={4} marginLeft="auto">
              <HighPrio />
              <LowPrio />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

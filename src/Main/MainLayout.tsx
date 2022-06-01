import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MainPage from "./MainPage";
import logo from "./logo1.png";

function MainLayout() {
  return (
    <>
      <AppBar position="static" style={{ background: "4b72f4" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: "flex" }}
            >
              <img alt="express 24" src={logo} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ marginTop: "250px" }}>
        <MainPage></MainPage>
      </div>
    </>
  );
}

export default MainLayout;

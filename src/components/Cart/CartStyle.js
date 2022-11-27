import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    maxWidth: "100vw",
    height: "100%",
    margin: "0px -8px -8px",
    width: "101.05%",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  title: {
    marginTop: "5%",
    marginBottom: "5%",
    fontFamily: "Kanit, Manrope, monospace, sans-serif",
    fontWeight: "700",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    fontFamily: "Poppins, Kanit, Manrope, monospace, sans-serif",
    textDecoration: "none",
    color: "rgba(0, 145, 230, 0.781)",
  },
  cardDetails: {
    display: "flex",
    marginTop: "20%",
    paddingBottom: "2%",
    width: "100%",
    justifyContent: "space-between",
  },
}));

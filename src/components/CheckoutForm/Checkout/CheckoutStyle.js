import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  toolbar: theme.mixins.toolbar,
  container: {
    backgroundColor: "#1e1e1e",
    width: "99.25vw",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      margin: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
    margin: "0px -8px -8px",
    paddingBottom: "1px",
  },
  layout: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    boxShadow:
      "1px 2px 2px 0px  rgba(0, 0, 0, 20%), 1px 2px 1px 1px rgba(255, 255, 255, 72%)",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "0px 0px 0px 0px",
    },
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

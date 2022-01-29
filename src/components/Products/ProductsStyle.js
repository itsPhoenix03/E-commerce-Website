import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#1e1e1e",
    padding: theme.spacing(3),
    margin: "0px -8px -8px",
  },
  root: {
    flexGrow: 1,
  },
}));

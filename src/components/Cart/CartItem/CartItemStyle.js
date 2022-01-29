import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid rgba(0, 145, 230, 0.781)",
    marginTop: "2%",
  },
  media: {
    borderBottom: "1px solid rgba(0, 145, 230, 0.781)",
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Manrope",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
}));

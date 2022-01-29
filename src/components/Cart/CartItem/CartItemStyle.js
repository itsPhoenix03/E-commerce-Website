import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: "#000",
    color: "#fff",
    boxShadow: "1px 1px 5px 0px rgba(0, 145, 230, 0.781)",
    "&:hover": {
      boxShadow: "1px 1px 5px 0px rgba(255, 255, 255, 0.781)",
    },
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

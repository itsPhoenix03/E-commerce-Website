import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#000",
    color: "#fff",
    boxShadow: "1px 1px 5px 0px rgba(0, 145, 230, 0.781)",
    "&:hover": {
      boxShadow: "1px 1px 5px 0px rgba(255, 255, 255, 0.781)",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderBottom: "1px solid rgba(0, 145, 230, 0.781)",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    fontFamily: "Manrope",
    display: "flex",
    justifyContent: "space-between",
  },
  cardDescription: {
    color: "#ffffffab",
  },
  cardCartIcon: {
    color: "#ffffffab",
  },
}));

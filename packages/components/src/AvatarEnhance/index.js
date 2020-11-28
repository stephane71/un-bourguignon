import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AvatarEnhance({
  img,
  firstname,
  lastname,
  job = "",
  bottomComponent = null,
  small = false,
}) {
  const classes = useStyles({ small });

  return (
    <div className={classes.AvatarEnhance}>
      <Avatar
        alt={`${firstname} ${lastname}`}
        src={img}
        className={classes.avatar}
      />
      <div className={classes.text}>
        <Typography variant={"h6"} component="h1" className={classes.name}>
          {firstname} <span style={{ opacity: 0.7 }}>{lastname}</span>
        </Typography>

        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="h2"
          className={classes.subtitle}
        >
          {job}
        </Typography>

        {small ? null : bottomComponent}
      </div>
    </div>
  );
}

AvatarEnhance.propTypes = {
  img: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  job: PropTypes.string,
  bottomComponent: PropTypes.element,
  small: PropTypes.bool,
};

export default AvatarEnhance;

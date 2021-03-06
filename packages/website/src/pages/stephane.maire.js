import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ContactDetails, AvatarEnhance } from "@un-bourguignon/components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ButtonNetworkProfils from "../components/ButtonsNetworkProfils";
import GitHubIcon from "@material-ui/icons/GitHub";
import LogoWebTechno from "../components/LogoWebTechno";
import { GITHUB_COLOR, PERSONAL_DETAILS } from "../constants";
import AvatarPhoto from "../components/AvatarPhoto";

const useStyles = makeStyles((theme) => ({
  FreelancePage: {
    position: "relative",
    paddingBottom: theme.spacing(5),
  },
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  fontWeightRegular: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  fabDLContact: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FreelancePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesDownXS = useMediaQuery("(max-width:305px)");

  return (
    <Container
      maxWidth="sm"
      component="article"
      className={classes.FreelancePage}
    >
      <Head>
        <title>
          Un Bourguignon: activité de freelance, présentation de Stéphane Maire
        </title>
        <meta
          name="description"
          content="Un Bourguignon: activité de freelance, Freelance: Stéphane Maire, Compétences: développeur web front-end et technologies React, Full remote: oui"
        />
      </Head>
      <header className={classes.header}>
        <AvatarEnhance
          img={PERSONAL_DETAILS.image}
          firstname={PERSONAL_DETAILS.firstname}
          lastname={PERSONAL_DETAILS.lastname}
          job={PERSONAL_DETAILS.job}
          vertical={matchesDownXS}
          bottomComponent={
            <div>
              <Chip
                label="Freelance"
                variant="outlined"
                size="small"
                className={classes.chip}
              />
              <Chip
                label="Full Remote"
                variant="outlined"
                size="small"
                className={classes.chip}
              />
            </div>
          }
        >
          <AvatarPhoto />
        </AvatarEnhance>
      </header>

      <section id="introduction" className={classes.section}>
        <Typography
          variant="h6"
          component="p"
          className={classes.fontWeightRegular}
        >
          <b>Bonjour,</b>
          <br />
          Je suis développeur Front-End et travaille à distance depuis la
          Saône-et-Loire. Je suis spécialisé dans les environnements React et
          les technologies qui gravitent autour.
          <br />
        </Typography>
        <Button
          style={{ marginTop: theme.spacing(2) }}
          variant='outlined'
          startIcon={<GitHubIcon style={{ color: GITHUB_COLOR }} />}
          size="large"
          href={PERSONAL_DETAILS.GitHub}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Button>
      </section>

      <section id="technologies" className={classes.section}>
        <LogoWebTechno />
      </section>

      <section id="contact-informations" className={classes.section}>
        <Typography
          variant="h5"
          component="h3"
          paragraph
          className={classes.fontWeightRegular}
        >
          Contactez moi
        </Typography>
        <Paper variant="outlined">
          <ContactDetails
            email={PERSONAL_DETAILS.email}
            location={PERSONAL_DETAILS.location}
            phone={PERSONAL_DETAILS.phone}
          />
          <div style={{ padding: theme.spacing(1) }}>
            <ButtonNetworkProfils />
          </div>
        </Paper>
        <Fab
          title="Ajouter mon contact"
          aria-label="Ajouter mon contact"
          color="primary"
          variant={matches ? "extended" : "round"}
          className={classes.fabDLContact}
          href={PERSONAL_DETAILS.vcf}
        >
          <PersonAddIcon className={matches ? classes.extendedIcon : ""} />
          {matches ? "Mon contact" : null}
        </Fab>
      </section>
    </Container>
  );
};

export default FreelancePage;

import { Box, Image, Text, Title, createStyles } from '@mantine/core';

function ProcessSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  const useStyles = createStyles(theme => ({
    processTitle: {
      fontSize: '44px',
      [theme.fn.largerThan('sm')]: {
        fontSize: '96px',
      },
    },
    processSection: {
      height: '25vh',
      [theme.fn.largerThan('sm')]: {
        height: '50vh',
      },
    },
  }));

  const { classes } = useStyles();
  // const theme = useMantineTheme();

  return (
    <>
      <Box
        className={classes.processSection}
        sx={{
          backgroundImage: 'url("enhetlig-process.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '30% center',
        }}
      >
        <Title className={classes.processTitle} p='40px 0 0 30px' c='white'>
          ENHETLIG
        </Title>
        <Title className={classes.processTitle} p='0 0 0 30px' c='white'>
          PROCESS
        </Title>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Text>
            Vår webbyrå, ELD'S IT, är något alldeles speciellt när det kommer till att designa
            hemsidor från ett helhetsperspektiv. Vårt arbete handlar inte bara om att skapa vackra
            sidor, utan om att skapa meningsfulla och funktionella digitala platser som verkligen
            ger resultat. Vi börjar alltid med att fördjupa oss i att förstå våra kunders behov och
            målgruppens beteenden. Genom noggrann forskning och analys strävar vi efter att skapa en
            användarupplevelse som inte bara är tilltalande visuellt, utan också intuitiv och smidig
            att navigera. Vår kompetens sträcker sig över både design och utveckling. Vårt team av
            designers och utvecklare samarbetar för att integrera den senaste tekniken och bästa
            användbarhetspraxis. Detta ser till att våra hemsidor är moderna, responsiva och
            anpassningsbara till olika enheter. Men det som verkligen driver oss är möjligheten att
            göra skillnad för våra kunders affärer. Vi ser bortom det rent visuella och arbetar hårt
            för att integrera affärsstrategi i varje designbeslut. Vi tar hänsyn till
            varumärkesidentitet, målgruppens förväntningar och de mål som våra kunder vill uppnå. På
            så sätt skapar vi inte bara hemsidor, utan kraftfulla verktyg för att öka försäljning,
            skapa medvetenhet och bygga starka kundrelationer. Vårt holistiska synsätt innebär att
            vi kombinerar kreativ konstnärlighet med affärsmässig strategi. Resultatet är hemsidor
            som inte bara är estetiskt tilltalande, utan som också driver konkreta resultat för
            företagen vi samarbetar med. Med ELD'S IT som partner kan du vara trygg med att din
            digitala närvaro är i de bästa och mest kompetenta händerna.
          </Text>
        </Box>
        <Image src='/design.png' alt='Image showing people working on a computer from above' />
      </Box>
    </>
  );
}

export default ProcessSection;

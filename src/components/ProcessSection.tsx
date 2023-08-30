import { Box, Text, Title, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function ProcessSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  const useStyles = createStyles(theme => ({
    processSection: {
      height: '25vh',
      [theme.fn.largerThan('sm')]: {
        height: '50vh',
      },
    },
    processDesignSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [theme.fn.largerThan('sm')]: {
        flexDirection: 'row',
      },
    },
    processDesignTextDiv: {
      padding: '20px',
      [theme.fn.largerThan('sm')]: {
        width: '50%',
      },
    },
    // reverse: {
    //   order: 1,
    // },
  }));

  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 48em)');

  // TSX ------------------------------------------------------------------------
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
        <Title order={matches ? 1 : 3} p='40px 0 0 30px' c='white'>
          ENHETLIG
        </Title>
        <Title order={matches ? 1 : 3} p='0 0 0 30px' c='white'>
          PROCESS
        </Title>
      </Box>

      <Box className={classes.processDesignSection}>
        <Box sx={{ order: 2, width: '100%' }}>
          <Title order={4} p='20px 0' ta='center'>
            Design
          </Title>
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
        <Box
          sx={{
            width: '100%',
            order: 1,
            height: matches ? 'none' : '25vh',
            backgroundImage: 'url("design.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></Box>
      </Box>
      <Box className={classes.processDesignSection}>
        <Box sx={{ width: '100%' }}>
          <Title order={4} p='20px 0' ta='center'>
            Utveckling
          </Title>
          <Text>
            Vår webbyrå, ELD'S IT, är en kraft att räkna med när det gäller utveckling av hemsidor
            med ett omfattande helhetsperspektiv. Vår kompetens sträcker sig bortom gränserna mellan
            frontend och backend, vilket möjliggör skapandet av webbplatser som inte bara är
            visuellt imponerande, utan också tekniskt solida och användarvänliga. Vi tar en
            djupgående och målinriktad metod för att utveckla våra hemsidor. Vårt team av erfarna
            utvecklare har expertis inom både frontend och backend, vilket innebär att vi kan skapa
            en sömlös och sammanhängande användarupplevelse. Vi börjar med att förstå våra kunders
            behov och mål, och bygger sedan upp tekniska lösningar som stöder dessa mål på alla
            nivåer. Inom frontend-utveckling strävar vi efter att skapa användargränssnitt som inte
            bara är estetiskt tilltalande, utan också intuitiva och lätta att använda. Vårt arbete
            innefattar skapandet av responsiva och interaktiva element som engagerar besökare och
            skapar en positiv användarupplevelse. På backend-sidan har vi djup kunskap om
            systemarkitektur, databasdesign och hantering av komplexa funktioner. Vi bygger robusta
            och skalbara lösningar som säkerställer att hemsidan kan hantera ökande trafik och
            användarinteraktion utan problem. Vår kompetens är inte bara tekniskt inriktad, utan har
            också en affärsmässig komponent. Vi förstår att en välutvecklad hemsida inte bara är en
            teknisk prestation, utan också ett verktyg för att nå affärsmål. Därför arbetar vi nära
            våra kunder för att integrera deras strategi och mål i utvecklingsprocessen. Med ELD'S
            IT som partner kan du vara säker på att din hemsida inte bara kommer att vara tekniskt
            robust och funktionell, utan också en kraftfull resurs för att uppnå dina affärsmål. Vår
            helhetstäckande kompetens inom både frontend och backend-utveckling gör oss till det
            självklara valet för företag som söker en pålitlig och skicklig partner för sina
            digitala projekt.
          </Text>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: matches ? 'none' : '25vh',
            backgroundImage: 'url("utveckling.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></Box>
      </Box>
    </>
  );
}

export default ProcessSection;

import { Box, Text, Title, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { gsap } from 'gsap';
import { useEffect } from 'react';

function ProcessSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  const useStyles = createStyles(theme => ({
    processSection: {
      height: '35vh',
      [theme.fn.largerThan('64em')]: {
        height: '50vh',
      },
    },
    processSections: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [theme.fn.largerThan('64em')]: {
        flexDirection: 'row',
      },
    },
    processDesignTextDiv: {
      padding: '20px',
      [theme.fn.largerThan('64em')]: {
        width: '50%',
      },
    },
  }));

  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 64em)');

  // BLUE BALL ANIMATION -------------------------------------------------------------------

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.enhetlig-process-heading', {
      x: -1900, // Negative value to move from right to left
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: '.process-top-section',
        start: 'top center',
        end: 'bottom top',
        // scrub: 1,
        // pin: true,
        toggleActions: 'play reset none none',
        //OnEnter, OnLeave, OnEnterBack, OnLeaveBack
        //options: play, pause, resume, reset, restart, complete, reverse, none
        markers: true,
      },
    });

    gsap.to('.blueball', {
      // x: 150,
      y: 2450,
      // duration: 8,
      scrollTrigger: {
        trigger: '.process-section',
        start: '45% 70%',
        end: 'bottom 0%',
        scrub: 1,
        // pin: true,
        // toggleActions: "restart none none none",
        //options: play, pause, resume, reset, restart, complete, reverse, none
        //OnEnter, OnLeave, OnEnterBack, OnLeaveBack
        // markers: true,
      },
    });
  }, []);

  // END OF BLUE BALL ANIMATION -------------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  return (
    <>
      <Box sx={{ overflow: 'hidden' }} className='process-section'>
        <Box
          className={`${classes.processSection} process-top-section`}
          sx={{
            backgroundImage: 'url("enhetlig-process.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '30% center',
          }}
        >
          {/* TITLE BOX.. */}
          <Box sx={{opacity:"0%", position: 'relative', left: '1900px' }} className='enhetlig-process-heading'>
            {matches ? (
              <Title fz='96px' p='40px 0 0 30px' c='white'>
                ENHETLIG <br /> PROCESS
              </Title>
            ) : (
              <Title order={1} p='40px 0 0 30px' c='white'>
                ENHETLIG <br /> PROCESS
              </Title>
            )}
          </Box>
        </Box>
        {/* DESIGN SECTION----------------------------------------------------------------------------- */}
        <Box sx={{ position: 'relative' }}>
          {/* BLUE BALL --------------------------------- */}
          <div
            className='blueball'
            style={{
              width: '150px',
              height: '150px',
              display: matches ? 'block' : 'none',
              position: 'absolute',
              zIndex: -10,
              top: -75,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              src='/blue-ball-striped.png'
              alt='A blue ball that gets animated on the site.'
            />
          </div>

          <Box className={classes.processSections}>
            <Box sx={{ width: '100%', order: matches ? 2 : 0 }}>
              <Title p='20px 0' ta='center'>
                Design
              </Title>
              <Text fz='12px' p={matches ? '0 10% 150px' : '0 10px 10px'}>
                Vår webbyrå, ELD'S IT, är något alldeles speciellt när det kommer till att designa
                hemsidor från ett helhetsperspektiv. Vårt arbete handlar inte bara om att skapa
                vackra sidor, utan om att skapa meningsfulla och funktionella digitala platser som
                verkligen ger resultat.
                <br />
                <br />
                Vi börjar alltid med att fördjupa oss i att förstå våra kunders behov och
                målgruppens beteenden. Genom noggrann forskning och analys strävar vi efter att
                skapa en användarupplevelse som inte bara är tilltalande visuellt, utan också
                intuitiv och smidig att navigera.
                <br />
                <br />
                Vår kompetens sträcker sig över både design och utveckling. Vårt team av designers
                och utvecklare samarbetar för att integrera den senaste tekniken och bästa
                användbarhetspraxis. Detta ser till att våra hemsidor är moderna, responsiva och
                anpassningsbara till olika enheter.
                <br />
                <br />
                Men det som verkligen driver oss är möjligheten att göra skillnad för våra kunders
                affärer. Vi ser bortom det rent visuella och arbetar hårt för att integrera
                affärsstrategi i varje designbeslut. Vi tar hänsyn till varumärkesidentitet,
                målgruppens förväntningar och de mål som våra kunder vill uppnå. På så sätt skapar
                vi inte bara hemsidor, utan kraftfulla verktyg för att öka försäljning, skapa
                medvetenhet och bygga starka kundrelationer.
                <br />
                <br />
                Vårt holistiska synsätt innebär att vi kombinerar kreativ konstnärlighet med
                affärsmässig strategi. Resultatet är hemsidor som inte bara är estetiskt
                tilltalande, utan som också driver konkreta resultat för företagen vi samarbetar
                med. Med ELD'S IT som partner kan du vara trygg med att din digitala närvaro är i de
                bästa och mest kompetenta händerna.
              </Text>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: matches ? 'none' : '55vh',
                backgroundImage: 'url("design.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center 0%',
              }}
            ></Box>
          </Box>
          {/* UTVECKLING SECTION----------------------------------------------------------------------------- */}
          <Box className={classes.processSections}>
            <Box sx={{ width: '100%' }}>
              <Title p='20px 0' ta='center'>
                Utveckling
              </Title>
              <Text fz='12px' p={matches ? '0 10% 150px' : '0 10px 10px'}>
                Vår webbyrå, ELD'S IT, är en kraft att räkna med när det gäller utveckling av
                hemsidor med ett omfattande helhetsperspektiv. Vår kompetens sträcker sig bortom
                gränserna mellan frontend och backend, vilket möjliggör skapandet av webbplatser som
                inte bara är visuellt imponerande, utan också tekniskt solida och användarvänliga.
                <br />
                <br />
                Vi tar en djupgående och målinriktad metod för att utveckla våra hemsidor. Vårt team
                av erfarna utvecklare har expertis inom både frontend och backend, vilket innebär
                att vi kan skapa en sömlös och sammanhängande användarupplevelse. Vi börjar med att
                förstå våra kunders behov och mål, och bygger sedan upp tekniska lösningar som
                stöder dessa mål på alla nivåer.
                <br />
                <br />
                Inom frontend-utveckling strävar vi efter att skapa användargränssnitt som inte bara
                är estetiskt tilltalande, utan också intuitiva och lätta att använda. Vårt arbete
                innefattar skapandet av responsiva och interaktiva element som engagerar besökare
                och skapar en positiv användarupplevelse. På backend-sidan har vi djup kunskap om
                systemarkitektur, databasdesign och hantering av komplexa funktioner.
                <br />
                <br />
                Vi bygger robusta och skalbara lösningar som säkerställer att hemsidan kan hantera
                ökande trafik och användarinteraktion utan problem. Vår kompetens är inte bara
                tekniskt inriktad, utan har också en affärsmässig komponent. Vi förstår att en
                välutvecklad hemsida inte bara är en teknisk prestation, utan också ett verktyg för
                att nå affärsmål. Därför arbetar vi nära våra kunder för att integrera deras
                strategi och mål i utvecklingsprocessen.
                <br />
                <br />
                Med ELD'S IT som partner kan du vara säker på att din hemsida inte bara kommer att
                vara tekniskt robust och funktionell, utan också en kraftfull resurs för att uppnå
                dina affärsmål. Vår helhetstäckande kompetens inom både frontend och
                backend-utveckling gör oss till det självklara valet för företag som söker en
                pålitlig och skicklig partner för sina digitala projekt.
              </Text>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: matches ? 'none' : '55vh',
                backgroundImage: 'url("utveckling.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></Box>
          </Box>
          {/* LANSERING SECTION----------------------------------------------------------------------------- */}
          <Box className={classes.processSections}>
            <Box sx={{ width: '100%', order: matches ? 2 : 0 }}>
              <Title p='20px 0' ta='center'>
                Lansering
              </Title>
              <Text fz='12px' p={matches ? '0 10% 150px' : '0 10px 10px'}>
                När det kommer till att hjälpa våra kunder att lansera sina färdigställda produkter
                går ELD'S IT bortom utveckling och design. Vår fullständiga och engagerade support
                sträcker sig även till lanseringsfasen, där vi säkerställer att produkten når
                målgruppen på bästa sätt och får den uppmärksamhet den förtjänar.
                <br />
                <br />
                Vårt team är med våra kunder varje steg på vägen, från utveckling till lansering. Vi
                förstår att en framgångsrik lansering handlar om mer än bara tekniken. Det handlar
                om att skapa buzz och generera intresse. Vi arbetar tillsammans med våra kunder för
                att utveckla en lanseringsstrategi som passar deras mål och målgrupp. Vår kompetens
                inom design och användarupplevelse spelar en avgörande roll i detta skede.
                <br />
                <br />
                Vi säkerställer att den färdigställda produkten inte bara är tekniskt stabil, utan
                också estetiskt tilltalande och användarvänlig. Detta är särskilt viktigt vid
                lanseringen, då det första intrycket kan göra en stor skillnad. Vi arbetar också med
                att testa och optimera produkten innan den lanseras. Detta innefattar att
                säkerställa att hemsidan fungerar korrekt på olika enheter och webbläsare samt att
                lasttesta den för att hantera eventuella trafikspikar.
                <br />
                <br />
                Genom att vara förberedda på olika scenarier vid lanseringen minimerar vi risken för
                tekniska problem som kan påverka användarupplevelsen negativt. Vårt engagemang
                sträcker sig också till att övervaka och analysera produktens prestanda efter
                lanseringen. Vi använder olika verktyg och analyser för att utvärdera hur användare
                interagerar med produkten och hur den påverkar affärsmålen. Om det behövs gör vi
                justeringar för att optimera resultat och uppnå önskade mål.
                <br />
                <br />
                ELD'S IT går långt bortom att bara leverera en färdig produkt. Vi är med våra kunder
                hela vägen, och vårt mål är att säkerställa att varje lansering är en framgångsrik
                och minnesvärd händelse. Med vår kompetens och engagemang är vi redo att hjälpa våra
                kunder att ta steget från utveckling till framgångsrik lansering och bortom.
              </Text>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: matches ? 'none' : '55vh',
                backgroundImage: 'url("lansering.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProcessSection;

import { Accordion, Box, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function AboutSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const matches = useMediaQuery('(min-width: 48em)');

  // TSX ------------------------------------------------------------------------
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          marginBottom: '1rem',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title order={2} style={{ margin: '50px 0 10px' }}>
          OM OSS
        </Title>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Text sx={{ fontSize: '18px', width: matches ? '928px' : '95%' }}>
            Vi är inte bara en webbyrå; vi är en samling av kreativa digitala tänkare och skapare
            som brinner för att omvandla visioner till digitala mästerverk. Vår resa började med en
            dröm om att inte bara designa och utveckla webbplatser, utan att skapa en helhetslösning
            av onlineupplevelser som engagerar, inspirerar och levererar resultat.
            <br />
            <br />
            Vi är ett tajt team av fem utvecklare med T-formade kompetenser, vilket innebär att vi
            har djupgående expertis i flera områden. Vi kombinerar kunskap inom front-end, back-end
            och UI/UX design, vilket ger oss förmågan att leverera skräddarsydda, helhetslösningar
            för varje klient.
            <Accordion variant='filled' fz='18px' chevronPosition='left' defaultValue='closed'>
              <Accordion.Item value='customization'>
                <Accordion.Control c='blue.9' p='0'>
                  LÄS MER
                </Accordion.Control>
                <Accordion.Panel p='0'>
                  Vi tror starkt på att varje företag, oavsett storlek eller bransch, har en unik
                  historia som förtjänar att berättas. Vårt uppdrag är att hjälpa dig berätta din
                  historia genom innovativa digitala lösningar som verkligen gör skillnad. Det kan
                  handla om att bygga en skräddarsydd webbplats, utveckla en e-handelsplattform
                  eller maximera din närvaro på sociala medier.
                  <br />
                  <br />
                  Vår filosofi är enkel: Din digitala närvaro ska inte bara spegla ditt varumärke,
                  den ska förstärka det. Vi är inte nöjda förrän vi har transformerat din vision
                  till en fulländad digital verklighet. Vi är engagerade i varje steg på vägen mot
                  din onlineframgång, från första konsultationen till den färdiga produkten och
                  vidare in i framtiden med löpande underhåll och uppdateringar. Vårt mål är att
                  vara mer än en leverantör; vi vill vara en långsiktig partner i din digitala resa.
                  <br />
                  <br />
                  Teknologin och de digitala plattformarna är ständigt föränderliga. Därför satsar
                  vi ständigt på fortbildning och att hålla oss uppdaterade om de senaste trenderna
                  och verktygen. Vi implementerar moderna, agila arbetsmetoder och fokuserar på
                  transparens och kommunikation, för att säkerställa att du alltid är i centrum för
                  alla beslut och förändringar som görs i ditt projekt. Vi erbjuder också analytiska
                  tjänster som hjälper dig att mäta och förstå din ROI, så att du kan se den
                  konkreta påverkan av vårt arbete.
                  <br />
                  <br />
                  Vi förstår att varje projekt är en investering, både i tid och resurser. Det är
                  därför vi alltid strävar efter att överträffa dina förväntningar, inte bara genom
                  att uppfylla projektkraven men också genom att leverera lösningar som ger
                  långsiktiga fördelar och skapar verklig affärsnytta.
                  <br />
                  <br /> Låt oss hjälpa dig att förvandla din digitala vision till en konkret och
                  framgångsrik verklighet. Med vårt team av skickliga utvecklare och designers är vi
                  redo att ta din digitala närvaro till nästa nivå. Vi ser fram emot att starta
                  denna spännande resa tillsammans med dig.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default AboutSection;

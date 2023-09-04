import { Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import { coworkers } from '../data';
import CoworkerCard from './CoworkerCard';

function CoworkerSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  const matches = useMediaQuery('(min-width: 1104px)');
  // TSX ------------------------------------------------------------------------
  return (
    <div>
      <div>
        <div style={{ textAlign: 'center' }}>
          <Title m={matches ? '50px 0 -20px' : '50px 0 10px'} order={2}>
            VÅRT TEAM
          </Title>
        </div>
        <ul
          style={{
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: matches ? 'row' : 'column',
            flexWrap: 'wrap',
            gap: matches ? '0px' : '30px',
            listStyleType: 'none',
            maxWidth: '1080px',
          }}
        >
          {coworkers.map(coworker => (
            <li key={coworker.id}>
              <NavLink
                to={`/coworker/${coworker.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <CoworkerCard
                  img={coworker.imgUrl}
                  name={coworker.fullName}
                  expertise={coworker.expertise}
                  shortBio={coworker.shortBio}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoworkerSection;

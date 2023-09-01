import { NavLink } from 'react-router-dom';
import { coworkers } from '../data';
import CoworkerCard from './CoworkerCard';

function CoworkerSection() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------

  // TSX ------------------------------------------------------------------------
  return (
    <div>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h2>VÅRT TEAM</h2>
        </div>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            listStyleType: 'none',
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

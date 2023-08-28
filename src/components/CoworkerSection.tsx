import { NavLink } from "react-router-dom";
import { coworkers } from "../data";
import CoworkerCard from "./CoworkerCard";

function CoworkerSection() {
  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>VÅRT TEAM</h2>
        </div>
        <ul>
          {coworkers.map((coworker) => (
            <li key={coworker.id}>
              <NavLink
                to={`/coworker/${coworker.id}`}
                style={{ textDecoration: "none" }}
              >
                <CoworkerCard
                  name={coworker.fullName}
                  expertise={coworker.expertise}
                  bio={coworker.bio}
                  phone={coworker.phone}
                  email={coworker.email}
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

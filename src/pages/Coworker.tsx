import { useParams } from "react-router-dom";
import { coworkers } from "../data";

function Coworker() {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const { id } = useParams<{ id: string | undefined }>();

  if (!id) {
    return <h4>Invalid ID</h4>;
  }

  const coworker = coworkers.find((c) => c.id === parseInt(id));

  if (!coworker) {
    return <h4>Coworker not found</h4>;
  }

  // TSX ------------------------------------------------------------------------
  return (
    <div>
      <h2>{coworker.fullName}</h2>
    </div>
  );
}

export default Coworker;

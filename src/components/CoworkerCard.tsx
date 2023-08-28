function CoworkerCard(props: {
  name: string;
  expertise: string;
  bio: string;
  phone: string;
  email: string;
}) {
  // CSS ------------------------------------------------------------------------

  // Variabler / Functions ------------------------------------------------------
  const { name, expertise, bio, phone, email } = props;

  // TSX ------------------------------------------------------------------------
  return (
    <div>
      <div style={{ border: "2px solid red" }}>
        <h3>{name}</h3>
        <h5>{expertise}</h5>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default CoworkerCard;

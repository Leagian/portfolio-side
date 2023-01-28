import profil from "../assets/images/profil.png";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio-page">
      <h2 className="bio-title">BIOGRAPHY</h2>
      <div className="bio-container">
        <img src={profil} className="photoProfil" alt="portrait" />
        <p id="bio-para">
          I have a diverse work history showing I'm adaptable, dedicated and
          thirsty for knowledge. I began as a librarian in the Bibliothèque
          Historique de la Ville de Paris (BHVP) for three years. Afterwards
          deciding to move to London to enhance my English while refining and
          sharpening my hobby photography, making it my means of livelihood.
          Which lead me to win numerous awards. <br />
          <br />
          Once I returned to Paris I continued that line of work and begin
          shooting for political magazines. As well as being a dance instructor.
          With covid putting a halt to my work, it lead me happily in the
          direction back to my original passion of tech, where I am now as a
          full stack dev !
        </p>
      </div>
    </div>
  );
};

export default Bio;

const langue = {
  Francais: {
    boost: "Boostez votre start-up avec ",
    // startup: "votre start-up avec",
    startup: " une solution numérique offerte",
    publish:
      "Vous êtes une Start-up, participez à Talent Startups challenge by DigitalAfrica et bénéficiez d'un accompagnement gratuit pour la réalisation de vos projets numériques(Website, Application mobile, logiciel de gestion...) par les apprenants de Kinshasa Digital Academy ",
    textFooter:
      "Développé par Digital Africa en partenariat avec Make-IT in  Africa, La Deutsche Gesellschaft fur Internationale Zusammenabeit (GIz) GmbH, et le Ministère pour la Coopération Economique et le Développement (BMZ), Talent 4 Startups est un programme pilote de bourses d'études pour les métiers du numérique.",
  },
  English: {
    boost: "Boost your start-up with",
    // startup: "your startup with",
    startup: " a digital solution offered",
    publish:
      "You are a Start-up, participate in the Talent Startups challenge by DigitalAfrica and benefit from free support for the realization of your digital projects (Website, Mobile application, management software...) by Kinshasa Digital learners Academy",
    textFooter:
      "Developed by Digital Africa in partnership with Make-IT in Africa, Deutsche Gesellschaft fur Internationale Zusammenabeit (GIz) GmbH, and the Ministry for Economic Cooperation and Development (BMZ), Talent 4 Startups is a pilot scholarship program studies for digital professions.",
  },
};
const titreBoost = document.querySelector(".color-purple");
// const solution = document.querySelector("#small");
const startUp = document.querySelector("#small");

const publication = document.querySelector("#postule-accrohe");
const digital = document.querySelector(".start2");
const paragraphe = document.querySelector(".paterns");
const btnlanguage = document.querySelector(".header-btns");
const boutons = document.querySelectorAll(".active");
const btnEng = document.querySelector("#eng-btn");
const btnFr = document.querySelector("#fr-btn");

btnFr.addEventListener("click", () => {
  titreBoost.textContent = langue.Francais.boost;
  document.querySelector("#small").textContent = langue.Francais.startup;
  publication.textContent = langue.Francais.publish;
  paragraphe.textContent = langue.Francais.textFooter;
});
btnEng.addEventListener("click", () => {
  titreBoost.textContent = langue.English.boost;
  document.querySelector("#small").textContent = langue.English.startup;
  publication.textContent = langue.English.publish;
  paragraphe.textContent = langue.English.textFooter;
  console.log(titreBoost);
  console.log(startUp);
});

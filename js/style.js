

// je selectionne mon bouton (btn1)
const buttonRecette = document.querySelector (".btnRecettes");

const displayRecipe = () => {

    // tableaux recettes:
    const tabRecettes  = [

    {title:"Ma_1ere_Recette",
    image: "./assets/img/cuisine-chinoise.jpg",
    content: "blablablablabla"},

    {title:"Ma_2eme_Recette",
    image: "./assets/img/ragout-minute-de-haricots-blancs.jpg",
    content: "blablablablabla"},

    {title:"Ma_3eme_Recette",
    image: "./assets/img/shutterstock.jpg",
    content: "blablablablabla"},
    ];
    //    je pointe ma div class container qui va contenir mes recettes
    const container = document.querySelector(".container");

    // je vide ma page html à chaque fois avant d'afficher le nouveau resultat
    container.innerHTML = " ";

    // je génère une recettes aléatoire (titre,img,texte)
    const indexAlea = Math.floor(Math.random() * tabRecettes.length);

    // je créé un élément h1 que je stocke dans une variable titleRecette
    const titleRecette = document.createElement("h1");
    titleRecette.textContent = tabRecettes[indexAlea].title;

    // je créer un texte pour ma recette
    const paragraphCreate = document.createElement("p");
    paragraphCreate.textContent = tabRecettes[indexAlea].content;

    // je créer un élémnet img pour ma recette
    const imgcreate = document.createElement("img");
    imgcreate.src = tabRecettes [indexAlea].image;

        // // je veux insérer le titre (titleRecette) dans la div "container"
    //     const container = document.querySelector (".container");

    // // j'insère tous les éléments créer dans ma div "container"
    container.append(titleRecette, imgcreate, paragraphCreate);
}

// j'ecoute mon btn1, et au click j'execute le code
buttonRecette.addEventListener ("click", ( ) => {
    displayRecipe();
})
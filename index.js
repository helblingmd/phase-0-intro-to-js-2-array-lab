

const cats = ["Milo", "Otis", "Garfield"];


    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");


const destructivelyAppendCat = cats.push("Ralph");

cats.length = 0;
  
cats.push("Milo", "Otis", "Garfield");

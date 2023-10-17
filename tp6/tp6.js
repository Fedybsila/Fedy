function calcul_moyenne(){
    var n1= prompt("Donner la première note: ");
    var n2= prompt("Donner la deuxième note: ");
    var n3= prompt("Donner la troisième note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme : "+somme+"<br>");
    var moyenne= somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("Vous etes redoublant");
    else if (moyenne<14)
    document.write("Vous etes Admis Passable");
    else
    document.write("Admis Mention Bien");
}

function test_age(){
    let age = prompt("Donner votre âge: ");
    if(age<18){
    document.write("<font size='8em' color='pink'>"+"Vous êtes mineur"+"</font>");
    document.bgColor="red";
    }
    else{
    document.write("Vous êtes majeur");
    document.bgColor="green";
    }

}

function simple_affichage(){
    let name = prompt('donner votre Prenom');

    let familyName = prompt('Donner votre nom');

    document.write('<div style="margin:auto; width:10%; text-align:center; border:6px solid black;">');
    document.write("salam  " + name + " " + familyName);
    document.write('</div>');
}





function test_couleur(){
    let c = prompt("donner une couleur");
    if(c == "rouge" || c == "ROUGE"){
        document.body.style.background = "red";
    }
    else if (c == "bleu" || c == "BLEU"){
        document.body.style.background = "blue";
    }
    else{
        document.write("couleur non comprie");
    }

}

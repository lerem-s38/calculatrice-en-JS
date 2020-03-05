do {
    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication 3\n - soustraction\n - 4 Multiplication\n") ;
    
} while (choix == "" || choix == null || choix != 1 && choix != 2 && choix != 3 && choix != 4);


do {
    var premierNombre = Number(prompt("Entrer un nombre ") ;
    var deuxiemeNombre = Number(prompt("Entrer un deuxieme nombre") ;
    
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre)|| choix == "" || choix == null;




function addition (nombreA, nombreB) {  
    return nombreA + nombreB ;
}

function multiplication ( nombreA, nombreB) { 
    return nombreB * nombreB ;
 }

function soustraction (nombreA, nombreB) {
    return nombreA - nombreB ;
}

function division (nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

    try{
        switch(choix)
            case 1 :
                var resultat = addition(premierNombre , deuxiemeNombre) ;
                break ; 
            case 2 :
                var resultat = multiplication (premierNombre ,deuxiemeNombre) ;
                break ;
            case 3 :
                var resultat = soustraction(premierNombre , deuxiemeNombre) ;
                break ;
            case 4 :
                var resultat = division (premierNombre , deuxiemeNombre) ;
                default:
            throw new Error("Une erreur est survenue.");
    }

    alert("Voici le résultat : " + resultat);
    }
    catch(error) {
        alert(error); // Si une erreur est survenue, on affiche l'erreur
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?");
  
}while(restart) 
       
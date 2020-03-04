let choix = ('Que souhaitez vous faire?') ;


for (let choix = 1; choix < 5; choix++) {
    console.log(' 1 - Addition ');
        if (choix == 1){
            break ;
        }
        console.log('1 - Addition' );
        
            
}

for (let choix = 1; choix < 5; choix++) {
    console.log(' 2 - Multiplication' );
        if (choix == 1){
            break ;
        }
       console.log('2 - Multiplication');
        
                   
}

for (let choix = 1; choix < 5; choix++) {
    console.log(' 3 - Soustraction ');
        if (choix == 1){
            break ;
        }
       console.log('3 - Soustraction ' );
       
                  
}

for (let choix = 1; choix < 5; choix++) {
    console.log(' 4 - Division ' );
        if (choix == 1){
            break ;
        }
        console.log('3 - Division ' );
                  
}



     choix =  prompt(' Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division\n') ;

    // je veux afficher si le choix n'est pas 1 ,2, 3,4 erreur('Veuillez faire un choix entre 1 & 4')
    // je veux afficher erreur ce n'est pas un nombre.
     if (choix > 4  ) {
       alert('Erreur veuillez choisir entre 1 et 4') ;
       
       
   }
   
   
        //let NombreA = (' Entrer votre premier nombre') ;
        //let NombreB = ('Entrer votre deuxiéme nombre') ;

        do {

            var NombreA  = prompt(' Entrer votre premier nombre') ;
        
        } while(NombreA == "" || NombreA == null ) ;
        
        alert('Vous avez saisi : ' + NombreA); 



        do {

            var NombreB  = prompt(' Entrer votre deuxiéme nombre') ;
        
        } while(NombreB == "" || NombreB == null  ) ; 
        
        alert('Vous avez saisi : ' + NombreB);

        let Na = 0 ;
        let Nb = 0 ;
        
function Addition(NombreA , NombreB) {

    let resultat = NombreA + NombreB;
    return resultat;   
}

function Multiplication(NombreA , NombreB) {
    let resultat = NombreA + NombreB ;
    return resultat ; 
}

function Soustraction(NombreA , NombreB) {
    let resultat = NombreA - NombreB ; 
    return resultat ; 
    
}

function Division(NombreA , NombreB) {
    let resultat = NombreA / NombreB ;
    return resultat ;
}
        
        
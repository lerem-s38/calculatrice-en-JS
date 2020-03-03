let choix = ('Que souhaitez vous faire?') ;
let add   = 1 , mult  = 2 , soust = 3 , div   = 4 ;



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

  
     choix =  prompt(' Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division\n.')
    // je veux afficher si le choix n'est pas 1 ,2, 3,4 erreur('Veuillez faire un choix entre 1 & 4')
   if (choix > 4  ) {
       alert('Erreur veuillez choisir entre 1 et 4') ;
   }
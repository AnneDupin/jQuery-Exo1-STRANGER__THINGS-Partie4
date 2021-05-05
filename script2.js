$(function(){
    var userScore = 0;
    var machineScore = 0; 
    var percent = 0;
    var count = 0;
    

    $('#button').click(function (){
    count++;
    var userChoice = $('#shifumi-select').val();
    var machineChoice = machineChoiceRandom(1,3);
    var compare;//=$('#compare');


    result =  parseInt(userChoice + machineChoice);
    switch(result){
        case 21:
            compare='La feuille couvre la pierre. Steve gagne !';
            $('#steveImg').attr('src', 'assets/paper.png');
            $('#elevenImg').attr('src', 'assets/fist.jpg');
            userScore++;
        break;
        case 22:
            compare='Feuille - Feuille.  Egalité.';
            $('#steveImg').attr('src', 'assets/paper.png');
            $('#elevenImg').attr('src', 'assets/paper.png');
            break;
        case 23:
            compare='Les ciseaux coupe la feuille. Eleven gagne !';
            $('#steveImg').attr('src', 'assets/paper.png');
            $('#elevenImg').attr('src', 'assets/victory.jpg');
            machineScore++;
        break;
        
        
        case 11:
            compare='Pierre - Pierre.  Egalité.';
            $('#steveImg').attr('src', 'assets/fist.jpg');
            $('#elevenImg').attr('src', 'assets/fist.jpg');
        break; 
        case 12:
            compare='La feuille couvre la pierre, Eleven gagne !';
            $('#steveImg').attr('src', 'assets/fist.jpg');
            $('#elevenImg').attr('src', 'assets/paper.png');
            machineScore++;
        break; 
        case 13:
            compare='La pierre casse les ciseaux. Steve gagne !';
            $('#steveImg').attr('src', 'assets/fist.jpg');
            $('#elevenImg').attr('src', 'assets/victory.jpg');
            userScore++;
        break;
        case 31:
            compare='La pierre casse les ciseaux. Eleven gagne !';
            $('#steveImg').attr('src', 'assets/victory.jpg');
            $('#elevenImg').attr('src', 'assets/fist.jpg');
            machineScore++;
        break;
        case 32:
            compare='Les ciseaux coupent la feuille. Steve gagne !';
            $('#steveImg').attr('src', 'assets/victory.jpg');
            $('#elevenImg').attr('src', 'assets/paper.png');
            userScore++;
        break;
        case 33:
            compare='Ciseaux - Ciseaux. Egalité.';
            $('#steveImg').attr('src', 'assets/victory.jpg');
            $('#elevenImg').attr('src', 'assets/victory.jpg');
        break;
        default:
            compare='??';
    }
    
    console.log(result);
    $('#compare').text(compare);

    $('#success').text(`Nombre de succes: ${userScore}`);

    $('#defeat').text(`Nombre de défaites: ${machineScore}`);
    percent = ((userScore / (count) ) * 100).toFixed(2);

    $('#percentSuccess').text(`Taux de succès: ${percent}%.`);
    });



    function machineChoiceRandom(min, max)
    {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

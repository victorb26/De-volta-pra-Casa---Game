function btn() {
    var personagem = prompt ('Digite o número correspondente ao personagem escolhido:');
            if (personagem == 1) {
                location= "./EDUARDO/eduardoVoltaPraCasa.html";
            } else if (personagem == 2){
                location= "./ERICK/erickVoltaPraCasa.html";
            }  else if (personagem == 3){
                location ="./AGATA/agataVoltaPraCasa.html"
            }
            else {
                alert ('Digite um número válido dentre as opções!!')
            }
    
}

let produtoEscolhido = window.prompt("Digite seu produto desejado, Tenis, Caneca, Camisetas")

produto();

function produto()
{
    if(produtoEscolhido == "Tenis"){
        alert("Aguarde Novidades de Tenis Chegando")        
    }else if(produtoEscolhido == "Caneca"){
        alert("Aguarde Novidades de Canecas Chegando")        
    }else if(produtoEscolhido == "Camisetas"){
        alert("Aguarde Novidades de Camisetas Chegando")        
    }  
    
    
    else{
        alert("Infelizmente não temos esse produto")
    }
}


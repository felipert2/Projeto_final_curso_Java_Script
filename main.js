let entrada = prompt("Digite seu produto desejado, Tenis, Caneca, Camisetas")
let produtoEscolhido = entrada.toUpperCase();
console.log(produtoEscolhido)

produto();

function produto()
{
    if(produtoEscolhido == "TENIS"){
        alert("Aguarde Novidades de Tenis Chegando")        
    }else if(produtoEscolhido == "CANECA"){
        alert("Aguarde Novidades de Canecas Chegando")        
    }else if(produtoEscolhido == "CAMISETAS"){
        alert("Aguarde Novidades de Camisetas Chegando")        
    }  
    
    
    else{
        alert("Infelizmente não temos esse produto")
    }
}

class produtoCustomizado {
    constructor(cor, tamanho, modelo) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.modelo = modelo;
    }

    descreverProduto() {
        console.log(`Este é um produto customizado no modelo ${this.modelo}.`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Tamanho: ${this.tamanho}`);
    }
}

// Função que é chamada quando o usuário realiza alguma ação (por exemplo, clicar em um botão)
function acaoDoUsuario() {
    let cor = prompt("Digite a cor do produto:");
    let tamanho = prompt("Digite o tamanho do produto:");
    let modelo = prompt("Modelo Masculino ou Feminino");

    const produtoPersonalizado = new produtoCustomizado(cor, tamanho, modelo);
    
    // Invocando o método descreverProduto()
    produtoPersonalizado.descreverProduto();
}

// Chamar a função de ação do usuário quando necessário
acaoDoUsuario();




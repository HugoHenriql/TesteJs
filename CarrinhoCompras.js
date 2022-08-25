function AtualizarVlrProduto1(QuantidadeProduto){
    document.getElementById('vlrproduto1').value =   QuantidadeProduto * parseFloat('5000');
}

function AdicionarQuantidadeProduto1(){
    QuantidadeProduto = parseFloat(document.getElementById('qtdproduto1').value);
    document.getElementById('qtdproduto1').value = QuantidadeProduto + 1;
    AtualizarVlrProduto1(QuantidadeProduto);
}

const RemoverQuantidadeProduto1 = () =>{

    QuantidadeProduto = parseFloat(document.getElementById('qtdproduto1').value);
    if (QuantidadeProduto > 0){
        document.getElementById('qtdproduto1').value = QuantidadeProduto -1;
    AtualizarVlrProduto1(QuantidadeProduto);
       }
       return QuantidadeProduto;
     }
    
     module.exports = RemoverQuantidadeProduto1

    
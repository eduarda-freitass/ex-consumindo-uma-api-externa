/* Exporte da uma das funções criadas. Ex:

function minhaFuncao() {}
function minhaOutraFuncao {}

module.exports = {
  minhaFuncao,
  minhaOutraFuncao
}

*/


function buscarDados(latitude, longitude) {
 return new Promise((resolve, reject) => { // montando o link com a localização
   let link = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
   fetch(link)
    .then((resposta) => { // vendo se a api respondeu certinho
    if (!resposta.ok) {
    throw new Error("Erro ao buscar dados");
    } return resposta.json();
    })
    .then((dados) => { // pegando os dados que vieram da api
    resolve(dados);
    })
    .catch((erro) => { // se der algum problema na requisição
    reject(erro);
    });
 });
}

module.exports = {
 buscarDados
};

function ExibirDados(latitude, longitude) {
  return buscarDados(latitude, longitude);
}

ExibirDados(-4.971, -39.015)
 .then((dados) => {
 console.log("Temperatura em quixadá:", dados.current_weather.temperature + "°C");
 })
 .catch((erro) => {
 console.log("Deu erro:", erro.message);
 });
 
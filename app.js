import {
    onEvent,
    showElement,
    setScreen
} from './code.org.js';
import {
    clearForm,
    getPizza,
    writePizzaList
} from './escolhas.js';


//Quando 1 das 3 opções estiver marcada o botão create irá aparecer
onEvent("radioBase1", "click", function () {
    showElement("buttonCreate");
});
onEvent("radioBase2", "click", function () {
    showElement("buttonCreate");
});
onEvent("radioBase3", "click", function () {
    showElement("buttonCreate");
});
//Quando o botão create for clicado vai para prox tela 
//mostrando o resultado da pizza baseado nas opções escolhidas
onEvent("buttonCreate", "click", function () {
    setScreen("screenPizza");
    // escolherMassa();
    // escolherMolho();
    // escolherTipo();
   writePizzaList(listaPizzas);
});

onEvent("buttonBack", "click", function () {
    setScreen("screenMaker");
});

var listaPizzas = [];
onEvent("buttonCart", "click", function () {
    listaPizzas.push(getPizza());
    clearForm();
});

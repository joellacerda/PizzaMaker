import {
    showElement,
    hideElement,
    getProperty,
    setImageURL,
    setProperty
} from './code.org.js';

export function escolherMassa() {
    //Escolher tipo de massa da pizza
    //Se o primeiro item estiver marcado mostrar item escolhido
    if (getProperty("radioBase1", "checked")) {
        setImageURL("imageBase", "Pizzaa-01.png");
    }
    //Se o segundo item estiver marcado mostrar o item escolhido
    if (getProperty("radioBase2", "checked")) {
        setImageURL("imageBase", "Pizzaa-02.png");
    }
    //Se o terceiro item estiver marcado mostrar o item escolhido
    if (getProperty("radioBase3", "checked")) {
        setImageURL("imageBase", "Pizzaa-03.png");
    }
}

export function escolherMolho() {
    //Escolher o tipo de molho
    //Se escolher o molho vermelho 
    //mostra vermelho
    //senao
    //esconder vermelho
    if (getProperty("radioRedSauce", "checked")) {
        showElement("imageRedSauce");
    } else {
        hideElement("imageRedSauce");
    }
    //Se escolher o molho amarelo
    //mostra amarelo
    //senao
    //esconde amarelo
    if (getProperty("radioYellowSauce", "checked")) {
        showElement("imageYellowSauce");
    } else {
        hideElement("imageYellowSauce");
    }

}
export function escolherTipo() {
    // Escolher tipo de pizza
    //Se as duas checkbox estiverem marcadas vai aparecer o "vegano-e-Nvegano"
    var verduraComCarne = getProperty("checkboxNon-veg", "checked") && getProperty("checkboxVeg", "checked");
    var temRecheio = getProperty("checkboxNon-veg", "checked") || getProperty("checkboxVeg", "checked");
    var recheioNVegano = getProperty("checkboxNon-veg", "checked") && !getProperty("checkboxVeg", "checked");
    var recheioVegano = getProperty("checkboxVeg", "checked") && !getProperty("checkboxNon-veg", "checked");
    if (verduraComCarne) {
        showElement("imageVegNon-veg");
        //senao
    } else {
        //vai esconder o "n vegano, o vegano e o vegano-e-Nvegano"
        hideElement("imageVegNon-veg");
        hideElement("imageVeg");
        hideElement("imageNon-veg");
    }
    // Se uma das checkbox estiver marcada vai entrar na condição
    if (temRecheio) {
        // Se a "n vegana" estiver marcada e a "vegana" estiver desmarcada
        //mostra a "n vegana"
        //senao
        //esconde a "n vegana"
        if (recheioNVegano) {
            showElement("imageNon-veg");
        } else {
            hideElement("imageNon-veg");
        }
        //Se a "vegana" estiver marcada e a "n vegana" estiver desmarcada
        //mostra vegana
        //senao
        //esconde vegana
        if (recheioVegano) {
            showElement("imageVeg");
        } else {
            hideElement("imageVeg");
        }
    }
}

export function clearForm() {
    setProperty('radioBase1', 'checked', false)
    setProperty('radioBase2', 'checked', false)
    setProperty('radioBase3', 'checked', false)
    setProperty('checkboxveg', 'checked', false)
    setProperty('checkboxNon-veg', 'checked', false)
    setProperty('radioRedSauce', 'checked', false)
    setProperty('radioYellowSauce', 'checked', false)
}

export function getPizza() {
    return {
        molho: { amarelo: getProperty('radioYellowSauce', 'checked'), vermelho: getProperty('radioRedSauce', 'checked') },
        tipo: { naoVegano: getProperty('checkboxNon-veg', 'checked'), vegano: getProperty('checkboxveg', 'checked') },
        massa: { borda: getProperty('radioBase1', 'checked'), fina: getProperty('radioBase3', 'checked'), tradicional: getProperty('radioBase2', 'checked') }
    };
}
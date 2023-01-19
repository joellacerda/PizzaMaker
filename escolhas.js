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
    setProperty('checkboxVeg', 'checked', false)
    setProperty('checkboxNon-veg', 'checked', false)
    setProperty('radioRedSauce', 'checked', false)
    setProperty('radioYellowSauce', 'checked', false)
}

export function getPizza() {
    return {
        molho: { amarelo: !!getProperty('radioYellowSauce', 'checked'), vermelho: !!getProperty('radioRedSauce', 'checked') },
        tipo: { naoVegano: !!getProperty('checkboxNon-veg', 'checked'), vegano: !!getProperty('checkboxveg', 'checked') },
        massa: { borda: !!getProperty('radioBase1', 'checked'), fina: !!getProperty('radioBase3', 'checked'), tradicional: !!getProperty('radioBase2', 'checked') }
    };
}

export function writePizzaList() {
    const containerLista = document.getElementById('listaPizzas')
    containerLista.innerHTML = '';
    listaPizzas.forEach(pizza => {
        containerLista.innerHTML += templatePizza(pizza);
    });
}

/**
 * 
 * @param {ReturnType<getPizza>} pizza 
 * @returns 
 */
export function templatePizza(pizza) {
    return `<div class="imagens" >
    // adicionar massa
    <img ${escondeSeFalsa(pizza.massa.borda)} id="imageBase" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-01.png?t=1670932317000" alt="massa">
    <img ${escondeSeFalsa(pizza.massa.tradicional)} id="imageBase" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-02.png?t=1670932317000" alt="massa"><img id="imageBase" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000" alt="massa">
    <img ${escondeSeFalsa(pizza.massa.fina)} id="imageBase" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000" alt="massa">
    
    <img ${escondeSeFalsa(pizza.molho.amarelo)} id="imageYellowSauce" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000" alt="molho amarelo">
    <img ${escondeSeFalsa(pizza.molho.vermelho)} id="imageRedSauce" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000" alt="molho vermelho">
    
    <img ${escondeSeFalsa(pizza.tipo.vegano) && escondeSeFalsa(pizza.tipo.naoVegano)} id="imageVegNon-veg" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/veg-nonveg.png?t=1670932317000" alt="Non-Veg">
    <img ${escondeSeFalsa(pizza.tipo.vegano) && !escondeSeFalsa(pizza.tipo.naoVegano)} id="imageVeg" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Veg.png?t=1670932317000" alt="Non-Veg">
    <img ${escondeSeFalsa(pizza.tipo.naoVegano) && !escondeSeFalsa(pizza.tipo.vegano)} id="imageNon-veg" src="https://studio.code.org/v3/assets/ai36I_gY5JPKznE1ttg-CqVl0NhRRSPu1b34n7Ctx6c/Non-veg.png?t=1671892191000" alt="Non-Veg">
</div>
`
}

function escondeSeFalsa(condição) {
    if (condição == false) {
        return 'class="hidden"';
    } else {
        return '';
    }

}
export class app {

    constructor(){
        this.tela()
    }

    tela(){
        const app = document.querySelector('main')

        let bloco = ''
        for (let i = 1; i <= 100; i++){
            let numero = i < 10 ? `0${i}` : i == 100 ? `00` : i
            bloco += `<button value="${numero}">${numero}</button>`
        }

        app.innerHTML = bloco
    }
}
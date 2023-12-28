const choice = document.querySelectorAll('.btn')
const cpu = document.querySelector('.computador')
const user = document.querySelector('.usuario')
const resultTxt = document.querySelector('.resultado')
let target
let choiceC

choice.forEach(action => {
    action.addEventListener('click', (e) => {
        target = e.currentTarget.textContent
        user.innerHTML = `Escolha do usuário: <strong>${target}</strong>`
        cpuC()
        result()
    })
})

const cpuC = () => {
    const random = Math.floor(Math.random() * choice.length)

    if (random === 0) {
        choiceC = 'Pedra'
        cpu.innerHTML = `Escolha da máquina: <strong>${choiceC}</strong>`
    }

    if (random === 1) {
        choiceC = 'Papel'
        cpu.innerHTML = `Escolha da máquina: <strong>${choiceC}</strong>`
    }

    if (random === 2) {
        choiceC = 'Tesoura'
        cpu.innerHTML = `Escolha da máquina: <strong>${choiceC}</strong>`
    }
}

const result = () => {
    if (target === choiceC) {
        resultTxt.innerHTML = 'Resultado: <strong>Empate!</strong><i class="fa-regular fa-handshake" style="color: #000000;"></i>'
    } else if ((target === 'Pedra' && choiceC === 'Tesoura') || (target === 'Papel' && choiceC === 'Pedra') || (target === 'Tesoura' && choiceC === 'Papel')) {
        resultTxt.innerHTML = 'Resultado: <strong>Você venceu!</strong><i class="fa-solid fa-hand-peace" style="color: #000000;"></i>'
    } else {
        resultTxt.innerHTML = 'Resultado: <strong>Você perdeu!</strong><i class="fa-solid fa-xmark" style="color: #000000;"></i>'
    }
}
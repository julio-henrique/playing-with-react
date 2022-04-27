# Review - Avaliações

App com avaliações que pode ser usado para sites e e-commerce

## Tabela de conteúdos

- [Visão Geral](#visao-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Oque eu aprendi](#oque-eu-aprendi)
  - [Desenvolvimento Continuo](#development-continuo)
- [Autor](#autor)


## Visão Geral

### O desafio
O usuário deve ser capaz de:
- Ver as avaliações;
- Mudar para a próxima avaliação;
- Mudar para a avaliação anterior;
- Clicar no botão de `surprise me` e mudar a avalição para um número aleatório;

Nota: A avaliação aleatória **NÃO DEVE** se repetir


### Screenshot
![Reviews](./src/screencapture.png)


### Links
- Live Site URL: [Reviews]()


## Meu processo

### Oque eu aprendi
Aqui foi muito mais um teste de lógica, e eu tenho que dizer que apesar de parecer fácil no primeiro momento, até que foi um desafio interessante.

Começamos com a função `checkNumber()` que eu fiz de uma forma que ficasse bem feita, com código limpo e fácil de se ler, ficou perfeita hahaha.
```jsx
function checkNumber(number) {
    if(number > data.length -1) return 0
    if(number < 0) return data.length -1
    return number
}
```

E a parte de lógica ficou na `randomPerson()` function. 
Eu criei o número aleatório, e comparei com o index atual, se fossem iguais, adiciono +1
Então uso o `setIndex()` e dentro dele faço a checagem do número, para depois fazer a troca do número.
Foi super legal esse desafio e mais interessante do que parecia a primeiro momento.
```jsx
const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length)

    if(randomNumber === index) return randomNumber = index + 1

    setIndex(checkNumber(randomNumber))
    console.log(randomNumber)
}
```


### Desenvolvimento Continuo
Depois disso, vou continuar me aprimorando no **ReactJS** e também vou ir ver uns conteúdos sobre lógica de programação, curti muito fazer esse projeto :D


## Author
- Linkedin - [Julio Henrique](https://www.linkedin.com/in/julio-h/)
- Email - juliohjesus@gmail.com
### Boxes
Caixas que mudam de cor se você clicar nelas

O link para o site se encontra abaixo.

## Tabela de conteúdos

- [Visão Geral](#visao-geral)
  - [O desafio](#o-desafio)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Oque eu aprendi](#oque-eu-aprendi)
  - [Desenvolvimento Continuo](#development-continuo)
- [Autor](#autor)


## Visão Geral

### O desafio

Essas são caixas que são brancas, se você clicar nelas/selecionar, elas mudam e ficam pretas


### Links

- Live Site URL: [Caixas/Boxes](https://julio-henrique-boxes.netlify.app/)


## Meu processo

### Oque eu aprendi

Nesse projeto eu aprendi como criar um componente `Box.jsx` e como fazer com que o componente se relacione e 'fale' com o componente pai `App.jsx`. 
O estado deve ser mudado tanto no componente pai quanto no componente filho
Abaixo eu estou criando o `Box.jsx` componente e passando o `id`
```jsx
const squareElements = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={toggle}
    />
  ))
```
E abaixo eu repasso o id de volta para que a mudança seja feita no componente pai
```jsx
onClick={()=>props.toggle(props.id)}
```
Assim eu tenho certeza de que não havera erros ou bugs quando mudar o estado do de uma das minhas caixas


### Desenvolvimento Continuo
Continuar focado no **React**, eu vou aprender os fundamentos e realmente ter uma base sólida!


## Author

- Linkedin - [Julio Henrique](https://www.linkedin.com/in/julio-h/)
- Email - juliohjesus@gmail.com

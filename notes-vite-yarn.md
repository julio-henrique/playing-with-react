## Vite
O vite realmente é bem rápido e eu estou adorando isso, irei usar ele nos meus projetos react

- Para fazer um projeto no Vite você usa `yarn create vite web --template react-ts`
'web' no caso será o nome do seu projeto
- Depois você da um `yarn` só para ter certeza de que todas as dependências foram instaladas
- E para iniciar o server com o fast-refresh você vai com `yarn dev`

*É muito performatico, não se compara com nada que eu já utilizei*

## ESM - module
O vite trabalha com o ESModule oque o torna muito performatico e também disponibiliza novos recursos como, quando trabalhando com css podemos colocar module no nome do arquivo e tornar a estilização como se fosse um id, vai ter um código próprio que é gerado automaticamente para cada vez que você usar a mesma classe. Ajuda na especificação
```tsx
O nome do arquivo pode ser 'app.module.css'

import styles from './App.module.css' // Olha como a importação é diferente

export function App() {
  return (
      // Abaixo: Nós estamos importando o CSS e usando uma classe
    <main className={styles.contentWrapper}> 
      <h1>H. World</h1>
    </main>
  )
}
```
Todo o CSS fica no escopo onde foi aplicado e só vai funcionar no componente onde foi aplicado, no resto da aplicação fica normal.
Isso tudo acima me lembra o StyledComponents


- *Quando trablhando com api's e estado* Eu não lembro de 1 vez, 1 pelo menos, onde eu usei string ou `('')` quando estava fazendo o estado de uma api. Eu sempre usei array vazio `([])`


## LocalStorage
Para utilizar o local storage você pode tantar definir o item como pegar um item:
```tsx
const get = localStorage.getItem('@nameToSave')
const set = localStorage.setItem('@nameToSave')

E para remover
const set = localStorage.removeItem('@nameToSave')
```


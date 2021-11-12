import { Tour } from './Tour'
// Aqui o componente que irei receber, já sei que é a API lá de cima então sei como 'tipar'

interface ToursPropsArray {
  id: number
  name: string
  info: string
  image: string
  price: number
}
// Aqui estou fazendo a 'tipagem', bem previsível até aqui

interface TourChildrenProps {
  tours: ToursPropsArray[]
  removeTour: (Tourid: number) => void
}

export const Tours = ({ tours, removeTour }: TourChildrenProps) => {
    // Com as 'tipagens' definidas eu venho aqui e defino que os dois parâmetros que a minha função  irá receber vem da, ToursPropsArray
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tourPlaces) => {
          return <Tour key={tourPlaces.id} {...tourPlaces} removeTour={removeTour} />
          // E quando chega aqui, tudo já está pronto, tudo funcionando perfeitamente e todas as propriedades seguindo as regras do Typescript, que é chato viu...
        }
        )}
      </div>
    </section>
  )
}

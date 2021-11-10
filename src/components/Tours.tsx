import { Tour } from './Tour';

interface ToursPropsArray { 
  id: number
  name: string
  info: string
  image: string
  price: number
}

interface TourChildrenProps {
  tours: ToursPropsArray[]
  removeTour: (Tourid: number) => void
}


export const Tours = ({ tours, removeTour }: TourChildrenProps) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tourPlaces) => {
          return <Tour key={tourPlaces.id} {...tourPlaces} removeTour={removeTour} />
        }
        )}
      </div>
    </section>
  )
};

export default Tours;

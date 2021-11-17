interface ListProps {
    people: []
    id: number
    name: string
    image: string
    age: number
}

const List = ({ people }: ListProps) => {
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person '>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;

export const List = ({ people }) => {
  const showUsers = people.map(item => {
  const {id, name, age, image} = item
    return (
      <article className='person' key={id}>
          <img src={image} alt={name} />
          <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          </div>
      </article>
    )
  })
  return (
    <>
      {showUsers}
    
    </>
  );
};

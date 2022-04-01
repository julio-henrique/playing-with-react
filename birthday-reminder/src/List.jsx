export const List = ({ people }) => {
  console.log(people)
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

/**
 * <article className='person'>
                        <img />
                        <div>
                        <h4>"name"</h4>
                        <p> years</p>
                        </div>
                    </article>
*/

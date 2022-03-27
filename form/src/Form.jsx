export function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
  
    console.log(firstName, lastName)
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value)
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value)
    }
  
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </form>
    )
  }
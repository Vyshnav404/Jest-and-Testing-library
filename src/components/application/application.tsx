
export const Application = () => {
  return (
   
    <form>
         <h1>job application form</h1>
         <h2>section 1</h2>
         <p>All fields are mandatory</p>
         <span title="close">X</span>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s" alt="a person with a laptop"/>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Fullname" value="Vyshnav" onChange={()=>{}} />
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" />
        </div>
        <div>
            <label htmlFor="job-location">Job location</label>
            <select id="job-location">
                <option value="">select a country</option>
                <option value="US">United States</option>
                <option value="GB"> United Kingdom</option>
                <option value="CA">Canada</option>  
                <option value="IN">India</option>  
                <option value="AU">Australia</option>  
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms" /> I agree to the terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>
  )
}

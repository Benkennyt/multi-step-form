import './YourInfo.css'

const YourInfo = () => {
  return (
    <div className='your-info'>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
        <div>
          <h5>Name</h5>
          <div className='text-space'>
            <input type="text" placeholder='e.g Stephen King'/>
          </div>
        </div>
        <div>
          <h5>Email Address</h5>
          <div className='text-space'>
           <input type="text" placeholder='e.g stephenking@lorem.com'/>
          </div>
        </div>
        <div>
          <h5>Phone Number</h5>
          <div className='text-space'>
            <input type="text" placeholder='e.g +1 234 567 890'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default YourInfo
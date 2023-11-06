import './Footer.css'

const Footer = ({setPage, page, errors}) => {

  
    
  const Alert = () => {
    alert('okay')
  }
  return (
    <div className="footer">
        <button
        disabled={page == 0}
        onClick={() => {
            setPage((currPage) => currPage - 1);
        }}
        >
        Go Back
        </button>

        {page === 3 ? <button className='next-btn'
          onClick={Alert} type='submit'
        >Confirm</button> :  <button
        // disabled={errors}
        onClick={() => {
         setPage((currPage) => currPage + 1)
         }}
       >
         Next Step
       </button>}
  </div>
  )
}

export default Footer
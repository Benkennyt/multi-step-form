import './Footer.css'

const Footer = ({setPage, page}) => {
    

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
        <button
        disabled={page ==  3}
        onClick={() => {
            setPage((currPage) => currPage + 1);
        }}
        >
        Next Step
        </button>
  </div>
  )
}

export default Footer
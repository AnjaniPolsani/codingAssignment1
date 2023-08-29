const BrowserItem = props => {
  const {details, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const onClicking = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <div>
          <img className="logo" src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button data-testid="delete" type="button" onClick={onClicking}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserItem

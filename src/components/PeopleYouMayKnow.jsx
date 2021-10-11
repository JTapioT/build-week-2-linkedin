import Button from 'react-bootstrap/Button'
const PeopleYouMayKnow = () => {
    return(
      <div className= "brdr-linkedin">
        <h5>People You May Know</h5>

        <div className="who-and-where">
          <div className="d-inline">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </div>
          <div className="name-company">
            <a href="#" className="text-dark">
              <h6>John Green</h6>
            </a>
            <p className="text-muted">Bestselling Novelist in the World</p>
          </div>
        </div>

        <div className="default-btn-style">
          Connect
        </div>
      </div>
    )
}

export default PeopleYouMayKnow
import Button from "../../components/Button"
import Search from "./Search"


function Header({onAscending, onDescending}) {
  return (
    <div className="flex justify-between items-center">
          <div className="flex">
            <Button onClick={() => onAscending()} className="btn-accent mr-3">Ascending</Button>
            <Button onClick={() => onDescending()} className="btn-accent mr-3">Descending</Button>
          </div>

            <Search />
          
        </div>
  )
}

export default Header
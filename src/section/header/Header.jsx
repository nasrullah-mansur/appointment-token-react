import Button from "../../components/Button"
import Search from "./Search"


function Header({onAscending, onDescending, onSearch}) {

  // let searchHandler = (test) => {
  //   onSearch(test);
  // }


  return (
    <div className="flex justify-between items-center">
          <div className="flex">
            <Button onClick={() => onAscending()} className="btn-accent mr-3">Ascending</Button>
            <Button onClick={() => onDescending()} className="btn-accent mr-3">Descending</Button>
          </div>

            <Search onSearch={(text) => onSearch(text)} />
          
        </div>
  )
}

export default Header
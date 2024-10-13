

function Header() {
  return (
    <header className="py-6 bg-gray-200 ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <a className="text-2xl font-bold font-lato" href="#">Brand Logo</a>
            <ul className="flex">
                <li className="ml-3 font-medium hover:text-rose-600"><a href="#">0</a></li>
                <li className="ml-3 font-medium hover:text-rose-600"><a href="#">About</a></li>
                <li className="ml-3 font-medium hover:text-rose-600"><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header
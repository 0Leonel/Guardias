import { useState } from 'react'
import icon from "../../../assets/icon.png"
import { Link } from 'react-router-dom';
export const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menu = [
        {id: 1, name: "Home", link: "/", },
        {id: 2, name: "Diciembre", link: "/diciembre",},
        {id: 3, name: "Enero", link: "/enero",},
    ]
  return (
    <header className="bg-[#548C8C]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">  
      <div className="md:flex md:items-center md:gap-12">
        <Link  to="/">
          <img src={icon}  alt="guardavida" className="h-8 w-auto" />
        </Link>
      </div>

      <div className='hidden md:block'>
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            {menu.map((item) => (
            <li key={item.id}>
              <Link className="text-[#FFF] transition text-lg font-medium hover:text-[#730202]/75" to={item.link}> {item.name} </Link>
            </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-white transition hover:text-gray-600/75" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  {isOpen && (
  <div className="md:hidden">
    <nav >
      <ul className="flex flex-col items-center mt-4 text-sm">
        {menu.map((item) => (
          <li key={item.id}
            className='w-full text-center'>
            <Link
              className="text-white transition hover:text-gray-500/75 block py-2  "
              to={item.link}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)}
</header>
  )
}

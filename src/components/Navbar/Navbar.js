import { useState } from "react";
import styles from './navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const Navbar=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img src="./Mainlogo.png" alt="#" height={40} width={40}/>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className={styles.butt_nav}>
                  Home
                </a>

                <a href="/" className={styles.butt_nav}>
                  About
                </a>

                <a href="/" className={styles.butt_nav}>
                  Contact
                </a>
              </div>
            </div>
          

          <div className="mr-2 flex md:hidden justify-end">
            <button onClick={() => toggleMenu()} type="button"
             className={styles.butt_menu} aria-expanded="false">  
            <AiOutlineMenu
              className={`${isOpen ? 'hidden' : 'block'}`}  
            />
            <AiOutlineClose
              className={`${isOpen ? 'block' : 'hidden'}`}
            />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className={styles.butt_nav}>
            Home
          </a >
           <a href="/" className={styles.butt_nav}>
            Contact
          </a>
    </div>
  </div>
</nav>
);
}

export default Navbar;
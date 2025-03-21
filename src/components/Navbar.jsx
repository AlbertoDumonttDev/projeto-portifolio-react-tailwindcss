import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="my-20 text-4xl">Ad</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/alberto-sdumontt/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AlbertoDumonttDev" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/b7rtto.404/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
    </nav>
  )
}

export default Navbar;
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-center items-center">
        <Link to='/batches'>Batches</Link>
        <Link to='/course-list'>Courses</Link>
        <Link></Link>

    </div>
  )
}

export default NavBar

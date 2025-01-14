import { NavLink } from "react-router-dom"

function PageNavigation() {
    return (
        <div>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="contact" >Contact</NavLink>

        </div>
    )
}

export default PageNavigation

import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../components/Guard";


export default function Menu(){

    const navigate = useNavigate();

    const _logout = () => {
        logout();
        navigate("/");
    }

    let logado = null;
    localStorage.getItem("token") ? logado = true : logado = false;
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        {logado ?
            <>
            <li className="nav-item">
                <a className="nav-link" onClick={_logout} href="#">Logout</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/people" aria-disabled="true">People</Link>
            </li>
            </>
            :
            <>
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">People</a>
            </li>
            </>
        }



        </ul>
    </div>
    </div>
</nav>

}


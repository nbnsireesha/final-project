import React from "react";
import { Route, Link } from 'react-router-dom'


const Navbar = (props) =>{
    
    if(props.loggedIn){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">Quizard of Ahhhs...</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={window.location.pathname === "/" ||
                        window.location.pathname === "/home"
                        ? "active"
                        : ""}>
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
                </ul>
            </div>
                {/* <button type="button" className="btn btn-test">
                    Sign Up
                </button>
                <button type="button" className="btn btn-test">
                    Log In
                </button> */}
        </nav>
        )
    }
    else{
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Quizard of Ahhhs...</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className={window.location.pathname === "/" ||
                    window.location.pathname === "/home"
                    ? "active"
                    : ""}>
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
            </ul>
        </div>
            {/* <button type="button" className="btn btn-test">
                Sign Up
            </button>
            <button type="button" className="btn btn-test">
                Log In
            </button> */}
    </nav>
        )
    }
}


export default Navbar;
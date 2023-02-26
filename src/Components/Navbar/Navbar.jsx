import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import "./Navbar.scss"
const Navbar = () => {

    const [active, setActive] = useState(false);  //State to change navbar on scrolling
    const [open, setOpen] = useState(false);  //State to change user card onClick
    const {pathname} = useLocation(); //location hook lets the navbar stay constant in other specified pages
    const isActive = () => {
        window.scrollY > 100 ? setActive(true) : setActive(false);
    }

    //useEffect to change navbar on scrolling
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => window.removeEventListener("scroll", isActive);    //cleanup function
    },[])


    //To create menu for user(seller)
    const currentUser = {
        id: 1,
        userName: "John Doe",
        isSeller: true,
    }
  return (
    <div className={active || pathname !== '/'? "navbar active" : 'navbar'}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link' >
                    <span className="text">fiverr</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <span>{currentUser?.userName}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to='/Mygigs'>Gigs</Link>
                                        <Link className='link' to='/add'>Add new Gig</Link>
                                    </>
                                )
                            }
                            <Link className='link' to='/Orders'>Orders</Link>
                            <Link className='link' to='/Messages'>Messages</Link>
                            <Link className='link' to='/'>Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {active || pathname!=='/' && (
            <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )}
        
    </div>
  )
}

export default Navbar
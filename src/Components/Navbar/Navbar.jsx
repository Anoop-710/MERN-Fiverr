import React,{useState,useEffect} from 'react'
import "./Navbar.scss"
const Navbar = () => {

    const [active, setActive] = useState(false);  //State to change navbar on scrolling
    const [open, setOpen] = useState(false);  //State to change user card onClick
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
    <div className={active ? "navbar active" : 'navbar'}>
        <div className="container">
            <div className="logo">
                <span className="text">fiverr</span>
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
                                        <span>Gigs</span>
                                        <span>Add new Gig</span>
                                    </>
                                )
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {active && (
            <>
            <hr />
                <div className="menu">
                    <span>Test</span>
                    <span>Test</span>
                </div>
            </>
        )}
        
    </div>
  )
}

export default Navbar
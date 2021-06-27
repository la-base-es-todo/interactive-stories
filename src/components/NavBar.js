
const NavBar = ({setView}) => {
    return ( 
        <nav className='navbar'>
            <ul>
            <li><a href="#" onClick={() => setView("home")} ><img src={'icons8-home-32.png'} alt='back to home' /></a></li>
            <li><img src={'icons8-share-32.png'} alt='share'/></li>
            <li><img src={'icons8-heart-32.png'} alt='set as favourite'/></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;
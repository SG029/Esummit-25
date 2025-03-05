function Navbar(){
    return (
        <nav className="flex items-center justify-between p-4 text-yellow-50 mt-4">
            <img src="/src/assets/E-summit logo.png" alt="logo" className="h-11" />
            <ul className="flex space-x-6 justify-center w-full text-xl pt-1.5">
                <li className="pt-1.5">Home</li>
                <li className="pt-1.5">About</li>
                <li className="pt-1.5">Speakers</li>
                <li className="pt-1.5">Events</li>
                <li className="pt-1.5">Sponsors</li>
                <li className="pt-1.5">Contact Us</li>
                <li className="font-bold bg-yellow-50 text-black w-22 h-10 pt-1.5 pl-1.5 rounded-md">Register</li>
            </ul>
        </nav>
    )
}
    
export default Navbar;
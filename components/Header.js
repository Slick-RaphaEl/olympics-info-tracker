import Image from 'next/image';
import logo from "../public/Olympics-logo.png";


function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <Image className="object-contain" src={logo} width={200} height={100} alt="olympics-info"/>

        </header>
        
    )
}

export default Header

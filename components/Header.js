import Image from 'next/image';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-center items-center h-auto">
            <Image className="object-contain" src="https://dl.dropbox.com/s/4whvqkz271qdwjz/Afcon-2021-logo.png?dl=0" width={200} height={100} alt="olympics-info"/>

        </header>
        
    )
}

export default Header

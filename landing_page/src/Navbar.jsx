export default function Navbar() {

    const handleClick = () => {
        window.open('https://www.eckert-coaching.de/', '_blank')
    }

    return (
        <nav className="navbar">
            <img className="navbar-img" onClick={handleClick} src="./ec-logo-normal.png" alt="eckert-coaching-logo" />
            <a className="navbar-link" target="_blank" href="https://cvas.eckert-coaching.de/cv/">Zum Lebenslaufgenerator</a>
        </nav>
    )
}
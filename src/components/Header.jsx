import vanillaLogo from "../assets/images/vanilla-logo.png"


export default function Header()
{
    return (
        <header>
            <img src={vanillaLogo} alt="vanilla logo" className="logo"/>
            <span>Vanilla Cake</span>
        </header>
    )
}


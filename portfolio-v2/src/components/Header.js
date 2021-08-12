import './Header.css'

// 要素を分割して関数として定義
const HeaderTitle = () => {
    return(
    <h1 className = "title">
        <a href="" className="title-a">OD's Portfolio</a>
    </h1>
    )
}

const HeaderNav = () => {
    return(
        <nav>
            <ul className="header-group">
                <li>
                    <a href="../index.js"
                    className="header-item">
                        About
                    </a>
                </li>
                <li>
                    <a href="../Learning.js"
                    className="header-item">
                        Learning
                    </a>
                </li>
                <li>
                    <a href="./Music.js"
                    className="header-item">
                        Music
                    </a>
                </li>
            </ul>
        </nav>
    )
}

// 上記で定義した関数をHeaderに組み込んでexport
function Header () {
    return (
        <header>
            <HeaderTitle />
            <HeaderNav />
        </header>
    );
}
export default Header;

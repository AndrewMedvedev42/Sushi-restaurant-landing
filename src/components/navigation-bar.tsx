import React from 'react';

export const NavigationBar:React.FC = () => {
    const [navbar, setNavbar] = React.useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      React.useEffect(() => {
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
      })

    return (
        <nav className={navbar ? "navigation_bar navigation_bar_active" : "navigation_bar"}>
            <section>
                <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                <ul className="link_list">
                    <li className="nav_link">Home</li>
                    <li className="nav_link">How to work</li>
                    <li className="nav_link">Services</li>
                    <li className="nav_link">Products</li>
                    <li className="nav_link">Contacts</li>
                </ul>
            </section>
        </nav>
    )
}
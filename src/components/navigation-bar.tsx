import React from 'react';

export const NavigationBar:React.FC = () => {
    const [navbar, setNavbar] = React.useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 45) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      React.useEffect(() => {
        window.addEventListener("scroll", changeBackground)
      })

    return (
        <nav className={navbar ? "navigation_bar navigation_bar_active" : "navigation_bar"}>
            <section>
                <img className="logo" src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
            </section>
        </nav>
    )
}
import React, { useEffect} from "react";

function Footer() {
    useEffect(() => {
        console.log('mounted footer')
    
        return () => {
          console.log('unmounted footer')
        }
      }, [])

    return (
        <p>
        <a href="https://github.com/abg803/weather-app-new" target="_blank">
            Open-source code
        </a>
        {" "}and design by{" "}
        <a href="https://www.allegrabrooks.com/" target="_blank">
            Allegra Brooks Gurfein
        </a>
      </p>
    )

}
export default Footer;
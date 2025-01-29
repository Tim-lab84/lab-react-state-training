import {useState} from "react";

import max1 from "../assets/images/maxence-glasses.png";
import max2 from "../assets/images/maxence.png";


const ClickablePicture = () =>{
    const [image, setImage] = useState(true);

    const handleToggle= () => {
        setImage(!image);
    }

    return(
<div>

<img src = {image ? max1 : max2}
alt ="max"
onClick={handleToggle}
/>

</div>

    )
}

export default ClickablePicture
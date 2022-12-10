import React from "react";
import {Button} from "./styles"

function Btn({children,...props}){
    return <Button {...props}>{children}</Button>
}

export default Btn

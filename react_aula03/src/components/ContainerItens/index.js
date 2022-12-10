import React from "react";
import {ContainerItens} from "./styles"

function ContainerI({children,...drops}){
    return <ContainerItens {...drops}>{children}</ContainerItens>
}

export default ContainerI
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Container, Image, Li } from "./styles"

import Logo from "../../assets/avata.svg"
import Trash from "../../assets/trash.svg"

//componentes
import ContainerI from "../../components/ContainerItens";
import Title from "../../components/Title";
import Button from "../../components/Button";


function App() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function mostraUsers() {
            const { data: pessoas } = await axios.get('http://localhost:3001/index')
            setUsers(pessoas)
        }
        mostraUsers()
    }, [])

    const deleteUser = async (userId) => {
        const newUsers = users.filter(user => user.id !== userId)
        await axios.delete('http://localhost:3001/delete/'+userId)
        .then(({data})=> toast.success(data))

        setUsers(newUsers)

    }

    const history = useHistory()
    function backPage() {
        history.push('/')
    }

    return (
        <>
            <Container>
                <Image src={Logo} alt="Logo" />
                <ContainerI isBlur={true}>
                    <Title>Usuarios</Title>
                    <ul>
                        {users.map(use => (
                            <Li key={use.id}>
                                <p>{use.nome}</p>
                                <p>{use.idade}</p>
                                <button onClick={() => deleteUser(use.id)}><img src={Trash} alt="lixeira" /></button>
                            </Li>
                        ))}
                    </ul>
                    <Button borda={true} onClick={backPage}>voltar</Button>
                </ContainerI>
            </Container>
            <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
        </>
    )
}

export default App
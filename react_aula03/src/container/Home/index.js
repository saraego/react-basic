import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { Container, Image, InputLabel, Input } from "./styles"

import Logo from "../../assets/people.svg"

//componentes
import ContainerI from "../../components/ContainerItens";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Btn from "../../components/Btn";


function App() {
    const history = useHistory()
    const nome = useRef()
    const idade = useRef()

    async function addNewUser() {

        if(!nome.current.value || !idade.current.value) return toast.warn("Preencha todos os campos")

        await axios.post('http://localhost:3001/registe', {
            nome: nome.current.value,
            idade: idade.current.value
        })
            .then(({data}) => toast.success(data))
            .catch(({data})=> toast.error(data))
        nome.current.value = ''
        idade.current.value = ''
    }

    function nextPage(){
        history.push('/usuarios')
    }

    return (
        <>
            <Container>
                <Image src={Logo} alt="Logo" />
                <ContainerI>
                    <Title>Olá</Title>
                    <InputLabel>Nome</InputLabel>
                    <Input ref={nome} placeholder="name" />

                    <InputLabel>Idade</InputLabel>
                    <Input ref={idade} placeholder="age" />

                    <Button onClick={addNewUser}>Cadastrar</Button>
                    <Btn onClick={nextPage}>Ver usuários</Btn>
                </ContainerI>
            </Container>
            <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
        </>
    )
}

export default App
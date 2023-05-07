// Felipe
import { useEffect, useState } from 'react'
import { Container, Title } from '../styles/home'
import axios from 'axios'

export default function Home() {
    const [abilities, setAbilities] = useState([])
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/ability/150/").then((response) => {
            setAbilities(response.data.names)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            {
               abilities.length == 0 ? <h1>Loading...</h1> :  
               abilities.map((item) => {
                return <Title>{item.name}</Title>
                }) 
            }
        </Container>
    )
}
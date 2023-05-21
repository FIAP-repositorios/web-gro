// Felipe
import { useEffect, useState } from 'react'
import { Container, Title, Header } from '../styles/home'
import axios from 'axios'

export default function Home() {
    const [products, setProducts] = useState([
        {
            name: 'Maça',
            type: 'Fruta'
        },

        {
            name: 'Limão',
            type: 'Fruta'
        }
    ])

    return (
        <Container>
            <Header>
                <h2>GrowUp</h2>
            </Header>

            {
               products.length == 0 ? <h1>Loading...</h1> :  
               products.map((item) => {
                return <div>
                    <h1>{item.name}</h1>
                    <span>{item.type}</span>
                </div>
                })
            }
        </Container>
    )
}
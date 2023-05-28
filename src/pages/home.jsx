// Felipe
import { useEffect, useState } from 'react'
import { Container, Title, Header, Content, List } from '../styles/home'
import axios from 'axios'
import Logo from '../images/logo.png'

export default function Home() {
    const [products, setProducts] = useState([
        {
            name: 'Maças',
            type: 'Fruta',
            img: 'public/'
        },

        {
            name: 'Limões',
            type: 'Fruta',
            img: 'public/'
        },

        {
            name: 'Uvas',
            type: 'Fruta',
            img: 'public/'
        },

        {
            name: 'Peixes',
            type: 'Peixe',
            img: 'public/'
        },

        {
            name: 'Carnes',
            type: 'Carne',
            img: 'public/'
        },

        {
            name: 'Leites',
            type: 'Leite',
            img: 'public/'
        }
    ])

    return (
        <Container>
            <Header>
                <img src={Logo} />
            </Header>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Content>
                    {
                        products.length == 0 ? <h1>Loading...</h1> :  
                        products.map((item) => {
                            return <List>
                                <Title>{item.name}</Title>
                                <span>{item.type}</span>
                                <button>Visualizar</button>
                            </List>
                        })
                    }
                </Content>
            </div>
        </Container>
    )
}
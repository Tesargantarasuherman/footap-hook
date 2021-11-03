import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import FormCari from '../components/FormCari/FormCari'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'

export default function HomePage() {
    return (
        <div>
            <Carousel />
            <FormCari />
            <Card />
        </div>
    )
}

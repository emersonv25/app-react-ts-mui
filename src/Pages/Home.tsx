
import { Box, Container } from "@mui/material";
import { CardInfo } from '../@types/cardInfo';
import CarouselCards from "../components/cards/CarouselCards";
import PageCards from "../components/cards/PageCards";

export function Home() {
    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Este é um slider</h2>
                    <Box>
                        <CarouselCards arrayCards={cards} ></CarouselCards>
                    </Box>
                </Container>
                <Container maxWidth='xl'>
                    <h2>Está é uma pagina</h2>
                    <PageCards arrayCards={cards} ></PageCards>
                </Container>
            </Box>
        </>
    )
}

const cards: CardInfo[] =
    [
        { title: 'Attack on Titan: Shingeki No Kyojin', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile MUITO FODA BIXO TNC', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile MUITO FODA BIXO TNC', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
    ]
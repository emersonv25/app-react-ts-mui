
import { Box, Button, Container, Grid, ImageList, Pagination, Stack, Typography } from "@mui/material";
import CardPoster from "../shared/components/cards/CardPoster";
import { CardInfo } from '../shared/@types/cardInfo';

export function Home() {

    return (
        <div>
            <Box>
                <Container maxWidth='xl'>
                    <h2>Está é a pagina inicial</h2>
                    <Grid
                        container
                        justifyContent="flex-start"

                    >
                        {cards.map((card, key) =>
                            <Grid key={key} item xs={6} sm={4} md={3} lg={2}>
                                <CardPoster key={key} title={`${card.title}`} image={`${card.image}`}></CardPoster>
                            </Grid>
                        )}
                    </Grid>
                    <Box display='flex' justifyContent="center" pt={1} pb={1}>
                        <Pagination count={100} color="primary" />
                    </Box>

                </Container>
            </Box>
        </div>
    )
}

const cards: CardInfo[] =
    [
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile MUITO FODA BIXO TNC', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
        { title: 'Attack on Titan', image: '/static/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Reptile MUITO FODA BIXO TNC', image: '/static/images/contemplative-reptile.jpg' },
        { title: 'Live from space', image: '/static/images/live-from-space.jpg' },
    ]
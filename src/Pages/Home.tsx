
import { Box, Button, Container, Grid, Pagination, Typography } from "@mui/material";
import CardImage from "../shared/components/cards/CardImage";
import { CardInfo } from '../shared/@types/cardInfo';

export function Home() {

    return (
        <div>
            <Box>
                <Container>
                    <h2>Populares</h2>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="left"
                    >
                        {cards.map((card, key) =>
                            <Grid item xs={6} sm={4} md={2}>
                                <CardImage key={key} title={`${card.title}`} image={`${card.image}`}></CardImage>
                            </Grid>
                        )
                        }
                    </Grid>
                    <Box display='flex' justifyContent="center" p={2}>
                        <Pagination count={10} color="primary" />
                    </Box>

                </Container>
            </Box>
        </div>
    )
}

const cards: CardInfo[] =
    [
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg'},
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },
        { title: 'Attack on Titan', image: '/data/images/pWFlyeunOIo51wYQOCx8kJDLm2y-185x278.jpg' },


    ]

import { Button } from "@mui/material";
import { DarkModeButton } from "../shared/components/DarkModeButton";

export function Home() {

    return (
        <div>
            <h1>Está é a pagina Inicial</h1>
            <DarkModeButton></DarkModeButton>
            <Button variant='outlined' color='primary'>BOTÃO FODA</Button>
            <Button variant='outlined' color='secondary'>BOTÃO FODA</Button>
        </div>
    )
}
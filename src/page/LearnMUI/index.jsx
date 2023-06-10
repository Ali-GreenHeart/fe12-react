import { Box, Button, ButtonGroup, Checkbox, Container, Grid, IconButton, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { Delete, Star, StarBorder } from "@mui/icons-material"

const LearnMUI = () => {
    return (
        <>
            {/* <div>LearnMUI</div>
            <Checkbox color="primary" icon={<StarBorder />} checkedIcon={<Star />} />
            <IconButton color="primary">
                <Delete />
            </IconButton>
            <TextField
                label="Username"
            />
            <select>
                <option value="apple">🍎</option>
                <option value="test">test</option>
            </select>
            <Select>
                <MenuItem value="apple">🍎</MenuItem>
                <MenuItem value="test">test</MenuItem>
            </Select>
            <Button
                startIcon={<Delete />}
                color="warning"
                onClick={() => { console.log('clicked') }}
                variant="contained"
            >
                click
            </Button>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <Typography variant="h1" href="https://google.com" component="a" >salam </Typography>
            <Container maxWidth="sm">
                <Box
                    component="main"
                    sx={{
                        backgroundColor: { xs: 'red', sm: 'green' },
                        textAlign: 'center'
                    }}
                >
                    salam
                </Box>
            </Container>
            <Stack justifyContent={{ xs: 'center', md: 'space-between' }} flexDirection="row">
                <Typography>item1</Typography>
                <Typography>item2</Typography>
                <Typography>item3</Typography>
            </Stack> */}
            <Container>
                <Grid container>
                    <Grid sx={{ backgroundColor: 'green' }} item xs={12} md={6} lg={4} xl={3}>item1</Grid>
                    <Grid sx={{ backgroundColor: 'red' }} item xs={12} md={6} lg={4} xl={3}>item2</Grid>
                    <Grid sx={{ backgroundColor: 'blue' }} item xs={12} md={6} lg={4} xl={3}>item3</Grid>
                </Grid>
            </Container>
        </>
    )
}
export default LearnMUI

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Link as LinkRouter} from "react-router-dom"
// import { createIndexedAccessTypeNode } from "typescript";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
	palette: {
		primary: {
			light: "#c3caee",
			main: "#7085d8",
			dark: "#4d6ad0",
			contrastText: "#000000",
		},
		secondary: {
			light: "#ffa28a",
			main: "#ff795b",
			dark: "#ff5436",
			contrastText: "#000000",
		},
	},
});

type postDowladerProps = {
	data: {
		name: string;
		image?: string;
		homeworld?: string;
		wiki?: string;
		id?:string
	}[];
};
export default function Album({ data }: postDowladerProps) {
	console.log(data?.slice(0, 6));

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppBar position="fixed">
				<Toolbar>
					{/* <CameraIcon sx={{ mr: 2 }} /> */}
					<Typography variant="h6" color="inherit" noWrap>
						Jedi Dictionary
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "primary.light",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							Album layout
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="text.secondary"
							paragraph
						>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<Button variant="contained">Main call to action</Button>
							<Button variant="outlined">Secondary action</Button>
						</Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{data.slice(0,15).map((item, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardMedia
										component="div"
										sx={{
											// 16:9
											pt: "56.25%",
										}}
										image={item.image}
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h5" component="h2">
											{item.name}
										</Typography>
										<Typography> Homerword: {item.homeworld}</Typography>
									</CardContent>
									<CardActions>
										<LinkRouter to={`/${item.id}`}>
											<Button size="small">View</Button>
											</LinkRouter>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Something here to give the footer a purpose! 
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}

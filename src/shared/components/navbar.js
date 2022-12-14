import {
	Grid,
	Box,
	Typography,
	CssBaseline,
	useTheme,
	AppBar,
} from '@mui/material';
import { useNavigate } from 'react-router';
import ConsulpetLogo from '../../assets/consulpetLogo.svg';

export default function Navbar() {
	const navigate = useNavigate();
	const theme = useTheme();
	const isAdmin = localStorage.getItem('admin');
	return (
		<AppBar position="static">
			<CssBaseline />
			<Grid
				justifyContent="space-between"
				container
				sx={{
					backgroundColor: theme.palette.primary.main,
					paddingTop: '10px',
					paddingBottom: '10px',
				}}
				spacing={{ xs: 2, sm: 2 }}
			>
				<Grid m={0} item xs={3} sm={3} md={6} lg={8}>
					<Box
						src={ConsulpetLogo}
						component="img"
						sx={{
							marginLeft: 2,
							maxWidth: '75px',
							verticalAlign: 'bottom',
							cursor: 'pointer',
						}}
						onClick={() => navigate('/home')}
					/>
				</Grid>
				<Grid
					m={0}
					item
					xs={9}
					sm={9}
					md={6}
					lg={3}
					alignSelf="center"
					textAlign="right"
					pr={2}
				>
					{isAdmin === 'true' ? (
						<>
							<Typography
								display="inline"
								variant="h6"
								mr={5}
								color={theme.palette.primary.dark}
								sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
								onClick={() => navigate('/petshop/agendamentos')}
							>
								Agendamentos
							</Typography>
							<Typography
								display="inline"
								variant="h6"
								color={theme.palette.primary.dark}
								sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
								onClick={() => navigate('/petshop/cadastroVeterinario')}
							>
								Veterinários
							</Typography>
						</>
					) : (
						<>
							<Typography
								mr={5}
								display="inline"
								variant="h6"
								color={theme.palette.primary.dark}
								sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
								onClick={() => navigate('/home')}
							>
								Agendamentos
							</Typography>
							<Typography
								display="inline"
								variant="h6"
								color={theme.palette.primary.dark}
								sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
								onClick={() => navigate('/pets')}
							>
								Pets
							</Typography>
						</>
					)}
				</Grid>
			</Grid>
		</AppBar>
	);
}

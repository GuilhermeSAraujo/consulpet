import {
	Grid,
	Button,
	Avatar,
	Typography,
	useTheme,
	Container,
	CssBaseline,
	TextField,
	Box,
	Stack,
	InputAdornment,
	MenuItem,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AlertaErroForm from '../../../../shared/components/erroForm';
import StyledLoadingButton from '../../../../utils/components/LoadingButton';
import { useForm, Controller } from 'react-hook-form';
import { useQuery } from 'react-query';
import CadastroVeterinarioService from '../service/cadastroVeterinarioService';

export default function FormCadastroVeterinario() {
	const theme = useTheme();

	const { data: users } = useQuery(
		'vets',
		async () => await CadastroVeterinarioService.buscarUsuarios(),
		{ cacheTime: 600000, staleTime: 600000 }
	);

	const {
		handleSubmit,
		control,
		formState: { errors, isDirty, isValid },
	} = useForm({
		defaultValues: { user_id: '', crm: '', specialization: '' },
		mode: 'onChange',
	});

	return (
		<Container component="main" maxWidth="xs" bc={theme.palette.primary.main}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
					<PetsIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Dados Veterinário
				</Typography>
			</Box>
			<Grid container sx={{ placeContent: 'center' }}>
				<Box
					padding={2}
					sx={{
						mt: 1,
						backgroundColor: theme.palette.primary.light,
						borderRadius: '3%',
						border: '1px solid white',
					}}
				>
					<form id="cadastroPet">
						<Stack spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								{users && users.data && users.data.length > 0 ? (<Controller
									name="user_id"
									control={control}
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value } }) => (
										<TextField
											select
											fullWidth
											label="Usuários cadastrados"
											value={value}
											onChange={onChange}
											error={errors.user_id}
											helperText={errors.user_id?.message}
										>
											{users.data.map((user) => (
												<MenuItem key={user.id} value={user.id}>
													{user.name}
												</MenuItem>
											))}
										</TextField>
									)}
								/>) : (<></>)}
								{errors.user_id && <AlertaErroForm textoErro="Campo obrigatório" />}
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Controller
									name="crm"
									control={control}
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value } }) => (
										<TextField
											fullWidth
											label="CRMV"
											value={value}
											onChange={onChange}
											error={errors.size}
											helperText={errors.size?.message}
											InputProps={{
												endAdornment: (
													<InputAdornment position="start">
														<HealthAndSafetyIcon />
													</InputAdornment>
												),
											}}
										/>
									)}
								/>
								{errors.crm && <AlertaErroForm textoErro="Campo obrigatório" />}
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Controller
									name="specialization"
									control={control}
									rules={{
										required: true,
									}}
									render={({ field: { onChange, value } }) => (
										<TextField
											fullWidth
											label="Especialidade"
											value={value}
											onChange={onChange}
											error={errors.size}
											helperText={errors.size?.message}
											InputProps={{
												endAdornment: (
													<InputAdornment position="start">
														<AssignmentIndIcon />
													</InputAdornment>
												),
											}}
										/>
									)}
								/>
								{errors.specialization && (
									<AlertaErroForm textoErro="Campo obrigatório" />
								)}
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
								<StyledLoadingButton>Cadastrar</StyledLoadingButton>
							</Grid>
						</Stack>
					</form>
				</Box>
			</Grid>
		</Container>
	);
}
import React from 'react';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';
import PrimaryButton from './PrimaryButton';

const useStyles = makeStyles((theme) => ({
	formWrapper: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(8),
	},
}));
const dropdownoptions = [
	{ key: 'Select an option', value: '' },
	{ key: 'Option 1', value: 'option1' },
	{ key: 'Option 2', value: 'option2' },
	{ key: 'Option 3', value: 'option3' },
];
const initialValues = {
	textfield: '',
	dropdown: '',
	message: '',
	date:'',
};
const validationSchema = Yup.object({
	textfield: Yup.string().required('This field is required'),
	select: Yup.string().required('This field is required'),
	message: Yup.string().required('This field is required'),
	date: Yup.date().required('This field is required'),
});
const onSubmit = (values) => {
	console.log('Form data', values);
};

const FormikContainer = () => {
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12}>
				<Container maxWidth='md'>
					<div className={classes.formWrapper}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{(formik) => {
								return (
									<Form>
										<Grid container spacing={2}>
											<Grid item xs={12}>
												<Typography variant='h4'>
													Formik Controls with Material UI
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<FormikControl
													control='input'
													name='textfield'
													label='Text Field'
												/>
											</Grid>
											<Grid item xs={12}>
												<FormikControl
													control='select'
													name='select'
													label='Select your Choice'
													options={dropdownoptions}
												/>
											</Grid>
											<Grid item xs={12}>
												<FormikControl
													control='checkbox'
													name='select'
													label='Select your Choice'
													options={dropdownoptions}
												/>
											</Grid>
											<Grid item xs={12}>
												<FormikControl
													control='textarea'
													name='message'
													label='Write a message'
													multiline={true}
													rows={4}
												/>
											</Grid>
											<Grid item xs={12}>
												<FormikControl
													control='datetimepicker'
													name='date'
													label='Pick a Date'
												/>
											</Grid>
											<Grid item xs={12}>
												<PrimaryButton
													type='submit'
													disabled={!(formik.isValid && formik.dirty)}
												>
													Submit Form
												</PrimaryButton>
											</Grid>
										</Grid>
									</Form>
								);
							}}
						</Formik>
					</div>
				</Container>
			</Grid>
		</Grid>
	);
};

export default FormikContainer;

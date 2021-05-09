import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const Input = ({ name, ...rest }) => {
	const [field, meta] = useField(name);
	const configTextfield = {
		...field,
		...rest,
		fullWidth: true,
		variant: 'outlined',
	};
	if (meta && meta.touched && meta.error) {
		configTextfield.error = true;
		configTextfield.helperText = meta.error;
	}
	return <TextField {...configTextfield} />;
};

export default Input;

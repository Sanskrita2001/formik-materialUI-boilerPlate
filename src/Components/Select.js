import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const Select = ({ name, options, ...rest }) => {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);
	const handleChange = (evt) => {
		const { value } = evt.target;
        setFieldValue(name, value);
    };
    const configSelect = {
			...field,
			...rest,
			select: true,
			variant: 'outlined',
			fullWidth: true,
			onChange: handleChange,
		};

		if (meta && meta.touched && meta.error) {
			configSelect.error = true;
			configSelect.helperText = meta.error;
		}

	return (
		<TextField {...configSelect}>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.key}
				</MenuItem>
			))}
		</TextField>
	);
};

export default Select;

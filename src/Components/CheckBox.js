import React from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const CheckBox = ({ name, label, options, ...rest }) => {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);
	const handleChange = (evt) => {
		const { checked } = evt.target;
		setFieldValue(name, checked);
	};

	const configCheckbox = {
		...field,
		onChange: handleChange,
	};

	const configFormControl = {};
	if (meta && meta.touched && meta.error) {
		configFormControl.error = true;
	}
	return (
		<FormControl {...configFormControl}>
			{({ field }) => {
				return options.map((option) => {
					return (
						<>
							<FormLabel component='legend' htmlFor={option.value}>
								{option.key}
							</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox {...configCheckbox} />}
									label={label}
									value={option.value}
								/>
							</FormGroup>
						</>
					);
				});
			}}
		</FormControl>
	);
};

export default CheckBox;

import React from 'react';
import CheckBox from './CheckBox';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import DateTimePicker from './DateTimePicker'

const FormikControl = ({ control, ...rest }) => {
	switch (control) {
		case 'input':
            return <Input {...rest} />
		case 'select':
			return <Select {...rest} />
		case 'checkbox':
			return <CheckBox {...rest} />
		case 'textarea':
			return <Textarea {...rest}/>
		case 'datetimepicker':
			return <DateTimePicker {...rest}/>
		default:
			return null;
	}
};

export default FormikControl;

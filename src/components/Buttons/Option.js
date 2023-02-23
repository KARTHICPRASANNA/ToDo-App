import { Button } from '@mui/material';
import { React } from 'react';

const Option = (context) => {
	const { state, setState, config: { options }} = context;

	return options.map((option, key) =>
		<Button
			key={ key }
			onClick={ () => setState({
				...state,
				filter: option,
			}) }
		> { option }
		</Button>);
};

export default Option;

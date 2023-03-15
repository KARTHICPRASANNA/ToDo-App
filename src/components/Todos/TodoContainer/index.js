import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { React } from 'react';
import Display from './Display';

const Container = (context) => {
	const { state, setState, state: { filter }} = context;

	return <Box>
		<TabContext value={ filter }>
			<TabList
				centered={ true }
				onChange={ (event, value) => setState({
					...state,
					filter: value,
				}) }
			>
				<Tab label="All" value="all"/>
				<Tab label="Active" value="active"/>
				<Tab label="Completed" value="completed"/>
			</TabList>
			<TabPanel value={ filter }><Display { ...context }/></TabPanel>
		</TabContext>
	</Box>;
};

export default Container;

import React from 'react';
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Typography
} from '@material-ui/core';
import {
	Help,
	Search
} from '@material-ui/icons';

export const Header: React.FunctionComponent = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1 }}
					>geosearch-demo</Typography>
					<IconButton
						size="large"
						aria-label="Help"
						onClick={() => alert("help")}
						color="inherit"
					>
						<Help />
					</IconButton>
					<IconButton
						size="large"
						aria-label="Search"
						onClick={() => alert("search")}
						color="inherit"
					>
						<Search />
					</IconButton>

				</Toolbar>
			</AppBar>
		</Box>
	)
}
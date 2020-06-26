import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssessmentTwoToneIcon from '@material-ui/icons/AssessmentTwoTone';
import LayersTwoToneIcon from '@material-ui/icons/LayersTwoTone';
import '../../assets/css/App.css';

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DashboardTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ShoppingCartTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Orders" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<GroupTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Customers" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssessmentTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Integrations" />
		</ListItem>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Saved reports</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssessmentTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Current month" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssessmentTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Last quarter" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssessmentTwoToneIcon />
			</ListItemIcon>
			<ListItemText primary="Year-end sale" />
		</ListItem>
	</div>
);

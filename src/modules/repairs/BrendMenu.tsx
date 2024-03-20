import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppleIcon from '@mui/icons-material/Apple';
import { SamsungSVG, XiaomiSVG, RedmiSVG, GoogleSVG, OppoSVG, MotorolaSVG, OneplusSVG } from '../../common/components/BrendLogotips.tsx';
import { useRepairsContext } from './RepairsContext.tsx'

import '../../common/components/style/menuRepairs.scss'

// Використовуйте SamsungSVG та XiaomiSVG у вашому коді
function BrendMenu() {

	  const { setSelectedBrend } = useRepairsContext();

		const handleListItemClick = (primary: string) => {
			setSelectedBrend(primary);
		};

  return (
    <>
				<Box sx={{ width: '100%', maxWidth: 180, bgcolor: 'background.paper' }}>
					<nav aria-label="main mailbox folders">
						<List>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Apple')}>
									<ListItemIcon>
										<AppleIcon />
									</ListItemIcon>
									<ListItemText primary="Apple" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Samsung')}>
									<ListItemIcon>
										<SamsungSVG/>
									</ListItemIcon>
									<ListItemText primary="Samsung" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Xiaomi')}>
									<ListItemIcon>
										<XiaomiSVG/>
									</ListItemIcon>
									<ListItemText primary="Xiaomi" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Redmi')}>
									<ListItemIcon>
										<RedmiSVG/>
									</ListItemIcon>
									<ListItemText primary="Redmi" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Google')}>
									<ListItemIcon>
										<GoogleSVG/>
									</ListItemIcon>
									<ListItemText primary="Google" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Oppo')}>
									<ListItemIcon>
										<OppoSVG/>
									</ListItemIcon>
									<ListItemText primary="Oppo" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('Motorola')}>
									<ListItemIcon>
										<MotorolaSVG/>
									</ListItemIcon>
									<ListItemText primary="Motorola" />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton onClick={() => handleListItemClick('OnePlus')}>
									<ListItemIcon>
										<OneplusSVG/>
									</ListItemIcon>
									<ListItemText primary="OnePlus" />
								</ListItemButton>
							</ListItem>

						</List>
					</nav>
				</Box>

    </>
  )
}

export default BrendMenu

import { Box, Typography, List, ListItem, ListItemText, Switch, Button } from '@mui/material'

export default function SoulsManager() {
  const souls = ['Work Soul', 'Leisure Soul', 'Learning Soul']

  return (
    <Box>
      <Typography variant='subtitle1' gutterBottom>
        Manage Your Souls
      </Typography>
      <List>
        {souls.map(soul => (
          <ListItem key={soul} secondaryAction={<Switch edge='end' />}>
            <ListItemText primary={soul} />
          </ListItem>
        ))}
      </List>
      <Button fullWidth variant='outlined'>
        + Add New Soul
      </Button>
    </Box>
  )
}

import { Box, Typography, TextField, Button, Paper } from '@mui/material'

export default function ChatManager() {
  return (
    <Box>
      <Paper variant='outlined' sx={{ height: 200, overflowY: 'auto', mb: 2 }}>
        <Typography variant='body2' color='text.secondary'>
          Work Soul: Stay focused, Harsha!
        </Typography>
        <Typography variant='body2'>Main Soul: Okay noted</Typography>
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField size='small' placeholder='Covey here...' fullWidth />
        <Button variant='contained'>Send</Button>
      </Box>
    </Box>
  )
}

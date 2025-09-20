import { Container, Typography, TextField, Button } from '@mui/material'

export default function Options() {
  return (
    <Container sx={{ p: 3, width: 400 }}>
      <Typography variant='h5' gutterBottom>
        Split Soul - Options
      </Typography>
      <TextField label='User Ideology' variant='outlined' fullWidth margin='normal' />
      <Button variant='contained' color='secondary'>
        Save Settings
      </Button>
    </Container>
  )
}

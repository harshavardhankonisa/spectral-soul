import { Box, Typography, TextField, Button, Link, Divider } from '@mui/material'

export default function SettingsManager() {
  return (
    <Box>
      <Typography variant='subtitle1' gutterBottom>
        Settings
      </Typography>
      <TextField fullWidth size='small' label='API Key' placeholder='Enter your API key...' sx={{ mb: 2 }} />
      <Button variant='contained' sx={{ mb: 2 }}>
        Save
      </Button>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='body2' color='text.secondary'>
          Need more preferences?
        </Typography>
        <Link
          href='#'
          onClick={() => {
            chrome.runtime.openOptionsPage()
          }}
          sx={{
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Open Extension Settings
        </Link>
      </Box>
    </Box>
  )
}

import { Container } from '@mui/material'
import PopupSettings from '../components/core/PopupSettings'
import PopupArena from '../components/core/PopupArena'

export default function Popup() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '400px',
        height: '600px',
        backgroundColor: 'background.paper',
        color: 'text.primary',
        overflow: 'hidden'
      }}
    >
      <PopupSettings />
      <PopupArena />
    </Container>
  )
}

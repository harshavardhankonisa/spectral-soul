import { useState } from 'react'
import { Box, Divider } from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast'
import CloseIcon from '@mui/icons-material/Close'

const PopupSettings = () => {
  const [current, setCurrent] = useState('')
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          padding: 2,
          width: '100%'
        }}
      >
        <>
          {current === 'theme' ? (
            <CloseIcon height={24} width={24} onClick={() => setCurrent('')} />
          ) : (
            <ContrastIcon height={24} width={24} onClick={() => setCurrent('theme')} />
          )}
        </>
      </Box>
      <Divider sx={{ width: '100%' }} />
    </>
  )
}

export default PopupSettings

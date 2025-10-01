import { Box } from '@mui/material'
import type { Tab } from '../../interface/ui'

const PopupSettings = ({
  tabs,
  setCurrentView
}: {
  tabs: Tab[]
  setCurrentView: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          padding: 1.5,
          width: '100%',
          gap: 1
        }}
      >
        {tabs.map((tab, index) => (
          <Box
            sx={{
              height: 24,
              width: 24,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setCurrentView(index)}
            key={index}
          >
            {tab.icon}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default PopupSettings

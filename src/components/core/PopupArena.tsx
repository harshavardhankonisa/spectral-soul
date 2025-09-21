import * as React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { Divider } from '@mui/material'
import ChatManager from './ChatManager'
import SoulsManager from './SoulsManager'
import SettingsManager from './SettingsManager'
import ActionsManager from './ActionsManager'

interface Step {
  label: string
  description?: string
  component?: React.ReactNode
}

const steps: Step[] = [
  {
    label: 'Actions Manager',
    description: 'Manage your actions.',
    component: <ActionsManager />
  },
  {
    label: 'Chat Manager',
    description: 'Talk with your split souls as main soul.',
    component: <ChatManager />
  },
  {
    label: 'Manage Souls',
    description: 'Enable, disable, or create, edit and delete new souls.',
    component: <SoulsManager />
  },
  {
    label: 'Settings',
    description: 'Configure API keys and extension preferences.',
    component: <SettingsManager />
  }
]

export default function PopupArena() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
        <Paper sx={{ px: 2, py: 1 }}>
          <Typography variant='h6'>{steps[activeStep].label}</Typography>
          <Typography variant='subtitle2'>{steps[activeStep].description}</Typography>
        </Paper>
        {steps[activeStep].component && <Box sx={{ p: 2 }}>{steps[activeStep].component}</Box>}
      </Box>
      <Divider sx={{ width: '100%' }} />
      <MobileStepper
        variant='dots'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
        sx={{
          width: '100%'
        }}
      />
    </Box>
  )
}

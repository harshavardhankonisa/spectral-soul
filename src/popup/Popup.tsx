import { Container } from '@mui/material'
import PopupSettings from '../components/core/PopupSettings'
import PopupArena from '../components/core/PopupArena'
import React from 'react'
import ActionsManager from '../components/core/ActionsManager'
import ChatManager from '../components/core/ChatManager'
import SoulsManager from '../components/core/SoulsManager'
import SettingsManager from '../components/core/SettingsManager'
import type { Tab } from '../interface/common'
import HomeIcon from '@mui/icons-material/Home'
import CallToActionIcon from '@mui/icons-material/CallToAction'
import ChatIcon from '@mui/icons-material/Chat'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Popup() {
  const tabs: Tab[] = [
    {
      label: 'Home',
      description: 'Welcome to Split Soul! Select a tab to get started.',
      component: null,
      icon: <HomeIcon />
    },
    {
      label: 'Action Manager',
      description: 'Manage your actions.',
      component: <ActionsManager />,
      icon: <CallToActionIcon />
    },
    {
      label: 'Chat Manager',
      description: 'Talk with your split souls as main soul.',
      component: <ChatManager />,
      icon: <ChatIcon />
    },
    {
      label: 'Task Manager',
      description: 'Manage your tasks and to-dos.',
      component: null,
      icon: <FormatListBulletedIcon />
    },
    {
      label: 'Manage Souls',
      description: 'Enable, disable, or create, edit and delete new souls.',
      component: <SoulsManager />,
      icon: <PeopleIcon />
    },
    {
      label: 'Settings',
      description: 'Configure API keys and extension preferences.',
      component: <SettingsManager />,
      icon: <SettingsIcon />
    }
  ]
  const [currentView, setCurrentView] = React.useState<number>(0)

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
      <PopupSettings tabs={tabs} setCurrentView={setCurrentView} />
      <PopupArena tabs={tabs} currentView={currentView} setCurrentView={setCurrentView} />
    </Container>
  )
}

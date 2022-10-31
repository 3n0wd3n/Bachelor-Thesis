import React from 'react'
import { FaSignOutAlt, FaPlus, FaCalendarAlt, FaEnvelopeOpen } from 'react-icons/fa'
import { SideContainer } from './AdminSidePanel.style'

export default function SidePanel() {
    const styleSingOut = { color: "#2F3E46", fontSize: "2.3em" };
    const styleAdd = { color: "#61C9A8", fontSize: "2.3em" };
    const styleCalendar = { color: "#8261C9", fontSize: "2.3em" };
    const styleEnvelope = { color: "#61B6C9", fontSize: "2.3em" };

    return (
      <SideContainer>
        <FaSignOutAlt style={styleSingOut} />
        <FaPlus style={styleAdd} />
        <FaCalendarAlt style={styleCalendar} />
        <FaEnvelopeOpen style={styleEnvelope} />
      </SideContainer>
    )
  }
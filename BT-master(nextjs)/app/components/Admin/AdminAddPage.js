import React from 'react'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminCustonFontThin, AdminCustonFontBold, AdminRowDays, AdminDayItem, AdminDaysContainer, AdminLabel, AdminInputStyled, AdminButtonContainer, AdminFormContainer, AddBackButton, AdminAddContainer } from './AdminAddPage.style'
export default function AddPage({setAddPage}) {
  return (
    <>
    <AdminAddContainer>
      <AdminFormContainer>
        <FontsHeaderBold>add student</FontsHeaderBold>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>name</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="name"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>surname</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="surname"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>password</FontsThin></AdminLabel>
          <AdminInputStyled type="password" placeholder="password"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminLabel><FontsThin>lesson days</FontsThin></AdminLabel>
        <AdminDaysContainer>
          <AdminRowDays>
            <AdminDayItem><AdminCustonFontBold>mon</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>tue</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>wed</AdminCustonFontBold></AdminDayItem>
          </AdminRowDays>
          <AdminRowDays>
            <AdminDayItem><AdminCustonFontBold>thu</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>fri</AdminCustonFontBold></AdminDayItem>
            <AdminDayItem><AdminCustonFontBold>sat</AdminCustonFontBold></AdminDayItem>
          </AdminRowDays>
        </AdminDaysContainer>
        <AdminLabel><FontsThin>count of hours</FontsThin></AdminLabel>
        <div>
          {/* hours in particular day */}
        </div>
        <div>
              <AdminCustonFontThin>
                <AdminInputStyled type="checkbox" id="under-age" name="under-age" value="" />
                <AdminLabel for="under-age">if student is under aged or need legal representative</AdminLabel>
              </AdminCustonFontThin>
        </div>
        <FontsHeaderBold>representative</FontsHeaderBold>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>name</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="name"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>surname</FontsThin></AdminLabel>
          <AdminInputStyled type="text" placeholder="surname"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>password</FontsThin></AdminLabel>
          <AdminInputStyled type="password" placeholder="password"></AdminInputStyled>
        </AdminButtonContainer>
        <AdminButtonContainer>
          <AdminLabel><FontsThin>phone number</FontsThin></AdminLabel>
          <AdminInputStyled type="tel"></AdminInputStyled>
        </AdminButtonContainer>
      </AdminFormContainer>
      <AddBackButton onClick={() => setAddPage(false)}>back to dashboard</AddBackButton>
    </AdminAddContainer>
    </>
  )
}

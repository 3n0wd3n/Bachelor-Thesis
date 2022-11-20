import React from 'react'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminLabel, AdminInputStyled, AdminButtonContainer, AdminFormContainer, AddBackButton, AdminAddContainer } from './AdminAddPage.style'
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
        <AdminLabel>day(choose from days)</AdminLabel>
        <div>
          <span>mon</span>
          <span>tue</span>
          <span>wed</span>
          <span>thu</span>
          <span>fri</span>
          <span>sat</span>
          <span>sun</span>
        </div>
        <AdminLabel><FontsThin>count of hours</FontsThin></AdminLabel>
        <div>
          {/* hours in particular day */}
        </div>
        <fieldset>
            <div>
              <AdminInputStyled type="checkbox" id="under-age" name="under-age" value="" />
              <AdminLabel for="under-age">if student is under aged or need legal representative </AdminLabel>
            </div>
        </fieldset>
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

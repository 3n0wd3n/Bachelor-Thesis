import React from 'react'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminFormContainer, AddBackButton, AdminAddContainer } from './AdminAddPage.style'
export default function AddPage({setAddPage}) {
  return (
    <>
    <AdminAddContainer>
      <AdminFormContainer>
        <FontsHeaderBold>add student</FontsHeaderBold>
        <label>name</label>
        <input type="text" placeholder="name"></input>
        <label>surname</label>
        <input type="text" placeholder="surname"></input>
        <label>password</label>
        <input type="password" placeholder="password"></input>
        <label>day(choose from days)</label>
        <div>
          <span>mon</span>
          <span>tue</span>
          <span>wed</span>
          <span>thu</span>
          <span>fri</span>
          <span>sat</span>
          <span>sun</span>
        </div>
        <label>count of hours</label>
        <div>
          {/* hours in particular day */}
        </div>
        <fieldset>
            <div>
              <input type="checkbox" id="under-age" name="under-age" value="" />
              <label for="under-age">if student is under aged or need legal representative </label>
            </div>
        </fieldset>
        <FontsHeaderBold>representative</FontsHeaderBold>
        <label>name</label>
        <input type="text" placeholder="name"></input>
        <label>surname</label>
        <input type="text" placeholder="surname"></input>
        <label>password</label>
        <input type="password" placeholder="password"></input>
        <label>phone number</label>
        <input type="tel"></input>
      </AdminFormContainer>
      <AddBackButton onClick={() => setAddPage(false)}>back to dashboard</AddBackButton>
    </AdminAddContainer>
    </>
  )
}

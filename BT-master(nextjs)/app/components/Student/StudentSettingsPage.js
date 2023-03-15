import React from 'react'
import { useState } from 'react'
import { FaRegEdit, FaCheck, FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { StudentSettingButtonContainer, StudentSettingAttributesContainer, StudentSettingContainer, StudentSettingMainContainer } from './StudentSettingsPage.style'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'

export default function SettingsPage({ data, setData, setSettingsPage}) {
    //   const [openApologizePage, setApologizePage] = useState(false);

    return (
        <StudentSettingMainContainer>
            <StudentSettingContainer>
                <FontsHeaderBold>Settings</FontsHeaderBold>
                <StudentSettingAttributesContainer>
                    <FontsBold>student's role:</FontsBold><FontsThin>{data.role}</FontsThin>
                </StudentSettingAttributesContainer>
                <StudentSettingAttributesContainer>
                    <FontsBold>student's name:</FontsBold><FontsThin>{data.firstName} {data.lastName}</FontsThin>
                </StudentSettingAttributesContainer>
                <StudentSettingAttributesContainer>
                    {/*Zeptat se kubu na bezpečnost */}
                    <FontsBold>student's username:</FontsBold><FontsThin>{data.username}</FontsThin>
                </StudentSettingAttributesContainer>
                <StudentSettingAttributesContainer>
                    {/*Zeptat se kubu na bezpečnost */}
                    <FontsBold>student's passwd:</FontsBold><FontsThin>{data.password}</FontsThin>
                </StudentSettingAttributesContainer>
                <StudentSettingButtonContainer>
                    <FaRegEdit/>
                </StudentSettingButtonContainer>
            </StudentSettingContainer>
            <button onClick={() => setSettingsPage(false)}><FontsBold>back to dashboard</FontsBold></button>
        </StudentSettingMainContainer>
    )
}
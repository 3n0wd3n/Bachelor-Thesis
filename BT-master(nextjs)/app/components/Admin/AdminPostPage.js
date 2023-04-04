import React from 'react'
import Footer from '../Footer'
import moment from 'moment'
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminMessagesContainer, PostBackButton, AdminPostContainer, AdminMainContent, AdminListItems, AdminItem, AdminMessages } from './AdminPostPage.style'

export default function PostPage({ setPostPage, data }) {
  const [isToggle, setisParent] = useState(false);
  const [filter, setFilter] = React.useState('')
  const payments = React.useMemo(() => data.paymentRequests, [data])
  const apologies = React.useMemo(() => data.apologies, [data])
  const shownData = React.useMemo(() => filter === 'apologies' ? apologies : filter === 'payments' ? payments : [...apologies, ...payments], [filter, apologies, payments])

  return (
    <>
      <AdminPostContainer>
        <AdminMainContent>
          <FontsHeaderBold>post</FontsHeaderBold>
          <AdminListItems>
            <AdminItem><FontsBold>total:</FontsBold></AdminItem><FontsThin>{apologies.length + payments.length}</FontsThin>
            <AdminItem><FontsBold>apologies: </FontsBold></AdminItem><FontsThin>{apologies.length}</FontsThin>
            <AdminItem><FontsBold>payments: </FontsBold></AdminItem><FontsThin>{payments.length}</FontsThin>
            <label><FontsBold>only payments:</FontsBold></label>
            <input type="radio" id="payments" name="toggle_post" checked={filter === 'payments'} onChange={() => setFilter('payments')}></input>

            <label><FontsBold>only apologies:</FontsBold></label>
            <input type="radio" id="apologies" name="toggle_post" checked={filter === 'apologies'} onChange={() => setFilter('apologies')}></input>

            <label><FontsBold>all:</FontsBold></label>
            <input type="radio" id="all" name="toggle_post" checked={filter === ''} onChange={() => setFilter('')}></input>
          </AdminListItems>
          <AdminMessagesContainer>
            {shownData.map((data, index) => (
              data.amount ? (
              <AdminMessages key={data.id}>
                <div>
                  <span style={{ fontWeight: 'bold' }}>{`${data.firstName} ${data.lastName}`}</span>
                  <span> paid the lesson from </span>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>{moment(data.from).format('D. MMMM HH:mm')}</span>
                  <span> which was worth </span>
                  <span style={{ color: 'purple', fontWeight: 'bold' }}>{`${data.amount} Czk`}</span>
                </div>
                <FaCheckCircle />
              </AdminMessages>
              ) : (
              <AdminMessages key={data.id}>
                <div>
                  <span style={{ fontWeight: 'bold' }}>{`${data.studentFirstName} ${data.studentLastName}`}</span>
                  <span> apologizes from the lesson on </span>
                  <span style={{ color: 'red', fontWeight: 'bold' }}>{moment(data.lessonFrom).format('D. MMMM HH:mm')}</span>
                </div>
                <FaCheckCircle />
              </AdminMessages>
              )
            ))}
          </AdminMessagesContainer>
        </AdminMainContent>
        <PostBackButton onClick={() => setPostPage(false)}>back to dashboard</PostBackButton>
      </AdminPostContainer>
      <Footer />
    </>
  )
}


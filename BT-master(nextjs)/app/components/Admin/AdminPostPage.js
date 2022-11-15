import React from 'react'
import Footer from '../Footer'
import { useState } from 'react';
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminPostContainer, AdminMainContent, AdminListItems, AdminItem } from './AdminPostPage.style'

export default function PostPage({setPostPage, data}) {
  const [isToggle, setisParent] = useState(false);
  var countApologize = 0;
  var countPayments = 0;
  
  for (var i = 0; i < Object.keys(data.post).length; i++) {
    for (var key of Object.keys(data.post[i])) {
      console.log(key + " -> " + data.post[i][key])
      if (data.post[i][key] == "payment"){
        countPayments += 1;
      }
      else if (data.post[i][key] == "apology"){
        countApologize += 1;
      }
    }
  }
  
  return (
    <>
      <AdminPostContainer>
        <AdminMainContent>
          <FontsHeaderBold>post</FontsHeaderBold>     
          <AdminListItems>
            <AdminItem><FontsBold>total:</FontsBold></AdminItem><FontsThin>{data.post.length}</FontsThin>
            <AdminItem><FontsBold>apologize: </FontsBold></AdminItem><FontsThin>{countApologize}</FontsThin>
            <AdminItem><FontsBold>payments: </FontsBold></AdminItem><FontsThin>{countPayments}</FontsThin>
            {/* <label><FontsBold>only payments:</FontsBold></label>
            <input type="radio" name="payments"></input>
            <label><FontsBold>only apologies:</FontsBold></label>
            <input type="radio" name="apologies"></input> */}
            <label><FontsBold>only payments:</FontsBold></label>
            <input type="radio" id="payments" name="toggle_post" value={isToggle}></input>
            <label><FontsBold>only apologies:</FontsBold></label>
            <input type="radio" id="apologies" name="toggle_post" value={isToggle}></input>
            <label><FontsBold>all:</FontsBold></label>
            <input type="radio" id="all" name="toggle_post" value={isToggle}></input>
          </AdminListItems> 
        </AdminMainContent>
        <button onClick={() => setPostPage(false)}>back to dashboard</button>
      </AdminPostContainer>
      <Footer />
    </>
  )
}

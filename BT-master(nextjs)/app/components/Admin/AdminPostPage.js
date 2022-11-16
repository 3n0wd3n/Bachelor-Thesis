import React from 'react'
import Footer from '../Footer'
import { useState } from 'react';
import { FontsHeaderBold, FontsThin, FontsBold } from '../CommonStyles'
import { AdminPostContainer, AdminMainContent, AdminListItems, AdminItem } from './AdminPostPage.style'

export default function PostPage({setPostPage, data}) {
  const [isToggle, setisParent] = useState(false);

  class Data{
    countApologize = 0;
    countPayments = 0;
    dates = [];
    users = [];
    messages = [];

    // constructor(date){
    //   this.date = date;
    // }

    setCounts(){
      for (var i = 0; i < Object.keys(data.post).length; i++) {
        for (var key of Object.keys(data.post[i])) {
          // Counter of payments
          if (data.post[i][key] == "payment"){
            this.countPayments += 1;
          }
          // Counter of apologies
          else if (data.post[i][key] == "apology"){
            this.countApologize += 1;
          }
        }
      }
    }

    setDates(){
      for (var i = 0; i < Object.keys(data.post).length; i++) {
        for (var key of Object.keys(data.post[i])) {
          if (key == "date"){
            this.dates.push(data.post[i][key]);
          }
          if (key == "personId"){
            this.users.push(data.post[i][key]);
          }
        }
      }
    }
    setUsers(){
      for (var i = 0; i < Object.keys(data.post).length; i++) {
        for (var key of Object.keys(data.post[i])) {
          if (key == "personId"){
            this.users.push(data.post[i][key]);
          }
        }
      }
    }

    getDayName(date = new Date(), locale = 'en-US') {
      return date.toLocaleDateString(locale, {weekday: 'long'});
    }

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    setMessages(){
      let message = "";
      for (var i = 0; i < Object.keys(data.post).length; i++) {
        for (var key of Object.keys(data.post[i])) {
          if (key == "type"){
            message += `${data.post[i][key]} from user `;
          }
          if (key == "personId"){
            message += `${data.post[i][key]} to lecture on `;
          }
          if (key == "date"){
            message += `${new Date(data.post[i][key]).toDateString()}.`;
          }
        }
        this.messages.push(message);
        message = "";
      }
    }


    getDates(){ return this.dates; }
    getApologize(){ return this.countApologize; }
    getPayments(){ return this.countPayments; }
    getUsers(){ return this.users; }
    getMessages(){ return this.messages;}

  }

  let newData = new Data();
  newData.setCounts();
  newData.setDates();
  newData.setMessages();
  /*
  let arr = newData.getMessages();
  console.log(arr);
  let arrDates = newData.getDates();
  console.log(newData.getDayName(new Date(arrDates[0]))); 
  */

  
  return (
    <>
      <AdminPostContainer>
        <AdminMainContent>
          <FontsHeaderBold>post</FontsHeaderBold>     
          <AdminListItems>
            <AdminItem><FontsBold>total:</FontsBold></AdminItem><FontsThin>{data.post.length}</FontsThin>
            <AdminItem><FontsBold>apologize: </FontsBold></AdminItem><FontsThin>{newData.getApologize()}</FontsThin>
            <AdminItem><FontsBold>payments: </FontsBold></AdminItem><FontsThin>{newData.getPayments()}</FontsThin>
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
          {newData.getMessages().map((item) => {
            return <Item name={item}/>})}
        </AdminMainContent>
        <button onClick={() => setPostPage(false)}>back to dashboard</button>
      </AdminPostContainer>
      <Footer />
    </>
  )
}

const Item = ({name}) => {
  return <ul>{name}</ul>
}

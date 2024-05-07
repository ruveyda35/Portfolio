import { LightningElement, wire } from 'lwc';
import IntakeCreate from '@salesforce/apex/Create_lead.IntakeCreate'
import {ShowToastEvent } from 'lightning/platformShowToastEvent'
import sforce from '@salesforce/resourceUrl/sforce';
import {getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import 	Lead_OBJECT from "@salesforce/schema/Lead";
import SUBJECT_FIELD from "@salesforce/schema/Lead.Case_Subject__c";
import STATUS_FIELD from "@salesforce/schema/Lead.Status";
export const PROFILE_IMAGE = sforce
export default class IntekeCreate extends LightningElement {
    sforce = PROFILE_IMAGE;
    FirstName; 
    LastName;  
    Email;
    City;
    Subject1;
    Status1;
    leadRecordTypeId;
    Subject = '';
    Status = '';

    @wire(getObjectInfo, { objectApiName: Lead_OBJECT })
    results({ error, data }) {
      if (data) {
        this.leadRecordTypeId = data.defaultRecordTypeId;
        this.error = undefined;
      } else if (error) {
        this.error = error;
        this.leadRecordTypeId = undefined;
      }
    }

    @wire(getPicklistValues, {recordTypeId: "$leadRecordTypeId", fieldApiName: SUBJECT_FIELD })
  picklistResults({ error, data }) {
    if (data) {
      this.Subject1 = data.values;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.ratings = undefined;
      console.log('this.Subject1 '+ this.Subject1)
    }
    
  }

  @wire(getPicklistValues, {recordTypeId: "$leadRecordTypeId", fieldApiName: STATUS_FIELD })
  picklistResults1({ error, data }) {
    if (data) {
      this.Status1 = data.values;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.ratings = undefined;
    }
    console.log('this.Status1 '+ JSON.stringify(this.Status1))
    
  }

handlePicklist(event){

    this.Subject = event.detail.value;
}
handleStatus(event){

    this.Status = event.detail.value;
}



    handleFirstName(event){
        this.FirstName = event.target.value;
    }
    handleLastName(event){
        this.LastName = event.target.value;
    }
    handleMail(event){
        this.Email = event.target.value;
    }
    handleCty(event){
        this.City = event.target.value;
    }
    handleMail(event){
        this.Email = event.target.value;
    }
    handleMail(event){
        this.Email = event.target.value;
    }
handleClick(){
    IntakeCreate({ldFirstName: this.FirstName, ldLastName: this.LastName, 
        ldEmail:this.Email, ldCity: this.City, ldCaseSubject: this.Subject, ldStatus: this.Status })
        .then ( (response) => { 
          if(response == 'You have successfully registered' ){
       this.dispatchEvent( new ShowToastEvent({
         title: 'SUCCSESS',
         message: 'TYou have successfully registered',
         variant: 'success'
       }))
  
          }else if (response == 'Unfortunately, the registration could not be completed' ){
             this.dispatchEvent( new ShowToastEvent({
                 title: 'Warning!',
                 message: 'Unfortunately, the registration could not be completed',
                 variant: 'warning'
               })) 
               }} )
        
        //this.showSuccessMessage('Success!', 'You have successfully registered.');
  
      .catch(error => {
      }); 

  /*  .then ( (response) => { 
        if(response == 'You have successfully registered' ){
     this.dispatchEvent( new ShowToastEvent({
       title: 'SUCCSESS',
       message: 'TYou have successfully registered',
       variant: 'success'
     }))

        }else if (response == 'Unfortunately, the registration could not be completed' ){
           this.dispatchEvent( new ShowToastEvent({
               title: 'Warning!',
               message: 'Unfortunately, the registration could not be completed',
               variant: 'warning'
             })) 
             }} )*/

           
            }
}
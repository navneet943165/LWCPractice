import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class EnrollAllCourse extends NavigationMixin(LightningElement) {
    navigateToUdemy(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.udemy.com/courses/search/?src=ukw&q=debasis+jena'
            }
        });
    }
    navigateToaditAccount(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes: {
                objectApiName: 'Account',
                recordId: '0011m00000julSsAAI',
                actionName: 'edit',
            },
            state:{
                defaultFieldValues: 'AccountNumber=98765',
                nooverride: '1'
            }
        }); 
    };
    navigateToViewAccount(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes: {
                objectApiName: 'Account',
                recordId: '0011m00000julSsAAI',
                actionName: 'view'
            }
        });
    };
    navigateToNewAccount(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: 'AccountNumber=123456,Phone=123456789,Rating=Hot',
                nooverride:'12'
            }
        });
    };
    navigateToAccount(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    };
    navigateToRecentAccount(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    };
    allCourseDetailInfo=[
        {courseName:'Lightning Web Component',courseDuration:'30 Days',courseFee:'10,000', courseRating:'*****'},
        {courseName:'AUra Component',courseDuration:'25 Days',courseFee:'9,000', courseRating:'*****'},
        {courseName:'Apex development',courseDuration:'30 Days',courseFee:'7,000', courseRating:'*****'},
        {courseName:'Design pattern',courseDuration:'20 Days',courseFee:'15,000', courseRating:'*****'},
        {courseName:'Integration',courseDuration:'30 Days',courseFee:'12,000', courseRating:'*****'}
 
    ];
}
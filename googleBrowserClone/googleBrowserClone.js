import { LightningElement } from 'lwc';
import FontAwesomeToolKit from '@salesforce/resourceUrl/FontAwesomeToolKit';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import GoogleIcon from '@salesforce/resourceUrl/GoogleIcon';
export default class GoogleBrowserClone extends LightningElement {
    GoogleIconStat=GoogleIcon;
    drawDown=false;
    modalTrue=false;
    URLValue="";
    disableButton=true;
    modalNameValue;
    getUrlValue;
    micModalTrue=false;
    renderedCallback()
    {
        Promise.all([
            loadStyle(this, FontAwesomeToolKit + '/fontawesome-free-6.0.0-web/css/all.css')
        ])
        // console.log('GoogleIconStat::'+GoogleIcon);
    }
    appLauncher(event){
        console.log('clicked1');
        // this.drawDown= this.drawDown? false: true;
        this.drawDown = !this.drawDown;
        console.log('clicked1');
    }
    closeAddShortcut(){
        this.modalTrue=false;
    }
    onAddClick(){
        console.log('in true');
        this.modalTrue=true;
    }
    addShortcutButton(event){
        console.log('URL value is::'+this.URLValue);
        this.modalTrue=false;
    }
    getURLOnChange(event)
    {
        console.log(event.target.value);
        if(event.target.value)
        {
            this.disableButton=false;
            
        }
        else{
            this.disableButton=true;
        }
    }
    getLinkName(event){
        console.log('value is::'+event.target.value);
    }
    micModal(){
        this.micModalTrue=true;
    }
    closeMicModal(){
        this.micModalTrue=false;
    }
}
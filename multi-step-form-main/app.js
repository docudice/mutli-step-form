let Step1 = true
let Step2 = false
let Step3 = false
let Step4 = false
let Step5 = false

let Step1object = document.getElementById('activeStepOne')
let Step2object = document.getElementById("activeStepTwo")
let Step3object = document.getElementById("activeStepThree")
let Step4object = document.getElementById("activeStepFour")

let ActionZone = document.getElementById("ActionPage")

let typeOfContract
let selectMonth = true
let priceOfAbonnement

let OnlineTrue = false
let StorageTrue = false
let CustomTrue = false

ChangeStep()
ChargeStep()

function ChangeStep()
{

    if(Step1 == true){
        Step1object.innerHTML = '<div class="Selected">1</div>'
        Step2object.innerHTML = '<div>2</div>'
        Step3object.innerHTML = '<div>3</div>'
        Step4object.innerHTML = '<div>4</div>'
    }else if(Step2 == true){
        Step1object.innerHTML = '<div>1</div>'
        Step2object.innerHTML = '<div class="Selected">2</div>'
        Step3object.innerHTML = '<div>3</div>'
        Step4object.innerHTML = '<div>4</div>'

    }else if(Step3 == true){
        Step1object.innerHTML = '<div>1</div>'
        Step2object.innerHTML = '<div>2</div>'
        Step3object.innerHTML = '<div class="Selected">3</div>'
        Step4object.innerHTML = '<div>4</div>'
    }else if(Step4 == true){
        Step1object.innerHTML = '<div>1</div>'
        Step2object.innerHTML = '<div>2</div>'
        Step3object.innerHTML = '<div>3</div>'
        Step4object.innerHTML = '<div  class="Selected">4</div>'
    }else if(Step5 == true){
        Step1object.innerHTML = '<div>1</div>'
        Step2object.innerHTML = '<div>2</div>'
        Step3object.innerHTML = '<div>3</div>'
        Step4object.innerHTML = '<div  class="Selected">4</div>'
    }
   ChargeStep();
}
function ChangeSteper(value){

    if(value == 1){
        Step1 = true
        Step2 = false
        ChangeStep()
    }

    if (value == 2){
        let NameArea = document.getElementById("checkName")
        let emailArea = document.getElementById("checkMail")
        let PhoneNumber = document.getElementById("checkTel")


        if(NameArea.value != ""){

         if(emailArea.value != ""){

            if(PhoneNumber.value != ""){
                Step1 = false
                Step2 = true
                ChangeStep()
                changeUserInterface()
            }
            else{
                PhoneNumber.style.backgroundColor = 'hsl(0, 80%, 47%, 0.3)'
            }

         }else{
            emailArea.style.backgroundColor = 'hsl(0, 80%, 47%, 0.3)'
         }
        }else{
            NameArea.style.backgroundColor = 'hsl(0, 80%, 47%, 0.3)'
        }






    }else if(value == 3){

        let Arcade = document.getElementById("Arcade")
        let Advanced = document.getElementById("Advanced")
        let Pro = document.getElementById("pro")


         if(Arcade.checked){
         typeOfContract = "Arcade"
         priceOfAbonnement = 9
         }else if(Advanced.checked){
         typeOfContract = "Advanced"
         priceOfAbonnement = 12
         }else if(Pro.checked){
         typeOfContract = "pro"
         priceOfAbonnement = 15
         }

        Step2 = false
        Step3 = true
        ChangeStep()
        setPriceStep3()

    }else if(value == 4){
        Step3 = false
        Step4 = true
        ChangeStep()
        Recap()
    }else if(value == 5){
    Step3 = false
    Step4 = false
    Step5 = true
    ChangeStep()
    
}
}

function returnToTwo(){
    Step3 = false
    Step2 = true
    ChangeStep()
    changeUserInterface()
}


function returnToThree(){
    Step4 = false
    Step3 = true
    ChangeStep()
}


function ChangeTypeOfTime(){
     if(selectMonth == true){
        selectMonth = false
     }else{
        selectMonth = true
     }
     changeUserInterface()
}


function changeUserInterface(){
    let canvasToMove = document.getElementById("centerButtonChange")
    let monthlyText = document.getElementById("monthlyText")
    let yearlyText = document.getElementById("yearlyText")

    let arcadePrice = document.getElementById("arcadePrice")
    let advancedPrice = document.getElementById("advancedPrice")
    let proPrice = document.getElementById("proPrice")

    if(selectMonth == true){
       monthlyText.style.color = "black"
       yearlyText.style.color = "hsl(231, 11%, 63%)"
       canvasToMove.style.marginLeft  = "0px"
       arcadePrice.innerHTML = '<h2>$9/mo</h2>'
       advancedPrice.innerHTML = '<h2>$12/mo</h2>'
       proPrice.innerHTML = '<h2>$15/mo</h2>'
    }else{
        yearlyText.style.color = "black"
        monthlyText.style.color = "hsl(231, 11%, 63%)"
        canvasToMove.style.marginLeft  = "50px"
        arcadePrice.innerHTML = '<h2>$90/yr </h2><h3>2 months free</h3>'
        advancedPrice.innerHTML = '<h2>$120/yr </h2><h3>2 months free</h3>'
        proPrice.innerHTML = '<h2>$150/yr </h2><h3>2 months free</h3>'
        
    }
}

function setPriceStep3(){
   
    let priceOnlineService = document.getElementById("priceOnlineService")
    let priceLargerStorage = document.getElementById("priceLargerStorage")
    let priceCustomizableProfile = document.getElementById("priceCustomizableProfile")

   
    if(selectMonth == true){
        priceOnlineService.innerHTML = "+$1/mo"
        priceLargerStorage.innerHTML = "+$2/mo"
        priceCustomizableProfile.innerHTML = "+$2/mo"
    }else{
        priceOnlineService.innerHTML = "+$10/yr"
        priceLargerStorage.innerHTML = "+$20/yr"
        priceCustomizableProfile.innerHTML = "+$20/yr"
    }
}


function AddOneMark(value){
let checkBoxOnlineService = document.getElementById("checkBoxOnlineService")
let checkBoxLargeStorage = document.getElementById("checkBoxLargeStorage")
let checkBoxCustomizableProfile = document.getElementById("checkBoxCustomizableProfile")









if(value == 1){
    if(document.getElementById("onlineService").checked == false){
    checkBoxOnlineService.style.backgroundColor = 'hsl(243, 100%, 62%)'
    checkBoxOnlineService.innerHTML = '<img src="assets/images/icon-checkmark.svg" alt="">'
    OnlineTrue = true
}else{
    checkBoxOnlineService.style.backgroundColor = 'white'
    checkBoxOnlineService.innerHTML = '<div></div>'
    OnlineTrue = false
}}


if(value == 2){
    if(document.getElementById("largerStorage").checked == false){
        checkBoxLargeStorage.style.backgroundColor = 'hsl(243, 100%, 62%)'
    checkBoxLargeStorage.innerHTML = '<img src="assets/images/icon-checkmark.svg" alt="">'
    StorageTrue = true
}else{
    checkBoxLargeStorage.style.backgroundColor = 'white'
    checkBoxLargeStorage.innerHTML = '<div></div>'
    StorageTrue = false
}}

if(value == 3){
    if(document.getElementById("customizableProfile").checked == false){
        checkBoxCustomizableProfile.style.backgroundColor = 'hsl(243, 100%, 62%)'
        checkBoxCustomizableProfile.innerHTML = '<img src="assets/images/icon-checkmark.svg" alt="">'
        CustomTrue = true
}else{
    checkBoxCustomizableProfile.style.backgroundColor = 'white'
    checkBoxCustomizableProfile.innerHTML = '<div></div>'
    CustomTrue = false
}}
}

function Recap(){
let recapitulatif = document.getElementById("recapitulatif")
let monthOrYear
let priceOfAbonnementTotal


let calcOnline
let calcStockage
let calcCustom
let textTotal



    if(selectMonth == true){
        calcOnline = "1/mo"
        calcStockage = "2/mo"
        calcCustom = "2/mo"
    }else{
        calcOnline = "10/yr"
        calcStockage = "20/yr"
        calcCustom = "20/yr"
    }
    
let allCalc
let totalpricetext
if(selectMonth == true){
    allCalc = priceOfAbonnement 
    if(OnlineTrue == true){
        allCalc += 1
    }

    if(StorageTrue == true){
        allCalc += 2
    }

    if(CustomTrue == true){
        allCalc += 2
    }

    totalpricetext = allCalc.toString() + "/mo"
}else{
    allCalc = priceOfAbonnement * 10 

    if(OnlineTrue == true){
        allCalc += 10
    }

    if(StorageTrue == true){
        allCalc += 20
    }

    if(CustomTrue == true){
        allCalc += 20
    }
    totalpricetext = allCalc.toString() + "/yr"
}


let storageText = '<div class="addonTaked"><h2>Larger storage</h2><h1>$'+ calcStockage +'</h1></div>'
let onlineText =  '<div class="addonTaked"><h2>Online service</h2><h1>$'+ calcOnline +'</h1></div>'
let customText = '<div class="addonTaked"><h2>Customizable profile</h2><h1>$'+ calcCustom +'</h1></div>'


if(OnlineTrue == true){
     
    onlineText =  '<div class="addonTaked"><h2>Online service</h2><h1>$'+ calcOnline +'</h1></div>'
}else{
    onlineText=""
}

if(StorageTrue == true){
    storageText = '<div class="addonTaked"><h2>Larger storage</h2><h1>$'+ calcStockage +'</h1></div>'
    
}else{
    storageText=""
}

if(CustomTrue == true){
    customText = '<div class="addonTaked"><h2>Customizable profile</h2><h1>$'+ calcCustom +'</h1></div>'
}else{
    customText=""
}

if(selectMonth == true){
    monthOrYear = "(Monthly)"
    priceOfAbonnementTotal = priceOfAbonnement.toString() + "/mo"
    textTotal = "Per month"
}else{
    monthOrYear = "(Yearly)"
    priceOfAbonnement = priceOfAbonnement * 10
    priceOfAbonnementTotal = priceOfAbonnement.toString() + "/yr"
    textTotal = "Per year"
}

recapitulatif.innerHTML = '<div id="information"><div id="mainOffre"><div><h1>' + typeOfContract + ''+ monthOrYear +'</h1></div><div id="change" onclick="returnToTwo()">Change</div></div><h2 id="priceAbonnement">$'+priceOfAbonnementTotal+'</h2></div>'+ onlineText + storageText + customText + '   <div id="total"><h1>Total('+ textTotal +')</h1> <div id="totalAfficher">+$'+totalpricetext+'</div></div>'
}



function ChargeStep(){
    if(Step1 == true){
        ActionZone.innerHTML = '<h1 class="TitleZone">Personal info</h1> <h2 class="SubTitle">Please provide your name, email address, and phone number.</h2><div class="Name"><h3>Name</h3><input type="text" id="checkName"></div><div class="EmailAddress"><h3>Email Adress</h3><input type="text" id="checkMail"></div><div class="PhoneNumber"><h3>Phone Number</h3><input value ="" type="tel" pattern="[0-9]{9}" placeholder=" e.g + 1 234 567 890" id="checkTel"><div class="Nextstep" onclick="ChangeSteper(2)">Next Step</div></div>'
    }else if(Step2 == true){
        ActionZone.innerHTML = '<h1 class="TitleZone">Select your plan</h1> <h2 class="SubTitle">You have the option of monthly or yearly billing.</h2><form name="planSelection" id="PlanUserInteface"><input type="radio" id="Arcade" name="planSelection" value="Arcade" checked><label for="Arcade"><div class="planSelectionInterface"><img src="assets/images/icon-arcade.svg" alt=""><div><h1>Arcade</h1><div id="arcadePrice">$9/mo</div></div></div></label><div>&ensp;&ensp;</div><input type="radio" id="Advanced" name="planSelection" value="Advanced"><label for="Advanced"><div class="planSelectionInterface"><img src="assets/images/icon-advanced.svg" alt=""><div><h1>Advanced</h1><div id="advancedPrice">$12/mo</div></div></div></label><div>&ensp;&ensp;&ensp;</div><input type="radio" id="pro" name="planSelection" value="pro"><label for="pro"><div class="planSelectionInterface"><img src="assets/images/icon-pro.svg" alt=""><div><h1>Pro</h1><div id="proPrice">$15/mo</div></div></div></label></form><div id="buttonChangeMonthToYear"><h2 id="monthlyText">Monthly</h2><div id="canvasButtonChange" onclick="ChangeTypeOfTime()"><div id="centerButtonChange"></div></div><h2 id="yearlyText">Yearly</h2></div><div id="subBarreStep2"><div class="goBack" onclick="ChangeSteper(1)">Go back</div><div class="Nextstep" onclick="ChangeSteper(3)">Next Step</div></div>'
    }else if(Step3 == true){
        ActionZone.innerHTML = '<h1 class="TitleZone">Pick add-ons</h1> <h2 class="SubTitle">add-ons help enhance your gaming experience.</h2><form id="AddonsPick"><div><input type="checkbox" id="onlineService" name="onlineService" value="onlineService"><label for="onlineService" onclick="AddOneMark(1)"><div id="checkBoxOnlineService"></div><div class="textAddons"><h1>Online service</h1><h2>Access to multiplayer games</h2></div><h3 id="priceOnlineService">+$1/mo</h3></label></div><div><input type="checkbox" id="largerStorage" name="largerStorage" value="largerStorage"><label for="largerStorage" onclick="AddOneMark(2)"><div id="checkBoxLargeStorage"></div><div class="textAddons"><h1>Larger storage</h1><h2>Extrat 1TB on your profile</h2></div><h3 id="priceLargerStorage">+$2/mo</h3></label></div><div><input type="checkbox" id="customizableProfile" name="customizableProfile" value="customizableProfile"><label for="customizableProfile" onclick="AddOneMark(3)"><div id="checkBoxCustomizableProfile"></div><div class="textAddons"><h1>Customizable profiles</h1><h2>Custom theme on your profile</h2></div><h3 id="priceCustomizableProfile">+$2/mo</h3></label></div></form><div id="subBarreStep2"><div class="goBack" onclick="returnToTwo()">Go back</div><div class="Nextstep" onclick="ChangeSteper(4)">Next Step</div></div>'
    }else if(Step4 == true){
        ActionZone.innerHTML = '<h1 class="TitleZone">Finishing up</h1> <h2 class="SubTitle">Double-check everything looks OK before confirming.</h2><div id="recapitulatif"></div><div id="subBarreStep2"><div class="goBack" onclick="returnToThree()">Go back</div><div class="Nextstep" onclick="ChangeSteper(5)">Next Step</div></div>'
    }else if(Step5 == true){
        ActionZone.innerHTML = '<div id="finalPage"><img src="assets/images/icon-thank-you.svg"><h1>Thank you!</h1><h2>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</h2></div>'
    }
}
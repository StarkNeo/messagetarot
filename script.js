const messages=[
    'embark on your journey with trust and a light heart for the world opens up before you.',
    'you are the master of your destiny and hold all the keys to success.',
    'you are the seer who stands between worlds and makes manifest the unmanifest.',
    'you are loved and content full in power to give and receive love.',
    'you are a responsible leader who always knows the right action to take.',
    'you are wisdom in all its forms heed me and prosper.',
    'I will take you to the place of choice where decisions must be made for good or ill.',
    'you are the charioteer who will guide you to your goal.',
    "struggles may be ahead but you have the courage and confidence to overcome any danger or challenge.",
    "you need to retreat from a situation,and work out what is important to you.",
    "an unexpected solution to a problem may present itself."


];

let errorbox=document.getElementById('error');
const getAmessage=()=>{

    let name=document.getElementById('name');
    let birth=document.getElementById('birth');
    let message=document.getElementById('message');
    let index=Math.floor(Math.random()*8)
    let advice=messages[index];
    let label=document.querySelector("label[for=Message]");
    label.style.display='flex';
    message.style.display='flex';
    //destructuring date of birthday for range age validation
    let dateBirth= new Date(birth.value);
    let birthYear=dateBirth.getFullYear();
    let birthMonth=dateBirth.getMonth();
    let birthDay=dateBirth.getDay(); 

    //destructuring actual date for range age validation
    let dateToday=new Date();
    let todayYear=dateToday.getFullYear();
    let todayMonth=dateToday.getMonth();
    let todayDay=dateToday.getDay();


    if(!name.value || !birth.value) message.innerHTML="We don't have a message for you since there is no name or a birthday provided,dont let this opportunity go away, there is an advice waiting for you ";
    //condition for age's validation
    else if((todayYear-birthYear)>=18 && (birthMonth-todayMonth)>=0 && (birthDay-todayDay)>=0){
        message.innerHTML=`${name.value} ${advice}`;
    }
    else{
        message.innerHTML=' ';
        alert("You must be 18 years old to play");
        name.value=' ';
        birth.value=' ';
    }
    
    
    
}

let button=document.getElementById('submit');
button.addEventListener('click',()=>{
    getAmessage();
    
});
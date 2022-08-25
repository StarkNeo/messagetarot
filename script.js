const messages = [
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



const fieldsValidation = () => {
    let name = document.getElementById('name').value;
    let birth = document.getElementById('birth').value;
    if (!name || !birth) {
        alert("We don't have a message for you since there is no name or a birthday provided,dont let this opportunity go away, there is an advice waiting for you ");
        return false;
    }
    return true;

}

const dateValidation = (fields) => {
    let name = document.getElementById('name');
    //destructuring date of birthday for range age validation
    let birth = document.getElementById('birth');
    let birthYear = Number(birth.value.slice(0, 4));
    let birthMonth = Number(birth.value.slice(5, 7));
    let birthDay = Number(birth.value.slice(8, 10));

    //destructuring actual date for range age validation
    let dateToday = new Date();

    let todayYear = dateToday.getFullYear();
    let todayMonth = dateToday.getMonth() + 1;
    let todayDay = dateToday.getDate();

    
    if (fields === true) {
        if ((todayYear - birthYear) >= 18 && (todayMonth - birthMonth) >= 0 && (todayDay - birthDay) >= 0) {
            return true;
        }
        else {
            alert("You must be 18 years old to play");
            birth.value = '';
            name.value = '';

            return false;

        }
    }




}

const reset = () => {
    let btnreset=document.getElementById('reset');
    btnreset.style.display='none';
    let btnsubmit=document.getElementById('submit');
    btnsubmit.style.display='flex';
    let birth = document.getElementById('birth');
    let name = document.getElementById('name');
    let message = document.getElementById('message');
    let label = document.querySelector("label[for=Message]");
    birth.value = '';
    name.value = '';
    message.innerHTML='';
    message.style.display='none';
    label.style.display='none';
    
}


const getAmessage = (bol) => {
    
    if (bol === true) {
        let btnsubmit=document.getElementById('submit');
        let name = document.getElementById('name');
        let message = document.getElementById('message');
        let index = Math.floor(Math.random() * 8)
        let advice = messages[index];
        let label = document.querySelector("label[for=Message]");
        label.style.display = 'flex';
        message.style.display = 'flex';
        message.innerHTML = `${name.value} ${advice}`;
        let btnreset=document.getElementById('reset');
        btnreset.style.display='flex';
        btnsubmit.style.display='none';    
    }   


}


document.addEventListener('click',e=>{
    let target=e.target;

    if(target.id==='submit') getAmessage(dateValidation(fieldsValidation()));
    
    else if(target.id==='reset') reset();
})
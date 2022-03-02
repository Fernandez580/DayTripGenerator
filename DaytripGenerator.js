let daysOfTheWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
function randomGenerator(myArray){
    let randomChoice= myArray[Math.floor()* myArray.length]
    return randomChoice
}
function dayGenerator(){
    let userIsHappy= false
    while(userIshappy===false){
        let randomActivity=randomGenerator(daysOfTheWeek)
        let userResponse=prompt('your randomly selected day is $(randomChoice). Is this okay?')
        if(userResponse.toLowerCase()==='yes'){
            alert('Go out and enjoy!!')
            userIsHappy=true
        }else if (userResponse.toLowerCase()==='no')
        userIsHappy=false
        }
}dayGenerator

let Activity=["Movies","Hiking","Dancing","Gym","Clubing"];
function randomGenerator(myArray){
    let randomChoice= myArray[Math.floor()* myArray.length]
    return randomChoice
}
function activityGenerator(){
    let userIsHappy= false
    while(userIshappy===false){
        let randomActivity=randomGenerator(Activity)
        let userResponse=prompt('your random activity is $(randomChoice). Is this okay?')
        if(userResponse.toLowerCase()==='yes'){
            alert('Go out and enjoy!!')
            userIsHappy=true
        }else if (userResponse.toLowerCase()==='no')
        userIsHappy=false
        }
}activityGenerator

let randomResturants=["Olive Garden","Cavalos","Chillie's","Kingsubs","Two Boots"];
function randomGenerator(myArray){
    let randomChoice=myArray[Math.floor()* myArray.length]
    return randomChoice
}
function ResturantGenerator(){
    let userIsHappy=false
    while(userIsHappy===false){
        let randomResturants=randomGenerator(randomResturants)
        let userResponse=prompt('Your randomly selected resturant is $(randomChoice). Is this okay?')
        if(userResponse.toLocaleLowerCase()=== 'yes'){
            alert('Go out and enjoy!!!')
            userIsHappy=true
        }else if (userResponse.toLocaleLowerCase()==='no')
        userIsHappy=false
    }
}ResturantGenerator

let Transportation=["Pov","AmTrak","Flight","Rental","Cruise"];
function randomGenerator(myArray){
    let randomChoice= myArray[Math.floor()* myArray.length]
    return randomChoice
}
function transportationGenerator(){
    let userIsHappy= false
    while(userIshappy===false){
        let randomTransportation=randomGenerator(Transportation)
        let userResponse=prompt('your randomly selected mode of transportation is $(randomChoice). Is this okay?')
        if(userResponse.toLowerCase()==='yes'){
            alert('Go out and enjoy!!')
            userIsHappy=true
        }else if (userResponse.toLowerCase()==='no')
        userIsHappy=false
        }
}transportationGenerator

let Destination=["Italy","Dubia","Amsterdam","Greece","Dominican Republic"];
function randomGenerator(myArray){
    let randomChoice= myArray[Math.floor()* myArray.length]
    return randomChoice
}
function DestinationGenerator(){
    let userIsHappy= false
    while(userIshappy===false){
        let randomActivity=randomGenerator(Destination)
        let userResponse=prompt('your random destination is $(randomChoice). Is this okay?')
        if(userResponse.toLowerCase()==='yes'){
            alert('Go out and enjoy!!')
            userIsHappy=true
        }else if (userResponse.toLowerCase()==='no')
        userIsHappy=false
        }
}DestinationGenerator

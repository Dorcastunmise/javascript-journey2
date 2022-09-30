var weather = function(temperature){
    console.log("Someone homeless in cold-faced nations is freezing 'cos", temperature," right now is damn wild!")

if(temperature <32) {
    console.log("he's going to develop hypothermia!");
}
 else if(temperature <28){
     console.log("at this stage...maybe ambulances should be on roads just incase");
 }
 else{
     console.log("....")
 }
}

weather(32);
weather(25);
weather(42);
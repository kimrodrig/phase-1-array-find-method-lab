function isWin(element){
    if (element.result == "W"){
        return element.year
    }
}

function superbowlWin(array){
    const finder = array.find(isWin);
    if (finder !== undefined){
        return finder["year"]
    }
    else{
        return finder
    }
}
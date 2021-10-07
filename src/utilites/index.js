const getFixTime = (time)=>{
    if(time<10){
        time='0'+time
        return time
    }
    else{
        return time
    }
    
}

const getFixMonth = (num,t) => {
    let month=''
    switch (num){
        case 0:
            month=t('month.part1')  
            return month
        case 1:
            month=t('month.part2')    
            return month
        case 2:
            month=t('month.part3')    
            return month
        case 3:
            month=t('month.part4')    
            return month                                                       
        case 4:
            month=t('month.part5')    
            return month
        case 5:
            month=t('month.part6')    
            return month
        case 6:
            month=t('month.part7')    
            return month
        case 7:
            month=t('month.part8')    
            return month                                                       
        case 8:
            month=t('month.part9')    
            return month
        case 9:
            month=t('month.part10')    
            return month
        case 10:
            month=t('month.part11')    
            return month
        case 11:
            month=t('month.part12')    
            return month                                                       
        default :
        break
    }
    return month
}


export {
    getFixTime,
    getFixMonth
}
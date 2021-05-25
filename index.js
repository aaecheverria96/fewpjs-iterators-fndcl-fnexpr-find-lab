const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
] 

function superbowlWin(record) { 
    // record.find(record[year] => result === "W")
    const winningRecord = record.find((object) => object.result === "W")  
    
    if (winningRecord === undefined) {  
        return undefined 
    } else { 
        return winningRecord.year
    }
} 
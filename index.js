function superbowlWin(record) {
    if (record.find((game) => game.result === "W")) {
        record.find((game) => console.log(game.result === "W")); 
        let superbowl = record.find((game) => game.result === "W");
        
        return superbowl.year;
    } else {
        return undefined;
    }
}
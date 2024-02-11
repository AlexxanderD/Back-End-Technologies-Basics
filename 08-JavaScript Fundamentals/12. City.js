function solve(inputObject) {
    let entries = Object.entries(inputObject);
    entries.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
solve({

    name: "Sofia",
    
    area: 492,
    
    population: 1238438,
    
    country: "Bulgaria",
    
    postCode: "1000"
    
    });
solve({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    postCode: "4000" });

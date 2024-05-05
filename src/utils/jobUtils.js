export function getEstimatedSalary(maxSalary, minSalary, currencyCode) {
    let salary = ""
    if(maxSalary && minSalary) {
        salary = `${minSalary*1000} - ${maxSalary*1000} ${currencyCode}`;
    }
    else if(maxSalary) {
        salary = `Up to ${maxSalary*1000} ${currencyCode}`;
    }
    else if(minSalary) {
        salary = `${minSalary*1000} ${currencyCode}`;
    }
    console.log(salary);
    return salary;
}
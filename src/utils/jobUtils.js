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
    return salary;
}

export function getExperienceString(minExp, maxExp) {
    let experience = "";
    if(minExp && maxExp) {
        experience = `${minExp} - ${maxExp} years`;
    }
    else if(minExp) {
        experience = `${minExp} years`;
    }
    else if(maxExp) {
        experience = `Up to ${maxExp} years`;
    }
    
    return experience;
}
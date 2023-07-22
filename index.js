const employee = {
    name: "Bob",
    streetAddress: "123 Main St.",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee.streetAddress};
    return updatedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
};
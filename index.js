//creating employee record function that has a single employee's details in an array
function createEmployeeRecord(employeeArray) {
    //creating employee array
    const employee = {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  
    return employee;
}


//creating employees record that has an array of individual employee
function createEmployeeRecords(employeesArray) {
    // Converts each nested array into an employee record using createEmployeeRecord
   
      const employeeRecord = employeesArray.map(rec => createEmployeeRecord(rec));

    return employeeRecord;
}


//creating time in Event function
function createTimeInEvent(dateStamp){
    //splitting the date into arrays
    let [date, hour] = dateStamp.split(" ");

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

//creating time out function
function createTimeOutEvent(dateStamp){
    //splitting the date into arrays
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    })
    return this
}


function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(event => event.date === date);
    let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
      let totalTimeWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
      return parseInt(totalTimeWorked, 10);
}


//Function to calculate the wages earned based on the hrs worked and rate of pay per hour
function wagesEarnedOnDate(date) {
    return parseInt(hoursWorkedOnDate.apply(this, [date]) * this.payPerHour.toString());
}

//function to find employees by first name
function findEmployeeByFirstName(sourceArray, firstName) {
    return sourceArray.find(findFirst=>findFirst.firstName === firstName)
}

//calculating the payroll
function calculatePayroll (employeeRecord) {
    let records = employeeRecord.reduce((allInfo, datesRecords)=>{
        return allInfo + allWagesFor.apply(datesRecords);
    }, 0)
    return parseInt(records);
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



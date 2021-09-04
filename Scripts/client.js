console.log( 'js' );
$( document ).ready( readyNow );
const budget = 20000;
let employees = [];


function addEmployee (){
    console.log( 'in addEmployee:');
    let newEmployees = {
        fName: $( '#firstNameIn' ).val(),
        lName: $( '#lastNameIn' ).val(),
        idNum: $( '#idNumberIn' ).val(),
        job: $( '#jobTitleIn' ).val(),
        salary: $( '#annualSalaryIn' ).val(),
    };
    // push newEmployees into employees
    employees.push( newEmployees );
    // empty inputs 
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#idNumberIn' ).val( '' );
    $( '#jobTitleIn' ).val( '' );
    $( '#annualSalaryIn' ).val( '' );
    // calculate remaining budget
    calculateRemainingBudget();
    displayEmployees();
}; // end addEmployee
function calculateRemainingBudget(){
    console.log( 'in calculateRemainingBudget:' );
    //loop through purchases
    let totalPrice = 0;
    for( let i = 0; i<employees.length; i++ ){
        totalPrice += Number( employees[i].salary );
    } // end for 
    console.log( 'totalPrice:', totalPrice );
        const remainingBudget = budget - totalPrice;
        let el = $( '#remainingBudgetOut' );
        el.empty();
        el.append( remainingBudget );
    // for each employee, add up all the salaries
    // subtract totalPrice from budget for remainingBudget
    // display remaining budget
    // 
}; //end calculateRemainingBudget
function displayEmployees(){
console.log( 'in displayEmployees: ' );
let el = $( '#employeesOut' );
el.empty();
    for( employee of employees ){
        el.append( '<li>' + employees.fName + ' : $EMPLOYEESALARY </li>' ); 
    }// end for 
} // end displayEmployees
function readyNow(){
    let el = $( '#budgetOut');
    el.empty();
    el.append( budget );
    $( '#submitButton' ).on( 'click', addEmployee );
    calculateRemainingBudget();
}; // readyNow

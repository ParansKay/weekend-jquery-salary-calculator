console.log( 'js' );
$( document ).ready( readyNow );
const budget = 20000;
let employees = [];


function addEmployee(){
    console.log( 'in addEmployee:');
    let newEmployees = {
        fName: $( '#firstNameIn' ).val(),
        lName: $( '#lastNameIn' ).val(),
        idNum: Number($( '#idNumberIn' ).val()),
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
    calculateRemainingTotalCost();
    displayEmployees();
    console.log(newEmployees);
}; // end addEmployee


function byeEmployee(){
    console.log( 'in byeEmployee' );
    $( this ).parent().parent().remove();
    //find the employee we want to delete
    let employeeToDelete = Number($( this ).parent().parent().find( '.theIDNum' ).text());
    console.log( 'employee to delete:', employeeToDelete );
    // create an array where removed employees are stored
    let holdTheseEmployees = [];
    for( let i = 0; i<employees.length; i++ ){
        if( employeeToDelete === employees[i].idNum ){
        console.log( 'deleting this employee:', employeeToDelete );
        } // end if 
        else{
        holdTheseEmployees.push( employees[i] );    
        }
    } // end for loop
    employees = holdTheseEmployees;
    calculateRemainingTotalCost(employees);
    
    // remove them from the employees array
    // console log the array
};// end byeEmployee

function calculateRemainingTotalCost(){
    console.log( 'in calculateTotalCost:' );
    //loop through purchases
    let totalCost = 0;
    for( let i = 0; i<employees.length; i++ ){
        totalCost += Number( employees[i].salary );
    } // end for 
    console.log( 'totalCost:', totalCost );
        const remainingBudget = budget - totalCost;
        let el = $( '#remainingTotalCostOut' );
        el.empty();
        el.append( remainingBudget );
        if( totalCost > budget ){
            $( '#remainingTotalCostOut' ).css( 'background-color' , 'red' );
            $( '#remainingTotalCostOut' ).css( 'color' , 'white' );
         } // end if
         else{
            $( '#remainingTotalCostOut' ).css( 'background-color' , 'linen' );
            $( '#remainingTotalCostOut' ).css( 'color' , '#161B33' );
         };
    // for each employee, add up all the salaries
    // subtract totalPrice from budget for remainingBudget
    // display remaining budget
    // 
}; //end calculateRemainingBudget

function displayEmployees(){
console.log( 'in displayEmployees: ' );
let el = $( '#employeesOut' );
el.empty();
    for( newEmployees of employees ){
        el.append(
            `<tr>
            <td>${newEmployees.fName}</td>
            <td>${newEmployees.lName}</td>
            <td class="theIDNum">${newEmployees.idNum}</td>
            <td>${newEmployees.job}</td>
            <td>${newEmployees.salary}</td>
            <td><button id="deleteEmployee">DELETE</button></td>
            </tr>`)
    }// end for 
} // end displayEmployees

function readyNow(){
    let el = $( '#budgetOut');
    el.empty();
    el.append( budget );
    $( '#submitButton' ).on( 'click', addEmployee );
    $( '#employeesOut' ).on( 'click', `#deleteEmployee`, byeEmployee); 
    calculateRemainingTotalCost();

}; // readyNow

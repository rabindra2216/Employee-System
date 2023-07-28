let employees=[
    {name:'Anna',email:'Anna45@email.com',age:27,dept:'Technology',gradCourse:'B.Tech',gradYear:2015,gradPerf:'Good',postgrad:false,workBefore:true,workEx:'0-1 year'},
    {name:'John',email:'john@email.com',age:24,dept:'Technology',gradCourse:'B.Tech',gradYear:2015,gradPerf:'Good',postgrad:false,workBefore:false,workEx:'None'},
    {name:'Edwards',email:'edwards@email.com',age:29,dept:'Accounts',gradCourse:'B.Com',gradYear:2015,gradPerf:'Excellent',postgrad:true,workBefore:true,workEx:'3+ years'},
    {name:'Julia',email:'julia@email.com',age:28,dept:'HR',gradCourse:'B.Tech',gradYear:2015,gradPerf:'Excellent',postgrad:true,workBefore:true,workEx:'1-3 years'}
]
let expenses=[
{name:'John',category:'Local Travel',billId:'NP7561',amount:64,payment:'Self',approved:true},
{name:'Anna',category:'Communication',billId:'BN8561',amount:39,payment:'Self',approved:false},
{name:'Edwards',category:'Local Travel',billId:'AT5461',amount:58,payment:'Corporate Card',approved:true},
{name:'Julia',category:'Local Travel',billId:'RR5492',amount:71,payment:'Self',approved:true},
{name:'Julia',category:'Out of City Travel',billId:'KT8785',amount:277,payment:'Bill to Company',approved:true},
{name:'Edwards',category:'Others',billId:'UR0400',amount:25,payment:'Corporate Card',approved:false},
{name:'Edwards',category:'Out of City Travel',billId:'CC6586',amount:305,payment:'Corporate Card',approved:false},
{name:'Julia',category:'Communication',billId:'DL3425',amount:43,payment:'Self',approved:false},
{name:'Julia',category:'Out of City Travel',billId:'MW65775',amount:248,payment:'Bill to Company',approved:true},
{name:'Edwards',category:'Others',billId:'JR56732',amount:52,payment:'Corporate Card',approved:true},
{name:'Julia',category:'Out of City Travel',billId:'BK0074',amount:405,payment:'Bill to Company',approved:false},
{name:'Edwards',category:'Communication',billId:'JR56732',amount:72,payment:'Corporate Card',approved:true}
]
let depts=['HR','Accounts','Operations','Technology'];
let Categorys=['Local Travel','Communication','Out of City Travel','Others'];
let Names=['Anna','John','Edwards','Julia'];
let types=['Bill to Company','Corporate Card','Self']
let gradYears=[];
for(let i=2000;i<=2020;i++){
   gradYears.push(i);
}

let grades=[
   {grade:'A',value:'Excellent'},
   {grade:'B',value:'Good'},
   {grade:'C',value:'Average'},
   {grade:'D',value:'Poor'}
]
let workExp=[
   {grade:'None',value:'None'},
   {grade:'0-1 year',value:'0-1 year'},
   {grade:'1-3 years',value:'1-3 years'},
   {grade:'3+ years',value:'3+ years'}
]
let editIndex=-1;
let myProduct={};
let errors={};
let newArr=[];
let err2={};
let errMsg='';
show();
function show(active=0){
let str = makeNavbar(active);
active === 1 ? str+=showEmployeeTable():str+='';
active=== 2 ? str+=showForm(): str+='';
active=== 3 ? str+=showDept(): str+='';
active=== 4 ? str+=showDeptForm(): str+='';
active=== 5 ? str+=showNewPattern(): str+='';
active=== 6 ? str+=showExpensesTable(expenses,''): str+='';
active=== 7 ? str+=showExpensesForm(): str+='';
active=== 8 ? str+=showExpensesTable(newArr,'yes'): str+='';
//console.log(str);
document.getElementById('show').innerHTML = str;
}
function showEmployee(){
   editIndex=-1;
   myProduct={};
   show(1);

}
function addEmployee(){
   show(2);
}
function showDepartment(){
   show(3);
}
function addDepartment(){
   show(4);
}
function changeView(){
   show(5);
}
function originalView(){
   show(1);
}
function showExpenses(){
   show(6);
}
function addExpenses()
{ 
   show(7)
}
function expensesInd(){
   show(8);
}
function makeNavbar (active=0) {
//console.log(active);
let str ='<nav class="navbar navbar-expand-lg navbar-light bg-light">';
str+= '<a class="navbar-brand" href="#">Employee System</a>'; 
str+= '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">';
str+= '<span class="navbar-toggler-icon"></span>';
str+= '</button>';
str+= '<div class="collapse navbar-collapse" id="navbarNavDropdown">';
str+= '<ul class="navbar-nav">';
let active1 = active===1 ? 'active' : '';
let active2 = active===2 ? 'active': '';
let active3 = active===3 ? 'active': '';
let active4 = active===4 ? 'active': '';
let active5 = active===6 ? 'active': '';
let active6 = active===7 ? 'active': '';
str+= '<li class="nav-item '+active1+' ">';
str+= '<a class="nav-link" onclick="showEmployee()">Show Employees</a>';
str+= '</li>';
str+= '<li class="nav-item '+active2+'">';
str+= '<a class="nav-link" onclick="addEmployee()">Add a Employee</a>';
str+= '</li>';
str+= '<li class="nav-item '+active3+'">';
str+= '<a class="nav-link" onclick="showDepartment()">Departments</a>';
str+= '</li>';
str+= '<li class="nav-item '+active4+'">';
str+= '<a class="nav-link" onclick="addDepartment()">Add Dept</a>';
str+= '</li>';
str+= '<li class="nav-item '+active5+'">';
str+= '<a class="nav-link" onclick="showExpenses()">Expenses</a>';
str+= '</li>';
str+= '<li class="nav-item '+active6+'">';
str+= '<a class="nav-link" onclick="addExpenses()">Add Expenses</a>';
str+= '</li>';
str+= '</ul>';
str+= '</div>';
str+= '</nav>';
return str;
}
function submitDept(){
let dep = document.getElementById('dept').value;
if(dep==''){
   errMsg='Please enter the department'
   addDepartment();
}
else{
depts.push(dep);
showDepartment();
}
errMsg='';

}
function showDeptForm(){
let str = makeTextField('dept', 'Name of the department', 'Enter the Dept','',errMsg); 
str+= '<button class="btn btn-primary" onclick="submitDept()">Submit</button>';
return str;
}
function showForm(){
let {name='',email='',age='',dept='',gradCourse='',gradYear='',gradPerf='',postgrad='',workBefore='',workEx=''}=myProduct
let title=editIndex>=0?'Edit Persons details':'Add New Person';
let str='<h3 class="text-center">'+title+'</h3>'
str += makeTextField('name', 'Name', 'Enter the name',name,errors.name);
str+= makeTextField('email', 'Email', 'Enter the Email',email,errors.email); 
str+= makeTextField('age', 'Age', 'Enter Age',age,errors.age);
str+=makeDropdown('dept',depts,'Select the Department',dept,errors.dept);
str+=makeTextField('gd','Graduation Degree','What degree did you get in',gradCourse)
str+=makeDropdown('gy',gradYears,'Select the Graduation Year',gradYear);
str+=makeRadios(grades,'Overall Grade in graduation','grade',gradPerf)
str+=makeCheckbox('c1', 'Are you a postgraduate?',postgrad);
str+=makeCheckbox('c2','Do you have prior work experience',workBefore);
str+=makeRadios(workExp,'Year of work experirnce','workexp',workEx,errors.workEx)+'<br>'
str+= '<button class="btn btn-primary" onclick="submitEmployee()">Submit</button>';
return str;
}
function submitEmployee(){
let Name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let age = document.getElementById('age').value; 
let dept = document.getElementById('dept').value;
let gd=document.getElementById('gd').value;
let gy=document.getElementById('gy').value;
let radios = document.getElementsByName('grade');
let grade ='';
for (let i=0;i<radios.length; i++) {
if (radios [i].checked) {
grade= radios [i].value;
}
}
let pg=document.getElementById('c1').checked;
let pwe=document.getElementById('c2').checked;
let work=document.getElementsByName('workexp');
let workexp='';
for(let i=0;i<work.length;i++){
if(work[i].checked){
   workexp=work[i].value;
}
}
let pr={name:Name,email:email,age:age,dept:dept,gradCourse:gd,gradYear:gy,gradPerf:grade,postgrad:pg,workBefore:pwe,workEx:workexp};
if(validate(pr)){
editIndex>=0?employees[editIndex]=pr:employees.push(pr);
showEmployee();
}
else {
myProduct=pr;
addEmployee();
} 
errors={};
myProduct={};
}
function validate(pr){
errors.name = pr.name? '': 'Employee name is mandatory'; 
errors.email = pr.email ?'': 'Email is mandatory';
errors.age = (+pr.age)? '': 'Age is mandatory';
errors.dept = pr.dept ?'': 'Select the Department';
errors.workEx=pr.workEx?'':'Choose the applicable work experience'
//console.log(errors);
return !(errors.name || errors.email || errors.age || errors.dept||errors.workEx)

}
function makeRadios (arr, label,name,Radiosvalue='',err='') {
const arr1 = arr.map(opt => {
let {grade,value} = opt;
let checked=Radiosvalue==value?'Checked':'';
let str = '<div class="form-check form-check-inline">';
str+= '<input class="form-check-input" type="radio" name="'+name+'" value="'+ value+'" '+checked+'>';
str+='<label class="form-check-label">'+grade+'</label>';
str+= '</div>';
return str;
});
let s1='<div class="form-check form-check-inline">'; 
s1+= '<label class="form-check-label">'+label+'<label>';
s1+= '</div>';
s1+=arr1.join('');
s1+=err?'<br><span class="text-danger">'+err+'</span>':'';
return s1
}
function makeDropdown (id, options,header,value='',err=''){
const arr1 = options.map(opt=>{
let select=value==opt?'selected':'';
return '<option '+select+'>'+opt+'</option>';
});
let s1= '<div class="form-group">';
s1+= '<select id ="'+id+'" class="form-control">';
let select=value?'':'selected';
s1+= '<option value="" disabled '+select+'>'+header+'</option>';
s1+= arr1.join('');
s1+= '</select>';
s1+=err?'<br><span class="text-danger">'+err+'</span>':'';
s1+= '</div>';
return s1
}
function makeCheckbox (id, label,value=''){
let c1=value?'checked':'';
let str = '<div class="form-check">'; 
str+= '<input type="checkbox" class="form-check-input" id="'+id+'" '+c1+'>'; 
str+= '<label class="form-check-label">'+label+'</label>'; 
str+= '</div>'; 
return str;
}

function makeTextField(id, label, placeholder='',value='',err=''){
let str = '<div class="form-group">';
str+= '<label>'+label+'</label>';
str+='<input type="text" class="form-control" id="'+id+'" placeholder="'+placeholder+'" value="'+value+'">'; 
str+=err?'<br><span class="text-danger">'+err+'</span>':'';
str+= '</div>';
return str;
}
function showDept(){
if(depts.length==0){
return '<h4>No department has been added</h4>'
}
let arr1=depts.map(st=>{
   return '<input  class="form-control" Value="'+st+'">';
});
return '<h2 style="text-align:center">List of Departments</h2>'+'<div class="row">'+arr1.join('')+'</div>';
}
function showEmployeeTable() {
const arr = employees.map((pr,index)=>{
let {name,email,age,dept,gradCourse,workEx} = pr;
let str = '<div class="row border">';
str+= '<div class="col-2">'+name+'</div>'; 
str+= '<div class="col-3">'+email+'</div>';
str+= '<div class="col-1">'+age+'</div>';
str+= '<div class="col-1">'+dept+'</div>';
str+= '<div class="col-1">'+gradCourse+'</div>';
str+= '<div class="col-2">'+workEx+'</div>';
str+= '<div class="col-2"><button class="btne" onclick=\'edit("'+index+'")\'> <i class="fa-solid fa-pen-to-square"></i></button><button class="btn2" onclick=\'deleteTable("'+index+'")\'><i class="fa-solid fa-trash-can" style="color: #f4f6fb;"></i></button>';
str+='<button class="btn3" onclick=\'expense("'+index+'")\'><i class="fa-solid fa-car" style="color: #020c1c;"></i></button></div>';
str+= '</div>';
return str;
});
let table = '<div class="row bg-dark text-white">';
table+= '<div class="col-2">Name</div>';
table+= '<div class="col-3">Email</div>';
table+= '<div class="col-1">Age</div>';
table+= '<div class="col-1">Dept</div>';
table+= '<div class="col-1">Graduation</div>';
table+= '<div class="col-2">WorkExp</div>';
table+= '<div class="col-2"></div>';
table+= '</div>';
table+= arr.join('');
return '<h2 style="text-align:center">List of Persons</h2>'+table+'<button class="btn btn-primary" onclick="changeView()">Change View</button>';
}
function expense(ind){
newArr=[];
let name=employees[ind].name;
let arr1=expenses.filter(st=>{
   return st.name==name;
});
newArr=arr1;
expensesInd();
}
function deleteTable(ind){
employees.splice(ind,1);
showEmployee();
}
function edit(ind){
editIndex=ind;
myProduct=employees[ind];
addEmployee();

}
function showNewPattern(){
let arr=employees.map(st=>{
   let str='<div class="col-4" style="background-color:gainsboro" id="'+st.email+'">'+'<label style="color:red">Name : </label>'+' '+st.name+'<br>'
       str+='<label style="color:red">Email : </label>'+' '+st.email+'<br>';
       str+='<label style="color:red">Age : </label>'+' '+st.age+'<br>';
       str+='<label style="color:red">Dept : </label>'+' '+st.dept+'<br>';
       str+='<button class="btn1" onclick=\'moreDetails("'+st.email+'")\'>More Details</button>'
       str+='</div>'
   return str;
});
return  '<h2 style="text-align:center">List of Persons</h2>'+'<div class="row">'+ arr.join('')+'</div>'+'<button class="btn btn-primary" onclick="originalView()">Original View</button>';

}
function moreDetails(email){
changeView();
let st=employees.find(st=>{
   return st.email==email;
});
console.log(st);
let str='<style="background-color:gainsboro">'+'<label style="color:red">Product : </label>'+' '+st.name+'<br>'
       str+='<label style="color:red">Email : </label>'+' '+st.email+'<br>';
       str+='<label style="color:red">Age : </label>'+' '+st.age+'<br>';
       str+='<label style="color:red">Dept : </label>'+' '+st.dept+'<br>';
       str+='<label style="color:red">Graduation : </label>'+' '+st.gradCourse+'<br>';
       str+='<label style="color:red">Year : </label>'+' '+st.gradYear+'<br>';
       str+='<label style="color:red">Performance in graduation : </label>'+' '+st.gradPerf+'<br>';
       str+='<label style="color:red">Post Graduate : </label>'+' '+st.postgrad+'<br>';
       str+='<label style="color:red">Worked Before : </label>'+' '+st.workBefore+'<br>';
       str+='<label style="color:red">Work Experience : </label>'+' '+st.workEx+'<br>';
       str+='</div>'
       let element=document.getElementById(email);
       element.innerHTML=str;
}
//Expenses---------------->
function showExpensesTable(arr,hint='') {
let txt=''
const arr1 = arr.map((pr,index)=>{
let {name,category,billId,amount,payment,approved} = pr;
txt=hint?name:'All Employee';
str= '<div class="row border">';
str+= '<div class="col-2">'+name+'</div>'; 
str+= '<div class="col-2">'+category+'</div>';
str+= '<div class="col-1">'+billId+'</div>';
str+= '<div class="col-1">'+amount+'</div>';
str+= '<div class="col-2">'+payment+'</div>';
str+= '<div class="col-2">'+approved+'</div>';
if(!approved){

str+= '<div class="col-2"><button class="btn btn-secondary" onclick=\'approvePayment("'+index+'","'+hint+'")\'>Approve</button></div>';
}
else {

str+= '<div class="col-2"></div>';
}
str+= '</div>';
return str;
});
let table = '<div class="row bg-dark text-white">';
table+= '<div class="col-2">Name</div>';
table+= '<div class="col-2">Category</div>';
table+= '<div class="col-1">Bill Id</div>';
table+= '<div class="col-1">Amount</div>';
table+= '<div class="col-2">Payment</div>';
table+= '<div class="col-2">Approved</div>';
table+= '<div class="col-2"></div>';
table+= '</div>';
table+= arr1.join('');
return  '<h2 style="text-align:center">List of Expenses for '+txt+' </h2>'+table;
}
function approvePayment(ind,hint){
console.log(ind,'And',hint)
if(hint){
  let ele=newArr[ind];
  ele.approved=true;
  expensesInd();
}
else{
let ele=expenses[ind];
ele.approved=true;
showExpenses();
}   
}
function showExpensesForm(){
 let {name='',category='',billId='',amount='',payment='', approved=false}=myProduct;
 let str='<h3 class="text-center">Add a New Expense</h3>';
 str+=makeDropdown('name',Names,'Select the Employee',name,err2.name);
 str+=makeDropdown('cat',Categorys,'Select the expanse category',category,err2.category);
 str+=makeTextField('bill','Bill Id','Enter the bill Id',billId,err2.billId)
 str+=makeTextField('amount','Amount','Enter the expanses amount',amount,err2.amount)
 str+=makeRadiosD(types,'How was the bill paid?','type',payment, err2.payment);
 str+=makeCheckbox('chk','Has the expense been approved?',approved);
 str+='<button class="btn btn-primary" onclick=\'submitExpanses()\'>Submit</button>'
 return str;
}
function submitExpanses(){
let Name = document.getElementById('name').value;
let cat = document.getElementById('cat').value;
let bill = document.getElementById('bill').value; 
let Amount = document.getElementById('amount').value;
let radios = document.getElementsByName('type');
let type ='';
for (let i=0;i<radios.length; i++) {
if (radios [i].checked) {
type= radios [i].value;
}
}
let c1 = document.getElementById('chk').checked;
let pr={name:Name,category:cat,billId:bill,amount:Amount,payment:type,approved:c1};
if(validate2(pr)){
editIndex>=0?expenses[editIndex]=pr:expenses.push(pr);
showExpenses();
}
else {
myProduct=pr;
console.log(pr);
addExpenses();
}
err2={};
myProduct={};
}
function validate2(pr){
err2.name = pr.name? '': 'Select Employee name '; 
err2.category = pr.category ?'': 'Select the Category';
err2.billId = pr.billId? '': 'Bill Id is mandatory';
err2.amount = (+pr.amount) ?'': 'Amount is mandetory';
err2.payment=pr.payment?'':'Choose the applicable Payment Method'
//console.log(errors);
return !(err2.name || err2.category || err2.billId || err2.amount||err2.payment)

}
function makeRadiosD (arr, label,name,Radiosvalue='',err='') {
const arr1 = arr.map(opt => {
let checked=Radiosvalue==opt?'Checked':'';
let str = '<div class="form-check form-check-inline">';
str+= '<input class="form-check-input" type="radio" name="'+name+'" value="'+ opt+'", '+checked+'>';
str+='<label class="form-check-label">'+opt+'</label>';
str+= '</div>';
return str;
});
let s1='<div class="form-check form-check-inline">'; 
s1+= '<label class="form-check-label">'+label+'<label>';
s1+= '</div>';
s1+=arr1.join('');
s1+=err?'<br><span class="text-danger">'+err+'</span>':'';
return s1
}

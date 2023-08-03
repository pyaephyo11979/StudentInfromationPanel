let loading = document.getElementById("loading");
let n;
let students = [];
let searchButton = document.getElementById("sBtn");
let studentPanel = document.getElementById("stdResult");
let displayBtn=document.getElementById('displayBtn');
let deleteBtn=document.getElementById('deleteBtn');
function createStudent(name, age, rollNumber, paperOneMark, paperTwoMark) {
  let s = {};
  s.name = name;
  s.age = age;
  s.rollNumber = rollNumber;
  s.p1Mark = paperOneMark;
  s.p2Mark = paperTwoMark;
  s.totalMark = paperOneMark + paperTwoMark;
  s.sayName = () => {
    studentPanel.innerHTML += `Name: ${s.name}<br>`;
  };
  s.sayAge = () => {
    studentPanel.innerHTML += `Age: ${s.age}<br>`;
  };
  s.sayRollNumber = () => {
    studentPanel.innerHTML += `Roll Number: ${s.rollNumber}<br>`;
  };
  s.sayPaperOneMark = () => {
    studentPanel.innerHTML += `Paper One Mark: ${s.p1Mark}<br>`;
  };
  s.sayPaperTwoMark = () => {
    studentPanel.innerHTML += `Paper Two Mark: ${s.p2Mark}<br>`;
  };
  s.sayTotalMark = () => {
    studentPanel.innerHTML += `Total Marks: ${s.totalMark}<br>`;
  };
  return s;
}

function addStudent() {
  loading.style.display = "none";
  n = parseInt(prompt("Enter Number of Students You Want To add"));
  students = [];
  for (let i = 0; i < n; i++) {
    let name = prompt("Enter Student Name");
    let age = prompt("Enter Age");
    let rollNumber = prompt("Enter Roll Number");
    let p1Mark = parseFloat(prompt("Enter Paper One Mark"));
    let p2Mark = parseFloat(prompt("Enter Paper Two Mark"));
    students.push(createStudent(name, age, rollNumber, p1Mark, p2Mark));
  }
}
students.push(createStudent("MgHla","21","23","123","144"));
students.push(createStudent("MgMya","21","12","144","154"));
students.push(createStudent("MaAye","21","10","100","230"));
students.push(createStudent("HlaHla","21","7","215","200"));
function deleteStudents(){
  students=[]
  var delRNum=prompt("Enter Roll Number of Student You want to delete");
  students.forEach((student)=>{
    if(delRNum==student.rollNumber){
      students.pop(student);
    }else{
      prompt("RollNumberNotFound");
    }
  })
}
function showStudents(){
  students.forEach((student) => {
    student.sayName();
    student.sayAge();
    student.sayRollNumber();
    student.sayPaperOneMark();
    student.sayPaperTwoMark();
    student.sayTotalMark();
  });
}
let searchedStudent = document.getElementById("searchItem");
function search() {
  let sstdRollNumber = searchedStudent.value;
  let searchedStudentPanel = document.getElementById("searchedStdPanel");
  let found = false;
  searchedStudentPanel.innerHTML="";
  for (let i = 0; i < students.length; i++) {
    if (sstdRollNumber === students[i].rollNumber) {
      found = true;
      searchedStudentPanel.innerHTML += `Name: ${students[i].name} <br>`;
      searchedStudentPanel.innerHTML += `Age: ${students[i].age} <br>`;
      searchedStudentPanel.innerHTML += `Roll Number: ${students[i].rollNumber} <br>`;
      searchedStudentPanel.innerHTML += `Paper One Mark: ${students[i].p1Mark} <br>`;
      searchedStudentPanel.innerHTML += `Paper Two Mark: ${students[i].p2Mark} <br>`;
      searchedStudentPanel.innerHTML += `Total Marks: ${students[i].totalMark} <br>`;
      break;
    }
  }
  if (!found) {
    searchedStudentPanel.innerHTML = "Student Not Found";
  }
}
searchButton.addEventListener("click", search);
displayBtn.addEventListener("click",showStudents);
deleteBtn.addEventListener('click',deleteStudents);
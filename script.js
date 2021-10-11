let employees = [
    {
      id: 1,
      name: "vaikunth",
      sur_name: "raja",
      email_id: "raja@gmail.com",
      gender: "Male",
      phone_no: "1111111111",
    },
    {
        id: 2,
        name: "anand",
        sur_name: "putu",
        email_id: "putu@gmail.com",
        gender: "Male",
        phone_no: "2222222222",
      },
  
  {
    id: 3,
    name: "mari",
    sur_name: "sooli",
    email_id: "sooli@gmail.com",
    gender: "Male",
    phone_no: "3333333333",
  },

{
    id: 4,
    name: "karthi",
    sur_name: "kundu",
    email_id: "kundu@gmail.com",
    gender: "female",
    phone_no: "4444444444",
  },
  {
    id: 5,
    name: "mani",
    sur_name: "moni",
    email_id: "patha@gmail.com",
    gender: "female",
    phone_no: "5555555555",
  },
  {
    id: 6,
    name: "devi",
    sur_name: "poona",
    email_id: "poona@gmail.com",
    gender: "female",
    phone_no: "6666666666",
  },
  {
    id: 7,
    name: "vani",
    sur_name: "kadala",
    email_id: "kadala@gmail.com",
    gender: "female",
    phone_no: "7777777777",
  },
  {
    id: 8,
    name: "sandhya",
    sur_name: "transe",
    email_id: "transe@gmail.com",
    gender: "other",
    phone_no: "88888888888",
  },
]


let allEmpButton = document.querySelector("#all-emp-but");
allEmpButton.addEventListener("click", function () {
  displayEmployees(employees);
});


let maleEmpButton = document.querySelector("#male-emp-but");
maleEmpButton.addEventListener("click", function () {
    let maleEmployee = employees.filter(function (employee) {
        return employee.gender ==="Male";
    });
  displayEmployees(maleEmployee);
});



let femaleEmpButton = document.querySelector("#female-emp-but");
femaleEmpButton.addEventListener("click", function () {
    let femaleEmployee=employees.filter(function(employee){
        return employee.gender==="female";
    });
    
  displayEmployees(femaleEmployee);
});


let otherEmpButton = document.querySelector("#other-emp-but");
otherEmpButton.addEventListener("click", function () {
    let otherEmployee=employees.filter(function(employee){
        return employee.gender==="other";
    });
  displayEmployees(otherEmployee);
});

let searchBox = document.querySelector("#searchbox");
searchBox.addEventListener("keyup", function () {
  let textEntered = searchBox.value;
  
  let filteredEmployees = [];
  if (textEntered !== "") {
    filteredEmployees = employees.filter(function (employee) {
      return employee.name
        .toUpperCase()
        .startsWith(textEntered.toUpperCase());
    });
    // console.log(filteredEmployees);
    document.querySelector("#table-body").innerHTML = "";
    displayEmployees(filteredEmployees);
  } else {
    document.querySelector("#table-body").innerHTML = "";
  }
});




let displayEmployees = (employees) => {
    let tableBody = document.querySelector("#table-body");
    let tableRow = "";
    for (let employee of employees) {
      tableRow += `<tr>
                      <td>${employee.id}</td>
                      <td>${employee.name}</td>
                      <td>${employee.sur_name}</td>
                      <td>${employee.email_id}</td>
                      <td>${employee.gender}</td>
                      <td>${employee.phone_no}</td>
        
        </tr>\n `;
      tableBody.innerHTML = tableRow;
    }
  };
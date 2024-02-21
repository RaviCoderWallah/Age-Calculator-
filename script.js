let ageBtn = document.querySelector("#age-btn");

const showResult = (userCurrentAge) => {
  let heading = document.querySelector('#user-age');
  heading.innerText = userCurrentAge;
  let displayDiv = document.querySelector(".show-result");
  displayDiv.classList.add("active");
}

const ageCalculate = (uYear, cYear) => {
   let userFindYear = cYear - uYear;
   showResult(userFindYear);
}


const userBithdayTime = (uAge, currentYear) => {
   let userDOBTime = new Date(uAge);
   let userDOBYear = userDOBTime.getFullYear();

   ageCalculate(userDOBYear, currentYear);
   
}

const currentTime = (userAge) => {
    let currentTime = new Date();
    let findCurrentYear = currentTime.getFullYear();
    userBithdayTime(userAge, findCurrentYear);
}


const userDOB = (event) => {
    let userDateOfBirth = document.querySelector("#date-of-birth").value;
    currentTime(userDateOfBirth);
}


ageBtn.addEventListener("click", (e) => {
    e.preventDefault();
    userDOB();
});


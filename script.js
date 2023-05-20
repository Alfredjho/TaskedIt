const sortIcon = document.querySelector(".sortIcon");
const sort = document.querySelector(".sort");
const addTask = document.getElementById("taskAdd");
const none = document.querySelector(".none");
const taskName = document.getElementById('taskName');
const taskPriority = document.getElementById('taskPriority');
const taskDate = document.getElementById("taskDueDate");
var Error = document.getElementById("lblError");

sortIcon.addEventListener('click', () => {
    sort.style.display = (sort.style.display === 'none') ? 'flex' : 'none';
});

addTask.addEventListener('click', () => {

    if(taskName.value === "" || taskDate.value === "" || taskPriority.value === "")
    {
        Error.innerHTML = "*All fields must be filled!";
        Error.style.color="red";
        Error.style.fontFamily ="Poppins";
    }
    else{
         // ilangin tulisan no task yet
    none.style.display = 'none';
    Error.innerHTML ="";

    //bikin div baru bernama posts
    var newDiv = document.createElement("posts");

    //bikin class baru namanya newDivClass biar bisa di style di css
    newDiv.classList.add("newDivClass");
    
    //ambil value dari form input date

    var inputDate = document.getElementById("taskDueDate").value;
    var date = new Date(inputDate);
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = date.toLocaleDateString("en-US", options).replace(",", "");

    // bikin tag <p> baru yang isi textnya adalah input date value
    var p = document.createElement("p");
    p.textContent = formattedDate;


    //bikin img baru sesuai dengan value priority
    var selectedElement = taskPriority.value;
    var imgPriority = document.createElement('img');
    imgPriority.classList.add("urgency");

    if(selectedElement === "high")
    {
        imgPriority.src = "./Assets/Urgent.png";
    }
    else if (selectedElement === "medium")
    {
        imgPriority.src = "./Assets/Medium.png";
    }
    else if (selectedElement === "low")
    {
        imgPriority.src = "./Assets/Low.png";
    }


    //bikin garis bawah
    var bar = document.createElement("garis");
    bar.classList.add("iniGaris");

    //bikin tag <a> baru
    var newParagraph = document.createElement('a');

    var taskNameText = document.createTextNode(taskName.value);
    newParagraph.appendChild(taskNameText);

    
    const newImg= document.createElement('img');
    newImg.classList.add("checkList");
    newImg.src= './Assets/check.png';



    var parentElement = document.querySelector(".taskAvailable");

    parentElement.style.height = "80vh";

    newImg.addEventListener('click', function(){
        newDiv.remove();
        var remainingDivs = document.querySelectorAll('.newDivClass');
        if (remainingDivs.length === 0) {
            parentElement.style.height = "0";
            none.style.display = 'flex';
        }
    });


    // Tambahin div baru
    parentElement.appendChild(newDiv);
    newDiv.appendChild(p);
    newDiv.appendChild(imgPriority);
    newDiv.appendChild(bar);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newImg);
    }
   
});


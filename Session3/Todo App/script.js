//"use strict";
let tasks = [];
var num= null;
let namenw;

const getPriorityName = function (priority) {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Medium";
    case "3":
      return "Low";
    default:
      return "";
  }
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) return;
  tasks.splice(i, 1);
  renderTable();
};
const moveUp = function (i) {
  if (i == 0) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i - 1];
  tasks[i - 1] = oldTask;
  renderTable();
};
const moveDown = function (i) {
  if (i == tasks.length - 1) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i + 1];
  tasks[i + 1] = oldTask;
  renderTable();
};

const edit = function (i) {
  const oldTask = tasks[i];
  renderTable(i);
  
};

const save=function(i){
  tasks[i].name=document.getElementById("newname").value;
  tasks[i].priority=document.getElementById("task_priorityy").value;
  renderTable();
}

const cancel=function(){
  renderTable();
}

const renderTable = function (num) {
  const tbody = document.querySelector("#tasks_tbody");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    const row = `
        <tr>
        ${
          num==i
            ? `
            <td>${i + 1}</td>
            <td><input type="text" id="newname"></td>
            <td><select id="task_priorityy" class="form-control">
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
            </select></td>`
            : ``
          }
          ${
            num!=i
              ? ` 
              <td>${i + 1}</td>
               <td>${t.name}</td>
              <td>${getPriorityName(t.priority)}</td>`
              : ``
            }
        
        <td>
        ${
          i > 0
            ? `<button class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        ${
          num==i
            ? `
            <button class="btn btn-success btn-sm" onclick="save(${i})" >Save</button>
            <button class="btn btn-danger btn-sm" onclick="cancel()">Cancel</button>`
            : ``
          }
        ${
          num!=i
            ? ` 
            <button class="btn btn-primary btn-sm" onclick="edit(${i})">Edit</button>
            <button class="btn btn-success btn-sm" style="display:none;">Save</button>
            <button class="btn btn-danger btn-sm" style="display:none;">Cancel</button>`
            : ``
          }
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
          </tr>
          `;
    tbody.insertAdjacentHTML("beforeEnd", row);
  });
  
};
const addTask = function () {
  console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};

document.querySelector("#add").addEventListener("click", addTask);

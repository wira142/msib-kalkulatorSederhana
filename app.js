let val_1, val_2, total, oprator, form;
form = document.getElementById("calc");
oprator = document.getElementById("oprator");
total = form.result;

function removeFail(item) {
  item.classList.remove("fail");
}

function getValue() {
  if (form.val_1.value == "" || form.val_2.value == "") {
    if (form.val_1.value == "" && form.val_2.value == "") {
      form.val_1.classList.add("fail");
      form.val_2.classList.add("fail");
    } else if (form.val_1.value == "") {
      form.val_1.classList.add("fail");
    } else if (form.val_2.value == "") {
      form.val_2.classList.add("fail");
    }
    alert("Anda harus mengisi semua masukan yang ada!");
  } else {
    val_1 = parseFloat(form.val_1.value);
    val_2 = parseFloat(form.val_2.value);
    return true;
  }
  return false;
}

function tambah() {
  if (getValue()) {
    oprator.innerHTML = "+";
    total.value = val_1 + val_2;
  }
}
function kurang() {
  if (getValue()) {
    oprator.innerHTML = "-";
    total.value = val_1 - val_2;
  }
}
function kali() {
  if (getValue()) {
    oprator.innerHTML = "X";
    total.value = val_1 * val_2;
  }
}
function bagi() {
  if (getValue()) {
    oprator.innerHTML = "/";
    total.value = val_1 / val_2;
  }
}

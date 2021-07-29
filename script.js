const list = document.querySelector(".container ol");
const liInput = document.querySelector(".add_li input");
const add = document.querySelector(".add_li button");

const check = function () {
    if (list.children.length === 0) {
        list.classList.add("invisible");
    }
    else {
        list.classList.remove("invisible");
    }
    liInput.focus();
}
const delLi = function () {
    const li = this.parentElement;
    li.classList.add("delete");
    li.addEventListener('transitionend',function(){
        li.remove();
        check();
    });
}
const eli = function () {
    const li = this.parentElement;
    const temp = li.childNodes[0];
    const liInput = document.createElement('input');
    liInput.type = "text";
    liInput.defaultValue = temp.textContent;
    li.replaceChild(liInput, temp);
    liInput.focus();
    liInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            temp.textContent = liInput.value;
            li.replaceChild(temp, liInput);
        }
    });
    liInput.addEventListener('focusout', function () {
        temp.textContent = liInput.value;
        li.replaceChild(temp, liInput);
    });
}

check();

add.addEventListener('click', function () {
    const newLi = document.createElement('li');
    const textNode = document.createTextNode(liInput.value);
    const ebtn = document.createElement('button');
    const img1 = document.createElement('img');
    const dbtn = document.createElement('button');
    const img2 = document.createElement('img');
    img1.src = "./edit.svg";
    img2.src = "./dbtn.svg";
    ebtn.appendChild(img1);
    dbtn.appendChild(img2);
    newLi.appendChild(textNode);
    newLi.appendChild(dbtn);
    newLi.appendChild(ebtn);
    list.appendChild(newLi);
    liInput.value = null;
    dbtn.addEventListener('click', delLi);
    ebtn.addEventListener('click', eli);
    check();
});

liInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const newLi = document.createElement('li');
        const textNode = document.createTextNode(liInput.value);
        const ebtn = document.createElement('button');
        const img1 = document.createElement('img');
        const dbtn = document.createElement('button');
        const img2 = document.createElement('img');
        img1.src = "./edit.svg";
        img2.src = "./dbtn.svg";
        ebtn.appendChild(img1);
        dbtn.appendChild(img2);
        newLi.appendChild(textNode);
        newLi.appendChild(dbtn);
        newLi.appendChild(ebtn);
        list.appendChild(newLi);
        liInput.value = null;
        dbtn.addEventListener('click', delLi);
        ebtn.addEventListener('click', eli);
        check();
    }
});
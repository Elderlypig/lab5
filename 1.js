let post, name;
alert("Введите должность и ФИО");

post = prompt("Должность");
if(post !== "ректор" && post !== "доцент" && post !== "преподаватель"){
    alert("Такой должности нет");
}
else{

name = prompt("ФИО");
if(post == "ректор" && name != "Анна Николаевна"){
    alert("Вы не ректор");
}

if(post != "ректор"){
    alert("Можно сдать лабу?");
}
else if (post == "ректор" && name == "Анна Николаевна"){
    alert("Здраствуйте Анна Николаевна");
}
}
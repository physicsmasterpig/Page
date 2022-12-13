function login() {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(id.value == ""){
        alert("아이디를 입력해주세요.");
    }
    else if(id.pw == ""){
        alert("비밀번호를 입력해주세요.");
    }
    else{
        location.href = 'https://physicsmasterpig.github.io/Page/group_projects/group_projects';
    }
}

function back(){
    history.go(-1);
}
function create_id(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    var r_pw = document.querySelector('#r_pw');

    if(id.value == ""){
        alert("아이디를 입력해주세요. ");
    }
    else if(pw.value==""){
        alert("비밀번호를 입력해주세요. ");
    }
    else if(pw.value !== r_pw.value){
        alert("비밀번호를 확인해주세요. ");
    }
    else{
        location.href = 'login.html';
    }
}
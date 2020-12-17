
//==================HEADER START=============================

//-----------HEADER DROP DOWN 구현 시작---------
const header = document.getElementById("header");
const main = document.getElementById("main");
const dropdownCon = document.getElementById("dropdown-container");
let isDropdown = false;//드랍다운의 활성화 상태 표시
header.addEventListener("mouseenter", dropdownOn);//헤더영역에 mouseenter시 ON
main.addEventListener("mouseenter", dropdownOff);//메인영역 mouserenter 시 OFF


function dropdownOn() { //드랍다운 온
    header.style.overflow = "visible";
    header.style.height = "250px";
    header.style.backgroundColor = "white";
    header.style.transition = "height 0.3s, background-color 0.3s";

    //로고글자 색상변경(검정)
    document.getElementById("logo").style.color = "black";

    //내비바 글자의 색상 변경(검정)
    var categories = document.getElementsByClassName("header-navbar-category");
    for(var i=0; i<categories.length; ++i) {
        categories[i].style.color = "black";
    }

    //계정 아이콘 색 변경(검정)
    document.getElementById("member-icon").src = "imgs/member-icon-black.png";
    isDropdown = true;
}


function dropdownOff() {//드랍다운 오프
    if(window.scrollY == 0){ //스크롤이 화면 최상단에 있을 경우에는 투명하게(화면의 분위기 연출)
        header.style.overflow = "hidden";
        header.style.height = "50px";
        header.style.backgroundColor = "rgb(255,255,255,0)";
        header.style.transition = "height 0.3s, background-color 0.3s";
        
        //로고의 색상변경(흰)
        document.getElementById("logo").style.color = "white";

        //내비바 글자의 색상 변경(흰)
        var categories = document.getElementsByClassName("header-navbar-category");
        for(var i=0; i<categories.length; ++i) {
            categories[i].style.color = "white";
        }

        //계정 아이콘 색 변경(흰)
        document.getElementById("member-icon").src = "imgs/member-icon-white.png";    
    } 
    else { //스크롤이 화면 최상단이 아닐 경우, 드랍다운오프 기능은 넣되 내비바의 배경색은 투명이 아닌 흰색으로 유지.
        //드랍다운 오프
        header.style.overflow = "hidden";
        header.style.height = "50px";
        header.style.backgroundColor = "rgb(255,255,255)";
        header.style.transition = "height 0.3s, background-color 0.3s";
    }
    isDropdown = false;
}
//-----------HEADER DROP DOWN 구현 끝---------



//-------HEADER TOP FIXED 구현 시작------
window.onscroll = function() {
    if(window.scrollY > 0) {//스크롤이 최상단이 아닐때
        //헤더의 색상 흰색으로 변경
        header.style.backgroundColor = "white";
        header.style.transition = "background-color 0.7s";

        //로고의 색상변경 (검정)
        document.getElementById("logo").style.color = "black";

        //내비바 카테고리의 시인성을 위한 색상 변경 (검정)
        var categories = document.getElementsByClassName("header-navbar-category");
        for(var i=0; i<categories.length; ++i) {
            categories[i].style.color = "black";
        }

        //계정 아이콘 색 변경 (검정)
        document.getElementById("member-icon").src = "imgs/member-icon-black.png";
    }
    if(window.scrollY == 0 && isDropdown == false){//스크롤이 최상단이며, 드랍다운이 비활성화 일때
       //헤더의 색상 투명으로 변경
       header.style.backgroundColor = "rgb(255,255,255,0)";
       header.style.transition = "background-color 0.3s";
   
        //로고의 색상변경 (흰색)
        document.getElementById("logo").style.color = "white";

       //내비바 카테고리의 시인성을 위한 색상 변경(흰색)
       var categories = document.getElementsByClassName("header-navbar-category");
       for(var i=0; i<categories.length; ++i) {
           categories[i].style.color = "white";
       } 

       //계정 아이콘 색 변경 (흰색)
       document.getElementById("member-icon").src = "imgs/member-icon-white.png";
    }
}
//-------HEADER TOP FIXED 구현 끝------
//==================HEADER END===========================




//==================MAIN START========================


/*검색창 GO버튼에 마우스오버 시 
    커서를 손가락모양으로 바꾸는 함수를 적용*/
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("mouseover", pointerCursor);

//==================MAIN END========================



//==================FIXED-BAR START========================
//-----------페이지 업 다운 버튼 구현 시작-----------
const pageUpButton = document.getElementById("pageup-img");
pageUpButton.addEventListener("click", pageUp);

const pageDownButton = document.getElementById("pagedown-img");
pageDownButton.addEventListener("click", pageDown);

function pageUp() {
    document.documentElement.scrollTop = 0;
}
function pageDown() {
    var pageBottom = document.documentElement.scrollHeight;
    document.documentElement.scrollTop = pageBottom;
}

pageUpButton.addEventListener("mouseover", pointerCursor);
pageDownButton.addEventListener("mouseover", pointerCursor);
//-----------페이지 업 다운 버튼 구현 끝-----------

//==================FIXED-BAR END========================

//커서 모양 손가락으로 바꾸는 함수
function pointerCursor(e) {
    e.target.style.cursor = "pointer";
}
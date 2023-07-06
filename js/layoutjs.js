const frontURL = 'http://localhost:5500/html'
const backURL = 'http://localhost:8888/back'

function showAjax(url, targetObj) {
    let xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', (e)=>{
    // xhttp.addEventListener('readystatechange', (e) => {
        // if (e.target.readyState == 4 && e.target.status == 200) {
            targetObj.innerHTML = e.target.responseText
        // }
    })
    xhttp.open('get', url)
    xhttp.send()
}
window.addEventListener('load', () => {
// document.addEventListener('DOMContentLoaded', ()=>{ 
    alert('레이아웃 로드')   
    /*
    // 감시자 인스턴스 만들기
    let observer = new MutationObserver((mutations) => {
        // 노드가 변경 됐을 때의 작업
        alert('DOM 변경 감지');
    })

    // 감시자의 설정
    let option = {
        attributes: true,
        childList: true,
        characterData: true
    };

    // 대상 노드에 감시자 전달
    observer.observe(document.querySelector('section'), option);
    */
    const menuObjs = document.querySelectorAll('header>nav>ul>li>a')
    const sectionObj = document.querySelector('section')
    menuObjs.forEach((menu) => {
        menu.addEventListener('click', (e) => {
            e.preventDefault()
            switch (e.target.href) {
                case `${frontURL}/login.html`:
                    showAjax(e.target.href, sectionObj)
                    break
                case `${frontURL}/signup.html`:
                    showAjax(e.target.href, sectionObj)
                    break
            }
        })



    });



})
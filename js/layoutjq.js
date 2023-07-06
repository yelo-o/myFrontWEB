const frontURL = 'http://localhost:5500/html'
const backURL = 'http://localhost:8888/back'

// function showAjax(url, targetObj) {
//     let xhttp = new XMLHttpRequest();
//     xhttp.addEventListener('load', (e)=>{
//             targetObj.innerHTML = e.target.responseText
//     })
//     xhttp.open('get', url)
//     xhttp.send()
// }

function showAjax(targetUrl, targetObj) {
    $.ajax({
        url: targetUrl,
        method:'get',
        success:(responseData)=>{
            targetObj.html(responseData)
        },
        error:(jqXhr, status)=>{
            alert(`status:${status}, jqXhr.status:${jqXhr.statusCode}`)
        }
    })
}

// window.addEventListener('load', () => {
$(() => {
    // const menuObjs = document.querySelectorAll('header>nav>ul>li>a')
    const menuObjs = $('header>nav>ul>li>a')
    // const sectionObj = document.querySelector('section')
    const sectionObj = $('section')

    menuObjs.click((e) => {
            e.preventDefault()
            switch (e.target.href) {
                case `${frontURL}/login.html`:
                    console.log('로그인 클릭')
                    showAjax(e.target.href, sectionObj)
                    break
                    
                case `${frontURL}/signup.html`:
                    showAjax(e.target.href, sectionObj)
                    console.log('회원가입 클릭')
                    break
            }
        })
    })
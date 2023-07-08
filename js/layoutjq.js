const frontURL = 'http://localhost:5500/html'
const backURL = 'http://localhost:8888/back'

//ajax 요청 함수 생성
function showAjax(targetUrl, targetObj) {
    targetObj.load(targetUrl)
}

// window.addEventListener('load', () => {
$(() => {
    const menuObjs = $('header>nav>ul>li>a')
    const sectionObj = $('section')

    //--메뉴 클릭될때 할 일 START--
    menuObjs.click((e) => {
        console.log($(e.target).attr('href'))
        switch ( $(e.target).attr('href') ) {
            case `./login.html`://로그인 메뉴
                console.log('로그인 클릭')
                showAjax($(e.target).attr('href'), sectionObj)
                break
            
            case `./signup.html`: //가입 메뉴
                console.log('회원가입 클릭')
                showAjax($(e.target).attr('href'), sectionObj)
                break

            case `./productlist.html`: //상품 목록
                console.log('상품 목록 클릭')
                location.href = `${frontURL}/productlist.html` //상품리스트 페이지 이동
                break
        }
        return false;
    })
    //--메뉴 클릭될때 할 일 END--
})
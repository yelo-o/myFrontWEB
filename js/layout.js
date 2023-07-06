window.addEventListener('load', () =>{
    const loginObj = document.querySelector('nav>ul>li:first-child')
    // const loginObj = document.querySelector('nav>ul>li:nth-child(1)') //first-child와 같음
    const sectionObj = document.querySelector('section')
    const signupObj = document.querySelector('nav>ul>li:nth-child(3)')


    //--로그인 버튼클릭되었을 때 할 일 START--
    loginObj.addEventListener('click', (e)=>{
        //Create ax XMLHttpRequest object
        e.preventDefault();
        const xhttp = new XMLHttpRequest();
        
        //Define a callback function
        // xhttp.onload = function() { // onload 패턴 교체
        xhttp.addEventListener('load', (e)=>{
            //Here you can user the Data
            
            sectionObj.innerHTML =  e.target.responseText;
        })

        //send a request
        xhttp.open("get", "./login.html")
        //요청전달데이터를 form전송형태로 전달하려면 ContentType 설정이 필요(서블릿으로 서브밋이벤트를 요청하는것처럼 보이게 함)
        // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("id=abc&pwd=p1&name=1")
    })
    //--버튼클릭되었을 때 할 일 END--

    //--회원가입 버튼클릭되었을 때 할 일 START--
    signupObj.addEventListener('click', (e)=>{
        //Create ax XMLHttpRequest object
        e.preventDefault();
        const xhttp = new XMLHttpRequest();
        
        //Define a callback function
        // xhttp.onload = function() { // onload 패턴 교체
        xhttp.addEventListener('load', (e)=>{
            //Here you can user the Data
            sectionObj.innerHTML =  e.target.responseText;
            e.preventDefault();
        })

        //send a request
        xhttp.open("get", "signup.html")
        //요청전달데이터를 form전송형태로 전달하려면 ContentType 설정이 필요(서블릿으로 서브밋이벤트를 요청하는것처럼 보이게 함)
        // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send()
    })
    //--회원가입 버튼클릭되었을 때 할 일 END--
})
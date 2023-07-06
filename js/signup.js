//DOM트리가 완성되고
//렌더링 준비가 되었을 때 window 객체의 load이벤트 발생한다
// window.addEventListener('load', ()=>{
$(()=>{
    //DOM트리에서 form객체찾기
    // const formObj = document.querySelector('form.signup')
    const formObj = $('form.signup')

    //아이디입력란 객체찾기
    // const inputIdObj = document.querySelector('form.signup>input[type=text]')
    const inputIdObj = $('form.signup>input[type=text]')

    //아이디중복확인버튼 객체찾기
    // const btIdDupchk = document.querySelector('form.signup>button.dupchk')
    const btIdDupchk = $('form.signup>button.dupchk')

    //가입버튼 객체찾기
    // const btSignup = document.querySelector('form.signup>button.signup')
    const btSignup = $('form.signup>button.signup')
    
    //아이디중복확인버튼(일반버튼)
    btIdDupchk.click(()=>{
        if($(inputIdObj).val()=='id1'){ //아이디입력값이 'id1'인 경우
            alert('이미사용중인 아이디입니다') //'이미사용중인 아이디입니다' 경고창
        }else { //아이디입력값이 'id1'가 아닌 경우
            btSignup.show()//가입버튼 보여주기
        }
    })
    //가입버튼(전송버튼) 클릭 -> 폼의 submit이벤트발생
    //--폼 submit이벤트 발생시 할 일 START--
    formObj.submit((e)=>{
        //비밀번호1, 2가 일치 확인
        // const pwdObj = document.querySelector('form.signup>input[name=pwd]')
        const pwdObj = $('form.signup>input[name=pwd]')

        // const pwd1Obj = document.querySelector('form.signup>input#p1')
        const pwd1Obj = $('form.signup>input#p1')
        if(pwdObj.val() != pwd1Obj.val()) {
            alert("비밀번호가 일치하지 않습니다")
            pwdObj.focus()
            // e.preventDefault();
            return false
        }
        // e.target.action = 'http://localhost:8888/back/signup' //'http://www.naver.com'
        // e.target.method = 'post'
        $(e.target)
        .attr('action', 'http://localhost:8888/back/signup')
        .attr('method', 'post')
        // alert(formObj.serialize())
        $.ajax({
            url: $(e.target).attr('action'),
            method: $(e.target).attr('method'),
            data: 
                formObj.serialize() //Post 방식으로 전달될 떄만 사용 가능
            //     userid:inputIdObj.val(),
            //     pwd:pwdObj.val(),
            //     name : $('form.signup>input[name=name]').val()
            // },
                //{userid:'abc', pwd:'p1', name:'n1'}, //"userid=abc@pwd=p1&name=n1",
            ,
            //success: (responseData) =>{
                //const responseObj = JSON.parse(responseData) //json문자열을 js객체로 변환
                //HTML을 문자열로 받아서 , JSON형태로 응답받아서 객체로 바꿔준다. 
            success:(responseObj)=>{ //응답형식이 application/json이면 알아서 js에서 객체로 변환, parse 필요 X
                if(responseObj.status == 0){
                    //실패경우 할 일
                    alert("실패 : " + responseObj.msg)
                }else{
                    //성공경우 할 일
                    alert(responseObj.msg)
                }
                // alert(responseData)

            },
            error: ()=>{ //404, 500번대, CORS 에러

            }
        })
        return false
        
        // e.preventDefault(); //back요청 막기
            
    })
    //--폼 submit이벤트 발생시 할 일 END--

    //--아이디 입력란에 'focus'이벤트발생시 할 일 START--
    //가입버튼 사라지기
    inputIdObj.focus(()=>{
        btSignup.hide()
    })

    //--아이디 입력란에 focus이벤트발생시 할 일 END--
})

    $(()=>{
        //로그인 폼
        const formObj = $('form.login')
        
        //로그인버튼(전송버튼) 클릭 -> 폼의 submit이벤트발생
        //--폼 submit이벤트 발생시 할 일 START--
        formObj.submit((e)=>{
            console.log(e.target)
            $(e.target)
            .attr('action', 'http://localhost:8888/back/login')
            .attr('method', 'post')
            $.ajax({
                url: $(e.target).attr('action'),
                method: $(e.target).attr('method'),
                data: 
                    formObj.serialize() //Post 방식으로 전달될 떄만 사용 가능
                ,
                success:(responseObj)=>{ //응답형식이 application/json이면 알아서 js에서 객체로 변환, parse 필요 X
                    if(responseObj.status == 0){
                        //실패경우 할 일
                        alert("실패 : " + responseObj.msg)
                    }else{
                        //성공경우 할 일
                        alert(responseObj.msg)
                    }
    
                },
                error: ()=>{ //404, 500번대, CORS 에러
    
                }
            })
            return false
            
            // e.preventDefault(); //back요청 막기
                
        })
        //--폼 submit이벤트 발생시 할 일 END--
    
    })
    
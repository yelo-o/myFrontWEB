alert("0")
//로드 이벤트
window.addEventListener('load', function() { //window에서 load 이벤트가 발생하면 콜백 함수를 호출하라
    alert("1")
    let resultObj = 
    document.getElementById('result') //HTMLElement타입 반환
    console.log(resultObj)

    let resultObj2 = 
    document.querySelector('input[type=text]') //Element타입 반환
           //querySelector("#result")
    console.log(resultObj2)

    resultObj2.value = 'HELLO'
    resultObj2.maxLength = 10; //<input type="" value="" maxLength=10>
    resultObj2.style.color = 'blue';
    resultObj2.style.backgroundColor = 'yellow'

    let num = 0;
    let op;
    let bts = document.querySelectorAll('button');
    for(let i=0; i<bts.length; i++){
        // console.log(bts[i].innerHTML);
        //클릭 이벤트
        // bts[i].addEventListener("click", function(){
        // console.log(bts[i].innerHTML)
        // alert(this.innerHTML) //this : 클릭 이벤트가 발생된 곳
        
        bts[i].addEventListener("click", ()=>{
            switch(bts[i].innerHTML){
                case '=':
                    resultObj2.value = num;
                    op=undefined;
                    break;
                case '+':
                case '-':
                    op = bts[i].innerHTML;
                    break;
                default :
                    resultObj2.value = bts[i].innerHTML;
                    if(op == '+'){
                        num += parseInt(resultObj2.value) //문자->정수
                    }else if(op == '-'){
                        num -= parseInt(resultObj2.value) //문자->정수
                    }else{
                        num = parseInt(resultObj2.value) //문자->정수
                    }

                    // num = Number(resultObj2.value) //문자->숫자
            }
            // resultObj2.value = bts[i].innerHTML;
            console.log(bts[i].innerHTML, num)
            // console.log(bts[i].innerHTML)
            // alert(this.innerHTML)
            // console.log(this) //this : window 객체
        })
    }

    //DOM트리에서 all checkbox 객체 찾기
    let chkAllObj = 
    document.querySelector('fieldset.all>input[type=checkbox]')

    //DOM트리에서 one,two,three checkbox 객체 찾기
    let chkObjs = 
    document.querySelectorAll('fieldset.each>input[type=checkbox]')

    //---all checkbox객체에서 클릭되었을 때 할 일 START---
    chkAllObj.addEventListener('click', (e)=>{
        // console.log(e.target.checked);
        chkObjs.forEach((chk)=>{
            chk.checked = e.target.checked
        })
    })
    //---all checkbox객체에서 클릭되었을 때 할 일 END---

})
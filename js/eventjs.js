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
    
    //---차량 대분류를 선택했을 때 할일 START---
    let carTypeObj =
        document.querySelector('div.car>select.type'); //대분류

    let carType2Obj =
        document.querySelector('div.car>select.type2'); //중분류
    
    carTypeObj.addEventListener('click',() =>{
        console.log('clicked')
    })

    carTypeObj.addEventListener('change',(e) =>{
        console.log(e.target.value, 'changed')
        switch(e.target.value) {
            case 'sedan':
                // let type1 = ['쏘나타', '더 뉴 아반테', '디 올 뉴 그랜저', '디 올 뉴 그랜저Hybrid']
                let type1 = [
                    {name: '쏘나타', id : 'sonata'},
                    {name:'더 뉴 아반테', id: 'avante'},
                    {name:'디 올 뉴 그랜저', id: 'grandure'},
                    {name:'디 올 뉴 그랜저Hybrid', id: 'hybrid'}
                ]
                carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.innerHTML += '<option value="'+ type1[0].id +'">' + type1[0].name + '</option>'
                carType2Obj.innerHTML += '<option value="'+ type1[1].id +'">' + type1[1].name + '</option>'
                carType2Obj.innerHTML += `<option value="${type1[2].id}">${type1[2].name}</option>`
                carType2Obj.innerHTML += `<option value="${type1[3].id}">${type1[3].name}</option>`
                carType2Obj.style.display = 'inline-block'
                break;
            case 'suv':
                // let type2 = ['팰리세이드', '베뉴', '코나']
                let type2 = [
                    {name: '팰리세이드', id : 'palisade'},
                    {name:'베뉴', id: 'venue'},
                    {name:'코나', id: 'kona'}
                ]
                carType2Obj.innerHTML = '<option>선택하세요</option>'
                for (let i=0; i<type2.length;i++){
                    carType2Obj.innerHTML += `<option value="${type2[i].id}">${type2[i].name}</option>`
                }
                // carType2Obj.innerHTML += '<option>' + type2[0] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[1] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[2] + '</option>'
                carType2Obj.style.display = 'inline-block'
                break;
            case 'truck':
                let type3 = ['선택하세요', '마이티', '파비스', '엑시언트', '엑시언트수소트럭'];
                // let type3 = [
                //     {name: '마이티', id : 'mighty'},
                //     {name:'더 뉴 파비스', id: 'pavise'},
                //     {name:'뉴파워트럭', id: 'powertruck'}
                // ]
                // carType2Obj.innerHTML += '<option>' + type2[0] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[1] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[2] + '</option>'
                // carType2Obj.innerHTML += '<option>' + type2[3] + '</option>'
                
                // carType2Obj.innerHTML = '<option>선택하세요</option>'
                // for (let i=0; i<type3.length;i++){
                //     carType2Obj.innerHTML += `<option value="${type3[i].id}">${type3[i].name}</option>`
                // }

                // let options = document.querySelectorAll('div.car>select.type2>option')
                // options를 처음부터 다시 찾기보다는 이전에 찾아놓은 carType2Obj를 이용해서 찾는 방법 ↓
                let options = carType2Obj.childNodes

                // options.forEach((value)=>{
                //     carType2Obj.removeChild(value)
                //     console.log("지우기",value)
                // })

                for(let i=0; i<options.length; i++){
                    carType2Obj.removeChild(options[i])
                }

                type3.forEach((value)=>{//type2의 값(value)을 0번인덱스부터 꺼내온다
                    let optionObj = document.createElement('option') //<option> 생성
                    // optionObj.innerHTML = value
                    let txtObj = document.createTextNode(value) //텍스트 노드에 type3 배열의 값 넣기
                    optionObj.appendChild(txtObj) //위에서 생성한 <option>의 하위에 select
                    carType2Obj.appendChild(optionObj)
                })
                carType2Obj.style.display = 'inline-block'
                break;
            default: //중분류의 display => none
                carType2Obj.style.display = 'none'

        }
        
    })
    //---차량 대분류를 선택했을 때 할일 END---
    
    //--입력란에 키보드입력할 때 할 일 START--
    //DOMkeyboard입력요소 객체 찾기
    const txtObj = 
    document.querySelector('div.keyboard>input[type=text]')
    txtObj.addEventListener('keyup', (e)=>{
        console.log(e.key, e.target.value)
        if(e.key == 'Enter') {
            this.alert('Enter를 입력했습니다')
        }else {
            e.target.value = e.target.value.toUpperCase()
        }
        
    })
    //--입력란에 키보드입력할 때 할 일 END--

    //--전송버튼 클릭할 때 할 일 START--
    const btsubmitObj =
        document.querySelector('div.form>form>button')

    //TODO : 콘솔에 '전송버튼이 클릭되었습니다' 출력
    btsubmitObj.addEventListener('click', ()=>{
        alert("전송버튼이 클릭되었습니다")
    })
    //--전송버튼 클릭할 때 할 일 END--

    //--폼의 submit이벤트 발생할떄 할 일 START--
    //전송 시에 하고 싶은 일은 form의 submit 이벤트에 처리는 것 권장
    const formObj =
    document.querySelector('div.form>form')

    formObj.addEventListener('submit', (e) =>{
        alert("submit이벤트가 발생했습니다")
        e.preventDefault()
    })

    //--폼의 submit이벤트 발생할떄 할 일 END--

    //--a객체의 click이벤트 발생할 때 할 일 START--
    const linkDivObj = document.querySelector('div.link')
    linkDivObj.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = 'blue'
    })
    
    const aObj = document.querySelector('div.link>a')
    aObj.addEventListener('click', (e)=>{
        this.alert('링크 클릭')
        e.preventDefault() //기본 이벤트처리를 막아라
        e.stopPropagation() //이벤트 전파를 중지한다
    })
    //--a객체의 click이벤트 발생할 때 할 일 END--


})
// window.addEventListener('load', function() { //window에서 load 이벤트가 발생하면 콜백 함수를 호출하라
$(()=>{

     //jQuery 객체 타입 반환

    // let resultObj2 = $('input[type=text]') // 모두 찾기 (3개)
    let resultObj2 = $('input[type=text]').first() // 첫번째 요소만 찾기
    // let resultObj2 = $('input[type=text]').last() // 마지막 요소만 찾기
    // let resultObj2 = $('input[type=text]').eq(1) // 인덱스가 0부터 시작하므로 두번째를 뜻함
    
    console.log(resultObj2)

    resultObj2.val('HELLO')

    // resultObj2.maxLength = 10;
    resultObj2.attr("maxLength", 10)

    // resultObj2.style.color = 'blue';
    // resultObj2.css('color', 'blue')
    // resultObj2.style.backgroundColor = 'yellow'
    // resultObj2.css('background-color', 'yellow') //자바스크립트와 다르게 backgroudColor가 아니도록 쓸 수 있음
    //위의 css 두줄 아래와 같이 합칠 수 있음 
    resultObj2.css({'color' : 'blue',
                    'background-color' : 'yellow'})

    let num = 0;
    let op;

    // let bts = document.querySelectorAll('button');
    let bts = $('button')

    //기존 반복문 제거
    // for(let i=0; i<bts.length; i++){
        // bts[i].addEventListener("click", ()=>{
    bts.click((e)=>{
        // switch(bts[i].innerHTML){
        switch($(e.target).html()){
            case '=':
                // resultObj2.value = num;
                resultObj2.val(num);
                op = undefined;
                break;
            case '+':
            case '-':
                // op = bts[i].innerHTML;
                op = $(e.target).html();
                break;
            default :
                // resultObj2.value = bts[i].innerHTML;
                resultObj2.val($(e.target).html());
                if(op == '+') {
                    // num += parseInt(resultObj2.value) //문자->정수
                    num += parseInt(resultObj2.val())
                }else if(op == '-') {
                    // num -= parseInt(resultObj2.value) //문자->정수
                    num -= parseInt(resultObj2.val())
                }else {
                    // num = parseInt(resultObj2.value) //문자->정수
                    num = parseInt(resultObj2.val())
                }
        }
        // console.log(bts[i].innerHTML, num)
        console.log($(e.target).html(), num)
    })
    //} //end for

    //DOM트리에서 all checkbox 객체 찾기
    // let chkAllObj = document.querySelector('fieldset.all>input[type=checkbox]')
    let chkAllObj = $('fieldset.all>input[type=checkbox]')

    //DOM트리에서 one,two,three checkbox 객체 찾기
    // let chkObjs = document.querySelectorAll('fieldset.each>input[type=checkbox]')
    let chkObjs = $('fieldset.each>input[type=checkbox]')

    //---all checkbox객체에서 클릭되었을 때 할 일 START---
    // chkAllObj.addEventListener('click', (e)=>{
    chkAllObj.click((e)=>{
        $(chkObjs).prop('checked',
                $(e.target).prop('checked')
        )
    })
    //---all checkbox객체에서 클릭되었을 때 할 일 END---
    
    //---차량 대분류를 선택했을 때 할일 START---
    // let carTypeObj = document.querySelector('div.car>select.type'); //대분류
    let carTypeObj = $('div.car>select.type') //대분류

    // let carType2Obj = document.querySelector('div.car>select.type2'); //중분류
    let carType2Obj = $('div.car>select.type2') //중분류
    
    // carTypeObj.addEventListener('click',() =>{
    carTypeObj.click(()=>{
        console.log('clicked')
    })
    
    // carTypeObj.addEventListener('change',(e) =>{
    carTypeObj.change((e)=>{
        // console.log(e.target.value, 'changed')
        console.log($(e.target).val(), 'changed')

        let type2;
        // switch(e.target.value) {
        switch($(e.target).val()) {
            case 'sedan':
                type2 = [
                    {name: '쏘나타', id : 'sonata'},
                    {name:'더 뉴 아반테', id: 'avante'},
                    {name:'디 올 뉴 그랜저', id: 'grandure'},
                    {name:'디 올 뉴 그랜저Hybrid', id: 'hybrid'}
                ]
                // carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.html('<option>선택하세요</option>')
                // carType2Obj.innerHTML += '<option value="'+ type2[0].id +'">' + type2[0].name + '</option>'
                carType2Obj.html(carType2Obj.html()
                                + '<option value="'+ type2[0].id +'">' + type2[0].name + '</option>')
                // carType2Obj.innerHTML += '<option value="'+ type2[1].id +'">' + type2[1].name + '</option>'
                carType2Obj.html(carType2Obj.html()
                                + '<option value="'+ type2[1].id +'">' + type2[1].name + '</option>')
                // carType2Obj.innerHTML += `<option value="${type2[2].id}">${type2[2].name}</option>`
                carType2Obj.html(carType2Obj.html()
                + `<option value="${type2[2].id}">${type2[2].name}</option>`)
                // carType2Obj.innerHTML += `<option value="${type2[3].id}">${type2[3].name}</option>`
                carType2Obj.html(carType2Obj.html()
                + `<option value="${type2[3].id}">${type2[3].name}</option>`)
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            case 'suv':
                type2 = [
                    {name: '팰리세이드', id : 'palisade'},
                    {name:'베뉴', id: 'venue'},
                    {name:'코나', id: 'kona'}
                ]
                carType2Obj.html('<option>선택하세요</option>')
                type2.forEach((value)=>{
                    carType2Obj.html(carType2Obj.html()
                    + `<option value="${value.id}">${value.name}</option>`)
                })

                // for (let i=0; i<type2.length;i++){
                //     carType2Obj.innerHTML += `<option value="${type2[i].id}">${type2[i].name}</option>`
                // }
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            case 'truck':
                type2 = ['선택하세요', '마이티', '파비스', '엑시언트', '엑시언트수소트럭'];
                
                //지우기
                carType2Obj.empty();

                type2.forEach((value)=>{//type2의 값(value)을 0번인덱스부터 꺼내온다
                    // let optionObj = document.createElement('option') //<option> 생성
                    let optionObj = $('<option>') //<option> 생성

                    // let txtObj = document.createTextNode(value) //텍스트 노드에 type2 배열의 값 넣기
                    // optionObj.appendChild(txtObj) //위에서 생성한 <option>에 텍스트 노드의 값 넣기
                    optionObj.text(value)

                    // carType2Obj.appendChild(optionObj)
                    carType2Obj.append(optionObj)
                })
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            default: //중분류의 display => none
                // carType2Obj.style.display = 'none'
                carType2Obj.hide()
        }
        
    })
    //---차량 대분류를 선택했을 때 할일 END---
    
    //--입력란에 키보드입력할 때 할 일 START--
    //DOMkeyboard입력요소 객체 찾기
    // const txtObj = document.querySelector('div.keyboard>input[type=text]')
    const txtObj = $('div.keyboard>input[type=text]')

    // txtObj.addEventListener('keyup', (e)=>{
    txtObj.keyup((e)=>{
        // console.log(e.key, e.target.value)
        console.log(e.key, $(e.target).val())
        if(e.key == 'Enter') {
            alert('Enter를 입력했습니다')
        }else {
            // e.target.value = e.target.value.toUpperCase()
            $(e.target).val().toUpperCase()
        }
    })
    //--입력란에 키보드입력할 때 할 일 END--


    //--전송버튼 클릭할 때 할 일 START--
    // const btsubmitObj =document.querySelector('div.form>form>button')
    const btsubmitObj = $('div.form>form>button')

    //TODO : 콘솔에 '전송버튼이 클릭되었습니다' 출력
    // btsubmitObj.addEventListener('click', ()=>{
    btsubmitObj.click( ()=>{
        alert("전송버튼이 클릭되었습니다")
    })
    //--전송버튼 클릭할 때 할 일 END--

    //--폼의 submit이벤트 발생할떄 할 일 START--
    //전송 시에 하고 싶은 일은 form의 submit 이벤트에 처리는 것 권장
    const formObj = $('div.form>form')

    // formObj.addEventListener('submit', (e) =>{
    formObj.submit((e) =>{
        alert("submit이벤트가 발생했습니다")

        // e.preventDefault()
        return false //e.preventDefault()와 같다
    })

    //--폼의 submit이벤트 발생할떄 할 일 END--

    //--a객체의 click이벤트 발생할 때 할 일 START--
    // const linkDivObj = document.querySelector('div.link')
    const linkDivObj = $('div.link')
    // linkDivObj.addEventListener('click', (e)=>{
    linkDivObj.click((e)=>{
        $(e.target).css('background-color','blue')
    })
    
    // const aObj = document.querySelector('div.link>a')
    const aObj = $('div.link>a')
    // aObj.addEventListener('click', (e)=>{
    aObj.click((e)=>{
        this.alert('링크 클릭')

        // e.preventDefault() //기본 이벤트처리를 막아라
        // e.stopPropagation() //이벤트 전파를 중지한다
        return false // e.preventDefault() & e.stopPropagation() 를 함께 막음
    })
    //--a객체의 click이벤트 발생할 때 할 일 END--


})
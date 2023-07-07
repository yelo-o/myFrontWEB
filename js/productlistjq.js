$(() => {
    //--상품목록 얻기 START--

    //요청URL : http://localhost:8888/back/productlist
    //요청방식 : GET
    //요청전달데이터 없음

    //응답형식 : JSON
    //응답성공 데이터는 js객체
    $.ajax({
        url: 'http://localhost:8888/back/productlist',
        method: 'get',
        success: (responseObj) => { //자바스크립트 객체
            // console.log(responseObj)
        
            const productOriginObj = $('div.productlist>div.product').first() //원본
            responseObj.forEach((r) => {
                let productCloneObj = productOriginObj.clone() //복제

                productCloneObj.addClass(r.prodNo) //복제본 클래스속성값 추가
                productOriginObj.parent().append(productCloneObj) //복제본 추가
        
                productCloneObj.find('img').attr('src', `../images/${r.prodNo}.jpg`).attr('alt', r.prodNo) //'ul>li>img' 찾는것과 같음
                productCloneObj.find('ul>li>span').html(r.prodName) //복제본 상품명
                productOriginObj.parent().append(productCloneObj) //복제본 추가
        
            })
        
            productOriginObj.hide()

            //--상품클릭할 때 할일 START-- $.deferred
            const divProductObj = $('div.product')
            console.log(divProductObj.length)
            //--상품클릭할 때 할일 END--
        }
    })

    //front와 back간의 서로 응답형식에 대해 약속해야 함
    // const responseObj = [
    //     { prodNo: 'C0001', prodName: '아이스 아메리카노', prodPrice: 2000 },
    //     { prodNo: 'C0002', prodName: '따뜻한 아메리카노', prodPrice: 1500 },
    //     { prodNo: 'C0003', prodName: '사케라또 아포가토', prodPrice: 3000 }
    // ]

    // const productOriginObj = $('div.productlist>div.product').first() //원본

    // // let productCloneObj = productOriginObj.clone() //복제
    // responseObj.forEach((r) => {

    //     let productCloneObj = productOriginObj.clone() //복제
    //     productCloneObj.addClass(r.prodNo) //복제본 클래스속성값 추가
    //     productOriginObj.parent().append(productCloneObj) //복제본 추가

    //     productCloneObj.find('img').attr('src', `../images/${r.prodNo}.jpg`).attr('alt', 'r.prodNo') //'ul>li>img' 찾는것과 같음
    //     productCloneObj.find('ul>li>span').html(r.prodName) //복제본 상품명
    //     productOriginObj.parent().append(productCloneObj) //복제본 추가

    // })

    // productOriginObj.hide()

    // productCloneObj.addClass(responseObj[0].prodNo) //복제본 클래스속성값 추가
    // productOriginObj.parent().append(productCloneObj) //복제본 추가

    // productCloneObj.find('img').attr('src', `../images/${responseObj[0].prodNo}.jpg`).attr('alt','responseObj[0].prodNo') //'ul>li>img' 찾는것과 같음
    // productCloneObj.find('ul>li>span').html(responseObj[0].prodName) //복제본 상품명
    // productOriginObj.parent().append(productCloneObj) //복제본 추가

    //--상품목록 얻기 END--

    
})


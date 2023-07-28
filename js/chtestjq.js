$(()=>{
    const chkbox = $('input');
    const btn = $('button');

    chkbox.change(()=>{
        if (chkbox.is(":checked")) {
            alert("체크박스 체크함")
            btn.attr("disabled",false)
        } else {
            alert("체크박스 해제함")
            btn.attr("disabled",true)
        }
    })
})
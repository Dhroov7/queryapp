$(function () {
    let productName = $('#productName')
    let productqualification = $('#productqualification')
    let productpercentage = $('#productpercentage')
    let productemail = $('#productemail')
    let contact = $('#contact')
    let skills =  $('#skills')
    
    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(),
            productqualification.val(),
            productpercentage.val(),
            productemail.val(),
            contact.val(),
            skills.val(),
            console.log(productName.val() + productqualification.val() + productpercentage.val() + productemail.val() + contact.val() + skills.val()),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )


    })

})
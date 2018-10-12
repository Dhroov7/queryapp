function fetchProducts (done) {
    $.get('/api/queries', function (data) {
        done(data)
    })
}

function addProduct (name, qual, per, email , nu ,skills, done) {
    $.post('/api/queries', {
        name: name,
        qualifiaction: qual,
        percentage: per,
        email: email,
        number: nu,
        skills: skills,
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-4 card mx-auto mt-5 p-4">
        <h4 class="product-name">${product.name}</h4>
        <h4 class="product-qualification">${product.qualification}</h4>
        <h4 class="product-percentage">${product.percentage}</h4>
        <div class="row">
            <div class="col m-3 p-3">
                <b> ${product.email}</b>
            </div>
            <h4 class="product-number">${product.number}</h4>
        </div>
        <h4 class="product-skills">${product.skills}</h4>
    </div>`
        )
}
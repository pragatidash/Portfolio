var singleProductTemplate;

var mainPageLoaderFunction = () => {
 // Load template for one individual product;
 $.ajax({
   url: 'templates/productTemplate.htm',
   method: 'GET',
   data: {},
   success: (response) => {
    singleProductTemplate = Handlebars.compile(response);
   }
 })
}
mainPageLoaderFunction();

var loadSelectedPage = (pageType) => {
    var pageTemplateUrl = '';
    switch(pageType){
        case 'login':
            pageTemplateUrl = 'templates/login.htm'
            break;
        case 'signup':
            pageTemplateUrl = 'templates/newSignup.htm'
            break;
        case 'frgtPwd':
            pageTemplateUrl = 'templates/forgotPwd.htm'
            break;
        case 'pdetails':
            pageTemplateUrl = 'templates/productDetails.htm'
            break;    
    }
    loadPageTemplate(pageTemplateUrl , pageType);
}

var loadPageTemplate = (templateUrl, pageType) => {
    $.ajax({
        url: templateUrl,
        method: 'GET',
        data: {},
        success: (response) =>{
            // console.log("response");
            // console.log(response);
            $(".pageMainBlock").html('');
            $(".pageMainBlock").append(response);
            if (pageType == 'login') {
                getCaptcha();
            }
            else if (pageType == 'pdetails') {
                loadProductDetailsOnPage();
            }
        }
    })
}

var loadProductDetailsOnPage = () => {

    $.ajax({
        url: '/get/productDetails',
        method: 'GET',
        dataType: 'JSON',
        data: {},
        success: (productDetails) => {
            productDetails.forEach(productItem => {

                $("#productDetailsContainer").append(singleProductTemplate(productItem));
            });
        },
        error: (err) => {
            console.log(err);
        }
    })
}

loadSelectedPage('login');
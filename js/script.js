const errorMSG = $('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');

function replaceErrorText(e) {
    // console.log(errorMSG);

    if (errorMSG) {
        errorMSG.innerText = 'ups, it seems you have run out of coins from your Lansweeper budget. If you want more coins, pls contact Georgina Rozario. You will be invoiced for these coins.'
        // console.log(errorMSG.innerText);
    } else {
        // Nothing
    }
}

$(document).ready(replaceErrorText);
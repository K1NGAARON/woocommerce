const errorMSG = $('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');

function replaceErrorText(e) {

    if (errorMSG) {
        errorMSG.innerText = 'ups, it seems you have run out of coins from your Lansweeper budget. If you want more coins, pls contact Georgina Rozario. You will be invoiced for these coins.'
    } else {
        // Nothing
    }
}


function accountBalance(e) {
    const balanceTarget = $('.mycred-my-balance-wrapper div');
    const html = `
        <p>
            Balance: 
        </p>
    `;

    console.log(balanceTarget);
    console.log(html);

    balanceTarget.prepend(html);
};


$(document).ready(function() {
    replaceErrorText();
    accountBalance();
});
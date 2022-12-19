function replaceErrorText(e) {
    const errorMSG = document.querySelector('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');

    if (errorMSG) {
        errorMSG.innerText = 'Oops, it seems you have run out of coins from your Lansweeper budget. If you want more coins, pls contact Georgina Rozario. You will be invoiced for these coins.';
        
    } else {
        // Nothing
    }

    errorMSG.classList.add('active');
}

function accountBalance(e) {
    const balanceTarget = $('.mycred-my-balance-wrapper div');
    const html = `
        <p>
            Balance: 
        </p>
    `;

    balanceTarget.prepend(html);
};

function sizeChartText(e) {
    const title = document.querySelector('.description_tab a');

    if (title) {
        title.innerHTML = 'Size Chart';
    }
}

$(document).ready(function() {
    accountBalance();
    sizeChartText();
});

setTimeout(function() {
    replaceErrorText();
}, 1000);
function replaceErrorText(e) {
    const errorMSG = document.querySelector('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');

    if (errorMSG) {
        errorMSG.innerText = 'TO BE ADDED';
        
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

$(document).ready(function() {
    accountBalance();
});

setTimeout(function() {
    replaceErrorText();
}, 1000);
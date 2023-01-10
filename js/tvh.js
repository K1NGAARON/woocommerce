// FAQ SCRIPT
const target = document.querySelector('.wrapper');
const content = [
    {
        question: 'How to use the credits / How to place an order?',
        answer: "Select the item you want to have, (choose your size), change your desired quantity and click “add to cart”. Go to checkout, fill in the required information. On the right you will see the total value of your order and your available balance. If you have enough, you can place your order. If you don't have enough balance, this will be shown.",
    },
    {
      question: 'What is the value of the credits?',
      answer: "Every employee gets 1085 yearly credits to purchase the products that they desire. It is not possible to purchase anymore products if you run out of credits. "
    },
    {
        question: 'Forgot my password?',
        answer: 'Click on “Lost your password?” on the login page. Enter your work email address and you will receive an email to reset your password.',
    },
    {
        question: 'Where to find how many credits I (still) have?',
        answer: 'Credits are visible in your dashboard under “Balance”. It is also visible in Checkout just below the total value of your order.',
    },
    {
        question: 'Is there an expiry date of the credits?',
        answer: 'There is no expiration date on the credits.',
    },
    {
        question: 'Will I receive a confirmation?',
        answer: 'When your order is placed, you will receive an order confirmation by email. It might be possible that this confirmation is in your spam folder.',
    },
    {
        question: 'Can I track my order?',
        answer: 'If your items are being shipped to the office, you cannot track them. If your items are an individual shipment, being shipped to your home address, you will receive an email with the tracking number.',
    }
];

function buildFAQ() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="question">
                <h5>
                    ${content[i].question}
                </h5>
                <p>
                    ${content[i].answer}
                </p>
            </div>
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};


// ACCOUNT BALANCE SCRIPT
function accountBalance(e) {
    const balanceTarget = $('.mycred-my-balance-wrapper div');
    const html = `
        <p>
            Balance: 
        </p>
    `;

    balanceTarget.prepend(html);
};

// Add ETA to thank you page
function deliveryDate(e) {
    const deliveryTarget = document.querySelector('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received');

    const html = `
        <p>
            Estimated delivery date: xx/xx/xxxx
        </p>
    `;

    deliveryTarget.insertAdjacentHTML("beforeend", html);
};


function replaceErrorText(e) {
    const errorMSG = document.querySelector('.woocommerce-notice.woocommerce-notice--info.woocommerce-info');

    if (errorMSG) {
        errorMSG.innerText = "Oops, it seems you don't have enough coins to complete this purchase.";
        
    } else {
        // Nothing
    }

    errorMSG.classList.add('active');
}

$(document).ready(function() {
    if (target) {
        buildFAQ();
    }
});

$(document).ready(function() {
    accountBalance();
    deliveryDate();
});

setTimeout(function() {
    replaceErrorText();
}, 1000);
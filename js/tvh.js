// FAQ SCRIPT
const target = document.querySelector('.wrapper');
const content = [
    {
        question: "Who to contact in case of questions, returns, faulty items, sizing, cancellations, logistical, shop related questions?",
        answer: "Please contact the Sunday customer service team by sending a mail to shop-support@wardrobe.teamsunday.com"
    },
    {
        question: "Forgot my password?",
        answer: "Click on “Lost your password?” on the login page. Enter your work e-mail address and you will receive an e-mail to reset your password."
    },
    {
        question: "How to use the credits / How to place an order?",
        answer: "Select the item you want, (you don't need to select your size as we already have them), change your desired quantity and click “add to cart”. Go to checkout and fill in the required information. On the right, you will see the total value of your order and your available balance. If this balance is sufficient, you can place your order. If your balance is insufficient, this will be indicated."
    },
    {
        question: "What is the value of the credits?",
        answer: "Every employee receives 1085 credits to purchase the products that they want. It isn’t possible to purchase more items if you use up your credits."
    },
    {
        question: "Do I have to spend all of my credits in one go?",
        answer: "You don’t have to use up all your credits at once. You can place several orders, as long as you have credits, or you can use your credits in one go."
    },
    {
        question: "Where can I check how many credits I (still) have?",
        answer: "Credits are visible in your dashboard under “Balance”. They are also visible during checkout, just below the total value of your order."
    },
    {
        question: "Do the credits have an expiry date?",
        answer: "The credits don’t have an expiry date."
    },
    {
        question: "When will I receive new credits?",
        answer: "The granted credits should offer you 2 years of joy in TVH-branded clothing. (credits are calculated on a standard package of 5 shirts, 5 polo shirts and 3 types of  jacket)"
    },
    {
        question: "Is there a purchase limit?",
        answer: "You can only purchase clothing provided that you have credits. If the balance of your credits is insufficient, you won’t be able to place an order."
    },
    {
        question: "What payment methods are available? (only with credits, not with money)",
        answer: "You can only purchase the clothing using your credits. It is not possible to buy clothing by means of other payment methods."
    },
    {
        question: "How does the sizing work?",
        answer: "Given you had a fitting with Sunday at HQ in Waregem, your size has been saved on record, so you won’t need to choose the size when placing your first order."
    },
    // {
    //     question: "How to change the sizing linked to the account?",
    //     answer: "Please contact the Sunday customer service team by sending a mail to shop.wardrobe@teamsunday.com"
    // },
    {
        question: "When are we expected to wear the branded clothing?",
        answer: "It is recommended that TVH sales people wear the TVH-branded clothing during every physical customer contact."
    },
    {
        question: "What to wear during trade fairs?",
        answer: "You have the freedom to choose your favourite item in your preferred colour per sales region, as long as the whole team wears the same item and the same colour during the trade fairs."
    },
    {
        question: "Who can wear the branded clothes?",
        answer: "Never hand the clothes to customers or others, the clothes identify you as a representative of TVH. Don’t lend or pass them on to others."
    },
    // {
    //     question: "Can I cancel or change an online order?",
    //     answer: "Please contact the Sunday customer service team by sending a mail to shop.wardrobe@teamsunday.com"
    // },
    // {
    //     question: "How can I return an order?",
    //     answer: "Please contact the Sunday customer service team by sending a mail to shop.wardrobe@teamsunday.com"
    // },
    // {
    //     question: "Who takes care of the returns?",
    //     answer: "Please contact the Sunday customer service team by sending a mail to shop.wardrobe@teamsunday.com"
    // },
    // {
    //     question: "What to do in case of an incorrect or faulty item?",
    //     answer: "Please contact the Sunday customer service team by sending a mail to shop.wardrobe@teamsunday.com"
    // },
    {
        question: "Where to ship my order to?",
        answer: "When creating your account please enter the delivery address. This can either be the address of the affiliate (if one is available in your country) or an address of your choice. If choosing an address that is not an affiliate, please make sure someone is available to receive the package."
    },
    {
        question: "Will I receive a confirmation?",
        answer: "When your order is placed, you will receive an order confirmation via e-mail. Please check your spam folder if you don’t receive this confirmation."
    },
    {
        question: "Can I track my order?",
        answer: "If your items are being shipped to the office, you can’t track them. If your items come as an individual shipment and will be shipped to your home address, you will receive an e-mail with the tracking number."
    },
    {
        question: "What is the expected shipping date?",
        answer: "Mid-april"
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
        target.insertAdjacentHTML("beforeend", template);
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
            We’ll reach out shortly with more information on the delivery timeline & logistics.
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
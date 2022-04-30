function showAlert(orderId, token, amount, win) {
    console.log("Order Id: "+ orderId);
    console.log("Token: "+ token);
    console.log("Amount: "+ amount);
    console.log(win);
    console.log(window);
    var config = {
                        "root": "",
                        "flow": "DEFAULT",
                        "data": {
                            "orderId": orderId, /* update order id */
                            "token": token, /* update token value */
                            "tokenType": "TXN_TOKEN",
                            "amount": amount /* update amount */
                        },
                        "handler": {
                            "notifyMerchant": function(eventName,data){
                            console.log("notifyMerchant handler function called");
                            console.log("eventName => ",eventName);
                            console.log("data => ",data);
                            if (eventName == 'SESSION_EXPIRED') {
                                    alert("Your session has expired!!");
                                    location.reload();
                                }
                            }
                            }
                        }

    if (window.Paytm && window.Paytm.CheckoutJS) {
                     // initialze configuration using init method

                     console.log( window.Paytm);
                        console.log("");
                     window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                         console.log('Before JS Checkout invoke');
                         // after successfully update configuration invoke checkoutjs
                         window.Paytm.CheckoutJS.invoke();
                     }).catch(function onError(error) {
                         console.log("Error => ", error);
                     });
                 }
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}
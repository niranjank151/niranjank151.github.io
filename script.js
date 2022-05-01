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

    if(window.Paytm && window.Paytm.CheckoutJS){
        window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
            // initialze configuration using init method 
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                // after successfully update configuration invoke checkoutjs
                window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error){
                console.log("error => ",error);
            });
        });
    } 
}
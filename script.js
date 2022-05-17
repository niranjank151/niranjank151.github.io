async function getPaytmInvoke(orderId, token, amount, win) {
    console.log({token});
    console.log("Order Id: "+ orderId);
    console.log("Token: "+ token);
    console.log("Amount: "+ amount);
    console.log(win);
    console.log(window);
    //window.dartFunc("Sent from Script.js file");

    var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
            "orderId": orderId,
            "token": token,
            "tokenType": "TXN_TOKEN",
            "amount": amount
        },
        "handler": {
            "notifyMerchant": function (eventName, data) {
                if (eventName == 'SESSION_EXPIRED') {
                    //alert("Your session has expired!!");
                    console.log("Session Exprired");
                    console.log(data);
                    //location.reload();
                }
                else{
                    console.log("Something went wrong");
                    console.log(eventName);
                    console.log(data);
                    return data;
                }
            },
            "transactionStatus":function(data){
                console.log("payment status ", data);
              }
        }
    };
    /*console.log("After config");
    console.log(window);
    console.log(window.Paytm);
    console.log(window.Paytm.CheckoutJS);*/
    console.log("Win pbject");
    console.log(win);
    console.log(win.Paytm);
    console.log(win.Paytm.CheckoutJS);
    if(win.Paytm && win.Paytm.CheckoutJS){
        console.log("window.Paytm.CheckoutJS");
        console.log(win.Paytm.CheckoutJS);
        console.log("window.Paytm.CheckoutJS.onLoad");
        win.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            console.log("window.Paytm.CheckoutJS.init");
            win.Paytm.CheckoutJS.invoke();
        }).catch(function onError(error){
            console.log("error => ",error);
        });
        console.log("window.Paytm");
        //await win.Paytm.CheckoutJS.init(config);
        //await win.Paytm.CheckoutJS.invoke();
        /*win.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            // after successfully update configuration invoke checkoutjs
             console.log("window.Paytm.CheckoutJS.init");

            win.Paytm.CheckoutJS.invoke();
        }).catch(function onError(error){
            console.log("error => ",error);
        });*/

        /*window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
            console.log("window.Paytm.CheckoutJS.init");
            await win.Paytm.CheckoutJS.init(config);
            await win.Paytm.CheckoutJS.invoke();
        });*/
    }else{
        console.log("Unable to load Paytm checkout JS");
    }
    /*if(window.Paytm && window.Paytm.CheckoutJS){
        window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
            // initialze configuration using init method 
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                // after successfully update configuration invoke checkoutjs
                window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error){
                console.log("error => ",error);
            });
        });
    }*/
}
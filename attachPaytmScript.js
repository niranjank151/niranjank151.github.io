async function injectPaytmScript(){
    const script = document.createElement('script');
    script.type = "application/javascript";
    //script.src= "https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/EIIREC16971590849704.js";
    script.src= "https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/Qmfwwc87675780583552.js";
    script.crossorigin="anonymous";
    console.log("before ascript appned");
    document.body.appendChild(script);
    console.log("After ascript appned");
    return true;
}
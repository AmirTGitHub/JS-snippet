/////////////////////-------------> regex to validate the email<-------////////////////////////
const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/////////////////////-------------> regex to validate UK phone number<-------////////////////////////
const phoneValidation = phone => {
  var re = /\s*(([+](\s?\d)([-\s]?\d)|0)?(\s?\d)([-\s]?\d){9}|[(](\s?\d)([-\s]?\d)+\s*[)]([-\s]?\d)+)\s*/;
  return re.test(phone.toString()) && phone.toString().length < 13;
};

/////////////////////-------------> regex to validate the UK postcode <-------////////////////////////

const postcodeValidation = post => {
  var re = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/;
  return re.test(post);
};


/////////////////////-------------> regex to validate the us phone number<-------////////////////////////

const usPhoneValidation = phone => {
  var re = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  return (
    re.test(phone.toString()) &&
    phone.toString().length >= 10 &&
    phone.toString().length < 13
  );
};

/////////////////////-------------> regex to change the Uk postcode to uppercase with corect position space<-------////////////////////////

[--UK--postCode--].replace(/^(.*)(\d)/, "$1 $2").toUpperCase()



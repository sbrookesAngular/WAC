//document.getElementById() shortener
function _(x){

    return document.getElementById(`${x}`);
    
}

//document.getElementByClassName() shortener
function _c(x){

    return document.getElementsByClassName(`${x}`);

}

//I built from scratch - Bootsrap accordion issues due to needing unique aatributes
//that are not easily rendered with *ngIf
function accordion(x){

    let getState = x.nextElementSibling.getAttribute("style");

    function setState(a,b){

      x.nextElementSibling.setAttribute("style", `display: ${a};`);
      x.nextElementSibling.setAttribute("class", b);

    }

    if(getState == 'display: none;'){

      setState("block", "accordionPanel fadeIn");

    }else{

      setState("none", "accordionPanel");
      
    }

  }
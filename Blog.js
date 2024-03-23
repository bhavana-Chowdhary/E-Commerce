const getData = (isDisplay) => {
    if (isDisplay == true) {
      document.getElementById("notp").classList.add("headClass");
      document.getElementsByClassName("on")[0].classList.add("don")
      document.getElementsByClassName("on")[1].classList.remove("don")
    }
    else {
      document.getElementById("notp").classList.remove("headClass");
      document.getElementsByClassName("on")[0].classList.remove("don")
      document.getElementsByClassName("on")[1].classList.add("don")
    }
  }
window.onscroll = () => {
  let vertical_position = 0;
  if (pageYOffset) vertical_position = pageYOffset;
  else if (document.documentElement.clientHeight)
    vertical_position = document.documentElement.scrollTop;
  else if (document.body) vertical_position = document.body.scrollTop;
  container.style.bottom = vertical_position * -1 + "px";
};

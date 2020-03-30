let slide  = []
slide[0] = document.getElementById("img1");
slide[1] = document.getElementById("img2");
slide[2] = document.getElementById("img3");
slide[3] = document.getElementById("img4");
slide[4] = document.getElementById("img5");

let currentImage = 0;

function prev()
{
  if(currentImage==0)
  {
  slide[currentImage].style.display = 'none'
  slide[slide.length-1].style.display = 'block'
  currentImage = slide.length-1;
  }
  else
  {
      slide[currentImage].style.display = 'none'
      slide[currentImage-1].style.display = 'block'
      i--;
  }
}

function next()
{   
  if( currentImage == slide.length-1)
  {
      slide[currentImage].style.display = 'none'
      slide[0].style.display = 'block'
      currentImage = 0;
  }
  else if(currentImage < slide.length)
  {
      slide[currentImage].style.display = 'none'
      slide[currentImage+1].style.display = 'block'
      currentImage++;
  }
}

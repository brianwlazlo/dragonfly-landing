var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
  if (e.target.classList.contains('active')) return;
  
  featured.style.backgroundImage = e.target.style.backgroundImage;
  
  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains('active'))
      galleryItems[i].classList.remove('active');
  }
  
  e.target.classList.add('active');
}

function galleryWrapLeft() {
  var first = gallery.children[0];
  gallery.removeChild(first);
  gallery.style.left = -itemWidth + '%';
  gallery.appendChild(first);
  gallery.style.left = '0%';
}

function galleryWrapRight() {
  var last = gallery.children[gallery.children.length - 1];
  gallery.removeChild(last);
  gallery.insertBefore(last, gallery.children[0]);
  gallery.style.left = '-23%';
}

function moveLeft() {
  left = left || 0;

  leftInterval = setInterval(function() {
    gallery.style.left = left + '%';

    if (left > -itemWidth) {
      left -= scrollRate;
    } else {
      left = 0;
      galleryWrapLeft();
    }
  }, 1);
}

function moveRight() {
  //Make sure there is element to the leftd
  if (left > -itemWidth && left < 0) {
    left = left  - itemWidth;
    
    var last = gallery.children[gallery.children.length - 1];
    gallery.removeChild(last);
    gallery.style.left = left + '%';
    gallery.insertBefore(last, gallery.children[0]);  
  }
  
  left = left || 0;

  leftInterval = setInterval(function() {
    gallery.style.left = left + '%';

    if (left < 0) {
      left += scrollRate;
    } else {
      left = -itemWidth;
      galleryWrapRight();
    }
  }, 1);
}

function stopMovement() {
  clearInterval(leftInterval);
  clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveRight);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveLeft);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
  var images = [
    '../assets/images/interior/bedroom3-fullsizebd.jpeg',
    '../assets/images/interior/bedroom2-singlebd.jpeg',
    '../assets/images/interior/livingRoom-current.jpeg',
    '../assets/images/interior/livingRoom-kayakPaddlesOverSofa.jpeg',
    '../assets/images/interior/master1.png',
    '..//assets/images/interior/bathroom-standupShower.jpeg',
    '../assets/images/interior/bathroom2-slidingShowerDoor.png',
    '../assets/images/interior/bedroom1-singlebd.jpeg',
    '../assets/images/dock-water/brightSunReflection-overWaterandDock.jpeg',
    '../assets/images/dock-water/fixedDockChairsWithTable-fromDock-towardsHouse.jpeg',
    '../assets/images/dock-water/rainbow-over-waterAndDock.jpeg',
    '../assets/images/dock-water/kayak-on-water-lookingAtHorizon.jpeg',
    '../assets/images/dock-water/sunrise-threeDockCharisForeground.jpeg',
    '../assets/images/dock-water/sunset-fromBackyard-towardsWater.jpeg',
    '../assets/images/dock-water/treelineFromWater-fallColors.jpeg',
    '../assets/images/exterior/backyard-fall-towardsHouse-sidewalk.jpeg',
    '../assets/images/exterior/front-yard-looking-east-northsideofHouse.jpeg',
    '../assets/images/exterior/arial-wideshot-HigherOverWater-towardsHouse.png',
    '../assets/images/exterior/arial-wideshot-lookingdown-backyard-water-dock.png',
    '../assets/images/signs/randomWay-streetSign.jpeg'
  ];
  
  //Set Initial Featured Image
  featured.style.backgroundImage = 'url(' + images[0] + ')';
  
  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
    galleryItems[i].addEventListener('click', selectItem);
  }
})();

/*
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/lips.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/night.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/table.jpg'
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/car.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/city.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/deer.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/flowers.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/food.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/guy.jpg',
    'https://s3-us-west-2.amazonaws.com/forconcepting/800Wide50Quality/landscape.jpg',
*/
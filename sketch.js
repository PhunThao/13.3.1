/*
//Tuoi-hoc-tro-
// Huỳnh Nguyễn Gia Khang, 210218, khang.huynh.210218@student.fulbright.edu.vn
// Nguyễn Thị Phương Thảo, 210268, thao.nguyen.210268@student.fulbright.edu.vn 
*/ 

//Defining variables
let balloons = []; // Create balloons
let distractionChance = 0.4; // %change distract- pop up links will appear 
let distractionLinks = [
  "https://archive.org/details/the-pillow-book/page/n4/mode/1up",
  "http://gitmoma.org/artists/7901-an-my-le",
  "https://luatvietnam.vn/tin-phap-luat/luat-nghia-vu-quan-su-230-17913-article.html",
  "https://tamanhhospital.vn/cac-bien-phap-tranh-thai-an-toan/",
  "https://fulbright.edu.vn/vi/tuyen-sinh/hoc-bong/?utm_source=GGSearch&utm_medium=SEM&utm_campaign=29SpringMarCom&utm_term=BrandedKWs&gad_source=1&gclid=Cj0KCQjwhMq-BhCFARIsAGvo0Kf0_lMYE2Q9zyoZGgKxbz6yKv_iDv0hMJNjh-PeKbTAmC84HM8LZyEaAjTcEALw_wcB/",
  "https://www.moma.org/research/conservation/matters-in-media-art", 
  "https://spcollege.libguides.com/c.php?g=254383&p=1695452",
  "https://vnexpress.net/danh-chong-toi-tap-vi-anh-dam-noi-song-khong-hanh-phuc-4799035.html",
  "https://www.jstor.org/stable/26965514",
  "https://www.google.com/search?sca_esv=8ca7c5c78d795a81&sxsrf=AHTn8zq-TlKXKXppno1MpIL3G2vcUHCVCQ:1741920284180&q=Orange+and+Yellow&stick=H4sIAAAAAAAAAONgFuLQz9U3qEwxKVHi0U_XNzQ0qkyrMk1J0lLKTrbSL8ssLk3MiU8sKkFiZhaXWJXnF2UXL2IV9C9KzEtPVUjMS1GITM3JyS_fwcoIAJHQ6i9VAAAA&sa=X&sqi=2&ved=2ahUKEwj82o_exoiMAxVjxDgGHTz5AMoQgOQBegQIPxAM&biw=1422&bih=612&dpr=1.35",
  "https://www.youtube.com/watch?v=so8sB25IL4o",
  "https://quantrimang.com/cuoc-song/truyen-ma-ngan-185417",
  "https://cellphones.com.vn/sforum/phim-ngon-tinh-tong-tai",
  "https://www.crescentmall.com.vn/tenants/ovs",
  "https://s3.amazonaws.com/giin-web-assets/iris/assets/files/guidance/2019-12-12_IRIS-HT-Data%20Collection_R5.pdf",
  "https://genius.com/Lola-young-messy-lyrics",
  "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/",
  "https://matca.vn/khoa-hoc-nhiep-anh-nang-cao-cung-jamie-maxtone-graham/",
  "https://tuoitre.vn/co-gi-o-mang-den-thien-duong-hong-ma-ca-ngan-du-khach-ve-tham-20231231183607197.htm" ,
  "https://thienvu.com.vn/tuyen-tap-100-bai-hat-karaoke-nhac-tre-hay-thinh-hanh-nhat", 
  "https://www.vinmec.com/vie/bai-viet/dau-day-kinh-chan-phai-dieu-tri-nao-vi", 
  "https://www.vinmec.com/vie/bai-viet/dau-day-kinh-chan-phai-dieu-tri-nao-vi", 
  "https://www.google.com/search?kgmid=/m/07ydljn&hl=vi-VN&q=L%C6%B0+M%E1%BA%ABn+San&shndl=17&source=sh/x/kp/osrp/m5/4&kgs=a6e07bbf100b0670",
  "https://saveourseas.com/worldofsharks", "http://www.designishistory.com", 
  "https://wnfdiary.com/black-and-white-photography-vol-1/", 
  "https://afends.com/collections/fyb25-womens-jeans-pants/products/afends-womens-moss-hemp-denim-workwear-jean-authentic-blue-1", 
  "https://matca.vn/khoa-hoc-nhiep-anh-nang-cao-cung-jamie-maxtone-graham/", 
  "https://nhipcaudautu.vn/phong-cach-song/di-tim-gia-tri-cho-cong-dong-lgbt-3357185/", "https://tuoitre.vn/nha-trang-ong-trump-da-dat-ong-zelensky-vao-dung-vi-tri-20250312150728003.htm", 
  "https://vinwonders.com/vi/wonderpedia/news/mi-quang-ngon-o-sai-gon/", 
  "https://g.co/kgs/56W8u5M", 
  "https://wnfdiary.com/black-and-white-photography-vol-1/", 
  "https://en.m.wikipedia.org/wiki/Rashid_(name)",
  "https://beyblade.fandom.com/wiki/Hell_Kerbecs_BD145EWD",
  "https://beyblade.fandom.com/wiki/Cloud_Lyra_85SF",
  "https://en.m.wikipedia.org/wiki/Discman", 
  "https://cheapeststore.ru/product/267011589476",
  "https://nhathuocminhchau.com/mounjaro-25mg05ml-lilly-4-but",
  "https://javhiv.com",
  "https://www.maisonmargiela.com/en-us/",
  "https://ffern.co/?srsltid=AfmBOoruJ5-8YQOxSL_dI5Em949NUN8D_-o3cw2w2QEujkQsyqkYYYFp",
  "https://www.juliusroberts.co.uk",
  "http://socisdg.com/en/blog/what-would-happen-if-there-would-be-no-poverty-in-the-world/",
  "https://www.dafont.com/aisling.font?text=SUPER",
  "https://procreate.brushes.work/my-main-illustration-brushes/",
  "https://nettruyenvie.com/truyen-tranh/no-home/chuong-211",
  "https://tarot.com.vn/",
  "https://lyrics.vn/lyrics/18686-heaven.html",
  "https://youtu.be/ApbanRpMAwg?si=aI-3DuWI0PCag0eA",
  "https://www.youtube.com/watch?v=fKrTCGGEiWY&list=RDfKrTCGGEiWY&start_radio=1",
  "https://www.youtube.com/watch?v=ph1xFfBNp3Q",
  "https://www.youtube.com/watch?v=CB1Qygf8aes",
  "https://www.youtube.com/watch?v=NB5Vhip9SOc&list=PLJp6WIMKaI7zrpqYofh8CskCzxw90s2XB&index=3",
  "https://www.youtube.com/watch?v=EBCKDJG8EpI",
  "https://thanhlyhangcu.com/",
  "https://vnexpress.net/dau-dau-mung-cuoi-500-000-dong-thi-it-mot-trieu-lai-nhieu-4812764.html", 
  //input the distract link that we want it to appear, to simulate how distractions work on certain websites.
];

function setup() { 
    createCanvas(windowWidth, windowHeight); // Fullscreen canvas, fills the entire screen include browser window,...
    background(0); // Set background to black

    for (let i = 0; i < 10; i++) {   //A loop that runs 10 times, finish set up, will start with 10 balloons 
        balloons.push(new Balloon(random(width), random(height), random(-2, 2), random(-2, 2))); //Random initial positions, Random movement speeds
    }

    setInterval(addBalloon, 2000); // Add a new balloon every 2 seconds
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjust canvas when window resizes
    background(0); // Redraw background to avoid graphical glitches
}

function draw() {  //keeps running over and over,  runs at 60 FPS, it allows smooth movement
  background(0); // Keep the background black
  for (let balloon of balloons) { //loop processes each balloon, move and draw
    balloon.move(); // makes the balloon change position
    balloon.display(); // draw the balloon on the screen.
  }
}

function mousePressed() { //automatically called when the user clicks the mouse 
  for (let i = balloons.length - 1; i >= 0; i--) { // Check balloons from last to first. Ensuring all balloons are checked properly, make sure no balloon skipped) 
    if (balloons[i].isClicked(mouseX, mouseY)) { //Checking if a balloon was clicked
      if (random() < distractionChance) {
        let selectedLinks = [];
        for (let j = 0; j < 3; j++) {  // picks 3 random link
          selectedLinks.push(random(distractionLinks));
        }
        
        // Open links in a new tab if pop-ups are allowed
        selectedLinks.forEach(link => {
          let newTab = window.open(link, "_blank");
          if (!newTab) {
            window.open(link, "_blank");
          }
        });
      }
      balloons.splice(i, 1); // Remove balloon when clicked
      break; //ensures only one balloon is removed per click
    }
  }
}

function addBalloon() {
  balloons.push(new Balloon(random(width), random(height), random(-2, 2), random(-2, 2))); // Continuously add balloons
}

class Balloon { // defines the properties of each balloon.
  constructor(x, y, speedX, speedY) {
    this.x = x; // X position
    this.y = y; // Y position
    this.speedX = speedX; // Horizontal speed
    this.speedY = speedY; // Vertical speed
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.size = isMobile ? min(windowWidth, windowHeight) * 0.15 : min(windowWidth, windowHeight) * 0.09; // Balloon size, Bubbles automatically resize according to the screen
    this.color = color(random(255), random(255), random(255), 200); // Random color with some transparency 
  }

  move() { //Defines how it moves
    this.x += this.speedX; // Move horizontally
    this.y += this.speedY; // Move vertically
    if (this.x > width || this.x < 0) { // checks if the balloon reaches the right edge or the left edge.
      this.speedX *= -1; // if bounce off horizontal edges, making the balloon move in the opposite direction.
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1; // Bounce off vertical edges
    }
  }

  display() {  // How the balloon look like 
    fill(this.color); // Set fill color
    stroke(255); // White stroke to enhance visibility
    strokeWeight(2); 
    ellipse(this.x, this.y, this.size, this.size); // Draw the balloon
    
    // Add a subtle highlight effect for a realistic look
    fill(255, 255, 255, 150);
    noStroke();
    ellipse(this.x - this.size / 4, this.y - this.size / 4, this.size / 4, this.size / 4); //smaller ellipse offset slightly from the center,creates the effect of light reflecting on the balloon.
  }

  isClicked(px, py) { //Calculating distance from click to balloon center
    let d = dist(px, py, this.x, this.y); // Calculate distance from click to balloon
    return d < this.size / 2; // Check if inside balloon, balloon’s radius is this.size / 2.
  }
}

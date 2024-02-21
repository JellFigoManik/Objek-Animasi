function setup() {
    // put setup code here
    createCanvas(800,400);
   
    j = 0;
    y = 100;
}
  function draw() {
    background(110);
    
    // right
    // Face
    var y = 150 + 50 * Math.sin(PI/100*j)
    j+=1
    fill(7, 69, 19);
    ellipse(600, y, 200, 180);
    
    // Ears
    var y = 100 + 50 * Math.sin(PI/100*j)
    j+=1
    fill(80, 69, 19);
    ellipse(540, y, 50, 80);
    ellipse(660, y, 50, 80);
    
    // Eyes
    var y = 140 + 50 * Math.sin(PI/100*j)
    j+=1
    fill(255);
    ellipse(570, y, 40, 30);
    ellipse(630, y, 40, 30);
    fill(0);
    ellipse(570, y, 20, 20);
    ellipse(630, y, 20, 20);
    
    // Nose
    var y = 170 + 50 * Math.sin(PI/100*j)
    j+=1
    fill(69, 69, 19);
    ellipse(600, y, 40, 30);
    
    // Nostrils
    var y = 170 + 50 * Math.sin(PI/100*j)
    j+=1
    fill(0);
    ellipse(590, y, 5, 5);
    ellipse(610, y, 5, 5);
    
    // Mouth
    var y = 180 + 50 * Math.sin(PI/100*j)
    j+=1
    noFill();
    strokeWeight(2);
    arc(600, y, 30, 15, 0, PI);

    // left
    // Face
    fill(70, 69, 19);
    ellipse(200, 200, 200, 180);
    
    // Ears
    fill(80, 69, 19);
    ellipse(140, 150, 50, 80);
    ellipse(260, 150, 50, 80);
    
    // Eyes
    fill(255);
    ellipse(170, 190, 40, 30);
    ellipse(230, 190, 40, 30);
    fill(0);
    ellipse(170, 190, 20, 20);
    ellipse(230, 190, 20, 20);
    
    // Nose
    fill(69, 69, 19);
    ellipse(200, 220, 40, 30);
    
    // Nostrils
    fill(0);
    ellipse(190, 220, 5, 5);
    ellipse(210, 220, 5, 5);
    
    // Mouth
    noFill();
    strokeWeight(2);
    arc(200, 230, 30, 15, 0, PI);

  }
  
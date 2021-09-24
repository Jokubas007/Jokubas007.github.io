function drawSineAnimation(id, freq, counterStep, callback, initializeButtons) {
  let svg = document.getElementById(id);
  let origin = { 
      x: 50,
      y: 200
  };

  svg.innerHTML = `
    <defs>
      <marker
          id="arrowhead"
          markerWidth="5"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto">
          <polygon
              points="0 0, 5 3.5, 0 7"
              fill="#054d54"
          />
      </marker>
    </defs>
    <line 
      x1="0"
      y1="200"
      x2="700"
      y2="200"
      style="stroke:#054d54; stroke-width:2"
      marker-end="url(#arrowhead)"
    />
    <line 
      x1="50"
      y1="330"
      x2="50"
      y2="70"
      style="stroke:#054d54; stroke-width:2"
      marker-end="url(#arrowhead)"
    />
  `;

  let amplitude = 100;
  let counter = 0;
  let maxCounter = 628;

  
  while (counter < maxCounter - counterStep) {
    const curve = document.createElementNS("http://www.w3.org/2000/svg", "line"); 
    curve.setAttribute('x1', counter + origin.x);
    curve.setAttribute('y1', -1 * (Math.sin((counter)*freq) * amplitude) + origin.y);
    curve.setAttribute('x2', counter+counterStep + origin.x);
    curve.setAttribute('y2', -1 * (Math.sin((counter+counterStep)*freq) * amplitude) + origin.y);
    curve.setAttribute('style', "stroke:#054d54; stroke-width:2; display: none;");
    curve.setAttribute('id', `${id}-line-${counter}`)
    svg.appendChild(curve);
    counter = counter + counterStep;
  }
  

  let unitCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  unitCircle.setAttribute('r', amplitude);
  unitCircle.setAttribute('cx', origin.x - amplitude);
  unitCircle.setAttribute('cy', origin.y);
  unitCircle.setAttribute('style', "stroke:#054d54; stroke-width:2; fill-opacity:0;");
  svg.appendChild(unitCircle);

  let spine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  spine.setAttribute('x1', origin.x - amplitude);
  spine.setAttribute('y1', origin.y);
  spine.setAttribute('x2', origin.x);
  spine.setAttribute('y2', origin.y);
  spine.setAttribute('style', "stroke:#054d54; stroke-width:2;");
  svg.appendChild(spine);

  let stage_design = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  stage_design.setAttribute('r', 7);
  stage_design.setAttribute('cx', origin.x);
  stage_design.setAttribute('cy', origin.y);
  stage_design.setAttribute('style', "stroke:#054d54; stroke-width:2;");
  svg.appendChild(stage_design);

  let stage_build = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  stage_build.setAttribute('r', 7);
  stage_build.setAttribute('cx', origin.x - 2*amplitude);
  stage_build.setAttribute('cy', origin.y);
  stage_build.setAttribute('style', "stroke:#054d54; stroke-width:2;");
  svg.appendChild(stage_build);

  let stage_test = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  stage_test.setAttribute('r', 7);
  stage_test.setAttribute('cx', origin.x - amplitude);
  stage_test.setAttribute('cy', origin.y - amplitude);
  stage_test.setAttribute('style', "stroke:#054d54; stroke-width:2;");
  svg.appendChild(stage_test);

  let stage_learn = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  stage_learn.setAttribute('r', 7);
  stage_learn.setAttribute('cx', origin.x - amplitude);
  stage_learn.setAttribute('cy', origin.y + amplitude);
  stage_learn.setAttribute('style', "stroke:#054d54; stroke-width:2;");
  svg.appendChild(stage_learn);

  let center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  center.setAttribute('r', 7);
  center.setAttribute('cx', origin.x - amplitude);
  center.setAttribute('cy', origin.y);
  center.setAttribute('style', "stroke:#054d54; stroke-width:2;");
  svg.appendChild(center);

  const numberOfPoints = Math.floor(freq/0.01 * 4);
  for (let i = 0; i < numberOfPoints; i++) {
    const j = i % 4;
    let amplitudeMultiplier = 0;
    let title = 'DESIGN';
    switch (j) {
      case 0:
        amplitudeMultiplier = 0;
        title = 'DESIGN';
        break;
      case 1:
        amplitudeMultiplier = -1;
        title = 'BUILD';
        break;
      case 2:
        amplitudeMultiplier = 0;
        title = 'TEST';
        break;
      case 3:
        amplitudeMultiplier = 1;
        title = 'LEARN';
        break;
    }
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.innerHTML = title;
    text.setAttribute('x', origin.x + maxCounter * i / numberOfPoints + 7);
    if (j === 0 || j === 3) {
      text.setAttribute('y', origin.y + amplitude*amplitudeMultiplier + 20);
    } else {
      text.setAttribute('y', origin.y + amplitude*amplitudeMultiplier - 5);
    }
    text.setAttribute('style', "display:none;");
    text.setAttribute('id', `${id}-text-${i}`);
    svg.appendChild(text);

    const button = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    button.setAttribute('r', 7);
    button.setAttribute('cx', origin.x + maxCounter * i / numberOfPoints);
    button.setAttribute('cy', origin.y + amplitude*amplitudeMultiplier);
    button.setAttribute('style', "display:none;");
    button.setAttribute('id', `${id}-${i}`);
    if (i !== 0) {
      button.setAttribute('class', 'svg-button');
    } else {
      button.setAttribute('class', 'svg-button active');
    }
    svg.appendChild(button);
  }

  initializeButtons();

  counter = 0;
  
  function step() {
    let stageOffset = (maxCounter/(freq*100))*0.25;

    if(counter+counterStep <= maxCounter-stageOffset) {
      const curve = document.getElementById(`${id}-line-${counter}`);
      curve.setAttribute('style', "stroke:#054d54; stroke-width:2; display: block;");
    

      spine.setAttribute('x1', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x);
      spine.setAttribute('x2', counter+counterStep + origin.x);
      spine.setAttribute('y2', -1 *(Math.sin((counter+counterStep)*freq) * amplitude) + origin.y);

      unitCircle.setAttribute('cx', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x);
      stage_design.setAttribute('cx', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x + amplitude);
      stage_build.setAttribute('cx', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x);
      stage_build.setAttribute('cy', origin.y - amplitude);
      stage_test.setAttribute('cx', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x - amplitude);
      stage_test.setAttribute('cy', origin.y);
      stage_learn.setAttribute('cx', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x);
      stage_learn.setAttribute('cy', origin.y + amplitude);

      center.setAttribute('cx', counter+counterStep - Math.cos((counter+counterStep)*freq)*amplitude + origin.x);
      center.setAttribute('cy', origin.y);
    }
    
    const animationStage = Math.ceil((counter / maxCounter)*numberOfPoints);
    for (let i = 0; i < animationStage; i++) {
      const button = document.getElementById(`${id}-${i}`);
      button.setAttribute('style', "stroke:#054d54; stroke-width:2; display:block;");

      const text = document.getElementById(`${id}-text-${i}`);
      text.setAttribute('style', "font-size: 0.9vw; font-weight: 800; background-color: white; z-index: 50; display:block;");
    }
    if(counter+counterStep > maxCounter-stageOffset) {
      stage_design.setAttribute('style', 'stroke:#054d54; stroke-width:2; opacity:0; transition: opacity 1s ease-out');
      stage_build.setAttribute('style', 'stroke:#054d54; stroke-width:2; opacity:0; transition: opacity 1s ease-out');
      stage_test.setAttribute('style', 'stroke:#054d54; stroke-width:2; opacity:0; transition: opacity 1s ease-out');
      stage_learn.setAttribute('style', 'stroke:#054d54; stroke-width:2; opacity:0; transition: opacity 1s ease-out');
      center.setAttribute('style', 'stroke:#054d54; stroke-width:2; opacity:0; transition: opacity 1s ease-out');
      unitCircle.setAttribute('style', 'stroke:#054d54; stroke-width:2; fill-opacity: 0; opacity:0; transition: opacity 1s ease-out');
      spine.setAttribute('style', 'stroke:#054d54; stroke-width:2; opacity:0; transition: opacity 1s ease-out');
    }

    if (counter < maxCounter - counterStep) { 
      counter += counterStep;
      window.requestAnimationFrame(step);
    } else {
      callback();
    }
  }

  window.requestAnimationFrame(step);
}
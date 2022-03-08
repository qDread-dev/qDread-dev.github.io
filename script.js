window.onload = function(){
  alert('All values are not simplified. Simplification will be added in a later update.');
    let basicInput = document.getElementById('equation');
    let basicOutput = document.getElementById('output');
    let exSqrtInput = document.getElementById('sqrtIn');
    let exSqrtOutput = document.getElementById('sqrtOut');
    let pyLegA = document.getElementById('pyLegA');
    let pyLegB = document.getElementById('pyLegB');
    let pyLegC = document.getElementById('pyLegC');
    let aFindB = document.getElementById('aFindB');
    let bFindB = document.getElementById('bFindB');
    let cFindB = document.getElementById('cFindB');

    basicInput.oninput = function(){
      basicOutput.value = eval(basicInput.value);
    };
    
    exSqrtInput.oninput = function(){
      
      exSqrtOutput.value = Math.sqrt(exSqrtInput.value);
      
    };
    pyLegA.oninput = function(){
      pyLegB.oninput = function(){
        pyLegC.value = pyLegA.value * pyLegA.value + pyLegB.value * pyLegB.value;
      };
    };
    aFindB.oninput = function(){
      cFindB.oninput = function(){
        let aSquared = aFindB.value * aFindB.value;
        let cSquared = cFindB.value * cFindB.value;
        bFindB.value = cSquared - aSquared;
      };
    };
    
};
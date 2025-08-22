function procDesafio4() {
  let matriz1=[];
  let somaLinhas=[];
  let somaTotal=0;


  for(x=0; x<4; x++){
    matriz1[x]=[];
    let somaLinhas = 0;
    for(y=0; y<5; y++){
      let valor=parseFloat(prompt("Digite o "+y+"° número :"));
      matriz1[x][y] = valor;
      somaTotal += valor;
    }
  }
  for(x=0; x<4; x++){
    let somaLinhas = 0;
    for(y=0; y<5; y++){
      somaLinhas += matriz1[x][y];
    }
    console.log("Soma da "+x+"° Linha :"+somaLinhas); 
  }
  console.log("Soma total da matriz :"+somaTotal); 
  return false;
}

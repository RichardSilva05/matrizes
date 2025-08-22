function procDesafio3() {
  let matriz1=[];
  let matriz2=[];

  for(x=0; x<3; x++){
    matriz1[x]=[];
    matriz2[x]=[];
    for(y=0; y<3; y++){
      matriz1=parseFloat(prompt("Digite o "+y+"° número :"));
      matriz2+=matriz1 * 2;
    }
  }
  for(x=0; x<1; x++){
    matriz2[x]=[];
    for(y=0; y<1; y++){
      document.write("&nbsp"+matriz2+"&nbsp");
    }
    document.write("<br>")
  } 
  return false;
}

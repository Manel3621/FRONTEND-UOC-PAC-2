//  javascript 
function valida_numero(valor)
{
    if(valor.length==0) return(false);
    for(let con=0;con<valor.length;con++)
    {
        if(!((valor.charAt(con)>='0')&&(valor.charAt(con)<='9'))) return(false);
    }
    return(true);
}
function Pide_numero_1()
{
    let numero=prompt("Dime un número entre 1 y 50");
    if(!valida_numero(numero)) 
    {
        alert("Error en entrada numérica.");
        return(Pide_numero_1());       
    }
    if(parseInt(numero)<1)
    {
        alert("El número es inferior al solicitado.");
        return(Pide_numero_1());
    }
    if(parseInt(numero)>50)
    {
        alert("El número es superior al solicitado.");
        return(Pide_numero_1());
    }
    return(parseInt(numero));
}
function Pide_numero_2()
{
    let numero=prompt("Dime otro número entre 1 y 50");
    if(!valida_numero(numero)) 
    {
        alert("Error en entrada numérica.");
        return(Pide_numero_2());       
    }
    if(parseInt(numero)<1)
    {
        alert("El número es inferior al solicitado.");
        return(Pide_numero_2());
    }
    if(parseInt(numero)>50)
    {
        alert("El número es superior al solicitado.");
        return(Pide_numero_2());
    }
    return(parseInt(numero));
}

function abraF()
{
    ventana=window.open("http:\\www.danasa.net","http:\\www.danasa.net","width=200","height=100");
    ventana.document.write("<p>Mi ventana</p>");
    location.href="http:\\www.danasa.net";
}
function maximiza()
{
    ventana.moveTo(0,0);
    ventana.resizeto(screen.availWidth,screen.availHeight);
    ventana.focus();
}
function suma(a,b)
{
  return(a+b);
}
//
//  busca si el valor es par.
//
function par(valor)
{
  let a=valor%2;
  if(a===0) return(true);
  return(false);
}
function numeros_pares(val1,val2)
{
    var cadena;cadena="números pares";
    for(let b=val1+1;b<val2;b++)
    {
        if((b%2)===0) cadena=cadena+" "+b; 
    }
    return(cadena);
}
//
//  busca si es número primo.
//
function primo(a)
{
  for(let b=a-1;b>1;b--)
  {
    if((a%b)===0) return(false);
  }
 return(true);      
}
function numeros_impares(val1,val2)
{
    var cadena;cadena="números impares";
    for(let b=val2-1;b>val1;b--)
    {
        if((b%2)!=0) cadena=cadena+" "+b; 
    }
    return(cadena);
}
//
//  Escribe la serie de fibonacci((n-1)+(n-2)).
//
function fibonacci(valor, array=[0,1])
{
  return((array.length<valor) ? fibonacci(valor,array.concat(array.at(-1)+array.at(-2))): array);
}
function resultado()
{
    var comentario;
    comentario=" la suma es "+suma(num1,num2)+"\n";
    if(primo(num1)==true) comentario=comentario+num1+" es número primo "; 
     else comentario=comentario+num1+" no es primo ";
    if((primo(num2)==true)&&(num1!=num2)) comentario=comentario+num2+" es número primo \n";
       else comentario=comentario+"\n";
    if(par(num1)==true) comentario=comentario+num1+" es número par "; 
        else comentario=comentario+num1+" es número impar ";
    if((par(num2)==true)&&(num1!=num2)) comentario=comentario+num2+" es número par \n"; 
        else comentario=comentario+num2+" es numero impar \n";
    if(num1===num2) comentario=comentario+" los números son iguales \n";
    else 
    {   
       if(num1>num2) comentario=comentario+numeros_impares(num2,num1)+"\n"; 
          else comentario=comentario+numeros_pares(num1,num2)+"\n";
    }
    alert(comentario);
}
function MyMin(x1,x2)
{
  if (x1 < x2)
  {
    console.log("MyMin:"+x1);
    return x1
  }
  else
  if (x2 < x1)    
  {
    console.log("MyMin:"+x2);
    return x2;
  }
}
MyMin(1,2);
MyMin(4,3);
MyMin(5,5);

function ChkLengthGrt3(x1,x2,x3,x4)
{
  let counter=0;
  
  if (x1.length > 3){counter +=1}
  if (x2.length > 3){counter +=1}
  if (x3.length > 3){counter +=1}
  if (x4.length > 3){counter +=1}  
  
  return counter;  
}
console.log("ChkLengthGrt3:"+ChkLengthGrt3("abc","abcd","abcde","abcdefgh"));

function ChkInputHasA()
{
   let s = document.getElementById("search").value;
   let inx = s.indexOf('A');
  
  if (inx > -1)
  {
    //console.log(document.getElementById("search").value.replace('A','a'))
    console.log("ChkInputHasA:"+s.slice(0,inx)+s.charAt(inx).toLowerCase()+s.slice(inx+1,s.length))
  }
  else
  {
    console.log("input not contain A")
  }      
}

function MyClick()
{
  ChkInputHasA();    
}

function addSpIfNeed(s)
{
  let sp = '';  
  if (s != "")
    sp = " ";
  return sp;
}

function ChkNum(x)
{
  let s = "";  
  
  if (x > 0) 
  {
    s += addSpIfNeed(s)+'Posetive'    
  }
  if (x < 0) 
  {
    s += addSpIfNeed(s)+'Negtive'    
  }
  if (x == 0) 
  {
    s += addSpIfNeed(s)+'ZERO'    
  }
  else if ((x % 2) ==0)
  {
    s += addSpIfNeed(s)+'even'    
  }
  else  
  {
    s += addSpIfNeed(s)+'odd'    
  }
  console.log(x +" is: "+s )
}
ChkNum(0);
ChkNum(10);
ChkNum(11);
ChkNum(-9);
ChkNum(-8);

function isFirstAndLastEq(x)
{
   if (x.charAt(0) == x.charAt(x.length-1) )
    console.log("First And Last Eq."+ "OLD STR:" +x+ " NEW STR:" + x.slice(1,x.length-1))
   else 
    console.log("First And Last NOT Eq:" + x )
}

isFirstAndLastEq("1234567890");
isFirstAndLastEq("A23456789A");

function isShtrudel_Asterisk(x)
{
   let inx = x.indexOf("*");

   if (inx >-1 )
     console.log("Asterisk:"+ "OLD STR:" +x+ " NEW STR:" + x.slice(0,inx)+x.slice(inx+1,x.length));

   if (inx == -1 )
   {
     inx = x.indexOf("@");
     if (inx >-1 )
       console.log("Shtrudel:"+ "OLD STR:" +x+ " NEW STR:" + x.slice(0,inx)+"*@*"+x.slice(inx+1,x.length))
   } 

   if (inx == -1 )
   {
     inx = x.indexOf("₪");
     if (inx >-1 )
       console.log("NIS:"+ "OLD STR:" +x+ " NEW STR:" + "NEW SHEKEL")
   } 
   
   if (inx == -1 )
    console.log("isShtrudel_Asterisk-NO-MATCH:" + x )
}

isShtrudel_Asterisk("12345678*90");
isShtrudel_Asterisk("12345678@90");
isShtrudel_Asterisk("12345678₪90");
isShtrudel_Asterisk("1234567890");





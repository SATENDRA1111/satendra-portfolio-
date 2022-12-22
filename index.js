console.log('runing.....');
document.querySelector('.cros').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
  document.querySelector('.sidebar').classList.toggle('sidebargo');
  
  
 if(document.querySelector('.sidebar').classList.contains('sidebargo')
){
 document.querySelector('.home').style.display='inline'
  document.querySelector('.cros').style.display='none'
} 

else{
   document.querySelector('.home').style.display='none'
   setTimeout(()=>
     {document.querySelector('.cros').style.display='inline'
 },100);
}}
)
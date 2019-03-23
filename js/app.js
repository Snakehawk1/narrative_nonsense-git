


document.getElementById('pbtn').addEventListener('click',
 function() {
   document.querySelector('.bkg-popup').style.display = 'flex';
}); 

/*  
 The function below is the same mechanism as above but
causes the reverse action, the closing or disappearance of the popup.
Within the popup material there is a div with the class ".close".
The JS listens for a click (when the popup is visible on the page) and 
then calls for the parent .bkg-popup (and its children including .popup),
to go invisible or close.  */

document.querySelector('.close').addEventListener('click',
  function() {
      document.querySelector('.bkg-popup').style.display = 'none';
  });

  /*Click once and see what's in the popup/modal.  Click a second time and the modal goes away.
  Opps you forgot something and need to go back and look.  Click again and the modal returns */
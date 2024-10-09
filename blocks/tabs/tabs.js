import * as domB from '../../scripts/dom-builder.js';

const tabComponentContebnt = domB.div({ class: 'tabsC' });

export default async function decorate(block) {

  const tabComponent = domB.div({ class: 'tab' });
  var firstButton = 0; 
    [...block.children].forEach((row, index) => {
          if (index === 0 ){console.log(index);}

      [...row.children].forEach((col, indexInner) => {  
        
              if(indexInner === 0){
                const button1 = domB.button({ class: 'tablinks'}); 
          
                button1.addEventListener('click',(event) =>
                {
                  openCity(event, col.textContent.trim());
                });

                button1.textContent = col.textContent.trim();
;  
                if (firstButton === 0){
                  button1.setAttribute("class","defaultOpen");  
                  firstButton ++ ;
                }
                tabComponent.appendChild(button1);
                
              }
                     
        });

        const divTabs = domB.div({ class: 'tabcontent'}); 

        var lnkVal = ""; 

        [...row.children].forEach((colSecond, indexInnerSecond) => {

          if(indexInnerSecond === 0){
            const divHr = domB.div(); 
            
            divHr.textContent = colSecond.textContent.trim();
            divTabs.setAttribute("id",colSecond.textContent.trim());
            divTabs.appendChild(divHr);
            
          }
          if(indexInnerSecond === 1){
            const divDesc = domB.div(); 
            divDesc.textContent = colSecond.textContent.trim();
            divTabs.appendChild(divDesc);
          }

          const divLnk = domB.a(); 
          if(indexInnerSecond === 2){
            
            lnkVal = colSecond.textContent.trim(); 
          }

          if(indexInnerSecond === 3){
            divLnk.innerHTML = colSecond.textContent.trim();
            divLnk.setAttribute("href",lnkVal);
            divTabs.appendChild(divLnk);
          }
         
          if(indexInnerSecond === 4){
            const divImg = domB.div(); 
            divImg.innerHTML = colSecond.innerHTML.trim();
            divTabs.appendChild(divImg);
            
          }
                 
      });

      tabComponentContebnt.prepend(tabComponent);
      tabComponentContebnt.appendChild(divTabs);

    });

    
  
    block.textContent = '';
    block.append(tabComponentContebnt);

    document.getElementsByClassName("defaultOpen")[0].click();
}



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].setAttribute("style","display:none"); 
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).setAttribute("style","display:block");
  evt.currentTarget.className += " active";
}


 
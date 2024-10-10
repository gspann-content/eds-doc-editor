import * as domB from '../../scripts/dom-builder.js';

const tabComponentTw= domB.div({ class: 'tw' });

const tabComponentContebntDiv = domB.div({ class: 'aem-GridColumn aem-GridColumn--default--12' });
const tabComponentContebntDivOutter = domB.div({ class: 'aem-Grid aem-Grid--12 aem-Grid--default--12' });
const tabComponentContebnt = domB.div({ class: 'tw-flex-col' });

// const tabComponentSection = domB.div({ class: 'tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48' });

const tabComponentSection = document.createElement('section');
tabComponentSection.setAttribute('class', 'tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48');

export default async function decorate(block) {

  //const tabComponent = domB.div({ class: 'tw-flex-col' });
  const tabButtonDiv = domB.div({ class: 'tw-container tw-hidden md:tw-flex tw-flex-row tw-w-full tw-items-stretch tw-flex-wrap' });
  
  var firstButton = 0; 
    [...block.children].forEach((row, index) => {
          if (index === 0 ){console.log(index);}

      [...row.children].forEach((col, indexInner) => {  
        
              if(indexInner === 0){
                var btnOuterDiv = domB.div({class: 'tw-h-auto tw-border-b-2 tw-mr-4 tw-hidden md:tw-block tw-border-blue-700'});
                //btnOuterDiv.setAttribute(":class", "openedTab == 0 ? 'tw-border-blue-700' : 'tw-border-grey-100'");
              
                const button1 = domB.button({ class: 'tw-text-left text-base-bolder tw-w-160 hover:tw-text-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-blue-700'}); 
          
                button1.addEventListener('click',(event) =>
                {
                  openCity(event, col.textContent.trim());
                });

                var spnBtn = domB.span({class : 'tw-line-clamp-2 tw-text-left'});
                spnBtn.textContent = col.textContent.trim();
                button1.appendChild(spnBtn);
                if (firstButton === 0){
                  button1.setAttribute("class","defaultOpen");  
                  firstButton ++ ;
                }

                btnOuterDiv.appendChild(button1);
                tabButtonDiv.appendChild(btnOuterDiv);
                //tabComponent.appendChild(tabButtonDiv);
                
              }
                     
        });

        const divTabs = domB.div({class: 'tw-grid tw-container tw-transition-all tw-duration-300 tw-transition-ease-in-out md:tw-transition-none tw-grid-rows-[1fr]'}); 
        const divTabsCon = domB.div({ class: 'md:tw-w-[35%] md:tw-mr-32'}); 
        const divTabsPTabCont = domB.div({ class: 'tw-overflow-hidden tw-block'}); 
        const dicContainer = domB.div({ class: 'tab-content tw-my-32 md:tw-mb-0 tw-flex tw-flex-col md:tw-flex-row-reverse'}); 
        
        var lnkVal = ""; 

        [...row.children].forEach((colSecond, indexInnerSecond) => {

          if(indexInnerSecond === 0){
           const divHr = domB.h3({class : 'text-lg-bolder tw-text-grey-900 tw-mb-6 md:tw-mb-8'}); 
            
           divHr.textContent = colSecond.textContent.trim();
           dicContainer.setAttribute("id",colSecond.textContent.trim());
           divTabsCon.appendChild(divHr);

          }
          if(indexInnerSecond === 1){
            const divDesc = domB.p({class: 'text-base tw-text-grey-500 md:tw-grow'}); 
            divDesc.textContent = colSecond.textContent.trim();
            divTabsCon.appendChild(divDesc);
          }
          
          const divLinkAnchor = domB.div({class: 'tw-mt-12 md:tw-mt-16'}); 
          const divLnk = domB.a({class: 'tw-transition tw-duration-300 tw-group focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue-700 tw-inline-flex tw-w-fit tw-items-center tw-text-blue-700 hover:tw-text-blue-800'}); 
          if(indexInnerSecond === 2){
            
            lnkVal = colSecond.textContent.trim(); 
          }

          if(indexInnerSecond === 3){
            
            const svgF = document.createElement('svg');
            const svgFP1 = document.createElement('path');
            const svgFP2 = document.createElement('path');
            svgFP1.setAttribute("d","M0 7L15 7");
            svgFP1.setAttribute("stroke","currentColor");
            svgFP2.setAttribute("d","M9 1L15 7L9 13");
            svgFP2.setAttribute("stroke","currentColor");
            
            svgF.setAttribute("class","tw-transition-all tw-duration-500 tw-block tw-ml-8 group-hover:tw-ml-12 tw-flex-shrink-0");
            svgF.appendChild(svgFP1);
            svgF.appendChild(svgFP2);
            divLnk.appendChild(svgF);

            divLnk.setAttribute("href",lnkVal);
            divLnk.setAttribute("target","_self");
            const linkOuterDiv = domB.div({class: 'tw-text-mobBase md:tw-text-base tw-relative tw-overflow-hidden'});
            const linkOuterDivspan = domB.span({class: 'tw-whitespace-normal tw-text-left'});  
            linkOuterDivspan.innerHTML = colSecond.textContent.trim();
            linkOuterDiv.appendChild(linkOuterDivspan);
          
            const linkOuterDivspan2 = domB.span({class: 'tw-absolute tw-left-0 tw-bottom-0 tw-block tw-w-full group-hover:tw-left-[100%] tw-transition-all tw-duration-500 tw-h-1 tw-bg-blue-700 hover:tw-bg-blue-800'}); 
            linkOuterDiv.appendChild(linkOuterDivspan2);

            divLnk.prepend(linkOuterDiv);
            divLinkAnchor.appendChild(divLnk);
            divTabsCon.appendChild(divLinkAnchor);
          }
         
          if(indexInnerSecond === 4){
            var divImg = domB.img(); 
            var parser = new DOMParser();   
            const fetchImgTag = parser.parseFromString(colSecond.innerHTML, "text/html");
            divImg = fetchImgTag.getElementsByTagName('img')[0];
            divImg.setAttribute("class","tw-mb-20 md:tw-mb-0 md:tw-w-[65%] tw-aspect-[8/5]");
            dicContainer.prepend(divImg);
            
          }
                 
      });
      // dicContainer.appendChild(divTabsCon);
      // divTabsPTabCont.appendChild(dicContainer);
      // tabComponentSection.prepend(tabComponent);
      // divTabsPTabCont.appendChild(divTabs);
      // tabComponentSection.appendChild(divTabsPTabCont);

      
      dicContainer.appendChild(divTabsCon);
      divTabsPTabCont.appendChild(dicContainer);
      tabComponentContebnt.prepend(tabButtonDiv);
      divTabs.appendChild(divTabsPTabCont);
      tabComponentContebnt.appendChild(divTabs);

    });

    // block.textContent = '';
    // tabComponentContebnt.appendChild(tabComponentSection);
    // tabComponentContebntDiv.appendChild(tabComponentContebnt);
    // block.append(tabComponentContebntDiv);

    block.textContent = '';
    tabComponentSection.appendChild(tabComponentContebnt);
    tabComponentContebntDiv.appendChild(tabComponentSection);

    tabComponentContebntDivOutter.appendChild(tabComponentContebntDiv);
 
tabComponentTw.appendChild(tabComponentContebntDivOutter);
    block.append(tabComponentTw);

    //document.getElementsByClassName("defaultOpen")[0].click();
}



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

   ///// For Content ///// 

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-content tw-my-32 md:tw-mb-0 tw-flex tw-flex-col md:tw-flex-row-reverse");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].setAttribute("style","display:none"); 
  }

  
  //// For Button //////

 // Get all elements with class="tablinks" and remove the class "active"
 tablinks = document.getElementsByClassName("tw-h-auto tw-border-b-2 tw-mr-4 tw-hidden md:tw-block tw-border-blue-700");
 for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace("tw-border-grey-100 active", "");
 }

 // Get all elements with class="tablinks" and remove the class "active"

 tablinks = document.getElementsByClassName("tw-line-clamp-2 tw-text-left");
 for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace("tw-line-clamp-2 tw-text-left", "tw-line-clamp-2 tw-m-12");
 }

 

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tw-text-left text-base-bolder tw-w-160 hover:tw-text-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-blue-700");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tw-text-grey-900 active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).setAttribute("style","");
  evt.currentTarget.className += " active";
}


 
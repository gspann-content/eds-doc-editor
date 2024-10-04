import {
  getMetadata,
} from '../../scripts/aem.js';
import {
  img,

  div,
  li,
  ul,
  span,
  svg,
  a,
} from '../../scripts/dom-builder.js';
import {
  loadFragment,
} from '../fragment/fragment.js';

export default async function decorate(block) {
  // Check if block has children before proceeding
  // if (!block.firstElementChild) return;

  // Create the container structure
  const itemMap = new Map();
  const idMap=new Map();
  const div = document.createElement('div');
  div.classList.add('tw');
  const div1 = document.createElement('div');
  div1.classList.add('tw-hidden', 'lg:tw-flex', 'tw-w-full', 'tw-bg-white', 'tw-relative', 'tw-z-[100]');

  const div2 = document.createElement('div');
  div2.classList.add('tw-container');

  const div3 = document.createElement('div');
  div3.classList.add('tw-border-b', 'tw-flex', 'tw-items-center', 'desktop-links');

  // Create a new <ul> element and add classes
  const ul = document.createElement('ul');
  ul.classList.add('tw-list-none', 'tw-inline-flex', 'stretch-text', 'tw-text-grey-900');

  /* const subChildDiv1 = document.createElement('div');
  subChildDiv1.classList.add('tw-w-6/12','tw-px-32', 'tw-pr-40', 'tw-border-r');
  subChildDiv1.setAttribute('style','display:none');
  const subChildDiv2 = document.createElement('div');
  subChildDiv2.classList.add('tw-flex', 'tw-flex-wrap', 'tw-h-fit');

  const ImgDiv1 = document.createElement('div');
  ImgDiv1.classList.add('tw-w-3/12', 'tw-pl-32');
  ImgDiv1.setAttribute('style','display:none'); */
  // Iterate over each child of the block
  // console.log('block.textContent>'+block+">"+block.children[0].outerHTML);
  [...block.children].forEach((row, rowindex) => {
   
    const divs = row.querySelectorAll('div div');
    console.log(`divs>${divs.length}`);

      if (divs.length == 4 ) {
        // console.log('col index>'+index +">"+col.textContent);
        
        const li = document.createElement('li');
       
        if(rowindex!=0){
          
            li.classList.add('tw-py-20', 'tw-border-b-2', 'tw-border-white','tw-ml-24');
        }else{
          li.classList.add('tw-py-20', 'tw-border-b-2', 'tw-border-white');
        }
        
        const aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.classList.add('tw-flex', 'tw-items-center', 'tw-group', 'hover:tw-text-blue-700', 'tw-transition-colors');
        const spanEle = document.createElement('span');
        spanEle.classList.add('tw-ml-6');
        const content = divs[0].textContent;
        idMap.set('tabName',content);
        aTag.textContent = content;
        const svgEle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgEle.setAttribute('val', 'MenuItem');
        svgEle.setAttribute('width', '14');
        svgEle.setAttribute('height', '8');
        svgEle.setAttribute('viewBox', '0 0 14 8');
        svgEle.setAttribute('fill', 'none');
        svgEle.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgEle.setAttribute('data-di-res-id', '23f6d5d0-a19f02de');
        svgEle.setAttribute('data-di-rand', '1726509353206');
        const pathELe = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathELe.setAttribute('d', 'M13 1L7 7L1 0.999999');
        pathELe.setAttribute('stroke', 'currentColor');
        svgEle.append(pathELe);
        

        spanEle.append(svgEle);
        aTag.append(spanEle);
        li.append(aTag);

        ul.append(li);
        const subdiv1 = document.createElement('div');
        subdiv1.classList.add('tw-w-full', 'tw-bg-white', 'tw-relative', 'tw-z-[100]');
        subdiv1.setAttribute('id', 'MenuItem'+'-'+content);
        subdiv1.setAttribute('style','display:none');
        const subdiv2 = document.createElement('div');
        subdiv2.classList.add('tw-hidden', 'lg:tw-flex', 'tw-container', 'tw-pt-32', 'tw-pb-40', 'tw-columns-12');
        const subdiv3 = document.createElement('div');
        subdiv3.classList.add('tw-w-3/12', 'tw-border-r', 'tw-relative', 'tw-pr-24');
        
        const subUl = document.createElement('ul');
        
        level1DomStructure(div, divs,itemMap ,rowindex,idMap,divs[1].textContent,subdiv2,subUl);
        
       
        
        //console.log("image index 3>"+divs[3].outerHTML);
        const image =divs[3].outerHTML;
        const itemDiv=idMap.get('itemDiv');
       // const ImgDiv1=idMap.get('ImgDiv1');
        const ImgDiv1 = document.createElement('div');
        ImgDiv1.classList.add('tw-w-3/12', 'tw-pl-32','imageDivs');
        ImgDiv1.setAttribute('style','display:none');
        ImgDiv1.setAttribute('id','Image-'+divs[1].textContent.toLowerCase().replace(/ /g, '-'));
        //idMap.set('ImgDiv1',ImgDiv1);
        
        appendImage(subdiv2,image,itemDiv,ImgDiv1);
        subdiv3.append(subUl);
        //view all items


const viewAtag = document.createElement('a');
viewAtag.setAttribute('href', '/'+divs[0].textContent.toLowerCase().replace(/ /g, '-'));
viewAtag.classList.add('tw-mt-32','tw-transition','tw-duration-300','tw-group','tw-flex','tw-font-bold','tw-items-center','tw-text-blue-700','hover:tw-text-blue-800');
const viewdivtag = document.createElement('div');
//viewdivtag.classList.add('tw-text-mobBase','md:tw-text-base','tw-relative)
viewdivtag.textContent='View All '+divs[0].textContent;
const viewspantag = document.createElement('span');
//viewspantag.classList.add('tw-absolute','tw-left-0','tw-bottom-0','tw-block','tw-w-full','group-hover:tw-left-[100%]','tw-transition-all','tw-duration-500',' tw-h-1','tw-bg-blue-700','hover:tw-bg-blue-800');
viewdivtag.append(viewspantag);
viewAtag.append(viewdivtag);

const viewSvgEle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
viewSvgEle.setAttribute('width', '16');
viewSvgEle.setAttribute('height', '14');
viewSvgEle.setAttribute('viewBox', '0 0 16 14');
viewSvgEle.setAttribute('fill', 'none');
viewSvgEle.classList.add('tw-transition-all','tw-duration-500','tw-block','tw-ml-8','tw-mb-4','group-hover:tw-ml-12');
viewSvgEle.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
viewSvgEle.setAttribute('data-di-res-id', 'd2ae2b2b-947475dd');
viewSvgEle.setAttribute('data-di-rand', '1727718723810');
        const viewpathELe = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        viewpathELe.setAttribute('d', 'M0 7L15 7');
        viewpathELe.setAttribute('stroke', 'currentColor');
        //viewSvgEle.append(pathELe);
        const secondPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        secondPath.setAttribute('d', 'M9 1L15 7L9 13');
        secondPath.setAttribute('stroke', 'currentColor');
       
        viewSvgEle.append(viewpathELe);
        viewSvgEle.append(secondPath);
        
viewAtag.append(viewSvgEle);
subdiv3.append(viewAtag);

        subdiv2.prepend(subdiv3);
        subdiv1.append(subdiv2);
        itemMap.set(rowindex,subdiv1);
        idMap.set('subdiv1',subdiv1);

        const id=idMap.get('tabName').toLowerCase().replace(/ /g, '-')+'\\'+idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');
        const className=idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');
        const val =divs[2].textContent; 
        const element=idMap.get('subdiv1');
        console.log(' 1 element>'+element.outerHTML)
        level2DomStructure(div, divs,rowindex,val,id,element,className)

        svgEle.addEventListener('click', function(event) {
          event.preventDefault();
          const myDiv = document.getElementById('MenuItem'+'-'+content);
         // const className=divs[1].textContent.toLowerCase().replace(/ /g, '-');
          //const subChildDiv1= document.getElementById('subChild-'+className);
          //console.log('event >'+'subChild-'+className);
          if(myDiv.style.display =='none'){
          myDiv.style.display = 'block';
          //subChildDiv1.style.display = 'block';
         // ImgDiv1.style.display = 'block';
          }else {
            myDiv.style.display = 'none';
            //subChildDiv1.style.display = 'none';
            //ImgDiv1.style.display = 'none';
          }
      }); 
      } else if (divs.length == 3 || divs.length == 2) {
        // console.log(`col index>${index}`);
       
       // idMap.set('Level1Name',divs[0].textContent);
       const subdiv2=idMap.get('subdiv2');
       const itemDiv=idMap.get('itemDiv');
       
       //const ImgDiv1=idMap.get('ImgDiv1');
       
       const subUl=idMap.get('subUl');
        level1DomStructure(div, divs,itemMap,rowindex,idMap,divs[0].textContent,subdiv2,subUl);
        const id=idMap.get('tabName').toLowerCase().replace(/ /g, '-')+'\\'+idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');
        const className=idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');
        const val =divs[1].textContent; 
        const element=idMap.get('subdiv1');
        console.log(' 1 val>'+val)
        level2DomStructure(div, divs,rowindex,val,id,element,className)
        //console.log("image index 3>"+divs[2].outerHTML);
        if( divs.length == 3){
        const image =divs[2].outerHTML
        const ImgDiv1 = document.createElement('div');
        ImgDiv1.classList.add('tw-w-3/12', 'tw-pl-32','imageDivs');
        ImgDiv1.setAttribute('style','display:none');
        ImgDiv1.setAttribute('id','Image-'+className);
        appendImage(subdiv2,image,itemDiv,ImgDiv1);
        }
      }else if(divs.length == 1 ){
       
        const id=idMap.get('tabName').toLowerCase().replace(/ /g, '-')+'\\'+idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');
        const val =divs[0].textContent;
        const element=idMap.get('subdiv1');
        const className=idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');
        console.log(' 1 val>'+val)
        /*idMap.forEach((value, key) => {
          console.log('loop>'+key+'>'+value);
         });*/
        level2DomStructure(div, divs,rowindex,val,id,element,className)
      }
   // });
  });

  div3.append(ul);

  div2.append(div3);
  div1.append(div2);
  div.append(div1);
   
   itemMap.forEach((value, key) => {
    div.append(value);
   });
  /*level1Div.array.forEach(element => {
    
  }); */

  block.textContent = '';
  block.append(div);
}
function level1DomStructure(div, divs,itemMap ,rowindex,idMap,content,subdiv2,subUl) {
  //console.log('level1');



  const subLi = document.createElement('li');
  const subATag = document.createElement('a');
  subATag.setAttribute('href', '#'+content.toLowerCase().replace(/ /g, '-'));
  subATag.classList.add('tw-relative', 'submenu', 'tw-font-light', 'tw-text-lg', 'tw-text-grey-900', 'tw-flex', 'tw-items-center', 'tw-justify-between', 'tw-w-full', 'tw-group', 'tw-transition-all', 'tw-duration-200','tw-mt-12','hover:tw-text-blue-700');
  
  const subSpan = document.createElement('span');
  //const content = divs[0].textContent;
  idMap.set('Level1Name',content);
  idMap.set('subdiv2',subdiv2);
  idMap.set('subUl',subUl);
  
  subSpan.textContent = content;
  subATag.append(subSpan);
  subLi.append(subATag);
  subUl.append(subLi);
  
  //Adding level2 divs
  const itemDiv = document.createElement('div');
  itemDiv.setAttribute('id',content.toLowerCase().replace(/ /g, '-'));
  itemDiv.classList.add('tw-w-6/12','tw-px-32', 'tw-pr-40', 'tw-border-r','level2');
  itemDiv.setAttribute('style','display:none');
  const subChildDiv1 = document.createElement('div');
  subChildDiv1.classList.add('tw-flex', 'tw-flex-wrap', 'tw-h-fit' ,content.toLowerCase().replace(/ /g, '-'));
  //subChildDiv1.classList.add('tw-w-6/12','tw-px-32', 'tw-pr-40', 'tw-border-r','level2');
  //subChildDiv1.setAttribute('id','subChild-'+content.toLowerCase().replace(/ /g, '-'));
  //subChildDiv1.setAttribute('style','display:none');
  const subChildDiv2 = document.createElement('div');
 // subChildDiv2.classList.add('tw-flex', 'tw-flex-wrap', 'tw-h-fit' ,content.toLowerCase().replace(/ /g, '-'));
 subChildDiv2.classList.add('lg:tw-w-full', 'xl:tw-w-1/2', 'tw-pr-48');
 const id=idMap.get('tabName').toLowerCase().replace(/ /g, '-')+'\\'+idMap.get('Level1Name').toLowerCase().replace(/ /g, '-');

  subChildDiv2.setAttribute('id',id);
 
  //subChildDiv1.append(subChildDiv2);
  itemDiv.append(subChildDiv1);
  idMap.set('itemDiv',itemDiv);
  
  subdiv2.append(itemDiv);

  subATag.onclick = function(event) {
    event.preventDefault();
        
          //const className=content.toLowerCase().replace(/ /g, '-')
          //const level2 =document.getElementsByClassName('level2');
          const activeElements = document.querySelectorAll('.submenu-active');
          activeElements.forEach((element) => {
              element.classList.remove('submenu-active');
          });
          const atags = document.querySelectorAll('.level2');
          atags.forEach((element) => {
              element.style.display ='none'
          });
          const imagetags = document.querySelectorAll('.imageDivs');
          imagetags.forEach((element) => {
              element.style.display ='none'
          });
          this.classList.add('submenu-active');
         const className = this.getAttribute('href').replace('#','');
         console.log('className >'+className);
          const subChildDiv1= document.getElementById(className);
          const ImgDiv1= document.getElementById('Image-'+className);
          
          if(subChildDiv1.style.display =='none'){
          
          subChildDiv1.style.display = 'block';
         ImgDiv1.style.display = 'block';
          }else {
            
            subChildDiv1.style.display = 'none';
            ImgDiv1.style.display = 'none';
          }
  };
//ended here
 
}
function level2DomStructure(div, divs,rowindex,value,id,element,className) {
  const subChildDiv3 = document.createElement('div');
            subChildDiv3.classList.add('lg:tw-w-full', 'xl:tw-w-1/2', 'tw-pr-48','tw-mt-24');
           // subChildDiv3.setAttribute('id','SubMenuItem'+rowindex);
           // subChildDiv3.setAttribute('style','display:none');
            const subChildATag = document.createElement('a');
            subChildATag.setAttribute('href', '#')
            subChildATag.classList.add('tw-group');
            const subChildSpan = document.createElement('span');
            subChildSpan.classList.add('tw-font-bold', 'tw-text-mobBase', 'md:tw-text-base', 'tw-text-grey-900', 'tw-flex', 'tw-items-center',  'tw-transition-all', 'tw-duration-200');
            const InnerSpan = document.createElement('span');
            InnerSpan.classList.add('hover:tw-text-blue-700');
            const lines = value.split('\n').map(line => line.trim()).filter(line => line);

// Create new elements for each line and append them to the body (or another parent element)
//lines.forEach(line => {
  console.log('lines>'+lines[0]);
  InnerSpan.textContent = lines[0];
//});
           // 
            const span = document.createElement('span');
            span.classList.add('tw-ml-8', 'tw-duration-500', 'group-hover:tw-pl-2');
            const subSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              //subSvg.setAttribute('val','SubMenuItem'+rowindex);
              subSvg.setAttribute('width', '6');
              subSvg.setAttribute('height', '10');
              subSvg.setAttribute('viewBox', '0 0 6 10');
              subSvg.setAttribute('fill', 'none');
              subSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
              subSvg.setAttribute('data-di-res-id', 'd2ae2b2b-2d9a776a');
              subSvg.setAttribute('data-di-rand', '1727718723811');
              var pathELe = document.createElementNS("http://www.w3.org/2000/svg", 'path');
              pathELe.setAttribute('d', 'M0.5 9.5L5 5L0.500001 0.499999');
              pathELe.setAttribute('stroke', 'currentColor');
              subSvg.append(pathELe);

             /* subSvg.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
                const myDiv = document.getElementById('SubMenuItem'+rowindex);
                if(myDiv.style.display =='none'){
                myDiv.style.display = 'block'; 
                }else {
                  myDiv.style.display = 'none'; 
                }// Show the div
            });*/
              span.append(subSvg);
              subChildSpan.append(InnerSpan);
              subChildSpan.append(span);
              subChildATag.append(subChildSpan);
              const pTag = document.createElement('p');
              pTag.classList.add('tw-text-grey-500', 'tw-text-sm', 'tw-mt-2', 'tw-mb-0');
              pTag.textContent=lines[1];
              subChildATag.append(pTag);
              subChildDiv3.append(subChildATag);
             
           // const ele= document.querySelector('#'+id);
         // console.log('className>'+className);
          const appEle= element.querySelector('div div .level2 .'+className);
          //const existId =appEle.getAttribute('id');
          //if(existId == id){
            appEle.append(subChildDiv3);
          //}
}
function appendImage(subdiv2,pic,itemDiv,ImgDiv1) {
 // console.log('pic>>'+pic);
 // console.log('pic.HTML>'+pic);
            //const picWrapper = pic.querySelectorAll('p picture');
              
              //picWrapper.forEach((picture) => {
               // console.log(pic); 
               
               // ImgDiv1.setAttribute('style','display:none');
              const innerDiv = document.createElement('div');
              innerDiv.classList.add('tw-relative', 'tw-overflow-hidden');//, 'tw-pt-[56.25%]');
              innerDiv.innerHTML = pic;
                //ImgDiv1.innerHTML = pic;
                ImgDiv1.append(innerDiv);
                //itemDiv.append(ImgDiv1);
                subdiv2.append(ImgDiv1);
          // });   
}

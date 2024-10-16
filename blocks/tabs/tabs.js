import * as domB from '../../scripts/dom-builder.js';

const tabComponentTw = domB.div({ class: 'tw' });

const tabComponentContebntDiv = domB.div({ class: 'tab aem-GridColumn aem-GridColumn--default--12' });
const tabComponentContebntDivOutter = domB.div({ class: 'aem-Grid aem-Grid--12 aem-Grid--default--12' });
const tabComponentContebntDivOutter2 = domB.div({ class: 'aem-Grid aem-Grid--12 aem-Grid--default--12' });
const divContainer = domB.div({ class: 'cmp-container' });
const divContainer3 = domB.div({ class: 'cmp-container' });
const divContainer4 = domB.div({ class: 'container-v2' });

const divContainer2 = domB.div({ class: 'container-v2 aem-GridColumn aem-GridColumn--default--12' });
const tabComponentContebnt = domB.div({ class: 'tw-flex-col' });

// const tabComponentSection = domB.div({ class: 'tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48' });

const tabComponentSection = document.createElement('section');
tabComponentSection.setAttribute('class', 'tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48');

export default async function decorate(block) {
  // const tabComponent = domB.div({ class: 'tw-flex-col' });
  const tabButtonDiv = domB.div({ class: 'tw-container tw-hidden md:tw-flex tw-flex-row tw-w-full tw-items-stretch tw-flex-wrap' });

  let firstButton = 0;
  let nextButton = 0;
  let nextContent = 0;

  let nextResponsiveButton = 0;

  [...block.children].forEach((row, index) => {
    if (index === 0);

    [...row.children].forEach((col, indexInner) => {
      if (indexInner % 5 === 0) {
        nextButton += 1;
      }

      if (indexInner === 0) {
        const btnOuterDiv = domB.div({ class: 'tw-h-auto tw-border-b-2 tw-mr-4 tw-hidden md:tw-block tw-border-grey-100' });

        const button1 = domB.button({ class: 'tw-text-left text-base-bolder tw-w-160 hover:tw-text-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-grey-900' });

        btnOuterDiv.setAttribute('onclick', `openTabDiv(event, 'opentab${nextButton}','0')`);

        const spnBtn = domB.span({ class: 'tw-line-clamp-2 tw-m-12' });
        spnBtn.textContent = col.textContent.trim();
        button1.appendChild(spnBtn);

        if (firstButton === 0) {
          btnOuterDiv.setAttribute('id', 'defaultOpen');
          firstButton += 1;
        }

        // btnOuterDiv.setAttribute("id", "opentab"+nextButton);
        btnOuterDiv.appendChild(button1);
        tabButtonDiv.appendChild(btnOuterDiv);

        col.textContent.trim();
        // tabComponent.appendChild(tabButtonDiv);
      }
    });

    const divTabs = domB.div({ class: 'tw-grid tw-container tw-transition-all tw-duration-300 tw-transition-ease-in-out md:tw-transition-none tw-grid-rows-[1fr]' });
    const divTabsCon = domB.div({ class: 'md:tw-w-[35%] md:tw-mr-32' });
    const divTabsPTabCont = domB.div({ class: 'tw-overflow-hidden tw-block' });
    const dicContainer = domB.div({ class: 'tab-content tw-my-32 md:tw-mb-0 tw-flex tw-flex-col md:tw-flex-row-reverse' });

    let lnkVal = '';

    [...row.children].forEach((colSecond, indexInnerSecond) => {
      if (indexInnerSecond % 5 === 0) {
        nextContent += 1;
      }

      if (indexInnerSecond % 5 === 0) {
        nextResponsiveButton += 1;
      }

      if (indexInnerSecond === 0) {
        // h3 heading main start //
        const divHr = domB.h3({ class: 'text-lg-bolder tw-text-grey-900 tw-mb-6 md:tw-mb-8' });

        divHr.textContent = colSecond.textContent.trim();
        dicContainer.setAttribute('id', colSecond.textContent.trim());
        divTabsCon.appendChild(divHr);

        // invisible button start
        const divBtn = domB.button({ class: 'md:tw-hidden tw-flex-row tw-items-center tw-w-full tw-py-10 tw-border-t focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-blue-700 text-base-bolder tw-text-ellipsis tw-border-blue-700 tw-text-blue-700 tw-border-b' });
        const btninDiv = domB.div({ class: 'tw-container tw-flex tw-justify-between tw-items-center' });
        const btninDivSpn = domB.span({ class: 'tw-line-clamp-2 tw-text-left' });
        const btninDivDiv = domB.span({ class: 'tw-transition-all tw-duration-300 tw-transition-ease-in-out' });
        const btnSvg = document.createElementNS('SVG_NS', 'svg');

        btnSvg.setAttribute('width', '16');
        btnSvg.setAttribute('height', '16');
        btnSvg.setAttribute('view', '0 0 16 16');
        btnSvg.setAttribute('fill', 'none');
        btnSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        btnSvg.setAttribute('data-di-rand', '1728959310410');

        const btnSvgPath = document.createElementNS('SVG_NS', 'path');
        btnSvgPath.setAttribute('d', 'M14 5.00366L8 11.0037L2 5.00366');
        btnSvgPath.setAttribute('stroke', '#0068FA');

        btnSvg.appendChild(btnSvgPath);
        btninDivDiv.appendChild(btnSvg);

        btninDivSpn.textContent = colSecond.textContent.trim();

        btninDiv.appendChild(btninDivSpn);
        btninDiv.appendChild(btninDivDiv);

        divBtn.appendChild(btninDiv);

        // if (firstResponsiveButton === 0) {
        //   divBtn.setAttribute('id', 'defaultOpenTablet');
        //   firstResponsiveButton += 1;
        // }

        divBtn.setAttribute('onclick', `openTabDiv(event, 'opentab${nextResponsiveButton}','1')`);
        // divBtn.setAttribute('id', `opentab${nextResponsiveButton}`);

        tabComponentContebnt.appendChild(divBtn);
      }

      if (indexInnerSecond === 1) {
        const divDesc = domB.p({ class: 'text-base tw-text-grey-500 md:tw-grow' });
        divDesc.textContent = colSecond.textContent.trim();
        divTabsCon.appendChild(divDesc);
      }

      const divLinkAnchor = domB.div({ class: 'tw-mt-12 md:tw-mt-16' });
      const divLnk = domB.a({ class: 'tw-transition tw-duration-300 tw-group focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue-700 tw-inline-flex tw-w-fit tw-items-center tw-text-blue-700 hover:tw-text-blue-800' });
      if (indexInnerSecond === 2) {
        lnkVal = colSecond.textContent.trim();
      }

      if (indexInnerSecond === 3) {
        const svgF = document.createElementNS('SVG_NS', 'svg');
        const svgFP1 = document.createElementNS('SVG_NS', 'path');
        const svgFP2 = document.createElementNS('SVG_NS', 'path');

        svgFP1.setAttribute('d', 'M0 7L15 7');
        svgFP1.setAttribute('stroke', 'currentColor');
        svgFP2.setAttribute('d', 'M9 1L15 7L9 13');
        svgFP2.setAttribute('stroke', 'currentColor');
        svgF.setAttribute('data-di-res-id', '9a0b1e6c-b3c601a6');
        svgF.setAttribute('data-di-rand', '1729050058549');
        svgF.setAttribute('width', '16');
        svgF.setAttribute('height', '14');
        svgF.setAttribute('viewBox', '0 0 16 14');
        svgF.setAttribute('fill', 'none');

        // const svgStyle = document.createElement('style');
        // svgStyle.innerText = "svg[Attributes Style] {width: 16;height: 14;fill: none;} ";

        svgF.setAttribute('class', 'tw-transition-all tw-duration-500 motion-reduce:tw-transition-none tw-block tw-ml-8 group-hover:tw-ml-12 tw-flex-shrink-0');
        svgF.appendChild(svgFP1);
        svgF.appendChild(svgFP2);
        divLnk.appendChild(svgF);

        divLnk.setAttribute('data-di-id', 'di-id-7d6b9fc-8db9f78e');
        divLnk.setAttribute('href', lnkVal);
        divLnk.setAttribute('target', '_self');
        const linkOuterDiv = domB.div({ class: 'tw-text-mobBase md:tw-text-base tw-relative tw-overflow-hidden' });
        const linkOuterDivspan = domB.span({ class: 'tw-whitespace-normal tw-text-left' });
        linkOuterDivspan.innerHTML = colSecond.textContent.trim();
        linkOuterDiv.appendChild(linkOuterDivspan);

        const linkOuterDivspan2 = domB.span({ class: 'tw-absolute tw-left-0 tw-bottom-0 tw-block tw-w-full group-hover:tw-left-[100%] tw-transition-all tw-duration-500 motion-reduce:tw-transition-none tw-h-1 tw-bg-blue-700 hover:tw-bg-blue-800' });
        linkOuterDiv.appendChild(linkOuterDivspan2);

        divLnk.prepend(linkOuterDiv);
        divLinkAnchor.appendChild(divLnk);
        divTabsCon.appendChild(divLinkAnchor);
      }

      if (indexInnerSecond === 4) {
        let divImg = domB.img();
        const parser = new DOMParser();
        const fetchImgTag = parser.parseFromString(colSecond.innerHTML, 'text/html');
        divImg = fetchImgTag.body.firstChild;
        divImg.setAttribute('class', 'tw-mb-20 md:tw-mb-0 md:tw-w-[65%] tw-aspect-[8/5]');
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
    divTabs.setAttribute('id', `opentab${nextContent}`);
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

  divContainer.appendChild(tabComponentContebntDivOutter);
  divContainer2.appendChild(divContainer);
  tabComponentContebntDivOutter2.appendChild(divContainer2);
  divContainer3.appendChild(tabComponentContebntDivOutter2);
  divContainer4.appendChild(divContainer3);
  tabComponentTw.appendChild(divContainer4);

  block.append(tabComponentTw);

  const scTag = document.createElement('script');

  const varStr = "function openTabDiv(t,e,tabornot){var l,a,r;if(tabornot=='0'){for(a=document.getElementsByClassName('tw-grid tw-container tw-transition-all tw-duration-300 tw-transition-ease-in-out md:tw-transition-none tw-grid-rows-[1fr]'),l=0;l<a.length;l++)"
      + "a[l].setAttribute('style','display:none');document.getElementById(e).setAttribute('style','display:block');"
      + "for(r=document.getElementsByClassName('tw-h-auto tw-border-b-2 tw-mr-4 tw-hidden md:tw-block tw-border-blue-700'),l=0;l<r.length;l++){r[l].className=r[l].className.replace('tw-border-blue-700 active','tw-border-grey-100');}t.currentTarget.className='tw-h-auto tw-border-b-2 tw-mr-4 tw-hidden md:tw-block tw-border-blue-700 active';for(r=document.getElementsByClassName('tw-text-left text-base-bolder tw-w-160 hover:tw-text-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-blue-700'),l=0;l<r.length;l++){r[l].className=r[l].className.replace('tw-text-blue-700','tw-text-grey-900');}for(r=document.getElementsByClassName('tw-text-left text-base-bolder tw-w-160 hover:tw-text-grey-900 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-blue-700'),l=0;l<r.length;l++){r[l].className=r[l].className.replace('tw-text-blue-700','tw-text-grey-900').replace('hover:tw-text-grey-900','hover:tw-text-blue-700');}for(r=document.getElementsByClassName('tw-text-left text-base-bolder tw-w-160 hover:tw-text-grey-900 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-grey-900'),l=0;l<r.length;l++){r[l].className=r[l].className.replace('hover:tw-text-grey-900','hover:tw-text-blue-700');}t.currentTarget.getElementsByTagName('button')[0].className='tw-text-left text-base-bolder tw-w-160 hover:tw-text-blue-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-[-2px] focus-visible:tw-outline-blue-700 tw-text-blue-700';}"
    + "if (tabornot=='1'){for(a=document.getElementsByClassName('tw-grid tw-container tw-transition-all tw-duration-300 tw-transition-ease-in-out md:tw-transition-none tw-grid-rows-[1fr]'),l=0;l<a.length;l++)"
      + "a[l].setAttribute('style','display:none');document.getElementById(e).setAttribute('style','display:block');"
      + '}}';

  scTag.innerText = varStr;
  block.appendChild(scTag);

  // const scTagTablet = document.createElement('script');

  // const varStrTablet = "function openTabDivTablet(t,e){var l,a,r;}";

  // scTagTablet.innerText = varStrTablet;
  // block.appendChild(scTagTablet);

  document.getElementById('defaultOpen').click();
  // document.getElementById("defaultOpenTablet").click();
}

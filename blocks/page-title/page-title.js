export default function decorate(block) {
  const twDiv = document.createElement('div');
  twDiv.classList.add('tw');
  const rows = [...block.children]
  //access the rows (image in row 1, text in row2 )
  if(rows.length === 2) {
    const pagetitleitem = document.createElement('div');
    pagetitleitem.classList = ('pagetitleitem flex  flex-grow-1 items-center bg[#e4f1f5] shadow-md mb-4');

    //Create image and text divs
    const imageDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    //append the 1st row content to the image div and 2nd row content to the text div 
    imageDiv.appendChild(rows[0].children[0]);
    textDiv.appendChild(rows[1].children[0]);
    if(imageDiv && textDiv) {
      imageDiv.classList.add('page-title-image');
      textDiv.classList.add('page-title-text');
      //append the image and text divs to the parent divs.
      pagetitleitem.appendChild(imageDiv);
      pagetitleitem.appendChild(textDiv);
      //add the contents to the block
      block.appendChild(pagetitleitem);
    }
    
  }

}
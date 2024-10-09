import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const primaryDiv = document.createElement('div');
  primaryDiv.className = 'cards-content-block';

  [...block.children].forEach((row) => {
    const secondaryDiv = document.createElement('div');
    secondaryDiv.className = 'cards';

    // Move child elements from row to secondaryDiv
    while (row.firstElementChild) {
      secondaryDiv.append(row.firstElementChild);
    }

    [...secondaryDiv.children].forEach((child) => {
      if (child.querySelector('picture') && child.querySelector('p')) {
        // Convert the element into sciex-cards-card-image and reassign class names
        child.className = 'sciex-cards-card-image';

        // Move the <p> element's child <a> element to a new place
        const pElement = child.querySelector('p');
        if (pElement) {
          while (pElement.firstChild) {
            child.appendChild(pElement.firstChild);
          }
          pElement.remove(); // Remove the empty <p> element
        }

        const link = child.querySelector('a');
        if (link) {
          link.className = 'sciex-cards-img-link';
          link.removeAttribute('title');
        }
      } else {
        // Assign class name for other elements
        child.className = 'sciex-cards-card-body';
        // You can add additional logic here for children if needed
        child.children[0].className = 'sciex-cards-card-title';
        child.children[1].className = 'sciex-cards-card-description';
        child.children[2].className = 'sciex-cards-card-ctalink';
        const buttonContainer = child.querySelector('.button');
        if (buttonContainer) {
          buttonContainer.classList.remove('button');
          buttonContainer.className = 'cta';
        }
      }
    });

    primaryDiv.append(secondaryDiv);
  });

  // Optimize images
  primaryDiv.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [
        {
          width: '750',
        },
      ]),
    );
  });

  // Clear existing content and append the updated structure
  block.textContent = '';
  block.append(primaryDiv);
}

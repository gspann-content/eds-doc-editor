import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const primaryDiv = document.createElement('div');
  primaryDiv.className = 'cards-content-block';

  [...block.children].forEach((row) => {
    const secondaryDiv = document.createElement('div');
    secondaryDiv.className = 'cards flex-1 flex flex-col mb-32 md:mb-0';

    // Move child elements from row to secondaryDiv
    while (row.firstElementChild) {
      secondaryDiv.append(row.firstElementChild);
    }

    [...secondaryDiv.children].forEach((child) => {
      if (child.querySelector('picture') && child.querySelector('p')) {
        // Convert the element into sciex-cards-card-image and reassign class names
        child.className = 'sciex-cards-card-image self-start relative w-full aspect-4/3 overflow-hidden mb-20 md:mb-32';

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
        child.children[0].className = 'sciex-cards-card-title text-lg-bolder text-grey-900 mb-6 md:mb-8';
        child.children[1].className = 'sciex-cards-card-description text-base text-grey-500 grow mb-0 break-words atomic-richtext-content';
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

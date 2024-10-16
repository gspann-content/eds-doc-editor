import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(blockElement) {
    const cardListElement = document.createElement('ul');
    cardListElement.className = 'card-list';

    const firstItemElement = document.createElement('div');
    firstItemElement.className = 'first-item custom-first-class';

    const secondItemElement = document.createElement('div');
    secondItemElement.className = 'second-item custom-second-class';

    let itemCount = 0;

    [...blockElement.children].forEach((rowElement) => {
        const cardElement = document.createElement('li');
        cardElement.className = 'card';

        while (rowElement.firstElementChild) {
            cardElement.append(rowElement.firstElementChild);
        }

        [...cardElement.children].forEach((div) => {
            if (div.children.length === 1 && div.querySelector('picture')) {
                div.className = 'card-image';
            } else {
                div.className = (itemCount < 2) ? '' : 'card-body';

                const button = div.querySelector('button');
                if (button) {
                    button.remove();
                }

                if (itemCount > 1) {
                    const horizontalLine = document.createElement('div');
                    horizontalLine.className = 'horizontal-line';
                    horizontalLine.style.borderTop = '1px solid #ccc';
                    horizontalLine.style.margin = '10px 0';

                    const link = document.createElement('a');
                    link.className = 'cta';
                    link.href = '#';
                    link.textContent = 'Learn More';
                    link.classList.add('arrow-link'); // Add a class for styling

                    div.append(horizontalLine, link);

                    div.append(horizontalLine, link);
                }
            }
        });

        if (itemCount === 0) {
            firstItemElement.append(...cardElement.childNodes);
        } else if (itemCount === 1) {
            secondItemElement.append(...cardElement.childNodes);
        } else {
            cardListElement.append(cardElement);
        }

        itemCount++;
    });

    blockElement.textContent = '';
    blockElement.append(firstItemElement, secondItemElement, cardListElement);

    cardListElement.querySelectorAll('picture > img').forEach((imgElement) => {
        imgElement.closest('picture').replaceWith(
            createOptimizedPicture(imgElement.src, imgElement.alt, false, [{ width: '750' }])
        );
    });
}

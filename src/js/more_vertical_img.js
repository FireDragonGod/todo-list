import moreVerticalImg from '../assets/more_vert_FILL0_wght400_GRAD0_opsz24.svg';

class MoreVertical {

  appendThisToListOfProject(dataMore) {
    const divVertical = document.createElement('div');
    const moreVerticalImgWrapper = document.createElement('div');
    let moreVert = new Image();
    moreVert.src = moreVerticalImg;
    const divEditRemove = document.createElement('div');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');

    moreVert.setAttribute(
      'alt',
      'more'
    );

    const allElements = [
      divVertical,
      moreVerticalImgWrapper,
      moreVert,
      divEditRemove,
      editButton,
      removeButton,
    ];

    allElements.forEach((element) => {
      element.setAttribute(
        'data-more',
        `${dataMore}`
      );
    });


    const divEditRemoveHide = divEditRemove.classList.add('hide');
    divEditRemoveHide;

    editButton.textContent = 'Rename';
    removeButton.textContent = 'Remove';

    moreVert.addEventListener(
      'click',
      (event) => {
        divEditRemove.toggleAttribute(`data-more`);
        divEditRemove.classList.toggle('hide');
      }
    );

    removeButton.addEventListener(
      'click',
      (event) => {
        document.querySelector(`li[data-key="${dataMore}"]`).remove();
      }
    );

    editButton.addEventListener(
      'click',
      (event) => {
        const projectName = document.querySelector(`h3[data-key="${dataMore}"]`).classList.toggle('hide');
        const form = document.querySelector(`li[data-key="${dataMore}"] > form`).toggleAttribute(`data-edit`);
        const moreVerticalDiv = document.querySelector(`div[data-more="${dataMore}"] > div:first-child`).classList.toggle('hide');
        const moreVerticalOptions = document.querySelector(`div[data-more="${dataMore}"] > div:nth-child(2)`).classList.toggle('hide');

        projectName;
        form;
        moreVerticalDiv;
        moreVerticalOptions;
      }
    );

    const parentChildren = [
      moreVerticalImgWrapper,
      moreVert,
      divEditRemove,
      editButton,
      removeButton,
    ];

    parentChildren.forEach((element) => {
      divVertical.appendChild(element);
    });

    moreVerticalImgWrapper.appendChild(moreVert);

    const divEditRemoveChildren = [
      editButton,
      removeButton,
    ];

    divEditRemoveChildren.forEach((element) => {
      divEditRemove.appendChild(element);
    });

    return divVertical;
  };
};

export const moreVertical = new MoreVertical();

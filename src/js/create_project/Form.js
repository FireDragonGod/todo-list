const Form  = () => {
  const formToggling = function toggleFormWithAddProjectButtonCancelToCancelAndSaveToToggleForm(
    event,
    classList,
    input,
    element,
    secondElement
  ) {
    if (
      classList === 'add_project_button'
      || classList === 'cancel'
      || classList === 'save' & input >= 4
    ) {
      event.preventDefault();
      element.classList.toggle('hide');
      secondElement.classList.toggle('hide');
    };
  };
  return {
    formToggling,
  }
};

export const formf = Form();

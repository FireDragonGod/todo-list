import moreVert from './more_vert_FILL0_wght400_GRAD0_opsz24.svg'; 

/**
 * @form
 * li
 *   form
 *     ul
 *      li*3
 *      li1 > label + input 
 *      li2 & li3 > buttons li2 save and li3 cancel
 *    /ul
 *   /form
 * /li
 */

export class CreateProjectNameForm {
  li = document.createElement('li');
  form = document.createElement('form');
  ul = document.createElement('ul');
  li1 = document.createElement('li');
  li2 = document.createElement('li');
  li3 = document.createElement('li');
  label = document.createElement('label');
  input = document.createElement('input');
  save = document.createElement('button');
  cancel = document.createElement('button');

  addElementAttribute() {
    this.li.classList.add('formList');
    this.li.classList.add('hide');
    this.form.setAttribute('method', 'get');
    this.form.setAttribute('action', '');
    this.label.setAttribute('for', 'project_name');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('id', 'project_name');
    this.input.setAttribute('name', 'project_name');
    this.input.setAttribute('minlength', '3');
    this.input.setAttribute('maxlength', '60');
    this.input.setAttribute('required', '');
    this.save.setAttribute('type', 'submit');
    this.save.classList.add('save')
    this.cancel.classList.add('cancel');
    this.li1.classList.add('label_input')
  };

  addElementText() {
    this.label.textContent = 'Project Name';
    this.save.textContent = 'Save';
    this.cancel.textContent = 'Cancel'
  };

  appendFormChildren() {
    this.addElementText();
    this.addElementAttribute();
    this.li.appendChild(this.form)
    this.form.appendChild(this.ul);
    [
      this.li1,
      this.li2,
      this.li3
    ].forEach(
      (list) => {
        this.ul.appendChild(list);
      }
    );
    [
      this.label,
      this.input
    ].forEach(
      (list) => {
        this.li1.appendChild(list)
      }
    );
    this.li2.appendChild(this.save);
    this.li3.appendChild(this.cancel);

    return this.li;
  };
};

/**
 * @class
 * * output:
 * <li data-index='n'>
 *   <p>Project_name</p>
 *   <img src="three dot vertical" alt="three_dot_vertical" />
 * </li>
 */

export class ListOfProjectName {
  li = document.createElement('li');
  projectName = document.createElement('p');
  
  AppendListChildren() {
    let moreVertical = new Image();
    moreVertical.src = moreVert;

    const appendListChildren = [
      this.projectName,
      moreVertical
    ].forEach(
      (element) => {
        this.li.appendChild(element);
      }
    );
    appendListChildren;
    return this.li
  };
};
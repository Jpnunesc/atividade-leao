(function (global) {
  function setAriaInvalid(input, isInvalid) {
    input.setAttribute('aria-invalid', String(isInvalid));
  }

  function ensureMessageElement(input) {
    const container = input.closest('.form-group') || input.parentElement;
    let message = container ? container.querySelector('.input-error') : null;
    if (!message && container) {
      message = document.createElement('span');
      message.className = 'input-error';
      message.setAttribute('role', 'alert');
      message.id = `${input.id}-erro`;
      message.hidden = true;
      container.appendChild(message);
    }
    if (message) {
      const describedby = input.getAttribute('aria-describedby') || '';
      if (!describedby.includes(message.id)) {
        input.setAttribute('aria-describedby', describedby ? `${describedby} ${message.id}` : message.id);
      }
    }
    return message;
  }

  function displayValidationState(input) {
    const message = ensureMessageElement(input);
    if (input.validity.valid) {
      setAriaInvalid(input, false);
      if (message) {
        message.textContent = '';
        message.hidden = true;
      }
      return true;
    }

    setAriaInvalid(input, true);
    if (message) {
      let text = 'Campo inválido.';
      if (input.validity.valueMissing) {
        text = 'Este campo é obrigatório.';
      } else if (input.validity.typeMismatch) {
        text = 'Verifique o formato informado.';
      } else if (input.validity.patternMismatch) {
        text = 'O formato informado não corresponde ao padrão solicitado.';
      } else if (input.validity.rangeUnderflow || input.validity.rangeOverflow) {
        text = 'O valor informado está fora do intervalo permitido.';
      }
      message.textContent = text;
      message.hidden = false;
    }
    return false;
  }

  function attachValidationHandlers(form) {
    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
    inputs.forEach((input) => {
      input.addEventListener('blur', () => displayValidationState(input));
      input.addEventListener('input', () => displayValidationState(input));
    });
  }

  global.AppValidate = { displayValidationState, attachValidationHandlers };
})(window);

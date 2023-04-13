const createErrorField = (title, message, ) => {
    const errorField = document.createElement('div');
    errorField.classList.add('alert');
    errorField.classList.add('alert-danger');
    errorField.classList.add('error');
    errorField.classList.add('centered');

    const errorTitle = document.createElement('div');
    errorTitle.innerText = title;

    const errorMessage = document.createElement('div');
    errorMessage.style.textAlign = 'center';
    errorMessage.innerText = message;

    errorField.append(errorTitle, errorMessage);
    
    return errorField;
}

export default createErrorField;
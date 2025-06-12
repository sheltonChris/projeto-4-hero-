document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button){
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            closeAlltabs();
            tab.classList.add('shows__list--is-active');
            removeButtonActive();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openAndCloseAnswer)
    }
})

function  openAndCloseAnswer(element){   //FUNÇÃO ABRE E FECHA FAQ//
    const classTarget = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode

    elementFather.classList.toggle(classTarget);
}

function removeButtonActive(){ //FUNÇÃO REMOVER BORDER DA SEÇÃO ATRAÇÃO//
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}

function closeAlltabs(){ //FUNÇÃO MUDAR TABELAS DA SEÇÃO ATRAÇÃO// 
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
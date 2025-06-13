document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < heightHero) {
            escondeElementosHeader();
        } else{
            mostraElementosHeader();
        }
    })

    

    function escondeElementosHeader(){
        const header = document.querySelector('header');

        header.classList.add('header--is-hidden');
    }

    function mostraElementosHeader(){
        const header = document.querySelector('header');

        header.classList.remove('header--is-hidden');
    }

    //Seção de atração programação das abas
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

    //Seção FAQ, programação dos accordions
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
async function includeHTML() {
    const includes = document.querySelectorAll('[data-include]');
    const body = document.querySelector('body');

    // Verifica se a página tem o atributo data-include-nav-footer="true"
    if (body.dataset.includeNavFooter === 'true') {
        for (let i = 0; i < includes.length; i++) {
            const element = includes[i];
            const file = element.getAttribute('data-include');
            const resp = await fetch(file);
            if (resp.ok) {
                element.innerHTML = await resp.text();
            } else {
                element.innerHTML = 'Página não encontrada';
            }
        }
    } else {
        // Se a página não tem o atributo, remove o conteúdo dos elementos
        includes.forEach(element => element.innerHTML = '');
    }
}

includeHTML();

/*
MEMENTO

Le patron Memento enregistre et extériorise l’état interne d’un objet 
pour pouvoir restaurer l’objet à un état précédant plus tard.

Prenons ici l'exemple d'un éditeur de texte qui enregistre ce que vous tapez au fur et à mesure
et qui est capable de restaurer une version précédente de votre texte si vous le souhaitez.

*/

// Tout d'abord nous avons notre objet memento qui va pouvoir garder l'état de l'éditeur:


class EditorMemento {
    constructor(content) {
        this._content = content
    }
    
    getContent() {
        return this._content
    }
}

// Ensuite nous avons le Créateur de l'éditeur, qui va utiliser l'objet memento

class Editor {
    constructor(){
        this._content = ''
    }
    
    type(words) {
        this._content = this._content + ' ' + words
    }
    
    getContent() {
        return this._content
    }
    
    save() {
        return new EditorMemento(this._content)
    }
    
    restore(memento) {
        this._content = memento.getContent()
    }
}

// On pourra ensuite l'utiliser ici :

const editor = new Editor()

// Tapons du texte
editor.type('Du texte.')
editor.type('Encore du texte.')

// Enregistrons l'état à restaurer : Du texte. Encore du texte.
const saved = editor.save()

// Tapon encore du texte
editor.type('Encore et encore du texte.')


//Sortie : Contenu avant d'avoir sauvegardé
console.log(editor.getContent())// Du texte. Encore du texte. Encore et encore du texte.

//On restaure le dernier état sauvegardé
editor.restore(saved)

console.log(editor.getContent()) // Du texte. Encore du texte.
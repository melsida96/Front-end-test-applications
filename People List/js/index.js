function allowDrop(ev) {
    ev.preventDefault();
}

var id;

function dragStart(ev) {
    id = ev.target.id;
}

function drop(ev) {
    ev.target.append(document.getElementById(id));
}
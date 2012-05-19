function $(string, relativeTo) {
    return (relativeTo || document).querySelector(string);
}

(function() {
    new Roster($('body'));
    new Dialog($('body'));
}());
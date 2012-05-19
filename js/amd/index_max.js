function $(string, relativeTo) {
    return (relativeTo || document).querySelector(string);
}

require(["b-roster"], function(Roster) {
    new Roster($('body'));
});
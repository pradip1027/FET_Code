$(document).ready(function () {
    const $root = $('#root');
    $root.append('<h2>jQuery Effects Demonstration</h2>');

    const $playground = $('<div class="playground"></div>');
    const $targetCols = $('<div class="cols"></div>');
    $targetCols.append('<div id="box" class="target-box">Target Box</div>');
    $playground.append($targetCols);

    const $btnGrid = $('<div class="btn-grid"></div>');
    const effects = [
        { id: 'hide', label: 'hide()', explain: 'Hides the element with a sliding/fading animation.' },
        { id: 'show', label: 'show()', explain: 'Shows a previously hidden element.' },
        { id: 'toggle', label: 'toggle()', explain: 'Switches between showing and hiding.' },
        { id: 'fadeIn', label: 'fadeIn()', explain: 'Gradually changes opacity from 0 to 1.' },
        { id: 'fadeOut', label: 'fadeOut()', explain: 'Gradually changes opacity from 1 to 0.' },
        { id: 'fadeToggle', label: 'fadeToggle()', explain: 'Toggles the fade state.' },
        { id: 'slideUp', label: 'slideUp()', explain: 'Hides by sliding upwards.' },
        { id: 'slideDown', label: 'slideDown()', explain: 'Shows by sliding downwards.' },
        { id: 'slideToggle', label: 'slideToggle()', explain: 'Toggles the slide state.' }
    ];

    effects.forEach(e => {
        const $b = $(`<button id="btn-${e.id}">${e.label}</button>`);
        $btnGrid.append($b);
    });
    $playground.append($btnGrid);
    $root.append($playground);

    const $doc = $('<div class="doc" id="doc"><h4>Method Explanation</h4><p id="desc">Click a button to see the effect and explanation.</p></div>');
    $root.append($doc);

    // Event Bindings
    effects.forEach(e => {
        $(`#btn-${e.id}`).on('click', function () {
            // Apply effect
            if (e.id === 'hide' || e.id === 'show' || e.id === 'toggle') $('#box')[e.id](500);
            else if (e.id.includes('fade')) $('#box')[e.id](500);
            else if (e.id.includes('slide')) $('#box')[e.id](500);

            // Update Doc
            $('#desc').text(e.explain);
        });
    });
});

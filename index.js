var notes_ids = ['note_a', 'note_b', 'note_c', 'note_d', 'note_e', 'note_f', 'note_g'];
var sharp_flats_ids = ['note_neutral', 'note_sharp', 'note_flat'];
var chord_ids = ['chord_maj','chord_min','chord_aug','chord_sus2','chord_sus4'];
var mode_ids = ['mode_ionian','mode_dorial','mode_phrygian','mode_lydian','mode_mixolydian','mode_aeolian', 'mode_locrian'];
var shape_ids = ['shape_c', 'shape_a', 'shape_g', 'shape_e', 'shape_d'];

var notes_text = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var sharp_flat_text = ['','♯','♭'];
var quality_text = ['','m','+','sus2', 'sus4'];
var modes_text = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
var shapes_text = ['(C Shape)', '(A Shape)', '(G Shape)', '(E Shape)', '(D Shape)'];

var notes = [];
var sharp_flat = [];
var quality = [];
var modes = [];
var shapes = [];


function fillArrays() {
    var i;
    notes = [];
    sharp_flat = [];
    quality = [];
    modes = [];
    shapes = [];

    for (i = 0; i < notes_ids.length; i++) {
        if (document.getElementById(notes_ids[i]).checked) {
            notes.push(notes_text[i]);
        }
    }
    for (i = 0; i < sharp_flats_ids.length; i++) {
        if (document.getElementById(sharp_flats_ids[i]).checked) {
            sharp_flat.push(sharp_flat_text[i]);
        }
    }
    for (i = 0; i < chord_ids.length; i++) {
        if (document.getElementById(chord_ids[i]).checked) {
            quality.push(quality_text[i]);
        }
    }
    for (i = 0; i < mode_ids.length; i++) {
        if (document.getElementById(mode_ids[i]).checked) {
            modes.push(modes_text[i]);
        }
    }
    for (i = 0; i < shape_ids.length; i++) {
        if (document.getElementById(shape_ids[i]).checked) {
            shapes.push(shapes_text[i]);
        }
    }
}

function randomArrayValue(a) {
    return (a.length>0) ? a[Math.floor([Math.random() * a.length])] : '';
}


function getRandom() {
    fillArrays();
    var result = "";
    for (var i = 0; i < 8; i++) {
        var n = randomArrayValue(notes);
        var sf = randomArrayValue(sharp_flat);
        var q = randomArrayValue(quality);
        var m = randomArrayValue(modes);
        var sh = randomArrayValue(shapes);

        result += '<br/>' + n + sf +  q + ' ' + m + ' ' + sh + '<br/>';
    }
    document.getElementById('result').innerHTML=result;
}

function setChecked(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).checked=value
    }
}

function clearAllNotes() {
    setChecked(notes_ids, false);
    setChecked(sharp_flats_ids, false);
}

function selectAllNotes() {
    setChecked(notes_ids, true);
    setChecked(sharp_flats_ids, true);
}

function clearAllChords() {
    setChecked(chord_ids, false);
}

function selectAllChords() {
    setChecked(chord_ids, true);
}

function clearAllModes() {
    setChecked(mode_ids, false);
}

function selectAllModes() {
    setChecked(mode_ids, true);
}

function clearAllShapes() {
    setChecked(shape_ids, false);
}

function selectAllShapes() {
    setChecked(shape_ids, true);
}

function randomValue(a) {
    return a[Math.floor([Math.random() * a.length])];
}

function getRandomNote() {
    var notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    var sharp_flat = ['','♯','♭'];
    var n = randomValue(notes);
    var s = randomValue(sharp_flat);
    return n+'<sup class="sharpflat">'+s+'</sup>';
}

function randomChords() {
    var quality = ['','m','+','sus2', 'sus4'];

    var result = "";
    for (var i = 0; i < 10; i++) {
        var q = randomValue(quality);
        result += '<br/>' + getRandomNote() + q + '<br/>';
    }
    document.getElementById('result').innerHTML=result;
}

function randomScales() {
    var modes = [' Ionian', 'Aeolian'];

    var result = "";
    for (var i = 0; i < 10; i++) {
        var m = randomValue(modes);
        result += '<br/>' + getRandomNote() + m + '<br/>';
    }
    document.getElementById('result').innerHTML=result;
}

function randomScalesShapes() {
    var modes = [' Ionian', 'Aeolian'];
    var shapes = ['C','A','G','E','D'];

    var result = "";
    for (var i = 0; i < 10; i++) {
        var m = randomValue(modes);
        var s = randomValue(shapes);
        result += '<br/>' + getRandomNote() + m + ' - Shape : ' + s + '<br/>';
    }
    document.getElementById('result').innerHTML=result;
}

function randomNotes() {
    var result = "";
    for (var i = 0; i < 10; i++) {
        result += '<br/>' +  getRandomNote() + '<br/>';
    }
    document.getElementById('result').innerHTML=result;
}
const word1 = '焼き';
const word2 = '茹で';
const word3 = '炒め';
const word4 = '揚げ';
const word5 = '煮';
const word6 = '和え';
const word7 = '蒸し';
const word8 = 'ポワレ';
const word9 = 'ブレゼ';
const word10 = 'コンフィ';
const word11 = 'ポシェ';
const word12 = 'ロティール';
const word13 = 'フリット';
const word14 = 'ヴァプール';
const word15 = 'グラティネ';
const word16 = 'グリエ';
const word17 = 'ソテ';
const word18 = '缶詰';


const setBtn = function () {
    const n = Math.random() * 190;
    if (n < 10) {
        document.write(word1);
    } else if (n < 20) {
        document.write(word2);
    } else if (n < 30) {
        document.write(word3);
    } else if (n < 40) {
        document.write(word4);
    } else if (n < 50) {
        document.write(word5);
    } else if (n < 60) {
        document.write(word6);
    } else if (n < 70) {
        document.write(word7);
    } else if (n < 80) {
        document.write(word8);
    } else if (n < 90) {
        document.write(word9);
    } else if (n < 100) {
        document.write(word10);
    } else if (n < 110) {
        document.write(word11);
    } else if (n < 120) {
        document.write(word12);
    } else if (n < 130) {
        document.write(word13);
    } else if (n < 140) {
        document.write(word14);
    } else if (n < 150) {
        document.write(word15);
    } else if (n < 160) {
        document.write(word16);
    } else if (n < 170) {
        document.write(word17);
    } else if (n < 180) {
        document.write(word18);
    }
};

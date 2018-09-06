// ==UserScript==
// @name         vkDialogsColored
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  coloring vk dialogues in the most buggy way
// @author       OskarZeta
// @include      https://vk.com/*
// @include      http://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let dialogsTrigger = false;
  let colorsToSet = JSON.parse(localStorage.getItem('colors')) || [];
  let colorUI = document.createElement('div');
  colorUI.classList.add('script-colorui');
  colorUI.style.width = '230px';
  colorUI.style.backgroundColor = 'white';

  const createPicker = () => {
    let picker = document.createElement('div');
    picker.classList.add('picker-wrapper');
    picker.style.border = '2px solid grey';
    let colorWrapper = document.createElement('div');
    colorWrapper.classList.add('colors-wrapper');
    colorWrapper.style.display = 'flex';
    colorWrapper.style.flexWrap = 'wrap';
    const createColorDiv = (color) => {
      let elem = document.createElement('div');
      elem.style.width = '8px';
      elem.style.height = '20px';
      elem.style.backgroundColor = color;
      elem.classList.add('color');
      elem.style.cursor = 'pointer';
      return elem;
    };
    colorWrapper.appendChild(createColorDiv('Pink'));
    colorWrapper.appendChild(createColorDiv('LightPink'));
    colorWrapper.appendChild(createColorDiv('HotPink'));
    colorWrapper.appendChild(createColorDiv('DeepPink'));
    colorWrapper.appendChild(createColorDiv('PaleVioletRed'));
    colorWrapper.appendChild(createColorDiv('MediumVioletRed'));
    colorWrapper.appendChild(createColorDiv('Salmon'));
    colorWrapper.appendChild(createColorDiv('DarkSalmon'));
    colorWrapper.appendChild(createColorDiv('LightCoral'));
    colorWrapper.appendChild(createColorDiv('IndianRed'));
    colorWrapper.appendChild(createColorDiv('Crimson'));
    colorWrapper.appendChild(createColorDiv('FireBrick'));
    colorWrapper.appendChild(createColorDiv('DarkRed'));
    colorWrapper.appendChild(createColorDiv('Red'));
    colorWrapper.appendChild(createColorDiv('OrangeRed'));
    colorWrapper.appendChild(createColorDiv('Tomato'));
    colorWrapper.appendChild(createColorDiv('Coral'));
    colorWrapper.appendChild(createColorDiv('DarkOrange'));
    colorWrapper.appendChild(createColorDiv('Orange'));
    colorWrapper.appendChild(createColorDiv('Yellow'));
    colorWrapper.appendChild(createColorDiv('LightYellow'));
    colorWrapper.appendChild(createColorDiv('LemonChiffon'));
    colorWrapper.appendChild(createColorDiv('LightGoldenrodYellow'));
    colorWrapper.appendChild(createColorDiv('PapayaWhip'));
    colorWrapper.appendChild(createColorDiv('Moccasin'));
    colorWrapper.appendChild(createColorDiv('PeachPuff'));
    colorWrapper.appendChild(createColorDiv('PaleGoldenrod'));
    colorWrapper.appendChild(createColorDiv('Khaki'));
    colorWrapper.appendChild(createColorDiv('DarkKhaki'));
    colorWrapper.appendChild(createColorDiv('Gold'));
    colorWrapper.appendChild(createColorDiv('Cornsilk'));
    colorWrapper.appendChild(createColorDiv('BlanchedAlmond'));
    colorWrapper.appendChild(createColorDiv('Bisque'));
    colorWrapper.appendChild(createColorDiv('NavajoWhite'));
    colorWrapper.appendChild(createColorDiv('Wheat'));
    colorWrapper.appendChild(createColorDiv('BurlyWood'));
    colorWrapper.appendChild(createColorDiv('Tan'));
    colorWrapper.appendChild(createColorDiv('RosyBrown'));
    colorWrapper.appendChild(createColorDiv('SandyBrown'));
    colorWrapper.appendChild(createColorDiv('Goldenrod'));
    colorWrapper.appendChild(createColorDiv('DarkGoldenrod'));
    colorWrapper.appendChild(createColorDiv('Peru'));
    colorWrapper.appendChild(createColorDiv('Chocolate'));
    colorWrapper.appendChild(createColorDiv('SaddleBrown'));
    colorWrapper.appendChild(createColorDiv('Sienna'));
    colorWrapper.appendChild(createColorDiv('Brown'));
    colorWrapper.appendChild(createColorDiv('Maroon'));
    colorWrapper.appendChild(createColorDiv('DarkOliveGreen'));
    colorWrapper.appendChild(createColorDiv('Olive'));
    colorWrapper.appendChild(createColorDiv('OliveDrab'));
    colorWrapper.appendChild(createColorDiv('YellowGreen'));
    colorWrapper.appendChild(createColorDiv('LimeGreen'));
    colorWrapper.appendChild(createColorDiv('Lime'));
    colorWrapper.appendChild(createColorDiv('LawnGreen'));
    colorWrapper.appendChild(createColorDiv('Chartreuse'));
    colorWrapper.appendChild(createColorDiv('GreenYellow'));
    colorWrapper.appendChild(createColorDiv('SpringGreen'));
    colorWrapper.appendChild(createColorDiv('MediumSpringGreen'));
    colorWrapper.appendChild(createColorDiv('LightGreen'));
    colorWrapper.appendChild(createColorDiv('PaleGreen'));
    colorWrapper.appendChild(createColorDiv('DarkSeaGreen'));
    colorWrapper.appendChild(createColorDiv('MediumAquamarine'));
    colorWrapper.appendChild(createColorDiv('MediumSeaGreen'));
    colorWrapper.appendChild(createColorDiv('SeaGreen'));
    colorWrapper.appendChild(createColorDiv('ForestGreen'));
    colorWrapper.appendChild(createColorDiv('Green'));
    colorWrapper.appendChild(createColorDiv('DarkGreen'));
    colorWrapper.appendChild(createColorDiv('Aqua'));
    colorWrapper.appendChild(createColorDiv('Cyan'));
    colorWrapper.appendChild(createColorDiv('LightCyan'));
    colorWrapper.appendChild(createColorDiv('PaleTurquoise'));
    colorWrapper.appendChild(createColorDiv('Aquamarine'));
    colorWrapper.appendChild(createColorDiv('Turquoise'));
    colorWrapper.appendChild(createColorDiv('MediumTurquoise'));
    colorWrapper.appendChild(createColorDiv('DarkTurquoise'));
    colorWrapper.appendChild(createColorDiv('LightSeaGreen'));
    colorWrapper.appendChild(createColorDiv('CadetBlue'));
    colorWrapper.appendChild(createColorDiv('DarkCyan'));
    colorWrapper.appendChild(createColorDiv('Teal'));
    colorWrapper.appendChild(createColorDiv('LightSteelBlue'));
    colorWrapper.appendChild(createColorDiv('PowderBlue'));
    colorWrapper.appendChild(createColorDiv('LightBlue'));
    colorWrapper.appendChild(createColorDiv('SkyBlue'));
    colorWrapper.appendChild(createColorDiv('LightSkyBlue'));
    colorWrapper.appendChild(createColorDiv('DeepSkyBlue'));
    colorWrapper.appendChild(createColorDiv('DodgerBlue'));
    colorWrapper.appendChild(createColorDiv('CornflowerBlue'));
    colorWrapper.appendChild(createColorDiv('SteelBlue'));
    colorWrapper.appendChild(createColorDiv('RoyalBlue'));
    colorWrapper.appendChild(createColorDiv('Blue'));
    colorWrapper.appendChild(createColorDiv('MediumBlue'));
    colorWrapper.appendChild(createColorDiv('DarkBlue'));
    colorWrapper.appendChild(createColorDiv('Navy'));
    colorWrapper.appendChild(createColorDiv('MidnightBlue'));
    colorWrapper.appendChild(createColorDiv('Lavender'));
    colorWrapper.appendChild(createColorDiv('Thistle'));
    colorWrapper.appendChild(createColorDiv('Plum'));
    colorWrapper.appendChild(createColorDiv('Violet'));
    colorWrapper.appendChild(createColorDiv('Orchid'));
    colorWrapper.appendChild(createColorDiv('Fuchsia'));
    colorWrapper.appendChild(createColorDiv('Magenta'));
    colorWrapper.appendChild(createColorDiv('MediumOrchid'));
    colorWrapper.appendChild(createColorDiv('MediumPurple'));
    colorWrapper.appendChild(createColorDiv('BlueViolet'));
    colorWrapper.appendChild(createColorDiv('DarkViolet'));
    colorWrapper.appendChild(createColorDiv('DarkOrchid'));
    colorWrapper.appendChild(createColorDiv('DarkMagenta'));
    colorWrapper.appendChild(createColorDiv('Purple'));
    colorWrapper.appendChild(createColorDiv('Indigo'));
    colorWrapper.appendChild(createColorDiv('DarkSlateBlue'));
    colorWrapper.appendChild(createColorDiv('SlateBlue'));
    colorWrapper.appendChild(createColorDiv('MediumSlateBlue'));
    colorWrapper.appendChild(createColorDiv(''));
    colorWrapper.appendChild(createColorDiv('Snow'));
    colorWrapper.appendChild(createColorDiv('Honeydew'));
    colorWrapper.appendChild(createColorDiv('MintCream'));
    colorWrapper.appendChild(createColorDiv('Azure'));
    colorWrapper.appendChild(createColorDiv('AliceBlue'));
    colorWrapper.appendChild(createColorDiv('GhostWhite'));
    colorWrapper.appendChild(createColorDiv('WhiteSmoke'));
    colorWrapper.appendChild(createColorDiv('Seashell'));
    colorWrapper.appendChild(createColorDiv('Beige'));
    colorWrapper.appendChild(createColorDiv('OldLace'));
    colorWrapper.appendChild(createColorDiv('FloralWhite'));
    colorWrapper.appendChild(createColorDiv('Ivory'));
    colorWrapper.appendChild(createColorDiv('AntiqueWhite'));
    colorWrapper.appendChild(createColorDiv('Linen'));
    colorWrapper.appendChild(createColorDiv('LavenderBlush'));
    colorWrapper.appendChild(createColorDiv('MistyRose'));
    colorWrapper.appendChild(createColorDiv('Gainsboro'));
    colorWrapper.appendChild(createColorDiv('LightGray'));
    colorWrapper.appendChild(createColorDiv('Silver'));
    colorWrapper.appendChild(createColorDiv('DarkGray'));
    colorWrapper.appendChild(createColorDiv('Gray'));
    colorWrapper.appendChild(createColorDiv('DimGray'));
    colorWrapper.appendChild(createColorDiv('LightSlateGray'));
    colorWrapper.appendChild(createColorDiv('SlateGray'));
    colorWrapper.appendChild(createColorDiv('DarkSlateGray'));
    colorWrapper.appendChild(createColorDiv('Black'));
    picker.appendChild(colorWrapper);
    return picker;
  };

  const colorPickerShow = (e) => {
    if (!document.querySelector('.picker-wrapper')) {
      e.target.parentNode.parentNode.appendChild(createPicker());
    } else {
      e.target.parentNode.parentNode.removeChild(document.querySelector('.picker-wrapper'));
    }
  };

  const colorSelect = (e) => {
    if (e.target.classList.contains('color')){
      let id = e.target.parentNode.parentNode.parentNode.querySelector('.colorui-wrapper span').classList[0];
      let spanWithId = document.querySelector('.colorui-wrapper span');
      let coloredWrapper = document.querySelector('.colorui-wrapper');
      if (spanWithId.classList.contains(id)) {
        coloredWrapper.style.backgroundColor = e.target.style.backgroundColor;
      }
      if (colorsToSet.length > 0) {
        let index;
        let currentId = colorsToSet.find((color) => {
          return color.id === id;
        });
        if (currentId) {
          index = colorsToSet.indexOf(currentId);
          colorsToSet[index] = {
            id: id,
            color: e.target.style.backgroundColor
          }
        } else {
          colorsToSet.push({
            id: id,
            color: e.target.style.backgroundColor
          });
        }
      } else {
        colorsToSet.push({
          id: id,
          color: e.target.style.backgroundColor
        });
      }
      localStorage.setItem('colors', JSON.stringify(colorsToSet));
    }
  };

  let urlIntervalCheck = setInterval(() => {
    let dialogs = document.querySelector('#im_dialogs');
    if (dialogs && !dialogsTrigger) {
      dialogsTrigger = true;
      if (colorsToSet.length > 0){
        colorsToSet.forEach((coloredDialog) => {
          let dialogToColor = document.querySelector(`._im_dialog._im_dialog_${coloredDialog.id}`);
          dialogToColor.style.backgroundColor = coloredDialog.color;
        });
      }
    }
    let activeDialog = document.querySelector('._im_peer_tab.ui_rmenu_item.ui_rmenu_item_sel');
    let colorPicker;
    let colorWrapper;
    let id;
    if (activeDialog && !document.querySelector('.script-colorui')) {
      dialogsTrigger = false;
      id = activeDialog.attributes.id.value.slice(0);
      colorUI.innerHTML =
        `<div class='colorui-wrapper' style='display: flex; justify-content: space-between; flex-wrap: wrap; padding: 10px;'><span class=${id.split('ui_rmenu_peer_')[1]}>${activeDialog.attributes.title.value}</span><button class='picker'>pick color</button></div>`;
      setInterval(() => {
        if (activeDialog !== document.querySelector('._im_peer_tab.ui_rmenu_item.ui_rmenu_item_sel') && document.querySelector('._im_peer_tab.ui_rmenu_item.ui_rmenu_item_sel')) {
          activeDialog = document.querySelector('._im_peer_tab.ui_rmenu_item.ui_rmenu_item_sel');
          id = activeDialog.attributes.id.value.slice(0);
          colorUI.innerHTML =
            `<div class='colorui-wrapper' style='display: flex; justify-content: space-between; flex-wrap: wrap; padding: 10px;'><span class=${id.split('ui_rmenu_peer_')[1]}>${activeDialog.attributes.title.value}</span><button class='picker'>pick color</button></div>`;
        }
      }, 200);
      document.querySelector('.im-right-menu').appendChild(colorUI);
    } else if (!document.querySelector('._im_peer_tab.ui_rmenu_item.ui_rmenu_item_sel') && document.querySelector('.script-colorui')) {
      dialogsTrigger = false;
      document.querySelector('.im-right-menu').removeChild(document.querySelector('.script-colorui'));
    } else if (document.querySelector('._im_peer_tab.ui_rmenu_item.ui_rmenu_item_sel') && document.querySelector('.script-colorui')) {
      dialogsTrigger = false;
      colorPicker = document.querySelector('.picker');
      colorPicker.addEventListener('click', colorPickerShow);
      if (document.querySelector('.colors-wrapper')) {
        colorWrapper = document.querySelector('.colors-wrapper');
        colorWrapper.addEventListener('click', colorSelect);
      }
    } else {
      dialogsTrigger = false;
    }
  }, 200);
})();
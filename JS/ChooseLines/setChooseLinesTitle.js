const img=document.getElementsByClassName('main-content-choose-lines-chooser-button-image')[0];const title=document.getElementsByClassName('main-content-choose-lines-chooser-button-title');const chooseLinesLi=document.getElementsByClassName('selector-items header-language-selector-items-li');const selectorDivsOnChooseLines=document.getElementsByClassName('selector');let mainContentSelectionsMain=document.getElementsByClassName('main-content-selections-container')[0];let allItemsTitle=[`KTM Batu Caves - <br>Pulau Sebang Line`,`KTM Tanjung Malim - <br>Port Klang Line`,`LRT Ampang Line`,`LRT Sri Petaling`,`LRT Kelana Jaya Line`,`KLIA Ekspres Line`,`KLIA Transit Line`,`KL Monorail Line`,`MRT Kajang Line`,`KTM KL Sentral - <br>Terminal Skypark Line`,`LRT Shah Alam Line`,`MRT Putrajaya Line`,`BRT Sunway Line`,];function hideContainerSelector(){for(let i=0;i<selectorDivsOnChooseLines.length;i++){onContainerSelectorEventHide(selectorDivsOnChooseLines,i)}}
for(let i=0;i<chooseLinesLi.length;i++){chooseLinesLi[i].addEventListener('click',()=>{trainLine.lineName=chooseLinesLi[i].textContent;chooseLinesLiGlobalText=chooseLinesLi[i].textContent;setTransitMapImgSrc(trainLine);let selectedLine=chooseLinesLi[i].textContent;img.src=`Transit Lines Icon/${selectedLine}.svg`;title[0].innerHTML=allItemsTitle[i];if(selectedLine==="KTM KL Sentral - Terminal Skypark Line"){infoAlertContainer.style.display='block';infoAlertContent.textContent="This line was discontinued until further notice!"}else if(selectedLine==="LRT Shah Alam Line"){infoAlertContainer.style.display='block';infoAlertContent.textContent="This line is still under construction"}else{infoAlertContainer.style.display='none'}
if(selectedLine==="KTM Batu Caves - Pulau Sebang Line"){deleteAllScheduleLiItems("Batu Caves - Pulau Sebang Line");fillInDataForScheduleBatuCavesPulauSebangLine()}else if(selectedLine==="KTM Tanjung Malim - Port Klang Line"){deleteAllScheduleLiItems("Tanjung Malim - Port Klang Line");fillInDataForScheduleTanjungMalimPortKlangLine()}
if(selectedLine!=="KTM Batu Caves - Pulau Sebang Line"&&selectedLine!=="KTM Tanjung Malim - Port Klang Line"){deleteAllScheduleLiItems("Batu Caves - Pulau Sebang Line");deleteAllScheduleLiItems("Tanjung Malim - Port Klang Line");scheduleSection.style.display='none';scheduleButton.style.opacity='0.7'}else{scheduleButton.style.opacity='1'}
hideContainerSelector();mainContentSelectionsMain.style.display='flex'})}
for(let i=0;i<liSelectors.length;i++){liSelectors[i].addEventListener('click',()=>{setTransitMapImgSrc(trainLine)})}
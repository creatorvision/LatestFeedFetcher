function hello() {

  chrome.tabs.executeScript({file:"Jquery.js"},function(){
    chrome.tabs.executeScript({file:"playDom.js"});
  });
}

document.getElementById('button').addEventListener('click', hello,false);
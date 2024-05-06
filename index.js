
let deBounceTime = 500

function getData(){
    let data = document.getElementById('searchText').value
    console.log(data)
}

function deBounce(fn, delay) {
    let timer;
    return function (...args){
        let context = this
        console.log(context)
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context,...args)
        },delay)
    }
}

const getBetterData = deBounce(getData, deBounceTime)

const getBetterTData = throttle(getData, deBounceTime)



function throttle(fn, delay){
    let wait = false;
    return (...args) => {
        if(wait) return

        fn(...args)
        wait = true

        setTimeout(()=>{
            wait = false
        },delay)
    }
}

function downloadFile(url, fileName) {
    fetch(url, { method: 'get', referrerPolicy: 'no-referrer'})
      .then(res => {
        console.log(res)
        return res.blob()})
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };

//downloadFile('http://10.134.82.241/quantum/template/api/v2.0/download','config_summary.yaml')
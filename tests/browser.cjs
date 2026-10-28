const { chromium } = require('@playwright/test');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1100},deviceScaleFactor:1});const errors=[];
 page.on('pageerror',e=>{errors.push(e.message);console.log('PAGE ERROR:',e.message)});
 page.on('console',m=>{if(m.type()==='error')console.log('CONSOLE:',m.text().slice(0,400));});
 await page.goto('http://127.0.0.1:4173',{waitUntil:'networkidle'});
 await page.screenshot({path:'/tmp/bunkin-desktop.png',fullPage:false});
 console.log('TITLE:',await page.title());console.log('BODY:',(await page.locator('body').innerText()).slice(0,1500));
 fs.writeFileSync('/tmp/bunkin-browser-errors.json',JSON.stringify(errors));
 await browser.close();if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});

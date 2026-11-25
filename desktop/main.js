const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:1100,height:740,backgroundColor:'#040a18',autoHideMenuBar:true,webPreferences:{webSecurity:false}});w.loadFile('app/index.html')});
app.on('window-all-closed',()=>app.quit());

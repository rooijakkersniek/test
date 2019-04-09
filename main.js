// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

//  type="text/javascript" src="https://www.gstatic.com/charts/loader.js">;
//      type="text/javascript">
//       google.charts.load('current', {'packages':['table']});
//       google.charts.setOnLoadCallback(drawTable);

//       function drawTable() {
//         var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Naam');
//         data.addColumn('string', 'Club');
//         data.addColumn('string', 'Salaris');
//         data.addRows([
//           ['Lionel Messi', 'Barcelona', '€98.000.000' ],
//           ['Cristiano Ronaldo', 'Juventus', '€95.000.000'],
//           ['Neymar', 'Paris-saint-germain', '€79.000.000'],
//           ['Gareth Bale', 'Real Madrid', '30.000.000'],
//           ['Paul Pogba', 'Manchester United', '€26.000.000']
//       ]);

//         var table = new google.visualization.Table(document.getElementById('table_div'));

//         table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
//       // }
    
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

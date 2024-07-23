const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743416283";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_03_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxODJxUVNWZTZXV3J6eTFhbDZMb3BRSlE5N3Z3djY5bkFSaE92TEYzOXdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5MVBSWC14b1RSU2FWTjNmSzhIaGRBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhNjViNDYxLTlhNzItNDA1YS04ZjJiLTAyYmQ3MTI0NTcxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDIyOCxcbiAgICAgIDMwLFxuICAgICAgOTUsXG4gICAgICAxODUsXG4gICAgICAxNjEsXG4gICAgICAyNDAsXG4gICAgICA4MSxcbiAgICAgIDEyMSxcbiAgICAgIDEsXG4gICAgICAyMjMsXG4gICAgICAxMDgsXG4gICAgICA0OSxcbiAgICAgIDE0MSxcbiAgICAgIDE5NixcbiAgICAgIDQyLFxuICAgICAgMTgwLFxuICAgICAgMzAsXG4gICAgICAyNixcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDk5LFxuICAgICAgMTU1LFxuICAgICAgNjgsXG4gICAgICA3MCxcbiAgICAgIDIyNCxcbiAgICAgIDUxLFxuICAgICAgMTcyLFxuICAgICAgMzEsXG4gICAgICAxNzgsXG4gICAgICAxMTQsXG4gICAgICA2NyxcbiAgICAgIDExNCxcbiAgICAgIDEzOCxcbiAgICAgIDEyOSxcbiAgICAgIDc3LFxuICAgICAgMTY3LFxuICAgICAgMjAyLFxuICAgICAgMjQsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVFOWUVLQVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYxNjU1NjExNzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc2NDQxODExOTE5MDQ2OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AySnN1TURFTVNvLzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWxVZjdXOFpZMjlaaEErZEtIcmtPMVlpSzI2ZVk5dFdqSFZ6ZGhiOXBoQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0aTVBR3prckNZNkFVdzhnNC9pY1I3ckZ6Vi9LcUpoZE1QRnl4YzhMSG1hSUZZVVNjcUdPdFpuVTZqSjB1MXRZMWM2M21Ma1BxWkY0UEl0TFd3Z25Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTekNpamtRZ1F0eUkzL0JlRHdZYjZlR2Nhb2JFU3pQZlpKWDhNcjc1K1pkY0Q2d1pUTTNvZzNKRjBXUDQvZE04RlNQMU9QNExia3RHZVdRTG91Q2NoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MTY1NTYxMTc6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NTA2MDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMUDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxQNi5qc29uIjogIntcImtleURhdGFcIjpcIlhpQy9FRTl3aVIvbzEvZld4STlOTUhOakszQXBnaWgyaHR2aEg0M2M5dWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxMzc0NDg5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzUwNjAxMjY5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "CYNUX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

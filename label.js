const Telegram = require('node-telegram-bot-api');
const request = require('request');
const token = 'TOKEN';
const bot = new Telegram(token, {polling:true});
// Send Message (/start)
bot.onText(/\/start/ ,(msg)=>{
    var ch = '@jsbots';
    request(`https://api.telegram.org/bot${token}/getChatMember?chat_id=${ch}&user_id=${msg.from.id}` ,function(error, response, body) {
        var json = JSON.parse(body);
        if(json.result.status == 'member' || json.result.status == 'creator' || json.result.status == "adminstrator") {
            bot.sendMessage(msg.chat.id, `*welcome*\n*- In an exercise bot Through this, you can practice many languages ​​in bot Show how experienced you are in the language you chose from the keyboard at the bottom of this message\n- what are you waiting for? Choose a language and do exercises!*`, {
                'parse_mode': 'Markdown',
                'reply_markup': {
                    'inline_keyboard': [
                        [{text: "JavaScript - [54]", callback_data: "js"},{text: "Java - [60]", callback_data: "java"}],
                        [{text: "Python - [44]", callback_data: "py"}, {text: "C++ - [44]", callback_data: 'C++'}],
                        [{text: "C# - [32]", callback_data: 'C#'}, {text: "Swift - [28]", callback_data: 'swift'}],
                    ]
                }
            });
        }
        if ((json.result.status == 'left')) {
            bot.sendMessage(msg.chat.id, "- You cannot use the bot to subscribe to the channel\n" +
                "-@jsbots")
        }
    });
});

bot.on('callback_query',(query)=>{
    var data = query.data;
    var chatId = query.message.chat.id;
    var msgId = query.message.message_id;
    /* Main menu */
    if(data == "home"){
        bot.editMessageText(`*welcome*\n*- In an exercise bot Through this, you can practice many languages ​​in bot Show how experienced you are in the language you chose from the keyboard at the bottom of this message\n- what are you waiting for? Choose a language and do exercises!*`,{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"JavaScript - [54]",callback_data:"js"},{text:"Java - [60]",callback_data:"java"}],
                    [{text:"Python - [44]",callback_data:"py"},{text:"C++ - [44]",callback_data:'C++'}],
                    [{text:"C# - [32]",callback_data:'C#'},{text:"Swift - [28]",callback_data: 'swift'}],
                ]
            }
        })
    }

    /* Start JavaScript labs */
    if(data == "js"){
        bot.editMessageText("*1. Write a JavaScript program to display the current day and time in the following format:-*\n\n*Sample Output :* Today is : Tuesday.\n*Current time is :* 10 PM : 30 : 38",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'nejs'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "nejs"){
        bot.editMessageText("*2. Write a JavaScript program to print the contents of the current window*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne2js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne2js"){
        bot.editMessageText("*3. Write a JavaScript program to get the current date.\n\nExpected Output :\nmm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne3js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne3js"){
        bot.editMessageText("*4. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne4js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }

    if(data == "ne4js"){
        bot.editMessageText("*5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne5js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne5js"){
        bot.editMessageText("*6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne6js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne6js"){
        bot.editMessageText("*7. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message \"Good Work\" otherwise display a message \"Not matched\"*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne7js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne7js"){
        bot.editMessageText("*8. Write a JavaScript program to calculate days left until next Christmas*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne8js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne8js"){
        bot.editMessageText("*9. Write a JavaScript program to calculate multiplication and division of two numbers (input from user)*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne9js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne9js"){
        bot.editMessageText("*10. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit*\n\n[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]\n*Expected Output :* \n60°C is 140 °F \n45°F is 7.222222222222222°C",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne10js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne10js"){
        bot.editMessageText("*11. Write a JavaScript program to get the website URL (loading page).*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne11js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne11js"){
        bot.editMessageText("*12. Write a JavaScript exercise to create a variable using a user-defined name.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne12js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne12js"){
        bot.editMessageText("*13. Write a JavaScript exercise to get the extension of a filename.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne13js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne13js"){
        bot.editMessageText("*14. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne14js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne14js"){
        bot.editMessageText("*15. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne15js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne15js"){
        bot.editMessageText("*16. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne16js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne16js"){
        bot.editMessageText("*17. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne17js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne17js"){
        bot.editMessageText("*18. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne18js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne18js"){
        bot.editMessageText("*19. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne19js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne18js"){
        bot.editMessageText("*19. Write a JavaScript program to create a new string adding \"Py\" in front of a given string. If the given string begins with \"Py\" then return the original string.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne19js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne19js"){
        bot.editMessageText("*20. Write a JavaScript program to remove a character at the specified position of a given string and return the new string*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne20js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne20js"){
        bot.editMessageText("*21. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne21js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne21js"){
        bot.editMessageText("*22. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne23js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne22js"){
        bot.editMessageText("*23. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne23js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne22js"){
        bot.editMessageText("*23. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne23js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne23js"){
        bot.editMessageText("*24. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne24js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne24js"){
        bot.editMessageText("*25. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne25js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne25js"){
        bot.editMessageText("*26. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.  *",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne26js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne26js"){
        bot.editMessageText("*27. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne27js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne27js"){
        bot.editMessageText("*28. Write a JavaScript program to check whether a string \"Script\" presents at 5th (index 4) position in a given string, if \"Script\" presents in the string return the string without \"Script\" otherwise return the original one.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne28js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne28js"){
        bot.editMessageText("*29. Write a JavaScript program to find the largest of three given integers.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne29js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne29js"){
        bot.editMessageText("*30. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne30js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne30js"){
        bot.editMessageText("*31. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne31js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne31js"){
        bot.editMessageText("*32. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive. *",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne32js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne32js"){
        bot.editMessageText("*33. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne33js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne33js"){
        bot.editMessageText("*34. Write a JavaScript program to check whether the last digit of the three given positive integers is same.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne34js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne34js"){
        bot.editMessageText("*35. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne35js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne35js"){
        bot.editMessageText("*36. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is \"Final-exam.\" the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne36js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne36js"){
        bot.editMessageText("*37. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne37js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne37js"){
        bot.editMessageText("*38.Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne38js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne38js"){
        bot.editMessageText("*39. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne39js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne39js"){
        bot.editMessageText("*40. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.\n" +
            "Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne40js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne40js"){
        bot.editMessageText("*41. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne41js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne41js"){
        bot.editMessageText("*42. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne42js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne42js"){
        bot.editMessageText("*43. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne43js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne43js"){
        bot.editMessageText("*44. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne44js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne44js"){
        bot.editMessageText("*45. Write a JavaScript program to check whether a given number is presents in the range 40..10000."+ "\nFor example 40 presents in 40 and 4000*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne45js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne45js"){
        bot.editMessageText("*46. Write a JavaScript program to reverse a given string.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne46js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne46js"){
        bot.editMessageText("*47. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne47js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne47js"){
        bot.editMessageText("*48. Write a JavaScript program to capitalize the first letter of each word of a given string.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne48js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne48js"){
        bot.editMessageText("*49. Write a JavaScript program to convert a given number to hours and minutes.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne49js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne49js"){
        bot.editMessageText("*50. Write a JavaScript program to convert the letters of a given string in alphabetical order.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne50js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne50js"){
        bot.editMessageText("*51. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne51js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne51js"){
        bot.editMessageText("*52. Write a JavaScript program to count the number of vowels in a given string.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne52js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne52js"){
        bot.editMessageText("*53. Write a JavaScript program to check whether a given string contains equal number of p's and t's.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'ne53js'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "ne53js"){
        bot.editMessageText("*54. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    /* End JavaScript labs */

    /* Start java labs */
    if(data == "java"){
        bot.editMessageText("*1. Write a Java program to print 'Hello' on screen and then print your name on a separate line." +"\nExpected Output :\n" +
            "Hello\n" +
            "Omar Farouk*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java1'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java1"){
        bot.editMessageText("*2. Write a Java program to print the sum of two numbers. \nTest Data:\n" +
            "74 + 36\n" +
            "Expected Output :\n" +
            "110*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java2'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java2"){
        bot.editMessageText("*3. Write a Java program to divide two numbers and print on the screen. \nTest Data :\n" +
            "50/3\n" +
            "Expected Output :\n" +
            "16*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java3'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == 'java3'){
        bot.editMessageText("Write a Java program to print the result of the following operations.Test Data:\n" +
            "a. -5 + 8 * 6\n" +
            "b. (55+9) % 9\n" +
            "c. 20 + -3*5 / 8\n" +
            "d. 5 + 15 / 3 * 2 - 8 % 3\n" +
            "Expected Output :\n" +
            "43\n" +
            "1\n" +
            "19\n" +
            "13",{
            chat_id:chatId,
            message_id:msgId,
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java4'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java4"){
        bot.editMessageText("*5. Write a Java program that takes two numbers as input and display the product of two numbers. \nTest Data:\n" +
            "Input first number: 25\n" +
            "Input second number: 5\n" +
            "Expected Output :\n" +
            "25 x 5 = 125*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java5'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java5"){
        bot.editMessageText("*6. Write a Java program to print the sum (addition), multiply, subtract, divide and remainder of two numbers. \nTest Data:\n" +
            "Input first number: 125\n" +
            "Input second number: 24\n" +
            "Expected Output :\n" +
            "125 + 24 = 149\n" +
            "125 - 24 = 101\n" +
            "125 x 24 = 3000\n" +
            "125 / 24 = 5\n" +
            "125 mod 24 = 5*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java6'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java6"){
        bot.editMessageText("*7. Write a Java program that takes a number as input and prints its multiplication table upto 10. \nTest Data:\n" +
            "Input a number: 8\n" +
            "Expected Output :\n" +
            "8 x 1 = 8\n" +
            "8 x 2 = 16\n" +
            "8 x 3 = 24\n" +
            "...\n" +
            "8 x 10 = 80*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java7'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java7"){
        bot.editMessageText("*8. Write a Java program to display the following pattern. \nSample Pattern :\n" +
            "\n" +
            "   J    a   v     v  a                                                  \n" +
            "   J   a a   v   v  a a                                                 \n" +
            "J  J  aaaaa   V V  aaaaa                                                \n" +
            " JJ  a     a   V  a     a*",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java8'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java8"){
        bot.editMessageText("9. Write a Java program to compute the specified expressions and print the output.\n" +
            "Test Data:\n" +
            "((25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5))\n" +
            "Expected Output\n" +
            "2.138888888888889",{
            chat_id:chatId,
            message_id:msgId,
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java9'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java9"){
        bot.editMessageText("10. Write a Java program to compute a specified formula.\n" +
            "Specified Formula :\n" +
            "4.0 * (1 - (1.0/3) + (1.0/5) - (1.0/7) + (1.0/9) - (1.0/11))\n" +
            "Expected Output\n" +
            "2.9760461760461765",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java10'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java10"){
        bot.editMessageText("11. Write a Java program to print the area and perimeter of a circle. Go to the editor\n" +
            "Test Data:\n" +
            "Radius = 7.5\n" +
            "Expected Output\n" +
            "Perimeter is = 47.12388980384689\n" +
            "Area is = 176.71458676442586",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java11'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java11"){
        bot.editMessageText("12. Write a Java program that takes three numbers as input to calculate and print the average of the numbers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java12'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java12"){
        bot.editMessageText("13. Write a Java program to print the area and perimeter of a rectangle. Go to the editor\n" +
            "Test Data:\n" +
            "Width = 5.5 Height = 8.5\n" +
            "\n" +
            "Expected Output\n" +
            "Area is 5.6 * 8.5 = 47.60\n" +
            "Perimeter is 2 * (5.6 + 8.5) = 28.20",{
            chat_id:chatId,
            message_id:msgId,
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java13'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java13"){
        bot.editMessageText("14. Write a Java program to print an American flag on the screen.\n" +
            "Expected Output\n" +
            "\n" +
            "* * * * * * ==================================                          \n" +
            " * * * * *  ==================================                          \n" +
            "* * * * * * ==================================                          \n" +
            " * * * * *  ==================================                          \n" +
            "* * * * * * ==================================                          \n" +
            " * * * * *  ==================================                          \n" +
            "* * * * * * ==================================                          \n" +
            " * * * * *  ==================================                          \n" +
            "* * * * * * ==================================                          \n" +
            "==============================================                          \n" +
            "==============================================                          \n" +
            "==============================================                          \n" +
            "==============================================                          \n" +
            "==============================================                          \n" +
            "==============================================",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java14'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java14"){
        bot.editMessageText("15. Write a Java program to swap two variables.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java15'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java15"){
        bot.editMessageText("16. Write a Java program to print a face. Go to the editor\n" +
            "Expected Output\n" +
            "\n" +
            " +\"\"\"\"\"+                                                 \n" +
            "[| o o |]                                                \n" +
            " |  ^  |                                                 \n" +
            " | '-' |                                                 \n" +
            " +-----+",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java16'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java16"){
        bot.editMessageText("17. Write a Java program to add two binary numbers.\n" +
            "Input Data:\n" +
            "Input first binary number: 10\n" +
            "Input second binary number: 11\n" +
            "Expected Output\n" +
            "\n" +
            "Sum of two binary numbers: 101",{
            chat_id:chatId,
            message_id:msgId,
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java17'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java17"){
        bot.editMessageText("18. Write a Java program to multiply two binary numbers.\n" +
            "Input Data:\n" +
            "Input the first binary number: 10\n" +
            "Input the second binary number: 11\n" +
            "Expected Output\n" +
            "\n" +
            "Product of two binary numbers: 110 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java18'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java18"){
        bot.editMessageText("Write a Java program to convert a decimal number to binary number.\n" +
            "Input Data:\n" +
            "Input a Decimal Number : 5\n" +
            "Expected Output\n" +
            "\n" +
            "Binary number is: 101 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java19'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java19"){
        bot.editMessageText("20. Write a Java program to convert a decimal number to hexadecimal number.\n" +
            "Input Data:\n" +
            "Input a decimal number: 15\n" +
            "Expected Output\n" +
            "\n" +
            "Hexadecimal number is : F",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java20'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java20"){
        bot.editMessageText("Write a Java program to convert a decimal number to octal number.\n" +
            "Input Data:\n" +
            "Input a Decimal Number: 15\n" +
            "Expected Output\n" +
            "\n" +
            "Octal number is: 17  ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java21'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java21"){
        bot.editMessageText("22. Write a Java program to convert a binary number to decimal number.\n" +
            "Input Data:\n" +
            "Input a binary number: 100\n" +
            "Expected Output\n" +
            "\n" +
            "Decimal Number: 4",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java22'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java22"){
        bot.editMessageText("23. Write a Java program to convert a binary number to hexadecimal number.\n" +
            "Input Data:\n" +
            "Input a Binary Number: 1101\n" +
            "Expected Output\n" +
            "\n" +
            "HexaDecimal value: D",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java23'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java23"){
        bot.editMessageText("24. Write a Java program to convert a binary number to a Octal number.\n" +
            "Input Data:\n" +
            "Input a Binary Number: 111\n" +
            "Expected Output\n" +
            "\n" +
            "Octal number: 7 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java24'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java24"){
        bot.editMessageText("25. Write a Java program to convert a octal number to a decimal number.\n" +
            "Input Data:\n" +
            "Input any octal number: 10\n" +
            "Expected Output\n" +
            "\n" +
            "Equivalent decimal number: 8",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java25'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java25"){
        bot.editMessageText("26. Write a Java program to convert a octal number to a binary number.\n" +
            "Input Data:\n" +
            "Input any octal number: 7\n" +
            "Expected Output\n" +
            "\n" +
            "Equivalent binary number: 111 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java26'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java26"){
        bot.editMessageText("27. Write a Java program to convert a octal number to a hexadecimal number.\n" +
            "Input Data:\n" +
            "Input a octal number : 100\n" +
            "Expected Output\n" +
            "\n" +
            "Equivalent hexadecimal number: 40",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java27'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java27"){
        bot.editMessageText("28. Write a Java program to convert a hexadecimal to a decimal number.\n" +
            "Input Data:\n" +
            "Input a hexadecimal number: 25\n" +
            "Expected Output\n" +
            "\n" +
            "Equivalent decimal number is: 37",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java28'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java28"){
        bot.editMessageText("29. Write a Java program to convert a hexadecimal to a binary number.\n" +
            "Input Data:\n" +
            "Enter Hexadecimal Number : 37\n" +
            "Expected Output\n" +
            "\n" +
            "Equivalent Binary Number is: 110111",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java29'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java29"){
        bot.editMessageText("30. Write a Java program to convert a hexadecimal to a octal number.\n" +
            "Input Data:\n" +
            "Input a hexadecimal number: 40\n" +
            "Expected Output\n" +
            "\n" +
            "Equivalent of octal number is: 100 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java30'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java30"){
        bot.editMessageText("31. Write a Java program to check whether Java is installed on your computer.\n" +
            "Expected Output\n" +
            "\n" +
            "Java Version: 1.8.0_71                                                            \n" +
            "Java Runtime Version: 1.8.0_71-b15                                                \n" +
            "Java Home: /opt/jdk/jdk1.8.0_71/jre                                               \n" +
            "Java Vendor: Oracle Corporation                                                   \n" +
            "Java Vendor URL: http://Java.oracle.com/                                          \n" +
            "Java Class Path: .",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java31'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java31"){
        bot.editMessageText("32. Write a Java program to compare two numbers.\n" +
            "Input Data:\n" +
            "Input first integer: 25\n" +
            "Input second integer: 39\n" +
            "Expected Output\n" +
            "\n" +
            "25 != 39                                                                          \n" +
            "25 < 39                                                                           \n" +
            "25 <= 39",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java32'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java32"){
        bot.editMessageText("33. Write a Java program and compute the sum of the digits of an integer.\n" +
            "Input Data:\n" +
            "Input an integer: 25\n" +
            "Expected Output\n" +
            "\n" +
            "The sum of the digits is: 7",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java33'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java33"){
        bot.editMessageText("34. Write a Java program to compute the area of a hexagon.\n" +
            "Area of a hexagon = (6 * s^2)/(4*tan(π/6))\n" +
            "where s is the length of a side\n" +
            "Input Data:\n" +
            "Input the length of a side of the hexagon: 6\n" +
            "Expected Output\n" +
            "\n" +
            "The area of the hexagon is: 93.53074360871938",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java34'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java34"){
        bot.editMessageText("35. Write a Java program to compute the area of a polygon.\n" +
            "Area of a polygon = (n*s^2)/(4*tan(π/n))\n" +
            "where n is n-sided polygon and s is the length of a side\n" +
            "Input Data:\n" +
            "Input the number of sides on the polygon: 7\n" +
            "Input the length of one of the sides: 6\n" +
            "Expected Output\n" +
            "\n" +
            "The area is: 130.82084798405722",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java35'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java35"){
        bot.editMessageText("36. Write a Java program to compute the distance between two points on the surface of earth.\n" +
            "Distance between the two points [ (x1,y1) & (x2,y2)]\n" +
            "d = radius * arccos(sin(x1) * sin(x2) + cos(x1) * cos(x2) * cos(y1 - y2))\n" +
            "Radius of the earth r = 6371.01 Kilometers\n" +
            "Input Data:\n" +
            "Input the latitude of coordinate 1: 25\n" +
            "Input the longitude of coordinate 1: 35\n" +
            "Input the latitude of coordinate 2: 35.5\n" +
            "Input the longitude of coordinate 2: 25.5\n" +
            "Expected Output\n" +
            "\n" +
            "The distance between those points is: 1480.0848451069087 km ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java36'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java36"){
        bot.editMessageText("Write a Java program to reverse a string.\n" +
            "Input Data:\n" +
            "Input a string: The quick brown fox\n" +
            "Expected Output\n" +
            "\n" +
            "Reverse string: xof nworb kciuq ehT",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java37'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java37"){
        bot.editMessageText("38. Write a Java program to count the letters, spaces, numbers and other characters of an input string.\n" +
            "Expected Output\n" +
            "\n" +
            "The string is :  Aa kiu, I swd skieo 236587. GH kiu: sieo?? 25.33\n" +
            "letter: 23                                               \n" +
            "space: 9                                                 \n" +
            "number: 10                                               \n" +
            "other: 6",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java38'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java38"){
        bot.editMessageText("39. Write a Java program to create and display unique three-digit number using 1, 2, 3, 4. Also count how many three-digit numbers are there.\n" +
            "Expected Output\n" +
            "\n" +
            "123                                                      \n" +
            "124                                                      \n" +
            "...                                            \n" +
            "                                                   \n" +
            "431                                                      \n" +
            "432                                                      \n" +
            "Total number of the three-digit-number is 24",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java39'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java39"){
        bot.editMessageText("40. Write a Java program to list the available character sets in charset objects.\n" +
            "Expected Output\n" +
            "\n" +
            "List of available character sets:                                       \n" +
            "Big5                                                                    \n" +
            "Big5-HKSCS                                                              \n" +
            "CESU-8                                                                  \n" +
            "EUC-JP                                                                  \n" +
            "EUC-KR                                                                  \n" +
            "GB18030                                                                 \n" +
            "GB2312                                                                  \n" +
            "GBK                                                                     \n" +
            "                                                     \n" +
            "...                                            \n" +
            "                                                   \n" +
            "x-SJIS_0213                                                             \n" +
            "x-UTF-16LE-BOM                                                          \n" +
            "X-UTF-32BE-BOM                                                          \n" +
            "X-UTF-32LE-BOM                                                          \n" +
            "x-windows-50220                                                         \n" +
            "x-windows-50221                                                         \n" +
            "x-windows-874                                                           \n" +
            "x-windows-949                                                           \n" +
            "x-windows-950                                                           \n" +
            "x-windows-iso2022jp",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java40'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java40"){
        bot.editMessageText("41. Write a Java program to print the ascii value of a given character.\n" +
            "Expected Output\n" +
            "\n" +
            "The ASCII value of Z is :90",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java41'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java42"){
        bot.editMessageText("42. Write a Java program to input and display your password.\n" +
            "Expected Output\n" +
            "\n" +
            "Input your Password:                                                    \n" +
            "Your password was: abc@123",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java42'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java42"){
        bot.editMessageText("43. Write a Java program to print the following string in a specific format (see the output).\n" +
            "Sample Output\n" +
            "\n" +
            "Twinkle, twinkle, little star,\n" +
            "\tHow I wonder what you are! \n" +
            "\t\tUp above the world so high,   \t\t\n" +
            "\t\tLike a diamond in the sky. \n" +
            "Twinkle, twinkle, little star, \n" +
            "\tHow I wonder what you are",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java43'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java43"){
        bot.editMessageText("44. Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn.\n" +
            "Sample Output:\n" +
            "\n" +
            "Input number: 5                                                        \n" +
            "5 + 55  + 555",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java44'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java44"){
        bot.editMessageText("45. Write a Java program to find the size of a specified file.\n" +
            "Sample Output:\n" +
            "\n" +
            "/home/students/abc.txt  : 0 bytes                                      \n" +
            "/home/students/test.txt : 0 bytes ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java45'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java45"){
        bot.editMessageText("46. Write a Java program to display the system time. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Current Date time: Fri Jun 16 14:17:40 IST 2017 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java46'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java46"){
        bot.editMessageText("47. Write a Java program to display the current date time in specific format.\n" +
            "Sample Output:\n" +
            "\n" +
            "Now: 2017/06/16 08:52:03.066 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java47'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java47"){
        bot.editMessageText("48. Write a Java program to print the odd numbers from 1 to 99. Prints one number per line.\n" +
            "Sample Output:\n" +
            "\n" +
            "1                                                                      \n" +
            "3                                                                      \n" +
            "5                                                                      \n" +
            "7                                                                      \n" +
            "9                                                                      \n" +
            "11                                                                     \n" +
            "....                                                                     \n" +
            "                                                                    \n" +
            "91                                                                     \n" +
            "93                                                                     \n" +
            "95                                                                     \n" +
            "97                                                                     \n" +
            "99 ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java48'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java48"){
        bot.editMessageText("49. Write a Java program to accept a number and check the number is even or not. Prints 1 if the number is even or 0 if the number is odd.\n" +
            "Sample Output:\n" +
            "\n" +
            "Input a number: 20                                                     \n" +
            "1",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java49'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java49"){
        bot.editMessageText("50. Write a Java program to print numbers between 1 to 100 which are divisible by 3, 5 and by both. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Divided by 3:                                                          \n" +
            "3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57\n" +
            ", 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99,              \n" +
            "                                                                       \n" +
            "Divided by 5:                                                          \n" +
            "5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, \n" +
            "95,                                                                    \n" +
            "                                                                       \n" +
            "Divided by 3 & 5:                                                      \n" +
            "15, 30, 45, 60, 75, 90,",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java50'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java50"){
        bot.editMessageText("51. Write a Java program to convert a string to an integer in Java.\n" +
            "Sample Output:\n" +
            "\n" +
            "Input a number(string): 25                                             \n" +
            "The integer value is: 25",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java51'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java51"){
        bot.editMessageText("52. Write a Java program to calculate the sum of two integers and return true if the sum is equal to a third integer.\n" +
            "Sample Output:\n" +
            "\n" +
            "Input the first number : 5                                             \n" +
            "Input the second number: 10                                            \n" +
            "Input the third number : 15                                            \n" +
            "The result is: true",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java52'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java52"){
        bot.editMessageText("53. Write a Java program that accepts three integers from the user and return true if the second number is greater than first number and third number is greater than second number. If \"abc\" is true second number does not need to be greater than first number. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input the first number : 5                                             \n" +
            "Input the second number: 10                                            \n" +
            "Input the third number : 15                                            \n" +
            "The result is: true",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java53'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java53"){
        bot.editMessageText("54. Write a Java program that accepts three integers from the user and return true if two or more of them (integers ) have the same rightmost digit. The integers are non-negative. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input the first number : 5                                             \n" +
            "Input the second number: 10                                            \n" +
            "Input the third number : 15                                            \n" +
            "The result is: true",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java54'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java54"){
        bot.editMessageText("55. Write a Java program to convert seconds to hour, minute and seconds. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input seconds: 86399                                                   \n" +
            "23:59:59",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java55'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java55"){
        bot.editMessageText("56. Write a Java program to find the number of integers within the range of two specified numbers and that are divisible by another number. Go to the editor\n" +
            "For example x = 5, y=20 and p =3, find the number of integers within the range x..y and that are divisible by p i.e. { i :x ≤ i ≤ y, i mod p = 0 }\n" +
            "Sample Output:\n" +
            "\n" +
            "5",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java56'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java56"){
        bot.editMessageText("57. Write a Java program to accepts an integer and count the factors of the number. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input an integer: 25                                                   \n" +
            "3",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java57'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java57"){
        bot.editMessageText("58. Write a Java program to capitalize the first letter of each word in a sentence. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input a Sentence: the quick brown fox jumps over the lazy dog.         \n" +
            "The Quick Brown Fox Jumps Over The Lazy Dog.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java58'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java58"){
        bot.editMessageText("59. Write a Java program to convert a given string into lowercase. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input a String: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.           \n" +
            "the quick brown fox jumps over the lazy dog.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java59'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java59"){
        bot.editMessageText("60. Write a Java program to find the penultimate (next to last) word of a sentence. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input a String: The quick brown fox jumps over the lazy dog.\n" +
            "Penultimate word: lazy",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'java60'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "java60"){
        bot.editMessageText("61. Write a Java program to reverse a word. Go to the editor\n" +
            "Sample Output:\n" +
            "\n" +
            "Input a word: dsaf\n" +
            "Reverse word: fasd",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    /* End java labs */

    /* Start python labs */
    if(data == "py"){
        bot.editMessageText("Write a Python program to print the following string in a specific format (see the output).\n" +
            "Sample String : \"Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high, Like a diamond in the sky. Twinkle, twinkle, little star, How I wonder what you are\" Output :\n" +
            "\n" +
            "Twinkle, twinkle, little star,\n" +
            "    How I wonder what you are! \n" +
            "           Up above the world so high,   \t\t\n" +
            "           Like a diamond in the sky. \n" +
            "Twinkle, twinkle, little star, \n" +
            "      How I wonder what you are",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py2'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py2"){
        bot.editMessageText("2. Write a Python program to get the Python version you are using.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py3'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py3"){
        bot.editMessageText("3. Write a Python program to display the current date and time.\n" +
            "Sample Output :\n" +
            "Current date and time :\n" +
            "2014-07-05 14:34:14",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py4'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py4"){
        bot.editMessageText("4. Write a Python program which accepts the radius of a circle from the user and compute the area.\n" +
            "Sample Output :\n" +
            "r = 1.1\n" +
            "Area = 3.8013271108436504",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py5'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py5"){
        bot.editMessageText("5. Write a Python program which accepts the user's first and last name and print them in reverse order with a space between them.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py6'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py6"){
        bot.editMessageText("6. Write a Python program which accepts a sequence of comma-separated numbers from user and generate a list and a tuple with those numbers. Go to the editor\n" +
            "Sample data : 3, 5, 7, 23\n" +
            "Output :\n" +
            "List : ['3', ' 5', ' 7', ' 23']\n" +
            "Tuple : ('3', ' 5', ' 7', ' 23')",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py7'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py7"){
        bot.editMessageText("7. Write a Python program to accept a filename from the user and print the extension of that.\n" +
            "Sample filename : abc.java\n" +
            "Output : java",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py8'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py8"){
        bot.editMessageText("8. Write a Python program to display the first and last colors from the following list.\n" +
            "color_list = [\"Red\",\"Green\",\"White\" ,\"Black\"]",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py9'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py9"){
        bot.editMessageText("9. Write a Python program to display the examination schedule. (extract the date from exam_st_date).\n" +
            "exam_st_date = (11, 12, 2014)\n" +
            "Sample Output : The examination will start from : 11 / 12 / 2014",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py10'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py10"){
        bot.editMessageText("10. Write a Python program that accepts an integer (n) and computes the value of n+nn+nnn.\n" +
            "Sample value of n is 5\n" +
            "Expected Result : 615",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py11'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "p11"){
        bot.editMessageText("11. Write a Python program to print the documents (syntax, description etc.) of Python built-in function(s).\n" +
            "Sample function : abs()\n" +
            "Expected Result :\n" +
            "abs(number) -> number\n" +
            "Return the absolute value of the argument.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py12'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py12"){
        bot.editMessageText("12. Write a Python program to print the calendar of a given month and year.\n" +
            "Note : Use 'calendar' module.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py13'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py13"){
        bot.editMessageText("13. Write a Python program to print the following here document.\n" +
            "Sample string :\n" +
            "a string that you \"don't\" have to escape\n" +
            "This\n" +
            "is a ....... multi-line\n" +
            "heredoc string --------> example",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py14'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py14"){
        bot.editMessageText("4. Write a Python program to calculate number of days between two dates.\n" +
            "Sample dates : (2020, 7, 2), (2020, 7, 11)\n" +
            "Expected output : 9 days",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py15'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py15"){
        bot.editMessageText("15. Write a Python program to get the volume of a sphere with radius 6.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py16'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py16"){
        bot.editMessageText("16. Write a Python program to get the difference between a given number and 17, if the number is greater than 17 return double the absolute difference.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py17'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py17"){
        bot.editMessageText("17. Write a Python program to test whether a number is within 100 of 1000 or 2000.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py18'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py18"){
        bot.editMessageText("18. Write a Python program to calculate the sum of three given numbers, if the values are equal then return three times of their sum.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py19'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py19"){
        bot.editMessageText("19. Write a Python program to get a new string from a given string where \"Is\" has been added to the front. If the given string already begins with \"Is\" then return the string unchanged.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py20'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py20"){
        bot.editMessageText("20. Write a Python program to get a string which is n (non-negative integer) copies of a given string.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py21'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py21"){
        bot.editMessageText("21. Write a Python program to find whether a given number (accept from the user) is even or odd, print out an appropriate message to the user.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py22'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }if(data == "py22"){
        bot.editMessageText("22. Write a Python program to count the number 4 in a given list.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py23'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py23"){
        bot.editMessageText("23. Write a Python program to get the n (non-negative integer) copies of the first 2 characters of a given string. Return the n copies of the whole string if the length is less than 2.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py24'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py24"){
        bot.editMessageText("24. Write a Python program to test whether a passed letter is a vowel or not.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py25'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py25"){
        bot.editMessageText("25. Write a Python program to check whether a specified value is contained in a group of values.\n" +
            "Test Data :\n" +
            "3 -> [1, 5, 8, 3] : True\n" +
            "-1 -> [1, 5, 8, 3] : False",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py26'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py26"){
        bot.editMessageText("26. Write a Python program to create a histogram from a given list of integers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py27'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py27"){
        bot.editMessageText("27. Write a Python program to concatenate all elements in a list into a string and return it.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py28'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py28"){
        bot.editMessageText("28. Write a Python program to print all even numbers from a given numbers list in the same order and stop the printing if any numbers that come after 237 in the sequence.\n" +
            "Sample numbers list :\n" +
            "\n" +
            "numbers = [    \n" +
            "    386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, \n" +
            "    399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, \n" +
            "    815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717, \n" +
            "    958,743, 527\n" +
            "    ]",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py29'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py29"){
        bot.editMessageText("29. Write a Python program to print out a set containing all the colors from color_list_1 which are not present in color_list_2.\n" +
            "Test Data :\n" +
            "color_list_1 = set([\"White\", \"Black\", \"Red\"])\n" +
            "color_list_2 = set([\"Red\", \"Green\"])\n" +
            "Expected Output :\n" +
            "{'Black', 'White'}",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py30'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py30"){
        bot.editMessageText("30. Write a Python program that will accept the base and height of a triangle and compute the area.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py31'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py31"){
        bot.editMessageText("31. Write a Python program to compute the greatest common divisor (GCD) of two positive integers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py32'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py32"){
        bot.editMessageText("32. Write a Python program to get the least common multiple (LCM) of two positive integers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py33'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py33"){
        bot.editMessageText("33. Write a Python program to sum of three given integers. However, if two values are equal sum will be zero.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py34'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py34"){
        bot.editMessageText("34. Write a Python program to sum of two given integers. However, if the sum is between 15 to 20 it will return 20.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py35'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py35"){
        bot.editMessageText("35. Write a Python program that will return true if the two given integer values are equal or their sum or difference is 5.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py36'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py36"){
        bot.editMessageText("36. Write a Python program to add two objects if both objects are an integer type.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py37'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py37"){
        bot.editMessageText("37. Write a Python program to display your details like name, age, address in three different lines.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py38'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py38"){
        bot.editMessageText("38. Write a Python program to solve (x + y) * (x + y).\n" +
            "Test Data : x = 4, y = 3\n" +
            "Expected Output : (4 + 3) ^ 2) = 49",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py39'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py39"){
        bot.editMessageText("39. Write a Python program to compute the future value of a specified principal amount, rate of interest, and a number of years.\n" +
            "Test Data : amt = 10000, int = 3.5, years = 7\n" +
            "Expected Output : 12722.79",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py40'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py40"){
        bot.editMessageText("40. Write a Python program to compute the distance between the points (x1, y1) and (x2, y2).",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py41'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py41"){
        bot.editMessageText("41. Write a Python program to check whether a file exists.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py42'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py42"){
        bot.editMessageText("42. Write a Python program to determine if a Python shell is executing in 32bit or 64bit mode on OS.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py43'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py43"){
        bot.editMessageText("43. Write a Python program to get OS name, platform and release information.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'py44'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "py44"){
        bot.editMessageText("44. Write a Python program to locate Python site-packages.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    /* End python labs */

    /* Start c++ labs */
    if(data == "c++"){
        bot.editMessageText("1. Write a program in C++ to print a welcome text in a separate line.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c2'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c2"){
        bot.editMessageText("2. Write a program in C++ to print the sum of two numbers. Go to the editor\n" +
            "Sample Output:\n" +
            "Print the sum of two numbers :\n" +
            "-----------------------------------\n" +
            "The sum of 29 and 30 is : 59",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c3'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c3"){
        bot.editMessageText("3. Write a program in C++ to find Size of fundamental data types.\n" +
            "Sample Output:\n" +
            "Find Size of fundamental data types :\n" +
            "------------------------------------------\n" +
            "The sizeof(char) is : 1 bytes\n" +
            "The sizeof(short) is : 2 bytes\n" +
            "The sizeof(int) is : 4 bytes\n" +
            "The sizeof(long) is : 8 bytes\n" +
            "The sizeof(long long) is : 8 bytes\n" +
            "The sizeof(float) is : 4 bytes\n" +
            "The sizeof(double) is : 8 bytes\n" +
            "The sizeof(long double) is : 16 bytes\n" +
            "The sizeof(bool) is : 1 bytes",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c4'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c4"){
        bot.editMessageText("4. Write a program in C++ to print the sum of two numbers using variables.\n" +
            "Print the sum of two numbers :\n" +
            "-----------------------------------\n" +
            "The sum of 29 and 30 is : 59",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c5'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c5"){
        bot.editMessageText("5. Write a program in C++ to check the upper and lower limits of integer.\n" +
            "Expected Output:\n" +
            "Check the upper and lower limits of integer :\n" +
            "--------------------------------------------------\n" +
            "The maximum limit of int data type : 2147483647\n" +
            "The minimum limit of int data type : -2147483648\n" +
            "The maximum limit of unsigned int data type : 4294967295\n" +
            "The maximum limit of long long data type : 9223372036854775807\n" +
            "The minimum limit of long long data type : -9223372036854775808\n" +
            "The maximum limit of unsigned long long data type : 18446744073709551615\n" +
            "The Bits contain in char data type : 8\n" +
            "The maximum limit of char data type : 127\n" +
            "The minimum limit of char data type : -128\n" +
            "The maximum limit of signed char data type : 127\n" +
            "The minimum limit of signed char data type : -128\n" +
            "The maximum limit of unsigned char data type : 255\n" +
            "The minimum limit of short data type : -32768\n" +
            "The maximum limit of short data type : 32767\n" +
            "The maximum limit of unsigned short data type : 65535",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c6'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c6"){
        bot.editMessageText("6. Write a program in C++ to check whether the primitive values crossing the limits or not.\n" +
            "Check whether the primitive values crossing the limits or not :\n" +
            "--------------------------------------------------------------------\n" +
            "The Gender is : F\n" +
            "Is she married? : 1\n" +
            "Number of sons she has : 2\n" +
            "Year of her appointment : 2009\n" +
            "Salary for a year : 1500000\n" +
            "Height is : 79.48\n" +
            "GPA is 4.69\n" +
            "Salary drawn upto : 12047235\n" +
            "Balance till : 995324987",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c7'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c7"){
        bot.editMessageText("7. Write a program in C++ to display various type or arithmetic operation using mixed data type.\n" +
            "Sample output:\n" +
            "Display arithmetic operations with mixed data type :\n" +
            "---------------------------------------------------------\n" +
            "5 + 7 = 12\n" +
            "3.7 + 8.0 = 11.7\n" +
            "5 + 8.0 = 13.0\n" +
            "5 - 7 = -2\n" +
            "3.7 - 8.0 = -4.3\n" +
            "5 - 8.0 = -3.0\n" +
            "5 * 7 = 35\n" +
            "3.7 * 8.0 = 29.6\n" +
            "5 * 8.0 = 40.0\n" +
            "5 / 7 = 0\n" +
            "3.7 / 8.0 = 0.5\n" +
            "5 / 8.0 = 0.6",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c8'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c8"){
        bot.editMessageText("8. Write a program in C++ to check overflow/underflow during various arithmetical operation.\n" +
            "Sample Output:\n" +
            "Check overflow/underflow during various arithmetical operation :\n" +
            "Range of int is [-2147483648, 2147483647]\n" +
            "---------------------------------------------------------------------\n" +
            "Overflow the integer range and set in minimum range : -2147483648\n" +
            "Increasing from its minimum range : -2147483647\n" +
            "Product is :1\n" +
            "Underflow the range and set in maximum range : 2147483647\n" +
            "Decreasing from its maximum range : 2147483646\n" +
            "Product is : 0",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c9'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c9"){
        bot.editMessageText("9. Write a program in C++ to display the operation of pre and post increment and decrement.\n" +
            "Sample Output:\n" +
            "Display the operation of pre and post increment and decrement :\n" +
            "--------------------------------------------------------------------\n" +
            "The number is : 57\n" +
            "After post increment by 1 the number is : 58\n" +
            "After pre increment by 1 the number is : 59\n" +
            "After increasing by 1 the number is : 60\n" +
            "After post decrement by 1 the number is : 59\n" +
            "After pre decrement by 1 the number is : 58\n" +
            "After decreasing by 1 the number is : 57",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c10'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c10"){
        bot.editMessageText("10. Write a program in C++ to formatting the output.\n" +
            "Sample Output:\n" +
            "Formatting the output :\n" +
            "----------------------------\n" +
            "The value of pi : 3.1416\n" +
            "The value of pi 4 decimal place of total width 8 : | 3.1416|\n" +
            "The value of pi 4 decimal place of total width 10 : | 3.1416|\n" +
            "The value of pi 4 decimal place of total width 8 : |--3.1416|\n" +
            "The value of pi 4 decimal place of total width 10 : |----3.1416|\n" +
            "The value of pi in scientific format is : 3.1416e+00\n" +
            "Status in number : 0\n" +
            "Status in alphabet : false",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c11'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c11"){
        bot.editMessageText("11. Write a program in C++ to print the result of the specified operations.\n" +
            "Sample Output:\n" +
            "Print the result of some specific operation :\n" +
            "--------------------------------------------------\n" +
            "Result of 1st expression is : 23\n" +
            "Result of 2nd expression is : 5\n" +
            "Result of 3rd expression is : 12\n" +
            "Result of 4th expression is : 3",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c12'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c12"){
        bot.editMessageText("12. Write a program in C++ to add two numbers accept through keyboard.\n" +
            "Sample Output:\n" +
            "Original array:\n" +
            "[10, 20, 30]\n" +
            "After append values to the end of the array:\n" +
            "[10 20 30 40 50 60 70 80 90]",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c13'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c13"){
        bot.editMessageText("13. Write a program in C++ to swap two numbers.\n" +
            "Sample Output:\n" +
            "Swap two numbers :\n" +
            "-----------------------\n" +
            "Input 1st number : 25\n" +
            "Input 2nd number : 39\n" +
            "After swapping the 1st number is : 39\n" +
            "After swapping the 2nd number is : 25",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c14'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c14"){
        bot.editMessageText("14. Write a program in C++ to calculate the volume of a sphere.\n" +
            "Sample Output:\n" +
            "Calculate the volume of a sphere :\n" +
            "---------------------------------------\n" +
            "Input the radius of a sphere : 6\n" +
            "The volume of a sphere is : 904.32",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c15'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c15"){
        bot.editMessageText("15. Write a program in C++ to calculate the volume of a cube.\n" +
            "Sample Output:\n" +
            "Calculate the volume of a cube :\n" +
            "---------------------------------------\n" +
            "Input the side of a cube : 5\n" +
            "The volume of a cube is : 125",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c16'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c16"){
        bot.editMessageText("16. Write a program in C++ to calculate the volume of a cylinder.\n" +
            "Sample Output:\n" +
            "Calculate the volume of a cylinder :\n" +
            "-----------------------------------------\n" +
            "Input the radius of the cylinder : 6\n" +
            "Input the height of the cylinder : 8\n" +
            "The volume of a cylinder is : 904.32",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c17'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c17"){
        bot.editMessageText("17. Write a program in C++ to find the Area and Perimeter of a Rectangle.\n" +
            "Sample Output:\n" +
            "Find the Area and Perimeter of a Rectangle :\n" +
            "-------------------------------------------------\n" +
            "Input the length of the rectangle : 10\n" +
            "Input the width of the rectangle : 15\n" +
            "The area of the rectangle is : 150\n" +
            "The perimeter of the rectangle is : 50",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c18'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c18"){
        bot.editMessageText("18. Write a program in C++ to find the area of any triangle using Heron's Formula.\n" +
            "Sample Output:\n" +
            "Find the area of any triangle using Heron's Formula :\n" +
            "----------------------------------------------------------\n" +
            "Input the length of 1st side of the triangle : 5\n" +
            "Input the length of 2nd side of the triangle : 5\n" +
            "Input the length of 3rd side of the triangle : 5\n" +
            "The area of the triangle is : 10.8253",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c19'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c19"){
        bot.editMessageText("19. Write a program in C++ to find the area and circumference of a circle.\n" +
            "Sample Output:\n" +
            "Find the area and circumference of any circle :\n" +
            "----------------------------------------------------\n" +
            "Input the radius(1/2 of diameter) of a circle : 5\n" +
            "The area of the circle is : 78.5397\n" +
            "The circumference of the circle is : 31.4159",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c20'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c20"){
        bot.editMessageText("20. Write a program in C++ to convert temperature in Celsius to Fahrenheit.\n" +
            "Sample Output:\n" +
            "Convert temperature in Celsius to Fahrenheit :\n" +
            "---------------------------------------------------\n" +
            "Input the temperature in Celsius : 35\n" +
            "The temperature in Celsius : 35\n" +
            "The temperature in Fahrenheit : 95",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c21'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c21"){
        bot.editMessageText("21. Write a program in C++ to convert temperature in Fahrenheit to Celsius. Go to the editor\n" +
            "Sample Output:\n" +
            "Convert temperature in Fahrenheit to Celsius :\n" +
            "---------------------------------------------------\n" +
            "Input the temperature in Fahrenheit : 95\n" +
            "The temperature in Fahrenheit : 95\n" +
            "The temperature in Celsius : 35",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c22'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c22"){
        bot.editMessageText("22. Write a program in C++ to find the third angle of a triangle.\n" +
            "Sample Output:\n" +
            "Find the third angle of a triangle :\n" +
            "-----------------------------------------\n" +
            "Input the 1st angle of the triangle : 30\n" +
            "Input the 2nd angle of the triangle : 60\n" +
            "The 3rd of the triangle is : 90",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c23'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c23"){
        bot.editMessageText("23. Write a program in C++ that converts kilometers per hour to miles per hour.\n" +
            "Sample Output:\n" +
            "Convert kilometers per hour to miles per hour :\n" +
            "----------------------------------------------------\n" +
            "Input the distance in kilometer : 25\n" +
            "The 25 Km./hr. means 15.5343 Miles/hr.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c24'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c24"){
        bot.editMessageText("24. Write a program in C++ to convert temperature in Kelvin to Fahrenheit.\n" +
            "Sample Output:\n" +
            "Convert temperature in Kelvin to Fahrenheit :\n" +
            "---------------------------------------------------\n" +
            "Input the temperature in Kelvin : 300\n" +
            "The temperature in Kelvin : 300\n" +
            "The temperature in Fahrenheit : 80.33",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c25'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c25"){
        bot.editMessageText("25. Write a program in C++ to convert temperature in Kelvin to Celsius.\n" +
            "Sample Output:\n" +
            "Convert temperature in Kelvin to Celsius :\n" +
            "------------------------------------------------\n" +
            "Input the temperature in Kelvin : 300\n" +
            "The temperature in Kelvin : 300\n" +
            "The temperature in Celsius : 26.85",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c26'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c26"){
        bot.editMessageText("26. Write a program in C++ to convert temperature in Fahrenheit to Kelvin.\n" +
            "Sample Output:\n" +
            "Convert temperature in Fahrenheit to Kelvin :\n" +
            "---------------------------------------------------\n" +
            "Input the temperature in Fahrenheit : 80.33\n" +
            "The temperature in Fahrenheit : 80.33\n" +
            "The temperature in Kelvin : 300",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c27'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c27"){
        bot.editMessageText("27. Write a program in C++ to convert temperature in Celsius to Kelvin.\n" +
            "Sample Output:\n" +
            "Convert temperature in Celsius to Kelvin :\n" +
            "---------------------------------------------------\n" +
            "Input the temperature in Celsius : 26.85\n" +
            "The temperature in Celsius : 26.85\n" +
            "The temperature in Kelvin : 300",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c28'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c28"){
        bot.editMessageText("28. Write a program in C++ to find the area of Scalene Triangle.\n" +
            "Sample Output:\n" +
            "Find the area of Scalene Triangle :\n" +
            "----------------------------------------\n" +
            "Input the length of a side of the triangle : 5\n" +
            "Input the length of another side of the triangle : 6\n" +
            "Input the angle between these sides of the triangle : 6\n" +
            "The area of the Scalene Triangle is : 1.56793",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c29'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c29"){
        bot.editMessageText("29. Write a program in C++ to compute quotient and remainder.\n" +
            "Sample Output:\n" +
            "Compute quotient and remainder :\n" +
            "-------------------------------------\n" +
            "Input the dividend : 25\n" +
            "Input the divisor : 3\n" +
            "The quotient of the division is : 8\n" +
            "The remainder of the division is : 1",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c30'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c30"){
        bot.editMessageText("30. Write a program in C++ to compute the total and average of four numbers.\n" +
            "Sample Output:\n" +
            "Compute the total and average of four numbers :\n" +
            "----------------------------------------------------\n" +
            "Input 1st two numbers (separated by space) : 25 20\n" +
            "Input last two numbers (separated by space) : 15 25\n" +
            "The total of four numbers is : 85\n" +
            "The average of four numbers is : 21.25",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c31'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c31"){
        bot.editMessageText("31. Write a program in C++ to input a single digit number and print a rectangular form of 4 columns and 6 rows.\n" +
            "Sample Output:\n" +
            "Make a rectangular shape by a single digit number :\n" +
            "--------------------------------------------------------\n" +
            "Input the number : 5\n" +
            "5555\n" +
            "5 5\n" +
            "5 5\n" +
            "5 5\n" +
            "5 5\n" +
            "5555",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c32'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c32"){
        bot.editMessageText("32. Write a program in C++ to check whether a number is positive, negative or zero.\n" +
            "Sample Output:\n" +
            "Check whether a number is positive, negative or zero :\n" +
            "-----------------------------------------------------------\n" +
            "Input a number : 8\n" +
            "The entered number is positive.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c33'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c33"){
        bot.editMessageText("33. Write a program in C++ to divide two numbers and print on the screen.\n" +
            "Sample Output:\n" +
            "Divide two numbers and print:\n" +
            "----------------------------------\n" +
            "The quotient of 30 and 10 is : 3",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c34'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c34"){
        bot.editMessageText("34. Write a C++ program to display the current date and time.\n" +
            "Sample Output:\n" +
            "Display the Current Date and Time :\n" +
            "----------------------------------------\n" +
            "seconds = 57\n" +
            "minutes = 33\n" +
            "hours = 12\n" +
            "day of month = 6\n" +
            "month of year = 7\n" +
            "year = 2017\n" +
            "weekday = 4\n" +
            "day of year = 186\n" +
            "daylight savings = 0\n" +
            "Current Date: 6/7/2017\n" +
            "Current Time: 12:33:57",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c35'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c35"){
        bot.editMessageText("35. Write a program in C++ to compute the specified expressions and print the output.\n" +
            "Sample Output:\n" +
            "Compute the specified expressions and print the output:\n" +
            "------------------------------------------------------------\n" +
            "Result of the expression (25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5) is : 2.13889",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c36'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c36"){
        bot.editMessageText("36. Write a program in C++ to test the Type Casting.\n" +
            "Sample Output:\n" +
            "Formatting the output using type casting:\n" +
            "----------------------------------------------\n" +
            "Print floating-point number in fixed format with 1 decimal place:\n" +
            "Test explicit type casting :\n" +
            "0\n" +
            "0.5\n" +
            "0.5\n" +
            "0.0\n" +
            "Test implicit type casting :\n" +
            "0\n" +
            "0\n" +
            "int implicitly casts to double:\n" +
            "4.0\n" +
            "double truncates to int!:\n" +
            "6",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c37'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c37"){
        bot.editMessageText("37. Write a program in C++ to print a mystery series from 1 to 50.\n" +
            "Sample Output:\n" +
            "Print a mystery series:\n" +
            "-------------------------\n" +
            "The series are:\n" +
            "5 4 2 7 11 10 8 13 17 16 14 19 23 22 20 25 29 28 26 31 35 34 32 37 41 4 0 38 43 47 46 44 49",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c38'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c38"){
        bot.editMessageText("38. Write a program in C++ that takes a number as input and prints its multiplication table upto 10.\n" +
            "Sample Output:\n" +
            "Print the multiplication table of a number upto 10:\n" +
            "--------------------------------------------------------\n" +
            "Input a number: 5\n" +
            "5 x 1 = 5\n" +
            "5 x 2 = 10\n" +
            "5 x 3 = 15\n" +
            "5 x 4 = 20\n" +
            "5 x 5 = 25\n" +
            "5 x 6 = 30\n" +
            "5 x 7 = 35\n" +
            "5 x 8 = 40\n" +
            "5 x 9 = 45\n" +
            "5 x 10 = 50",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c39'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c39"){
        bot.editMessageText("39. Write a program in C++ to print the following pattern.\n" +
            "Sample Output:\n" +
            " xxxxx                                                                                                        \n" +
            "x     x       x        x                                                                                      \n" +
            "x             x        x                                                                                      \n" +
            "x          xxxxxxx  xxxxxxx                                                                                   \n" +
            "x             x        x                                                                                      \n" +
            "x     x       x        x                                                                                      \n" +
            " xxxxx  ",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c40'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c40"){
        bot.editMessageText("40. Write a program in C++ to print the area and perimeter of a rectangle.\n" +
            "Sample Output:\n" +
            "Print the area and perimeter of a rectangle:\n" +
            "----------------------------------------------\n" +
            "Input the width of the rectangle: 8.5\n" +
            "Input the height of the rectangle: 5.6\n" +
            "The area of the rectangle is: 47.6\n" +
            "The perimeter of the rectangle is: 28.2",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c41'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c41"){
        bot.editMessageText("41. Write a program in C++ to print an American flag on the screen.\n" +
            "Sample Output:\n" +
            " Print the American flag:                                              \n" +
            "-----------------------------                                          \n" +
            "* * * * * * ==================================                         \n" +
            " * * * * *  ==================================                         \n" +
            "* * * * * * ==================================                         \n" +
            " * * * * *  ==================================                         \n" +
            "* * * * * * ==================================                         \n" +
            " * * * * *  ==================================                         \n" +
            "* * * * * * ==================================                         \n" +
            " * * * * *  ==================================                         \n" +
            "* * * * * * ==================================                         \n" +
            "==============================================                         \n" +
            "==============================================                         \n" +
            "==============================================                         \n" +
            "==============================================                         \n" +
            "==============================================                         \n" +
            "==============================================",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c42'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c42"){
        bot.editMessageText("42. Write a language program in C++ which accepts the user's first and last name and print them in reverse order with a space between them.\n" +
            "Sample Output:\n" +
            "Print the name in reverse where last name comes first:\n" +
            "-----------------------------------------------------------\n" +
            "Input First Name: Alexandra\n" +
            "Input Last Name: Abramov\n" +
            "Name in reverse is: Abramov Alexandra",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c43'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c43"){
        bot.editMessageText("43. Write a language program which accepts the radius of a circle from the user and compute the area and circumference.\n" +
            "Sample Output:\n" +
            "Find the area and circumference of any circle :\n" +
            "----------------------------------------------------\n" +
            "Input the radius(1/2 of diameter) of a circle : 5\n" +
            "The area of the circle is : 78.5397\n" +
            "The circumference of the circle is : 31.4159",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c44'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c44"){
        bot.editMessageText("44. Write a language program to get the volume of a sphere with radius 6.\n" +
            "Sample Output:\n" +
            "Calculate the volume of a sphere :\n" +
            "---------------------------------------\n" +
            "Input the radius of a sphere : 5\n" +
            "The volume of a sphere is : 523.333",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    /* End C/C++ labs */

    if(data == "c#"){
        bot.editMessageText("1. Write a C# Sharp program to print Hello and your name in a separate line.\n" +
            "Expected Output :\n" +
            "Hello: Alexandra Abramov",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#1'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#1"){
        bot.editMessageText("2. Write a C# Sharp program to print the sum of two numbers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#2'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#2"){
        bot.editMessageText("3. Write a C# Sharp program to print the result of dividing two numbers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#3'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#3"){
        bot.editMessageText("4. Write a C# Sharp program to print the result of the specified operations.\n" +
            "Test data:\n" +
            "\n" +
            "-1 + 4 * 6\n" +
            "( 35+ 5 ) % 7\n" +
            "14 + -4 * 6 / 11\n" +
            "2 + 15 / 6 * 1 - 7 % 2\n" +
            "Expected Output:\n" +
            "23\n" +
            "5\n" +
            "12\n" +
            "3",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#4'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#4"){
        bot.editMessageText("5. Write a C# Sharp program to swap two numbers.\n" +
            "Test Data:\n" +
            "Input the First Number : 5\n" +
            "Input the Second Number : 6\n" +
            "Expected Output:\n" +
            "After Swapping :\n" +
            "First Number : 6\n" +
            "Second Number : 5",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#5'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#5"){
        bot.editMessageText("6. Write a C# Sharp program to print the output of multiplication of three numbers which will be entered by the user.\n" +
            "Test Data:\n" +
            "Input the first number to multiply: 2\n" +
            "Input the second number to multiply: 3\n" +
            "Input the third number to multiply: 6\n" +
            "Expected Output:\n" +
            "2 x 3 x 6 = 36",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#6'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#6"){
        bot.editMessageText("7. Write a C# Sharp program to print on screen the output of adding, subtracting, multiplying and dividing of two numbers which will be entered by the user.\n" +
            "Test Data:\n" +
            "Input the first number: 25\n" +
            "Input the second number: 4\n" +
            "Expected Output:\n" +
            "25 + 4 = 29\n" +
            "25 - 4 = 21\n" +
            "25 x 4 = 100\n" +
            "25 / 4 = 6\n" +
            "25 mod 4 = 1",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#7'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#7"){
        bot.editMessageText("8. Write a C# Sharp program that takes a number as input and print its multiplication table.\n" +
            "Test Data:\n" +
            "Enter the number: 5\n" +
            "Expected Output:\n" +
            "5 * 0 = 0\n" +
            "5 * 1 = 5\n" +
            "5 * 2 = 10\n" +
            "5 * 3 = 15\n" +
            "....\n" +
            "5 * 10 = 50",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#8'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#8"){
        bot.editMessageText("9. Write a C# Sharp program that takes four numbers as input to calculate and print the average.\n" +
            "Test Data:\n" +
            "Enter the First number: 10\n" +
            "Enter the Second number: 15\n" +
            "Enter the third number: 20\n" +
            "Enter the four number: 30\n" +
            "\n" +
            "Expected Output:\n" +
            "The average of 10 , 15 , 20 , 30 is: 18",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#9'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#9"){
        bot.editMessageText("10. Write a C# Sharp program to that takes three numbers(x,y,z) as input and print the output of (x+y).z and x.y + y.z.\n" +
            "Test Data:\n" +
            "Enter first number - 5\n" +
            "Enter second number - 6\n" +
            "Enter third number - 7\n" +
            "\n" +
            "Expected Output:\n" +
            "Result of specified numbers 5, 6 and 7, (x+y).z is 77 and x.y + y.z is 72",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#10'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#10"){
        bot.editMessageText("11. Write a C# Sharp program that takes an age (for example 20) as input and prints something as \"You look older than 20\".\n" +
            "Test Data:\n" +
            "Enter your age - 25\n" +
            "Expected Output:\n" +
            "You look older than 25",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#11'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#11"){
        bot.editMessageText("12. Write a C# program to that takes a number as input and display it four times in a row (separated by blank spaces), and then four times in the next row, with no separation. You should do it two times: Use Console. Write and then use {0}.\n" +
            "Test Data:\n" +
            "Enter a digit: 25\n" +
            "Expected Output:\n" +
            "25 25 25 25\n" +
            "25252525\n" +
            "25 25 25 25\n" +
            "25252525",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#12'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#12"){
        bot.editMessageText("13. Write a C# program that takes a number as input and then displays a rectangle of 3 columns wide and 5 rows tall using that digit.\n" +
            "Test Data:\n" +
            "Enter a number: 5\n" +
            "Expected Output:\n" +
            "555\n" +
            "5 5\n" +
            "5 5\n" +
            "5 5\n" +
            "555",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#13'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#13"){
        bot.editMessageText("14. Write a C# program to convert from celsius degrees to Kelvin and Fahrenheit.\n" +
            "Test Data:\n" +
            "Enter the amount of celsius: 30\n" +
            "Expected Output:\n" +
            "Kelvin = 303\n" +
            "Fahrenheit = 86",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#14'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#14"){
        bot.editMessageText("15. Write a C# program to create a new string from a given string (length 1 or more ) with the first character added at the front and back. Go to the editor\n" +
            "Sample Output:\n" +
            "Input a string : The quick brown fox jumps over the lazy dog.\n" +
            "TThe quick brown fox jumps over the lazy dog.T",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#15'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#15"){
        bot.editMessageText("16. Write a C# program to check two given integers and return true if one is negative and one is positive. Go to the editor\n" +
            "Sample Output:\n" +
            "Input first integer:\n" +
            "-5\n" +
            "Input second integer:\n" +
            "25\n" +
            "Check if one is negative and one is positive:\n" +
            "True",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#16'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#16"){
        bot.editMessageText("17. Write a C# program to compute the sum of two given integers, if two values are equal then return the triple of their sum.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#17'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#17"){
        bot.editMessageText("18. Write a C# program to get the absolute value of the difference between two given numbers. Return double the absolute value of the difference if the first number is greater than second number.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#18'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#18"){
        bot.editMessageText("19. Write a C# program to check the sum of the two given integers and return true if one of the integer is 20 or if their sum is 20.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#19'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#19"){
        bot.editMessageText("20. Write a C# program to check if an given integer is within 20 of 100 or 200.\n" +
            "Sample Output:\n" +
            "Input an integer:\n" +
            "25\n" +
            "False",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#20'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#20"){
        bot.editMessageText("21. Write a C# program to convert a given string into lowercase. \n" +
            "Sample Output:\n" +
            "write a c# sharp program to display the following pattern using the alphabet.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#21'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#21"){
        bot.editMessageText("22. Write a C# program to find the longest word in a string.\n" +
            "Test Data: Write a C# Sharp Program to display the following pattern using the alphabet.\n" +
            "Sample Output:\n" +
            "following",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#22'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#22"){
        bot.editMessageText("23. Write a C# program to print the odd numbers from 1 to 99. Prints one number per line.\n" +
            "Sample Output:\n" +
            "Odd numbers from 1 to 99. Prints one number per line.\n" +
            "1\n" +
            "3\n" +
            "5\n" +
            "7\n" +
            "9\n" +
            "...\n" +
            "95\n" +
            "97\n" +
            "99",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#23'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#23"){
        bot.editMessageText("24. Write a C# program to compute the sum of the first 500 prime numbers.\n" +
            "Sample Output:\n" +
            "Sum of the first 500 prime numbers:\n" +
            "3682913",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#24'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#24"){
        bot.editMessageText("25. Write a C# program and compute the sum of the digits of an integer.\n" +
            "Sample Output:\n" +
            "Input a number(integer): 12\n" +
            "Sum of the digits of the said integer: 3",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#25'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#25"){
        bot.editMessageText("26. Write a C# program to reverse the words of a sentence.\n" +
            "Sample Output:\n" +
            "Original String: Display the pattern like pyramid using the alphabet.\n" +
            "Reverse String: alphabet. the using pyramid like pattern the Display",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#26'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#26"){
        bot.editMessageText("27. Write a C# program to find the size of a specified file in bytes.\n" +
            "Sample Output:\n" +
            "Size of a file: 31",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#27'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#27"){
        bot.editMessageText("28. Write a C# program to convert a hexadecimal number to decimal number.\n" +
            "Sample Output:\n" +
            "Hexadecimal number: 4B0\n" +
            "Convert to-\n" +
            "Decimal number: 1200",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#28'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#28"){
        bot.editMessageText("29. Write a C# program to multiply corresponding elements of two arrays of integers.\n" +
            "Sample Output:\n" +
            "Array1: [1, 3, -5, 4]\n" +
            "Array2: [1, 4, -5, -2]\n" +
            "Multiply corresponding elements of two arrays:\n" +
            "1 12 25 -8",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#29'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#29"){
        bot.editMessageText("30. Write a C# program to create a new string of four copies, taking last four characters from a given string. If the length of the given string is less than 4 return the original one.\n" +
            "Sample Output:\n" +
            "Input a string : The quick brown fox jumps over the lazy dog.\n" +
            "dog.dog.dog.dog.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#30'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#30"){
        bot.editMessageText("31. Write a C# program to check if a given positive number is a multiple of 3 or a multiple of 7.\n" +
            "Sample Output:\n" +
            "Input first integer:\n" +
            "15\n" +
            "True",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'c#31'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "c#31"){
        bot.editMessageText("32. Write a C# program to check if a string starts with a specified word.\n" +
            "Note: Suppose the sentence starts with \"Hello\"\n" +
            "Sample Data: string1 = \"Hello how are you?\"\n" +
            "Result: Hello.\n" +
            "Sample Output:\n" +
            "Input a string : Hello how are you?\n" +
            "True",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    /* End C# Shrap labs */

    /* Start Swift labs */
    if(data == "swift"){
        bot.editMessageText("1. Write a Swift program to compute the sum of the two integers. If the values are equal return the triple their sum.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s1'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s1"){
        bot.editMessageText(" 2. Write a Swift program to compute and return the absolute difference of n and 51, if n is over 51 return double the absolute difference",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s2'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s2"){
        bot.editMessageText("3. Write a Swift program that accept two integer values and return true if one of them is 20 or if their sum is 20.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s3'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s3"){
        bot.editMessageText("4. Write a Swift program to accept two integer values and return true if one is negative and one is positive. Return true only if both are negative.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s4'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s4"){
        bot.editMessageText("5. Write a Swift program to add \"Is\" to the front of a given string. However, if the string already begins with \"Is\", return the given string",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s5'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s5"){
        bot.editMessageText("6. Write a Swift program to remove a character at specified index of a given non-empty string. The value of the specified index will be in the range 0..str.length()-1 inclusive.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s6'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s6"){
        bot.editMessageText("7. Write a Swift program to change the first and last character of a given string.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s7'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s7"){
        bot.editMessageText("8. Write a Swift program to add the last character (given string) at the front and back of a given string. The length of the given string must be 1 or more.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s8'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s8"){
        bot.editMessageText("9. Write a Swift program to check if a given non-negative number is a multiple of 3 or a multiple of 5.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s9'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s9"){
        bot.editMessageText("10. Write a Swift program to take the first two characters from a given string and create a new string with the two characters added at both the front and back.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s10'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s10"){
        bot.editMessageText("11. Write a Swift program to test a given string whether it starts with \"Is\". Return true or false.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s11'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s12"){
        bot.editMessageText("12. Write a Swift program that return true if either of two given integers is in the range 10..30 inclusive.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s13'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s13"){
        bot.editMessageText(" 13. Write a Swift program to check if a given string begins with \"fix\", except the 'f' can be any character or number.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s14'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s14"){
        bot.editMessageText("14. Write a Swift program to find the largest number among three given integers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s15'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s15"){
        bot.editMessageText("15. Write a Swift program that accept two integer values and to test which value is nearest to the value 10, or return 0 if both integers have same distance from 10.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s16'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s16"){
        bot.editMessageText("16. Write a Swift program that accept two integer values and test if they are both in the range 20..30 inclusive, or they are both in the range 30..40 inclusive.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s17'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s17"){
        bot.editMessageText("17. Write a Swift program that accept two positive integer values and test whether the larger value is in the range 20..30 inclusive, or return 0 if neither is in that range.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s18'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s18"){
        bot.editMessageText("18. Write a Swift program to test whether the last digit of the two given non-negative integer values are same or not.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s19'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s19"){
        bot.editMessageText("19. Write a Swift program to convert the last three characters in upper case. If the string has less than 3 chars, lowercase whatever is there.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s20'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s20"){
        bot.editMessageText("20. Write a Swift program to check if the first instance of \"a\" in a given string is immediately followed by another \"a\"",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s21'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s21"){
        bot.editMessageText("21. Write a Swift program to create a string made of every other char starting with the first from a given string. So \"Python\" will return \"Pto\"",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s22'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s22"){
        bot.editMessageText("22. Write a Swift program to count the number of 7's in a given array of integers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s23'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s23"){
        bot.editMessageText("23. Write a Swift program to check if one of the first 4 elements in a given array of integers is a 7. The length of the array may be less than 4.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s23'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s23"){
        bot.editMessageText("24. Write a Swift program to test if the sequence of numbers 0, 1, 2 appears in a given array of integers somewhere.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s24'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s24"){
        bot.editMessageText("25. Write a Swift program to create a new string where all the character \"a\" have been removed except the first and last positions.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s25'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s25"){
        bot.editMessageText("26. Write a Swift program to create a string taking characters at indexes 0, 2, 4, 6, 8, .. from a given string.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s26'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s26"){
        bot.editMessageText("27. Write a Swift program to count the number of times that two 7's are next to each other in a given array of integers.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:"Next",callback_data:'s27'}],[{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }
    if(data == "s27"){
        bot.editMessageText("28. Write a Swift program to test whether a value presents sequentially three times in an array of integers or not.",{
            chat_id:chatId,
            message_id:msgId,
            'parse_mode':'Markdown',
            'reply_markup':{
                'inline_keyboard':[
                    [{text:'Main Menu',callback_data:'home'}]
                ]
            }
        })
    }

    /* End Swift labs */

});

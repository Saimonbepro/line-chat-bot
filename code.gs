
    
var channelToken = ''

function doGet(e) {
  return ContentService.createTextOutput(UrlFetchApp.fetch('http://ip-api.com/json'));
} 
//複製貼上


//好戲登場
function doPost(e) {
  //e 是Line 給我們的資料 其中最重要的是 reToken 和 Message
  
  var reToken = JSON.parse(e.postData.contents).events[0].replyToken;
  //要回復訊息 reToken
  
  var userMsg = JSON.parse(e.postData.contents).events[0].message.text;
 
  
  switch (userMsg) {
    case "0":
      var replyMessage = "1.如果想了解我,請輸入---> 1\n2.如果想知道我的實習動機,請輸入---> 2\n3.如果想知道我的論文摘要,請輸入---> 3\n4.如果想知道我曾拿過的獎學金榮譽,請輸入---> 4\n5.如果想知道我的實習目標,請輸入---> 5\n6.如果想知道我如何對待別人的批評,請輸入---> 6\n7.如果想知道說說我怎樣對待自己的失敗--->7\n8.如果想知道我為什麼願意到貴公司來工作,請輸入---> 8\n9.如果想知道我的大學專題,請輸入---> 9\n10.如果想知道我遇過最大的挑戰以及我如何因應,請輸入---> 10\n11.如果想知道我的強項是什麼,請輸入---> 11\n12.如果想知道我曾寫過的程式作品與內容,請輸入---> 12\n13.如果想知道我有計畫要繼續升學嗎,請輸入--->13\n14.如果想知道英文自我介紹,請輸入--->14\n15.如果想了解我有哪些英文證照,請輸入--->15\n下面幾張圖是操作結果範例:\nhttps://drive.google.com/file/d/1LMg72F0Q_Db2fmcA0sxXF2X-TcWWgcl6/view?usp=sharing\nhttps://drive.google.com/file/d/1qfrlTxLq0ssvVVSGgzYWEowjJeVAVCFp/view?usp=sharing";
      break;
      
    case "1":
      var replyMessage = "各位好，我是盧羿程。\n  高中時我加入數學研究社，並擔任總務股長，高中二年級時加入國術社，至此，我學會勇敢和迎向挑戰的能力，我亦代表學校參加台南市中運羽球項目的比賽，雖然未獲得名次，但在和羽球高手較勁上，我也獲益良多。\n  我的興趣是打羽球和閱讀，打羽球讓我學會獨立自主的面對各種情況，上大學後，我也加入台師大乙級羽球校隊，我時常參與台師大乙級羽球校隊的訓練以為學校爭取榮譽。因為近期腳踝受傷，所以處於停止接受校隊訓練的狀態，但我期許能早日恢復身體的最佳狀態，以再度為學校贏得獎牌。\n  古人曾說：「秀才不出門，能知天下事。」，讀書的好處便是如此，書中的知識可以說是我一生中不可或缺的東西，知識是我的老師，我將不斷學習，直到永遠。進到台大工海所資工組，期望能獲得與機電研究與人工智慧的相關知識，攝取資訊的正確使用方法，並融會貫通，會付出百分之百的努力來學習，一步一步向終點邁進，運用積極的態度，不放棄的精神，達成目標。\n  我曾擔任台師大機電工程學系的公關。在擔任班級幹部的過程中，我雖然經歷了些許的挫折與體會舉辦活動的艱辛，但也獲得學校的褒揚和一支嘉獎。\n  我曾在服務學習(二)的課程中和喜憨兒一同製作餅乾時，我看見喜憨兒們越挫越勇的精神和過人的耐性。在他們身上，我學會如何在逆境中勇敢前行，我亦學會以「尊重、成長、支持」的精神來和喜憨兒們相處。\n  在未來，我要培養英文能力做為我的第二專長，因為英文是世界通用的語言，除了基本的課業之外，培養處理事務的基本能力也是不可或缺的，希望未來能在專業的領域上做出貢獻與付出。\n  此外，因為我在愛國表現、義行孝悌、社會服務、參加校外競賽等方面有傑出的表現，也讓自己能機電系學士班優秀學生之榮譽。，接著，我要考取專業證照，證照對我往後的求職生涯有著加分的作用，俗話說：有證照不用人罩，接著，在我專業的領域上貢獻一份心力，成為科技界的一盞路燈，照亮未知的領域，延伸機電的觸角，使我成為科技界的新巨人。\n  我現就讀於台大工海所資工組，我的論文主題和人工智慧與深度學習密切相關，我將運用自身對於嵌入式系統例如Arduino、網頁設計、工程數學和電子電路的精闢了解完成論文的成果，並將成果實際地運用在機器學習和人工智慧領域。\n";
      break;

    case "2":
      var replyMessage = "我會想參與實習為了能藉由本次的實習了解職場上社群媒體程式開發和人工智慧的運用，我也可藉此機會提前了解企業界對於社群媒體程式和人工智慧方面的應用與技術。此外，在取得充足的工作經驗且獲得所需的就業能力後，不但可以彌補我對於實務經驗上的不足，也能將理論與實務融會貫通。因此期待藉由進入LINE Taiwan_台灣連線股份有限公司實習，從中將本身的知識和專業能力運用在實務作業和機台上。";
      break;
      
    case "3":
      var replyMessage = "「利用預診斷系統提前了解配電盤的故障壽命」是我的論文題目，論文在討論如何利用預診斷系統提前了解配電盤的故障壽命，估算剩餘壽命之功能，經由特徵的比對和人工智慧演算法，判斷故障損壞之組件，以達故障診斷之功效。";
      break;
      
    case "4":
      var replyMessage = "大學學術榮譽：台師大優秀學生獎，成功大學科學資優學生培育二年計畫、高中數學競試第四名、國立台南二中數理適性班學生、本專題作品入圍105年度全國微電腦應用系統設計創作競賽且參加旺宏金矽獎。\n大學社會服務：新北市喜憨兒庇護工場(服務學習(二)課程) 、台南北門偏遠地區兒童英語學習服務計畫志工。\n碩士學術榮譽：美律實業科技人才培育金，國家中山科學研究院延攬大學院校優秀學生獎助金。";
      break;
      
    case "5":
      var replyMessage = "實習目標: 實習目標是為明瞭自己未來即將面對的工作方式及環境，透過對一公司的運作和身體力行的參與去定位自己正確的位置，並累積人工智慧相關的實作經驗，以便為自己未來就業能力打下紮實的基礎。";
      break;
      
    case "6":
      var replyMessage = "個人認為沈默是金，不必說什麼，否則情況可能會更糟，不過我會接受建設性的批評。";
      break;
     
    case "7":
      var replyMessage = "個人認為失敗不是重點，重點是你有沒有檢討你的失敗原因與下次如何修正！";
      break;
      
    case "8":
      var replyMessage = "我很認同公司的願景與文化，也認為公司的主張與我的價值觀相符，因此貴公司是我投遞的公司當中最棒的選擇。";
      break;
      
    case "9":
      var replyMessage = "我的大學專題「整合式紅綠燈號誌系統」目的為開發並改善現有紅綠燈燈號警示的方式，並將研究成果應用至目前現行的燈號系統。將人眼所能感測到的”臨界閃光頻率”50Hz 以下作分析，以最不影響視覺的舒適性及能適當增加人體身心理警示效果為前提，利用Arduino 及單晶片的搭配，實現分析成果來控制各色燈號的閃爍及感測程度的配合。\n  這項專題的特色是運用LED會發出光源和感測光源的特性。";
      break;
      
    case "10":
      var replyMessage = "在我的人生當中有許多的挑戰。最大的就是我必須在10天內完成一個程式專案。我需要收集資料並整理出完整的專案報告。在我用盡全力並在教授的指導下，我成功地戰勝它。";
      break;
      
    case "11":
      var replyMessage = "我的個人專長為\n1.嵌入式系統 例如Arduino\n2.網頁設計\n3.工程數學\n4.電子電路\n5.個人部落格(網站上有個人曾做過的實驗與寫過的文章):https://prog1lu.blogspot.com/";
      break;
      
    case "12":
      var replyMessage = "個人程式作品:\n您好：\n  我曾學過的程式demo都在這網址:https://drive.google.com/drive/folders/1OjX1UsTS8gCoi222hJ8ZqvYAtYTnlFr0?usp=sharing\n我接下來闡述網址中檔案內容是什麼\n(1)Matlab: \n  Matlab 是我碩一常用的程式語言，我在陳宏銘教授的多媒體訊號處理課程中，利用Matlab 進行對Hybrid image, Global search strategy,Preserving Color Appearance of LCD Images,Refocusing等技術的模擬。\n\n(2)C++/C: \n   C++/C 是我修習張傑帆老師的程式語言課所學，所以檔案內容是有關用C/C++的邏輯去解決一些問題例如雞兔同籠或檔案讀寫等難題。\n\n(3)Java: \nJava是我修習陳琨老師的程式語言課所學，所以檔案內容是有關用Java作流程控制、函式、與陣列。\n\n(4)python: \n  檔案內容是利用Python做一些機器人學得模擬與實現，這堂課的老師是Jacky Baltes教授。\n\n(5)Arduino: \n  Arduino是我修習張傑帆老師的程式語言課所學，且我的大學專題「整合式號誌系統」和大學課程也常用Arduino，檔案內容是有關Arudino做一些系統模擬。\n\n";
      break;  
      
    case "13":
      var replyMessage = "如果工作中發現自己有所不足，且主管覺得有必要的話，我會規劃再進修。";
      break;
      
    case "14":
      var replyMessage = "https://drive.google.com/file/d/1H7NPOZFxpvkwZreSgX8xhh0IfAX2LX9x/view?usp=sharing";
      break;
      
   case "15":
      var replyMessage = "1.Toefl 83分\n2.GRE 299分";
      break;
      
    default:
      var replyMessage = "Sorry,無法回復,請輸入正確指令\n1.如果想了解我,請輸入---> 1\n2.如果想知道我的實習動機,請輸入---> 2\n3.如果想知道我的論文摘要,請輸入---> 3\n4.如果想知道我曾拿過的獎學金榮譽,請輸入---> 4\n5.如果想知道我的實習目標,請輸入---> 5\n6.如果想知道我如何對待別人的批評,請輸入---> 6\n7.如果想知道說說我怎樣對待自己的失敗--->7\n8.如果想知道我為什麼願意到貴公司來工作,請輸入---> 8\n9.如果想知道我的大學專題,請輸入---> 9\n10.如果想知道我遇過最大的挑戰以及我如何因應,請輸入---> 10\n11.如果想知道我的強項是什麼,請輸入---> 11\n12.如果想知道我曾寫過的程式作品與內容,請輸入---> 12\n13.如果想知道我有計畫要繼續升學嗎,請輸入--->13\n14.如果想知道英文自我介紹,請輸入--->14\n15.如果想了解我有哪些英文證照,請輸入--->15\n下面幾張圖是操作結果範例:\nhttps://drive.google.com/file/d/1LMg72F0Q_Db2fmcA0sxXF2X-TcWWgcl6/view?usp=sharing\nhttps://drive.google.com/file/d/1qfrlTxLq0ssvVVSGgzYWEowjJeVAVCFp/view?usp=sharing\n謝謝";
  }
  
  sendReplyMessage(channelToken, reToken, replyMessage);
  
  
  
  
  
  
  
  
}
  

function sendReplyMessage(channelToken, reToken, replyMessage) {

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    "headers": {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + channelToken,
    },
    "method": "post",
    "payload": JSON.stringify({
      "replyToken": reToken,
      "messages": [{
        "type": "text",
        "text":replyMessage,
      }],
    }),
  });
}

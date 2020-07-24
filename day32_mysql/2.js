const fs = require('fs')
const mysql = require('mysql-pro')
let mysql_config = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'learn_web_zhihu'
} 
let db = new mysql({mysql:mysql_config})

let arr = JSON.parse(fs.readFileSync('.topics').toString())
// console.log(arr)
let topices = {}, topices_ID = 1
let auhtors = {}, author_ID = 1
let questions = {}, question_ID = 1
let answers={}, answer_ID=1
let test 
// 遍历处理数据
arr.forEach(question => {
    // 处理topices
    question.topices.map(json=>{
        let { title } = json
        // 去换行符
        title = title.replace(/^\s+|\s+$/g,"")
        // console.log(title);
        if ( ! topices[title] ) {
            topices[title] = topices_ID
            topices_ID ++
        }
        
    })
    // 处理author
    let bestAnswer_auter = question.bestAnswer.author
    let answers_auhters = question.answers.map(anser=>{
        return anser.author
    })
    test = answers_auhters;
    [bestAnswer_auter, ...answers_auhters].forEach((auhter,index)=>{
        // console.log(auhter.id);
        let old_id = auhter.id
        if (! auhtors[old_id]) {
            auhter.id = author_ID
            auhtors[old_id] = auhter
            author_ID ++;
        }
        // 关联作者id
        if (index == 0) {
            bestAnswer_auter.author_ID = old_id
            
        } else {
            question.answers[index-1].author_ID = old_id
        }
    });

    // 处理questaion
        let ID=question_ID;
        questions[ question_ID++]=question;
    // 处理answer
    [question.bestAnswer, ...question.answers].forEach(answer=>{
        answer.id=answer_ID;
        answer.question_ID=ID;
        answers[answer_ID++]=answer;
      });
});
function toJson1(...params) {
    // console.log(params);
    let temp_arr = params.map(item=>{
        item = item || ''
        // '转义
        item = item.toString().replace(/'/g,"\\\'")
        // console.log(item);
        
        return item
    });
    return "('"+temp_arr.join("','")+"')"
}
function topices_sql(params) {
    let topices_arr = []
    let topices_insert=""
    for (const title in topices) {
        topices_arr.push(toJson1(topices[title],title))
        
    }
    topices_insert = `INSERT INTO  topices_table VALUES${topices_arr.join(',')}`
    return topices_insert
}
function author_sql(params) {
    let author_arr = []
    let author_insert=""
    for (const key in auhtors) {
        let author = auhtors[key]
        /*IDint(10) NOT NULL
        typevarchar(16) NULL
        namevarchar(64) NULL
        gendertinyint(4) NULL
        userTypevarchar(16) NULL
        img_urlvarchar(255) NULL
        headlinevarchar(255) NULL
        followerCountint(11) NULL*/ 
        author_arr.push(toJson1(author.id,author.type,author.name,author.gender,author.userType,author.img_url,author.headline,author.followerCount))
    }
    author_insert=`INSERT INTO  author_table VALUES${author_arr.join(',')}`
    return author_insert
}
function question_sql (params) {
    let question_arr=[]
    let question_insert=""
    for (const ID in questions) {
        let question = questions[ID]
        /*`ID` int(11) NOT NULL,
      `title` varchar(64) DEFAULT NULL,
      `content` text,
      `topics` varchar(255) DEFAULT NULL,
      `attention_count` int(11) DEFAULT NULL,
      `view_count` int(11) DEFAULT NULL,
      `bestAnswer_ID` int(11) DEFAULT NULL,*/
    //   INSERT INTO  question_table VALUES('267729019','如何看待人工智能已经能自动编写html和css了？','','','25','[object Object]')
        question_arr.push( toJson1(question.ID,question.title,question.question_content,question.topics,question.attention_count,question.view_count,question.bestAnswer.id))
    }
    question_insert = `INSERT INTO  question_table VALUES${question_arr.join(',')}`
    return question_insert
}
// 写入数据库
(async()=>{
    
    // topices
    let topices_insert = topices_sql()
    // console.log(topices_insert);
   
    // 作者
    let author_insert = author_sql();
    console.log(author_insert);
    // fs.writeFile('message.txt', author_insert, (err) => {
    //     if (err) throw err;
    //     console.log('It\'s saved!');
    // });

    // question
    let question_insert = question_sql()
    fs.writeFile('message.txt', question_insert, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    // answers
    // let answers_arr = []
    // let answers_inert=""
    // for (const key in answers) {
    //     let answer = answers[key]
    //     /*`ID` int(10) NOT NULL,
    //   `questionID` int(11) DEFAULT NULL,
    //   `content` text,
    //   `createdTime` int(11) DEFAULT NULL,
    //   `authorID` int(11) DEFAULT NULL,*/
    //   answers_arr.push(toJson1(answer.id,answer.question_ID,answer.content,answer.createdTime,answer.author_ID))
    // }
    // answers_inert = `INSERT INTO  answers_table VALUES${answers_arr.join(',')}`
    await db.startTransaction()
    // await db.executeTransaction(topices_insert);
    // await db.executeTransaction(aaa);
    await db.executeTransaction(question_insert);
    // await db.executeTransaction(answers_inert);
    await db.stopTransaction();
})()

// console.log(auhtors);


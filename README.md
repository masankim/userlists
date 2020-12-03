# nodejs를 활용한 게시판 만들기



게시판에 콘텐츠를 CRUD 를 하기위한 데이터베이스는  MYSQL 를 이용한다.



![image-20201203173155691](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20201203173155691.png)

```cmd
mkdir userlists
cd userlists
npm init -y 
```



npm이라는 nodemodule 패키지 관리자를 이용해서 설치한다.



nodejs 는 라이브러를 설치할떄 npm 이용해서 설치를 하고 설치한 라이브러리등을 관리하고 기록하는 파일을 package.json 에 기록하고 관리한다.



package.json 파일을 확인한다.



http 라이브러리가 아닌 express 라이브러리를 이용해서 웹 서버를 띄운다. 

웹서버 url : 127.0.0.1 = localhost

웹서버 port : 8080 

서버가 완성 : http://127.0.0.1:8080 =http://localhost:8080

```powershell
npm install express
```





##### listen(포트번호 , url , backlog , callback 함수 )

callbakc function :  javascript에서는 callback 함수는 다른 함수의 매개변수로 함수를 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미합니다.

callback은 쉽게 말하자면 어떤 일을 다른 객체에게 시키고, 그 일이 끝나는 것은 기다리지 않고 끝나고 부를 때까지 다른 일을 하는 것을 말합니다.

그렇기 때문에 non-block이며, 비동기 방식의 함수를 사용합니다.



get메소드와 post메소드 등을 활용하여 routing을 만든다.

일정한 경로로 요청이 들어왔을때 서버에서 반응할 것들을 콜백함수에서 처리한다.

callback 함수에서 매개변수로 request , response , next 형식으로 받아서 처리한다.





app.js에 최소한에 코드를 통해서 실행한다.

set . use .listen 메소드를 기본으로 하여 코드를 작성한다.

set method : 처음에 서버를 띄우전에 기초 세팅을 할떄 사용 

use method : 미들웨어를 등록하고 사용할때

listen method : 서버를 실행시킬때 사용한다.



**MySQL**

Mysql 접속 : mysql -uroot -p

db만들기 : create database something;

```
ex) CREATE DATABASE o2 CHARACTER SET utf8 COLLATE utf8_general_ci;
```

db보기 : show databases;

db사용하기 : use something;

현재 사용중이 db 확인하기 :  select database();

table 보기 : show tables;

**table 생성 : create table**

```mysql
ex) CREATE TABLE `topic` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`title` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`author` varchar(30) NOT NULL,
	PRIMARY KEY (id)
	) ENGINE=innoDB DEFAULT CHARSET=utf8;
```

id : 각 행들을 식별할 수 있게하는 식별자

Auto_increment : id를 따로 설정해주지 않으면, 자동으로 숫자가 1씩 늘어나는 방식



**데이터 추가 : INSERT**

```mysql
INSERT INTO topic (title, description, author) VALUES('JavaScript', 'Computer language for web.', 'abel');
//topic 이라는 테이블에 title, description, author정보를 추가한다.
//topic의 순서와, values의 값의 순서는 일치해야한다.

```


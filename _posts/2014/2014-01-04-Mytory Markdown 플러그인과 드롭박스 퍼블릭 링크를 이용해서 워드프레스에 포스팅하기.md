---
title: Mytory Markdown 플러그인과 드롭박스 퍼블릭 링크를 이용해서 워드프레스에 포스팅하기
date: 2014-01-04T14:55:24+00:00
author: 칼킨
excerpt: Mytory Markdown 플러그인을 이용하면, 드롭박스의 퍼블릭 폴더를 이용해서 편리하게, Markdown으로 워드프레스에 글을 올릴 수 있다. 다른 Markdown 플러그인과 달리, 자신이 좋아하는 에디터를 사용해서 글을 작성할 수 있다는 것이 가장 큰 장점이다.
layout: post
permalink: /2014/01/04/mytory-markdown-plugin-using-dropbox-public-link/
categories:
  - 워드프레스
tags:
  - markdown
  - wordpress
  - wordpress-plugin

---

* TOC
{:toc}

## 1. Markdown이란?
Markdown은 아주 간단한 몇개의 문법만으로 간단한 서식을 입력할 수 있는 마크업 언어이다. 기능이 강력하진 않지만 배우는데 별다른 노력이 들지 않고, 마우스를 쓸 필요없이 글을 작성할 수 있다는 것이 장점이다. 또한 모바일에서는 위지윅 에디터를 사용하기 힘든 경우가 많은데, Markdown은 어차피 텍스트파일이므로, 모바일에서도 같은 환경에서 글을 작성할 수 있다는 것도 장점이 될 수 있다.

Markdown에 대해 좀 더 자세히 알고 싶으면 다름 링크를 참조하면 된다.

* [HTML을 모르면? 마크다운을 사용하자! - 도아의 세상사는 이야기](http://offree.net/entry/Markdown-Formatter)
* [워드프레스 마크다운(Markdown) 문법 설명 - Kalkin7 Blog](http://blog.kalkin7.com/2014/02/05/wordpress-markdown-quick-reference-for-koreans/)
* [Markdown: Syntax – Daring Fireball](http://daringfireball.net/projects/markdown/syntax)
* [마크 다운 문법 가이드 – Song Young-Jin](http://scriptogr.am/myevan/post/markdown-syntax-guide-for-scriptogram)
* [직접 정리한 MarkDown 문법 배우기 자료 – Seoulrain](https://www.evernote.com/shard/s3/sh/128acb97-d3c5-4eda-aa1b-c71ecd2f3a15/54a14ebd5d4ce7507bf78e5af640d0e9)
* [Markdown의 자세한 문법 설명 - 놀부 블로그](http://nolboo.github.io/blog/2013/09/07/john-gruber-markdown/)


## 2. Mytory Markdown 플러그인 소개
[Mytory Markdown 플러그인](http://wordpress.org/plugins/mytory-markdown/)은 [웹으로 말하기](http://mytory.net/)라는 블로그를 운영중인 [녹풍](http://mytory.net/who-am-i)님이 만드신 플러그인이다. 

[Mytory Markdown 플러그인](http://wordpress.org/plugins/mytory-markdown/)은 다른 Markdown 플러그인들과는 작동방식이 완전히 다르다. 다른 Markdown 플러그인들은 위드프레스 편집기에서 Markdown 문법을 이용해서 글을 작성할 수 있도록 해주는 방식이다. 반면에 [Mytory Markdown 플러그인](http://wordpress.org/plugins/mytory-markdown/)은 따로 작성한 Markdown 파일을 [드롭박스](http://dropbox.com)의 퍼블릭폴더에 넣은 후에 그 링크를 플러그인 창에 붙여넣으면 자동으로 Markdown이 변환되어서 워드프레스 에디터에 입력되는 방식이다.

또한 한 번 Markdown 파일과 글이 연결된 다음부터는, Markdown 파일을 수정하면 자동으로 워드프레스에 올라간 글도 업데이트되기 때문에 글을 여러번 수정한 후에 글을 올리는 경우 상당히 편리하다.

이러한 방식은 몇가지 장점을 가지고 있다.

**첫째로**, 자신이 익숙한 에디터를 사용해서 글을 작성할 수 있다. Markdown으로 작성한 글은 그냥 텍스트 파일이기 때문에, 메모장이든 MS워드든 아래아한글이든 텍스트 파일을 편집할 수 있는 프로그램이라면 사용하는데 전혀 지장이 없다. 

**둘째로**, 모바일에서도 [드롭박스](http://dropbox.com)를 지원하는 에디터가 많기 때문에, 어디서든지 PC에서와 비슷한 환경으로 글을 작성, 수정하는 것이 가능하다.

**셋째로**, 한 번 Markdown 파일과 글을 연결시켜 놓으면 그 후부터는 PC에 있는 Markdown 파일을 수정해서 그것이 [드롭박스](http://dropbox.com)에 반영이 되면 워드프레스의 글 역시 자동으로 업데이트가 되기 때문에, 업데이트가 상당히 편하다.

**넷째로**, 자신의 글이 완벽하게 백업된다. 워드프레스는 글을 DB에 저장하기 때문에, 글을 백업하고 복원하는 것이 그리 쉽지 않다. 하지만, 이 플러그인을 이용하면 PC와 드롭박스에 Markdown으로 작성한 원본이 저장되어 있으므로, 문제가 생겼을 경우 글을 다시 복원할 수 있다.

**마지막으로**, 대부분의 Markdown 플러그인들과 같이, 워드프레스 DB에 Markdown 포맷으로 저장하는 것이 아니라, HTML로 변환해서 저장하기 때문에, 플러그인을 비활성화해도 아무런 문제가 없다. 반면에 많은 Markdown 플러그인들은 워드프레스 DB에 Markdown 포맷으로 저장해서, 플러그인을 비활성화하면 문제가 생길 수 있다.

물론 단점이 없는 것은 아니다.

가장 큰 문제는 바로 이미지나 첨부파일 문제이다. 이 플러그인을 사용하면 위드프레스에 직접 이미지나 첨부파일을 올릴 수 없으므로 그것이 불편할 수 있다. 

하지만 나처럼 웹호스팅의 트래픽과 용량 문제 때문에, 워드프레스에 직접 이미지나 첨부파일을 올리는 것을 꺼려하는 사람들에게는 문제될 것이 없다. 이미지는 [피카사](https://picasaweb.google.com)나 [플리커](http://www.flickr.com/)등의 이미지 호스팅 서비스를 이용하고, 첨부파일은 [드롭박스](http://dropbox.com)나 [구글드라이브](https://drive.google.com)등의 클라우드 서비스를 이용하면 그리 큰 불편함은 없을 것이다.


## 3. Mytory Markdown 플러그인 사용법
### 3.1 플러그인 설치
워드프레스 대시보드에서 "플러그인 ⇒ 플러그인 추가하기"로 들어가서 "Mytory Markdown"을 입력해서 검색한 후 플러그인을 설치한다.     
![Mytory Markdown 플러그인 검색](http://lh4.googleusercontent.com/-0XE_a92jizA/UseR-EgQToI/AAAAAAABi_I/06zwu_bPsW8/s0/Mytory-Markdown-Plugin-02.png)    
![Mytory Markdown 플러그인 검색](http://lh3.googleusercontent.com/-rFhulAd3BYM/UseR-DBLQuI/AAAAAAABi_E/A6vH9h5i8LI/s0/Mytory-Markdown-Plugin-03.png)

### 3.2 플러그인을 활성화
플러그인을 설치하고 나면 플러그인을 바로 활성화할 수 있는 창이 뜬다. 거기에서 플러그인을 활성화한다.   
![Mytory Markdown 플러그인 활성화](http://lh4.googleusercontent.com/-VxcViRGw29w/UseR-JsYAaI/AAAAAAABi-g/nh7Oih5yzBs/s0/Mytory-Markdown-Plugin-04.png)

### 3.3. Markdown 파일 작성후, 드롭박스의 퍼블릭 폴더에 저장
선호하는 에디터를 이용해서 Markdown으로 글을 작성한 후, 드롭박스의 퍼블릭 폴더에 저장한다. <del>만약 최근에 드롭박스에 가입해서 퍼블릭 폴더 기능이 비활성화되어 있다면 다음 링크를 참조하여 퍼블릭 폴더 기능을 활성화한다.</del>
[DROPBOX(드롭박스) PUBLIC 폴더 기능 활성화 하기](http://www.kalkin.tk/2012/11/Enable-Dropbox-Public-Folder.html)

**《업데이트》** 얼마전부터 퍼블릭폴더 기능이 유료 사용자에게만 제공되기 시작했다. 기존에 퍼블릭폴더 기능을 활성화한 사용자들은 계속 사용할 수 있지만, 새로 가입하는 사용자들은 유료 사용자가 되어야만 드롭박스의 퍼블릭폴더 기능을 이용할 수 있다.

### 3.4 Markdown 파일의 공개 링크를 복사
퍼블릭폴더 기능을 사용할 수 있으면 퍼블릭폴더 안에 있는 파일의 공개 링크는, 공개링크를 얻고자 하는 파일의 마우스 컨텍스트 메뉴에서 **공개 링크 복사**를 눌러서 쉽게 얻을 수 있다.

![드롭박스 퍼블릭폴더 공개 링크 복사](http://lh3.googleusercontent.com/-bZipKfE_huo/UseR-B-PuNI/AAAAAAABi-c/OStW0VYZB44/s0/Mytory-Markdown-Plugin-05.png) <small>▲ 드롭박스 퍼블릭폴더 공개 링크 복사</small>

만약에 퍼블릭폴더 기능을 사용할 수 없는 사용자라면 다음 방법으로 공개 링크 주소를 얻을 수 있다.

**1\.** 직접 링크를 얻을 파일의 마우스 컨텍스트 메뉴에서 **Dropbox 링크 공유**를 클릭한다.
![드롭박스 링크 공유 컨텍스트 메뉴](http://lh5.googleusercontent.com/-qEIkzk4VO2o/U6pR9F2KehI/AAAAAAABpkE/yBSYANe8lL8/s0/Dropbox-Share-Link.png) <small>▲ 드롭박스 링크 공유</small>

**2\.** 그러면 **"https://www.dropbox.com/s/p6flqrqcq8g1cm2/파일명"** 과 같은 식의 링크 주소가 클립보드에 복사된다.

**3\.** 위의 과정을 통해 얻은 링크에서 **www.dropbox.com**을 **dl.dropboxusercontent.com**으로 수정해준다.

### 3.5 Mytory Markdown 플러그인을 이용한 글 작성
워드프레스 대시보드에서 **"글 ⇒ 새 글 쓰기"**로 들어가서 새 글을 작성한다. Mytory Mytory 플러그인이 활성화된 상태라면 워드프레스 에디터 아래에 Mytory Markdown 메타박스가 생성되어 있을 것이다. 그곳에 드롭박스 공개 링크를 붙여넣고, **"Update Editor Content"** 버튼을 누른다.
![Mytory Markdown 플러그인에 정보 입력](http://lh3.googleusercontent.com/-edRhLhzLhTA/UseR-pKZnNI/AAAAAAABi-k/-w0AyCnHTFo/s0/Mytory-Markdown-Plugin-06.png)

### 3.6 임시글로 저장하기, 또는 공개하기를 누른다.
![Mytory Markdown 플러그인을 통해 글 작성](http://lh6.googleusercontent.com/-GYD3wQ7UYVc/UseR-1R_KTI/AAAAAAABi-s/9sVCJmrYLYI/s0/Mytory-Markdown-Plugin-07.png)    
글이 워드프레스 에디터에 자동으로 입력되었으면, Slug(고유주소), 카테고리, 태그등의 기타 옵션을 지정한다. 그 후에는, 글이 완성되지 않은 경우 임시글로 저장하고, 글이 완성된 경우 공개하기를 눌러서 글을 공개하면 된다.

### 3.7 글 업데이트
이후에 글을 수정하려고 할 때는 워드프레스에 연결된 Markdown 파일을 수정하면 자동으로 워드프레스의 글이 업데이트된다. 글이 업데이트되는 시점은 블로그의 관리자가 로그인하는 시점이다. 따라서 기존에 작성된 글을 수정하려면, Markdown 파일을 수정하고, 자신의 블로그에 관리자로 로그인하면 된다. 아마 대부분의 사람들이 글을 수정한 후에는 자신의 블로그에 어떻게 올라갔는지 확인할 것이기 때문에 그리 불편한 부분은 아닐 것 같다.

## 4. 추가 정보
### 4.1 플러그인 소개 페이지
플러그인의 제작자이신 [녹풍](http://mytory.net/who-am-i)님께서 플러그인 소개 페이지를 만드셨다. 아래 링크를 통해 플러그인 소개 페이지에 가면, Mytory Markdown 플러그인에 대한 질문이나 제안을 올릴 수가 있다.    
[『Dropbox와 연동하는 WordPress Markdown Plugin – Mytory Markdown』 - 웹으로 말하기](http://mytory.net/archives/12276)

### 4.2 플러그인 소개 영상
플러그인의 제작자이신 [녹풍](http://mytory.net/who-am-i)님께서 플러그인을 간단하게 설명하는 영상도 올려놓으셨다. 아래 영상을 보면, 플러그인이 어떻게 작동하는지 알 수 있을 것이다.

http://youtu.be/mCgzB1aCQgM

### 4.3 Mytory Markdown 플러그인 1.3 업데이트 후 추가된 설정
1.3 업데이트 후 옵션 설정이 추가되었다. 설정은 **설정 > Mytory Markdown**에서 할 수 있다. 

![Mytory Markdown 설정](https://lh4.googleusercontent.com/-DSFGE8AiswA/UvJY6WDI_MI/AAAAAAABjtQ/TZdUxQsfjBU/s0/Mytory-Markdown-Plugin-Setting.png)    
이 옵션은 트래픽에 민감한 사람들을 위해 만들어진 것이다. 원래는 Mytory Markdown 플러그인을 통해 작성한 글을 방문자가 볼 때, 연결된 Markdown 파일의 헤더를 받아와서 변경사항이 있으면 그 글을 업데이트하게 된다. 하지만, 그럴경우 방문자가 Mytory Markdown 플러그인을 통해 작성한 글을 볼 때마다 파일의 헤더를 불러오기 때문에 트래픽이 적은 호스팅을 사용할 경우에 트래픽 초과 문제를 야기할 수 있다.

그럴 경우 첫번째에 있는 **"글쓴이 (혹은 관리자)가 글을 볼 때만 자동 갱신(Auto update only when writer (or admin) visits)"** 옵션에서 Y를 선택하면 트래픽 초과 문제를 줄일 수 있다. **"글쓴이 (혹은 관리자)가 글을 볼 때만 자동 갱신(Auto update only when writer (or admin) visits)"** 옵션에서 Y를 선택하면, 관리자나 글쓴이가 블로그에 접속해서 해당 포스트(글)이나 페이지에 접속해야만 글이 갱신된다. 따라서 Mytory Markdown 플러그인을 이용해서 작성한 글을 방문자가 볼 때마다 드롭박스에서 해당 Markdown 파일의 헤더를 불러오지 않게 되어서 트래픽 소모를 줄일 수 있다.

두번째 옵션인 **"해당 글 x회 방문마다 자동 갱신(Auto update per x visits)"**에는 숫자를 넣도록 되어 있는데, 이것은 첫번째 옵션에서 N을 선택했을 때만 작동한다. 만약 **"해당 글 x회 방문마다 자동 갱신(Auto update per x visits)"**에 5라는 숫자를 넣으면, 방문자가 Mytory Markdown 플러그인으로 작성한 글에 5번 방문할 때마다 해당글의 변경사항을 확인하고 업데이트 한다. 관리자로 로그인해서 해당글을 방문하는 것으로 업데이트시키기 여의치 않은 환경에서는 선택할 수 있는 옵션이다.

마지막 옵션인 **"글에서 디버그 메시지 출력"**은 만약에 Mytory Markdown 플러그인이 정상적으로 작동하지 않을 때 그 원인을 파악하기 위한 옵션이다. 평소에는 꺼놓고 있다가 문제가 생겼을 때 적용해보고, 그 문제에 대해서 플러그인의 제작자에게 문의하면 된다. 이 옵션을 켜놓더라도 방문자에게는 디버그 메세지가 출력되지 않는다.


## 5. 결론
Markdown으로 글을 쓰는 것은 대단히 편리하다. 처음에는 약간의 학습기간을 거쳐야 하지만, 한 번 익숙해지면 위지윅 에디터를 이용해서 글을 쓰는 것이 상당히 불편하게 느껴지게 되는 경우가 많다. Markdown으로 글을 쓰기 위해서 워드프레스나 텀블러로 블로그를 옳기는 사람도 있을 정도이다.

Mytory Markdown 플러그인을 이용하면 Markdown의 편리함에 더해서, 자신이 가장 편하게 쓰는 에디터를 이용해서 글을 작성할 수 있게 된다. 다만 이미지를 삽입할 때는 불편함을 느낄 수 있는데, 좀 더 이미지를 편하게 삽입하는 방법에 대해서는 추후에 글을 작성할 계획이다.
---
title: Twenty Twelve 테마의 한글 번역 수정
date: 2013-06-12T14:00:03+00:00
author: 칼킨
excerpt: Twenty Twelve 테마는 한글 번역에 문제가 있다. 월간 글목록의 페이지 제목의 번역이 완전하지 않아서 "2013년 MAY월"과 같이 영어로 나오는 부분이 있는 것이다. 이 글에서는 한글 번역 파일을 수정하여 이 문제를 해결하는 방법에 대해서 설명한다.
layout: post
permalink: /2013/06/12/twenty-twelve-theme-korean-translation-bug/
categories:
  - 워드프레스
tags:
  - wordpress
  - wordpress-theme

---

* TOC
{:toc}


현재 이 블로그는 워드프레스 3.5버전의 기본 테마인 Twenty Twelve 테마의 자식테마(Child Theme)를 이용해서 운영중이다. 그런데 Twenty Twelve 테마의 한글 번역에 문제가 있는 것을 발견했다. 다음의 이미지처럼, 월간 글목록의 페이지 제목의 번역이 완전하지 않아서 영어로 나오는 부분이 있는 것이다.
  
<img title="twenty_twelve_theme_korean_translation_bug" alt="twenty_twelve_theme_korean_translation_bug" src="http://farm6.staticflickr.com/5345/9020851079_be10f99dc4_o.png" width="217" height="40" />

해결해보려고 했지만 워드프레스에 대한 지식이 짧아서 고생하던 중, <a title="WP Question" href="http://wpq.kr" rel="home">WP Question</a> 에 질문을 올려서 해결할 수 있었다.

<a title="WP Question" href="http://wpq.kr" rel="home">WP Question</a>의 운영자이신 <cite title="http://wpu.kr"><a title="veteran" href="http://wpu.kr" rel="external nofollow">veteran</a></cite>님께서, Twenty Twelve 이전의 기본 테마였던, Twenty Eleven이나 Twelve Ten의 번역 파일과 Twenty Twelve 테마의 번역이 다른 점을 지적해주셔서 그 부분을 수정해서 해결할 수 있었다.

이 문제를 해결하려면, **&#8216;wp-content/languages/themes/twentytwelve-ko_KR.po&#8217;** 파일을 <a title="Poedit" href="http://www.poedit.net/" target="_blank">Poedit</a>라는 프로그램을 통해 열어야 한다. 그러고나서 소스텍스트중 **&#8216;F Y [ monthly archives date format ]&#8217;** 의 번역을 **&#8216;Y년 M월&#8217;**에서 **&#8216;Y년 n월&#8217;**로 수정해준 후 저장하면 번역 파일의 수정이 완료된다. 워드프레스의 번역 파일은 **&#8216;.po&#8217;**와 **&#8216;.mo&#8217;**로 구성되어 있는데, <a title="Poedit" href="http://www.poedit.net/" target="_blank">Poedit</a>를 사용해야 자동으로 &#8216;.mo&#8217; 파일도 함께 수정된다. 이제 수정된 번역 파일들(**&#8216;twentytwelve-ko_KR.po&#8217;,** **&#8216;twentytwelve-ko_KR.mo&#8217;**)을 웹호스팅에 올려주면 모든 작업이 끝난다.

간단한 작업이기는 하지만 <a title="Poedit" href="http://www.poedit.net/" target="_blank">Poedit</a>를 설치하고 수정하는 것이 귀찮은 작업일 수 있겠다 싶어서 필자가 수정한 파일을 올려놓는다. 다운 받아서 압축을 푼 후 **&#8216;wp-content/languages/themes/&#8217;**에 넣어주면 된다.
  
<a title="Twenty Twelve 테마 한글 번역 수정 파일 다운로드" href="http://goo.gl/9ApGs9" target="_blank">Twenty Twelve 테마 한글 번역 수정 파일 다운로드</a>

모든 작업이 완료가 되면, 아래와 같이 정상적으로 월별 글목록의 페이지 제목이 출력되는 것을 볼 수 있다.
  
<img title="twenty_twelve_theme_korean_translation_bug_01" alt="twenty_twelve_theme_korean_translation_bug_01" src="http://farm8.staticflickr.com/7311/9020994493_de04ed6349_o.png" width="194" height="32" />
---
title: 워드프레스에서 외부 이미지를 특성 이미지(Featured Image)로 사용하기
date: 2014-03-08T15:21:31+00:00
author: 칼킨
excerpt: 워드프레스의 특성 이미지(Featured Image)는 꼭 워드프레스에서 직업 올린 이미지로만 지정할 수 있다. 이 글에서는 사용자 정의 필드를 이용해서 외부 이미지 링크로 특성 이미지를 지정할 수 있는 방법에 대해서 설명하려고 한다.
layout: post
permalink: /2014/03/08/how-to-insert-featured-images-using-external-links/
categories:
  - 워드프레스
tags:
  - wordpress
  - wordpress-plugin

---

* TOC
{:toc}


## 1. 워드프레스의 특성 이미지(Featured Image)란?

워드프레스의 특성 이미지(Featured Image)는 글이나 페이지를 대표하는 이미지를 의미한다. 특성 이미지가 어떻게 표현되는 지는 테마에 따라 달라진다. 어떤 테마에서는 홈페이지[^1]에 글목록 앞에 작은 썸네일을 보여주는 식으로 나타나고, 어떤 테마에서는 글의 최상단에 크게 보여지기도 한다.

![특성 이미지가 홈페이지에 썸네일 형식으로 보여지는 예시](http://lh6.googleusercontent.com/-MmeN3m3GI40/UwJM4oCNGZI/AAAAAAABj1o/yudmDXg7NRg/s730/Wordpress-Featured-Image-Using-External-Links-11.jpg) <small>▲ 특성 이미지가 홈페이지에 썸네일 형식으로 보여지는 예시 - 출처: [서울비 블로그](http://seoulrain.net)</small>

![특성 이미지가 홈페이지에 썸네일 형식으로 보여지는 예시](http://lh4.googleusercontent.com/-XRQLRtOsJaM/UwJNR83mX_I/AAAAAAABj1w/ZbAB1aOxAJo/s730/Wordpress-Featured-Image-Using-External-Links-12.jpg) <small>▲ 특성 이미지가 글의 최상단에 보여지는 예시</small>




## 2. 워드프레스의 특성 이미지(Featured Image) 정책

그런데 워드프레스에서는 특성 이미지를 꼭 워드프레스에 직접 업로드한 파일로만 지정하도록 되어 있다. 워드프레스측에서는 이것을 보안 문제 때문이라고 밝히고 있다.

하지만 웹호스팅의 용량과 트래픽이 부족한 사용자들, 또는 테마의 특성상 특성 이미지를 많이 사용해야 하는 사용자들에게는 이런 정책이 불만스러울 수도 있다. 이를 해결하기 위해서 [다른 웹호스팅에 첨부파일을 올리게 하는 플러그인](https://wordpress.org/plugins/hacklog-remote-attachment/ "Hacklog Remote Attachment Plugin")이나, [구글 드라이브에 첨부파일을 올리게 하는 플러그인](https://wordpress.org/plugins/google-drive-wp-media/ "Google Drive WP Media Plugin")을 사용할 수도 있고, 아니면 아예 [특성 이미지를 외부 링크로 사용할 수 있도록 해주는 유료 플러그인](http://epicplugins.com/external-url-link-to-featured-images/ "External URL Link as Featured Images Plugin")을 사용할 수도 있다.

하지만 "Hacklog Remote Attachment" 플러그인을 사용하려면 다른 웹호스팅 계정이 있어야하고, "Google Drive WP Media" 플러그인을 사용할 때는 이미지의 사이즈 조절이 불가능하다.[^2] "External URL Link as Featured Images" 플러그인은 $9.9의 비용이 든다.

그래서 이 글에서는 사용자 정의 필드를 이용해서 외부 이미지 링크를 특성 이미지로 사용하는 방법에 대해서 설명해 보고자 한다.




## 3. 사용자 정의 필드를 이용해서 외부 이미지를 특성 이미지로 사용하기

### 3.1 방법1. 테마 파일 직접 수정하기

이 방법의 장점은, 상황에 따라서 특성 이미지를 외부 링크로 사용하거나 자체 이미지를 사용하거나를 선택할 수 있다는 것이다. 또한 외부 이미지를 특성 이미지로 사용하면 캡션 정보를 입력할 수 있는 방법이 없는데, 테마 파일을 직접 수정하면 사용자 정의 필드를 이용해서 캡션 정보를 입력하는 것도 가능하다는 것도 장점이다.

1. **테마 파일에서 `<?php the_post_thumbnail(); ?>` 을 찾는다.**

	위의 코드는 보통 index.php, content.php 또는 archive.php에서 찾을 수 있다. 만약에 파일을 하나하나 열어서 찾는 것이 힘들다면, notepad++등의 에디터를 이용해서 테마 폴더에 있는 php 파일을 모두 불러온 후, 모든 파일에 대해서 검색을 하는 것이 편할 수 있다.
	
	![Notepad++에서 \<\?php the_post_thumbnail(); ?\> 검색하기](http://lh3.googleusercontent.com/-4Mdqu7gsuZs/UwIxFT5T-SI/AAAAAAABj0g/tWhbnWlAiBg/s0/Wordpress-Featured-Image-Using-External-Links-01.png) <small>▲ Notepad++에서 `<?php the_post_thumbnail(); ?>` 검색하기</small>
	
	![Notepad++에서 \<\?php the_post_thumbnail(); ?\> 검색 결과](http://lh4.googleusercontent.com/-i_FcGnNLXQY/UwIxoHK5n4I/AAAAAAABj0o/IOmTjyePzqE/s0/Wordpress-Featured-Image-Using-External-Links-02.png) <small>▲ Notepad++에서 `<?php the_post_thumbnail(); ?>` 검색했을 때의 결과</small>
    
2. **`<?php the_post_thumbnail(); ?>` 을 다음의 코드로 바꾼다.**

		<?php $src = get_post_meta($post->ID, 'ExternalUrl', true);
		if( $src ) { ?>
		<img class="wp-post-image" src="<?php echo $src; ?>">
		<?php } else {
		the_post_thumbnail();
		} ?>

    - "ExternalUrl"은 사용자 정의 필드의 이름이다. 만약에 사용자 정의 필드의 이름을 다른 것으로 설정하고 싶다면 바꿔도 상관없다.
    - class="wp-post-image" 에서 "wp-post-image"는 자신의 테마에 맞게 바꿔줘야 한다.
    - 이 코드에서는 워드프레스 에디터상에서 직접 특성 이미지를 지정하는 기능은 제거하지 않았으므로, 필요할 때는 이전처럼 특성 이미지를 삽입해도 된다. 다만 외부 이미지를 우선하도록 해놓았으므로, 외부 이미지와 내부 이미지를 동시에 특성 이미지로 지정하면 외부 이미지가 출력된다.
    <p> </p>

3. **만약에 테마에 `<?php if(has_post_thumbnail()) { ?>` 와 같은 부분이 있다면, 다음의 코드로 바꾼다. 없으면 넘어간다.**
    
		<?php $src = get_post_meta($post->ID, 'ExternalUrl', true); if(has_post_thumbnail() || $src) { ?>

    - 만약 테마 파일에 `<?php if(has_post_thumbnail()) { ?>` 이 있다면 3.1.2에서 바꿨던 `<?php the_post_thumbnail(); ?>`보다 앞에 있을 것이다. 그런데, 그 중 `<?php $src = get_post_meta($post->ID, 'ExternalUrl', true);`부분이 중복되므로, 3.1.2의 코드중 첫번째 라인은 삭제해도 된다.
    - 만약에 3.1.2에서 "ExternalUrl"을 다른 이름으로 바꿨다면 여기서도 바꿔야 한다.
    <p> </p>
    
4. **테마 파일을 저장하고 업로드한다.**




### 3.2 방법2. 테마의 function.php를 수정해서 특성 이미지 함수를 완전히 대체하기

이 방법을 사용하면 테마 파일을 모두 수정하는 것보다 훨씬 간단하게 외부 링크로 특성 이미지를 넣는 것이 가능하다. 하지만, 이 방법을 사용하면 워드프레스 에디터 상에서 자체 이미지로 특성 이미지를 넣는 방법은 사용할 수 없다.

1. **사용하고 있는 테마 폴더안에 있는 function.php 파일을 에디터로 연다.**
    
2. **function.php 마지막에 다음 코드를 추가한다.**
    
		add_filter('post_thumbnail_html','add_external_link_on_page_post_thumbnail',10);
	
		    function add_external_link_on_page_post_thumbnail( $html ) {
		    if( is_singular() ) {
		            global $post;
		            $src = get_post_meta($post->ID, 'ExternalUrl', true);
		            $src = str_replace("/s0/", "/w1024-h576-c/", $src);
		            if( $src ) {
		                $html = '<img src="' . ( $src ) . '" class="wp-post-image" >';
		            }
		    }
		    else if( is_front_page() || is_archive() ) {
		            global $post;
		            $src = get_post_meta($post->ID, 'ExternalUrl', true);
		            $srcthumb = get_post_meta($post->ID, 'ExternalUrlThumb', true);
		            $permalink = get_permalink();
		            $src = str_replace("/s0/", "/w1024-h576-c/", $src);
		            $srcthumb = str_replace("/s0/", "/w1024-h576-c/", $srcthumb);
		            if( $srcthumb ) {
		                $html = '<a href="' . ( $permalink ) . '"><img src="' . ( $srcthumb ) . '" class="wp-post-image" ></a>';
		            }
		            else if( $src ) {
		            	$html = '<a href="' . ( $permalink ) . '"><img src="' . ( $src ) . '" class="wp-post-image" ></a>';
		            }
		    }
		    return $html;
		    }

    - "**ExternalUrl**"은 사용자 정의 필드의 이름이다. 만약에 사용자 정의 필드의 이름을 다른 것으로 설정하고 싶다면 바꿔도 상관없다.
    - class="wp-post-image" 에서 "**wp-post-image**"는 자신의 테마에 맞게 바꿔줘야 한다.
    - "$src = str_replace("/s0/", "**/w1024-h576-c/**", $src);"는 피카사(구글+ 포토)를 사용할 때만 필요하다. 피카사는 이미지 링크의 주소를 조금 수정해주면 이미지를 실시간으로 리사이즈해서 전송해준다.    
    피카사의 원본 이미지 링크에는 "/s0/"가 포함되어 있다. 그런데, 그 코드를 바꿔주면 이미지의 크기를 쉽게 조정할 수 있다. 위의 코드에서는 "/s0/"를 "/w1024-h576-c/"로 바꾸도록 했는데, 여기서 "w1024"는 너비를 "1024px"로, "h576"은 높이를 "576px"로 설정하라는 의미이고 "c"는 이미지를 사이즈에 맞게 크롭(Crop)하라는 의미이다.    
    즉, 원본이미지의 링크를 사용자 정의 필드에 입력한 후, 테마에 맞게 코드에서 사이즈를 조정해주면 테마의 디자인을 해치지 않고 외부 이미지를 특성 이미지로 설정하는 것이 가능해진다. 참고로 위의 코드는 워드프레스의 기본 테마인 "Twenty Fourteen"의 썸네일 사이즈를 기준으로 했다.
    - "$srcthumb = get_post_meta($post->ID, 'ExternalUrlThumb', true);"은 글목록에서와 글에서 특성 이미지가 다르게 보이는 테마 때문에 추가했다. 어떤 테마는 글목록에서는 특성 이미지를 작은 썸네일의 형태로 보여주고, 글을 볼 때는 특성 이미지를 크게 보여주기도 한다.    
    워드프레스에 이미지를 업로드하면 워드프레스와 테마에 설정된대로 이미지를 여러가지의 크기로 리사이즈한 후, 리사이즈된 이미지 파일들을 모두 저장해 놓는다. 그래서 테마에서 필요한 크기의 이미지를 요청하면 저장된 이미지중에서 그에 맞는 크기의 이미지가 보여지게 되는 것이다.    
    하지만 외부 링크로 특성 이미지를 설정하면 워드프레스의 그런 기능을 사용하는 것이 불가능하다. 따라서 그런 테마를 쓸 때는, 사용자 정의 필드에 "ExternalUrlThumb"을 추가해서 작은 크기의 이미지 주소를 추가로 지정해주면, 문제를 해결할 수 있다.   
    물론 피카사 이미지를 쓸 경우에는 "ExternalUrlThumb" 사용자 정의 필드를 추가할 필요없이, 기존의 이미지의 주소를 수정해서 실시간으로 리사이즈된 이미지를 전송하도록 할 수 있을 것이다.
	<p> </p>
    
3. **만약에 테마에 `<?php if(has_post_thumbnail()) { ?>` 와 같은 부분이 있다면, 다음의 코드로 바꾼다. 없으면 넘어간다.**

		<?php $src = get_post_meta($post->ID, 'ExternalUrl', true); if(has_post_thumbnail() || $src) { ?>




### 3.3 방법3. 간단한 플러그인을 만들어서 적용하기

3.2에서 소개한 코드를 이용해서 플러그인을 만드는 것도 가능하다. 이 방법은 플러그인을 원할 때마다 플러그인을 활성화하거나 비활성화하는 것이 자유롭다는 장정을 가지고 있다.

1. **플러그인 파일 만들기**
텍스트 에디터를 이용해서 "featuredimage-externallink.php"와 같이 적절한 이름의 php 파일을 만든다.

2. **플러그인 파일에 플러그인 필수 요소 입력**

		<?php
		/**
		 * Plugin Name: 플러그인 이름
		 * Description: 플러그인 설명
		 * Version: 0.1
	
		 * @version 0.1.0
		 */
	
	
		?>
    
3. **플러그인 파일에 3.2에서 소개한 코드 입력**
    
		<?php
		/**
		 * Plugin Name: 플러그인 이름
		 * Description: 플러그인 설명
		 * Version: 0.1
	
		 * @version 0.1.0
		 */
	
		add_filter('post_thumbnail_html','add_external_link_on_page_post_thumbnail',10);
	
		    function add_external_link_on_page_post_thumbnail( $html ) {
		    if( is_singular() ) {
		            global $post;
		            $src = get_post_meta($post->ID, 'ExternalUrl', true);
		            $src = str_replace("/s0/", "/w1024-h576-c/", $src);
		            if( $src ) {
		                $html = '<img src="' . ( $src ) . '" class="wp-post-image" >';
		            }
		    }
		    else if( is_front_page() || is_archive() ) {
		            global $post;
		            $src = get_post_meta($post->ID, 'ExternalUrl', true);
		            $srcthumb = get_post_meta($post->ID, 'ExternalUrlThumb', true);
		            $permalink = get_permalink();
		            $src = str_replace("/s0/", "/w1024-h576-c/", $src);
		            $srcthumb = str_replace("/s0/", "/w1024-h576-c/", $srcthumb);
		            if( $srcthumb ) {
		                $html = '<a href="' . ( $permalink ) . '"><img src="' . ( $srcthumb ) . '" class="wp-post-image" ></a>';
		            }
		            else if( $src ) {
		            	$html = '<a href="' . ( $permalink ) . '"><img src="' . ( $src ) . '" class="wp-post-image" ></a>';
		            }
		    }
		    return $html;
		    }
	
		?>
    
4. **워드프레스의 플러그인 폴더에 업로드하고 플러그인 활성화**
    
5. **만약에 테마에 `<?php if(has_post_thumbnail()) { ?>` 와 같은 부분이 있다면, 다음의 코드로 바꾼다. 없으면 넘어간다.**
    
		<?php $src = get_post_meta($post->ID, 'ExternalUrl', true); if(has_post_thumbnail() || $src) { ?>




### 3.4 특성 이미지가 들어간 글 작성하기

1. **워드프레스 에디터의 화면 옵션에서 "사용자 정의 필드"를 체크해서 "사용자 정의 필드" 메타 박스가 보이게 한다.**

    ![워드프레스 에디터의 화면 옵션에서 "사용자 정의 필드" 활성화하기](http://lh6.googleusercontent.com/-C5UxpiYQsIo/UwIx32do2lI/AAAAAAABj0w/eUQuowRqJO4/s730/Wordpress-Featured-Image-Using-External-Links-03.png) <small>▲ 워드프레스 에디터의 화면 옵션에서 "사용자 정의 필드" 활성화하기</small>

2. **"사용자 정의 필드" 메타 박스에 위의 코드에서 정의한 "ExternalUrl"을 추가하고 그 값에는 그 글에 넣길 원하는 특성 이미지의 외부 링크를 입력한다.**
    
    ![워드프레스 에디터에서 사용자 정의 필드 추가](http://lh4.googleusercontent.com/-IiPPjB_JwCk/UwIyacAE1NI/AAAAAAABj04/FpC2yZzl9uo/s0/Wordpress-Featured-Image-Using-External-Links-04.png) <small>▲ 워드프레스 에디터에서 사용자 정의 필드 추가</small>
    
    ![워드프레스 에디터에서 사용자 정의 필드 추가](http://lh6.googleusercontent.com/-W4mmCy53vxQ/UwIy0ryFgtI/AAAAAAABj1A/niku1ohitf8/s0/Wordpress-Featured-Image-Using-External-Links-05.png) <small>▲ 사용자 정의 필드 이름에 "ExternalUrl"을 입력하고, 값란에 특성 이미지(Featured Image)로 사용할 이미지의 외부 링크 주소를 입력한 후 "사용자 정의 필드 추가" 버튼을 눌러준다.</small>
    
    ![워드프레스 에디터에서 사용자 정의 필드 선택](http://lh4.googleusercontent.com/-S-sSZkGEmIM/UwI0r75yWeI/AAAAAAABj1Q/vrhSlsbNMYI/s0/Wordpress-Featured-Image-Using-External-Links-06.png) <small>▲ 한 번 "ExternalUrl" 사용자 정의 필드를 입력하면, 다음부터는 사용자 정의 필드를 추가할 때 선택하기를 눌러서 "ExternalUrl"을 선택할 수 있게된다.</small>
    
5. **이제 글을 작성 완료하면 외부 이미지가 특성 이미지로 보여지게 될 것이다.**




## 4. 글을 맺으며

난 프로그래머도 아니고 웹프로그램에 대한 지식도 상당히 부족하다. 이 글은 검색을 통해서 발견하게 된 코드를 이용해서 내 부족하 지식으로 조금 수정한 것을 설명한 글이다. 따라서 부족한 부분이 많이 있을 수 있을 것이다. 혹시 나보다 더 많은 지식을 갖고 있는 분이 이 글을 읽고 좀 더 나은 방법을 제시해줄 수 있다면 좋겠다는 바람이다.






[^1]: 홈페이지라는 말이 한국에서는 웹사이트와 같은 의미로 쓰이지만, 원래는 웹사이트에 처음 접속할 때 뜨는 페이지를 홈페이지(Homepage)라고 한다.
[^2]: 워드프레스에 직접 이미지를 올리면, 원본 이미지와 함께, "설정 → 미디어"에 설정된 세가지 사이즈의 이미지도 함께 저장한다. 만약에 테마 자체적으로 추가한 이미지 사이즈가 있다면 그 사이즈의 이미지 역시 함께 저장한다. 그래서 상황에 따라 그에 적합한 이미지가 쓰이게 된다. 하지만 "Google Drive WP Media" 플러그인은 한 가지 사이즈의 이미지만 저장하므로, 작은 썸네일 크기의 이미지가 쓰일만한 곳에서도 전체 사이즈의 이미지를 불러오므로 전체 페이지 용량이 너무 커지는 부작용이 있을 수 있다. 본문에서 설명한, 외부 이미지를 사용하는 방법의 경우 이미지 주소를 약간 수정하는 것으로 이미지의 사이즈를 쉽게 조정할 수 있는 피카사를 사용하면 이미지 용량 문제에서 벗어날 수 있다.
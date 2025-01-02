/*
* common.js
* header/footer 공통요소에 들어가는 스크립트 저장 
* 모든 페이지에서 공통으로 작동되는 스크립트
*/

$(document).ready(function(){
    let scrolling = 0 //현재 스크롤 된값 
    let prev_scroll // 이전에 스크롤 된값 

    /************ header에 fixed랑 scroll_down 추가 (시작) ****************
     * 스크롤이 1이라도 되면 fixed 클래스 추가
     * 하단으로 스크롤되면 scroll_down 클래스 추가
     * 위로 스크롤 되면 scroll_down 클래스를 삭제
     * 맨위로 갔을때 fixed, scroll_down 모두 삭제
     * >>>> 스크롤 방향 판단...
     * 이전 스크롤값을 저장해두고 현재 스크롤 값을 빼을때 0보다 작으면 아래로 스크롤
    */

    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()

        if(scrolling > 0){
            $('header').addClass('fixed')
            if((prev_scroll - scrolling) < 0){
                $('header').addClass('scroll_down')
                console.log('내려가고 있어')
            }else{
                $('header').removeClass('scroll_down')
                console.log('올라가고 있어')
            }
        }else{
            $('header').removeClass('fixed')
            $('header').removeClass('scroll_down')
        }
        //console.log(prev_scroll, scrolling)
    }

    scroll_chk() //함수 실행 (문서가 로딩 되었을때 1번)
    $(window).scroll(function(){ //스크롤 될때마다 1번 실행
        scroll_chk() //함수 실행
    })

    /************ header에 fixed랑 scroll_down 추가 (종료) *****************/
})//$(document).ready
    
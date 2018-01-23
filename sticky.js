// class Sticky{
//     constructor(selector,n){
//     	this.elements = $(selecotr)
//     	this.offset = n
//     	this.listenToScroll()
//     }
//     listenToScroll(){
//     	$(window).on("scroll", ()=> {
//     		var scrollY = window.scrollY
//     		this.elements.each((index,element)=>{
//     			var $element = $(element)
//     			if(scrollY + this.offset)
//     		}
//     	})
//     }
// }



var topbarOffset = $("#topbar").offset()
var buttonOffset = $('button').offset()
$(window).on('scroll',function(){

	var scrollY = window.scrollY
	if(scrollY+0>topbarOffset.top){
		$("#topbar").addClass("sticky")
	}else{
		$("#topbar").removeClass("sticky")

	}
	if(scrollY+60>buttonOffset.top){
		$('button').addClass('sticky')
	}else{
		$('button').removeClass('sticky')
	}
})

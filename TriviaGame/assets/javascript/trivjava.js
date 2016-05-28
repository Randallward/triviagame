
var totalquestions=3


var correctchoices=new Array()
correctchoices[1]='b' //question 1 solution
correctchoices[2]='b' //question 2 solution, and so on.
correctchoices[3]='c'

function gradeit(){
var incorrect=null
for (q=1;q<=totalquestions;q++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
			}
	}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect

}
	


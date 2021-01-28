


function calculateBmi() {
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
 
	if(weight > 0 && height > 0){	
		var bmi = weight/(height/100*height/100);
		document.getElementById('bmi').value = bmi;
 
		if(bmi < 18.5){
			document.getElementById('result').value = "You are too thin.";
		}
		if(bmi > 18.5 && bmi < 24.9){
			document.getElementById('result').value = "You are healthy.";
		}
		if(bmi > 25){
			document.getElementById('result').value = "You are overweight.";
		}
	}
	else{
		alert("Please enter something first!")
	}
}


var userOrder = prompt(' Would you like to have an image in the background ?(yes/no)?');
while(userOrder !=='yes' && userOrder !=='no'){
        // T               &&        T
                            //T
    userOrder = prompt('Would you like to have an image in the background ?(yes/no)?')}

    if(userOrder =='yes'){image = ' <style> html{  background: url(4.jpg);background-repeat: no-repeat;background-attachment: fixed;background-size: 100%;font-family: Cursive;opacity: 0.90;}</style>'
        
        
    }

    document.write(image);

    alert("welcome Guest")


    
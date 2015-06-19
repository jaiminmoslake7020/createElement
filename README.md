# createElement
This is a javascript function which helps you create element with Jquery easily... with less code to write..


# createElement(elem, finish, classArray , AttrArray, cssArray) 
createElement is the function name

# elem  
It is the element you want to create

# finish 
It is whethere it is "<img /> , <br /> , <input />" which finish in just one tag for this pass 1 and if it is like normal elements  "<div></div>, <h1></h1>" which finisghes in two tags then pass 0

# classArray 
It is array which includes class  

# AttrArray 
It is array which includes on  event indexes name of the attribute and on odd index [Value for the previous even tag index value attribute.]  



# example 
1. createElement("div",0,["row"],["id","row1"]); 
2. createElement("div",0,["col-md-4","col-sm-6","col-xs-12"],["id","div1"); 




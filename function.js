    function createElement(elem, finish, classArray , AttrArray)
    {

        var $Div;
        if(finish == 1)
        {
             $Div = $("<"+elem+" />");
        }
        else
        {
             $Div = $("<"+elem+"></"+elem+">");
        }

        for(var i = 0 ;i < classArray.length ; i++)
        {
            $Div.addClass(classArray[i]);
        }


        for(var i = 0 ;i < AttrArray.length ; i++)
        {
            var attr = AttrArray[i] ;

            if(i%2 == 1)
            {
                $Div.attr(lastAttr , attr);
            }

            var lastAttr = attr ;
        }


        return $Div ;
    }
  
    
    
    

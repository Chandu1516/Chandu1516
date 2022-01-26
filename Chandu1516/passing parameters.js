<html>
    <head>
        <title>
            js functions demo
        </title>
        <body>
            <script type = "text/javascript">
                function num (){
                    varfirstnum = 8; 
                    var secondnum = 6;
                    var result ;
                    add(firstnum,secondnum);//using the first,second variable ;
                    mult(firstnum,secondnum);//using the first,second variable ;
                    //performing addtion operation the valu takes from local variables which is in "(num)"function
                    function add(a,b){
                        result = a+b ;//a,b are the temporary data
                        console.log("addition is" + result);
                    &rbrace;
                    //performing addtion operation the valu takes from local variables which is in "(num)"function
function mult(c,d){
    result = c*d //c,d are the temporary
    console.log("multipication is":+result);
&rbrace;
num();
                &rbrace;
            </script>
        </body>
    </head>
</html>
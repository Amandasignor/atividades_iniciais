<?php

class soma {
    function ehpar($numero) {
        return $numero % 2;
    }
}

$somaClass = new soma();

if($somaClass->ehpar($_GET['valor'])== 0){
    echo "numero par";
}

else {
    echo "numero impar";
}
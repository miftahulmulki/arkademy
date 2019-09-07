<?php
function triangle($number) {
    for ($i = 0; $i < $number; $i++) {
        for ($j = 0; $j < $number+2; $j++) {
            if ($i==0) {
                echo '*';
            }else if ($j%$i==0) {
                echo '*';
            }else if ($j==$number-($i-1)){
                echo ' ';
            }
        }
        echo "\n";
    }
}

triangle(3);
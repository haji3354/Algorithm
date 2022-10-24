#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool solution(int x) {
    bool answer = true;
    int total =0;
    int y = x;
    while(1){
        total += y % 10;
        y = y / 10;
        if(y == 0){
            break;
        }
    }
    if(x%total != 0){
        answer = false;
    }
    return answer;
}
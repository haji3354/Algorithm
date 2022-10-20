#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(long long n) {
    long long answer = -1;
    if(n == 1){
        answer = 4;
    }
    for(long long i =2;i<=n/2;i++){
        if(i*i == n){
            answer = (i+1)*(i+1);
            break;
        }
    }
    return answer;
}
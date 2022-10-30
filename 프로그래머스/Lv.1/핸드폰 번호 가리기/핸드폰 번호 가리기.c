#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char *solution(const char *phone_number)
{

  char *answer = (char *)malloc(20);
  int n = strlen(phone_number);
  strcpy(answer, phone_number);
  for (int i = 0; i < n - 4; i++)
  {
    answer[i] = '*';
  }
  return answer;
}